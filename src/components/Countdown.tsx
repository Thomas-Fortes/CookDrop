'use client'
import { useEffect, useState } from 'react'

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState('')

  useEffect(() => {
    function update() {
      const now = new Date()
      const midnight = new Date()
      midnight.setHours(24, 0, 0, 0)
      const diff = midnight.getTime() - now.getTime()
      const h = Math.floor(diff / 3600000)
      const m = Math.floor((diff % 3600000) / 60000)
      const s = Math.floor((diff % 60000) / 1000)
      setTimeLeft(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`)
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="text-center mt-12 mb-4">
      <p className="text-xs mb-1" style={{ fontFamily: 'var(--font-lato)', color: '#8A7060' }}>
        Prochain drop dans
      </p>
      <span
        className="text-2xl"
        style={{ fontFamily: 'var(--font-dm-mono)', color: '#C4A882', letterSpacing: '0.05em' }}
      >
        {timeLeft}
      </span>
    </div>
  )
}
