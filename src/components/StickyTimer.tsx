'use client'
import { useState, useEffect, useCallback } from 'react'

export function StickyTimer({ initialMinutes, onClose }: { initialMinutes: number; onClose: () => void }) {
  const total = initialMinutes * 60
  const [remaining, setRemaining] = useState(total)
  const [running, setRunning] = useState(true)
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    if (!running || remaining <= 0) return
    const id = setInterval(() => {
      setRemaining(r => {
        if (r <= 1) {
          setRunning(false)
          setFinished(true)
          return 0
        }
        return r - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [running, remaining])

  const progress = 1 - remaining / total
  const m = Math.floor(remaining / 60)
  const s = remaining % 60
  const almostDone = remaining <= 30 && remaining > 0

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center gap-4 px-4 py-3 sm:px-6"
      style={{ background: '#2C1F14' }}
    >
      {/* Barre de progression */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'rgba(255,255,255,0.1)' }}>
        <div
          className={almostDone ? 'pulse-bar' : ''}
          style={{
            height: '100%',
            width: `${progress * 100}%`,
            background: '#D4633A',
            transition: 'width 1s linear',
            animation: almostDone ? 'pulse-bar 0.8s ease infinite' : 'none',
          }}
        />
      </div>

      <span style={{ fontFamily: 'var(--font-lato)', color: '#8A7060', fontSize: '13px', whiteSpace: 'nowrap' }}>
        Timer
      </span>

      <span
        className="text-2xl flex-1 text-center"
        style={{
          fontFamily: 'var(--font-dm-mono)',
          color: finished ? '#4A6741' : '#F5ECD8',
          letterSpacing: '0.05em',
        }}
      >
        {finished ? '✓ Terminé !' : `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`}
      </span>

      <div className="flex items-center gap-2">
        {!finished && (
          <button
            onClick={() => setRunning(r => !r)}
            className="px-3 py-1.5 rounded-lg text-sm"
            style={{ background: 'rgba(255,255,255,0.1)', color: '#F5ECD8', fontFamily: 'var(--font-lato)' }}
          >
            {running ? '⏸' : '▶'}
          </button>
        )}
        <button
          onClick={() => { setRemaining(total); setRunning(true); setFinished(false) }}
          className="px-3 py-1.5 rounded-lg text-sm"
          style={{ background: 'rgba(255,255,255,0.1)', color: '#C4A882', fontFamily: 'var(--font-lato)' }}
        >
          ↺
        </button>
        <button
          onClick={onClose}
          className="px-3 py-1.5 rounded-lg text-sm"
          style={{ background: 'rgba(255,255,255,0.08)', color: '#8A7060', fontFamily: 'var(--font-lato)' }}
        >
          ✕
        </button>
      </div>
    </div>
  )
}
