'use client'
import { useState } from 'react'
import type { Step } from '@/lib/types'

function MiniTimer({ minutes, onStart }: { minutes: number; onStart: () => void }) {
  return (
    <button
      onClick={onStart}
      className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full transition-colors"
      style={{
        background: '#2C1F14',
        color: '#F5ECD8',
        fontFamily: 'var(--font-dm-mono)',
      }}
    >
      ⏱ {minutes} min
    </button>
  )
}

export function RecipeSteps({
  steps,
  onStartTimer,
}: {
  steps: Step[]
  onStartTimer: (minutes: number) => void
}) {
  const [checkedIds, setCheckedIds] = useState<Set<string>>(new Set())

  function toggle(id: string) {
    setCheckedIds(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <ol className="flex flex-col gap-4">
      {steps.map(step => {
        const checked = checkedIds.has(step.id)
        return (
          <li
            key={step.id}
            className="relative flex gap-4 p-5 rounded-xl"
            style={{
              background: checked ? '#4A674108' : '#FAF5ED',
              borderLeft: `3px solid ${checked ? '#4A6741' : '#C4A882'}`,
              transition: 'all 300ms ease',
              opacity: checked ? 0.7 : 1,
            }}
          >
            {/* Numéro décoratif */}
            <span
              className="absolute top-3 right-4 select-none"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '48px',
                color: '#C4A882',
                opacity: 0.2,
                lineHeight: 1,
              }}
            >
              {step.step_order}
            </span>

            {/* Contenu */}
            <div className="flex-1 pr-8">
              <p
                style={{
                  fontFamily: 'var(--font-lora)',
                  fontSize: '15px',
                  color: '#2C1F14',
                  lineHeight: '1.7',
                  textDecoration: checked ? 'line-through' : 'none',
                }}
              >
                {step.instruction}
              </p>
              {step.duration_min && !checked && (
                <div className="mt-3">
                  <MiniTimer minutes={step.duration_min} onStart={() => onStartTimer(step.duration_min!)} />
                </div>
              )}
            </div>

            {/* Checkbox */}
            <button
              onClick={() => toggle(step.id)}
              className="flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all self-start mt-0.5"
              style={{
                background: checked ? '#4A6741' : 'transparent',
                borderColor: checked ? '#4A6741' : '#C4A882',
              }}
              aria-label={checked ? 'Étape terminée' : 'Marquer comme terminé'}
            >
              {checked && <span style={{ color: '#F5ECD8', fontSize: '12px' }}>✓</span>}
            </button>
          </li>
        )
      })}
    </ol>
  )
}
