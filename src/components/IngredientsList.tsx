'use client'
import { useState, useEffect, useRef } from 'react'
import type { Ingredient } from '@/lib/types'

function scaleQty(qty: string, baseServings: number, servings: number): string {
  const num = parseFloat(qty)
  if (isNaN(num) || qty === '') return qty
  const scaled = (num / baseServings) * servings
  return scaled % 1 === 0 ? String(scaled) : scaled.toFixed(1)
}

export function IngredientsList({
  ingredients,
  baseServings,
}: {
  ingredients: Ingredient[]
  baseServings: number
}) {
  const [servings, setServings] = useState(baseServings)
  const [checkedIds, setCheckedIds] = useState<Set<string>>(new Set())
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  function toggle(id: string) {
    setCheckedIds(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <section ref={ref}>
      {/* Ajustement portions */}
      <div className="flex items-center gap-4 mb-5">
        <span style={{ fontFamily: 'var(--font-lato)', color: '#8A7060', fontSize: '14px' }}>
          Portions :
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setServings(s => Math.max(1, s - 1))}
            className="w-7 h-7 rounded-full flex items-center justify-center transition-colors"
            style={{ background: '#FAF5ED', border: '1.5px solid #C4A882', color: '#2C1F14' }}
          >
            −
          </button>
          <span style={{ fontFamily: 'var(--font-dm-mono)', color: '#2C1F14', fontSize: '16px', minWidth: '20px', textAlign: 'center' }}>
            {servings}
          </span>
          <button
            onClick={() => setServings(s => Math.min(12, s + 1))}
            className="w-7 h-7 rounded-full flex items-center justify-center transition-colors"
            style={{ background: '#FAF5ED', border: '1.5px solid #C4A882', color: '#2C1F14' }}
          >
            +
          </button>
        </div>
      </div>

      {/* Grille ingrédients */}
      <div className="grid sm:grid-cols-2 gap-2">
        {ingredients.map((ing, i) => {
          const checked = checkedIds.has(ing.id)
          return (
            <button
              key={ing.id}
              onClick={() => toggle(ing.id)}
              className="ingredient-item flex items-center gap-3 p-3 rounded-lg text-left transition-all"
              style={{
                animationDelay: visible ? `${i * 80}ms` : '0ms',
                animationPlayState: visible ? 'running' : 'paused',
                background: checked ? '#4A674115' : '#FAF5ED',
                border: `1.5px solid ${checked ? '#4A6741' : '#E8D5B7'}`,
                opacity: checked ? 0.6 : 1,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-dm-mono)',
                  color: '#D4633A',
                  fontSize: '13px',
                  minWidth: '48px',
                  textDecoration: checked ? 'line-through' : 'none',
                }}
              >
                {scaleQty(ing.quantity, baseServings, servings)}{' '}
                <span style={{ color: '#8A7060' }}>{ing.unit}</span>
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-lora)',
                  color: '#2C1F14',
                  fontSize: '14px',
                  textDecoration: checked ? 'line-through' : 'none',
                }}
              >
                {ing.name}
              </span>
              {checked && (
                <span className="ml-auto" style={{ color: '#4A6741' }}>✓</span>
              )}
            </button>
          )
        })}
      </div>
    </section>
  )
}
