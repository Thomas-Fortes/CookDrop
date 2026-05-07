'use client'
import Link from 'next/link'
import { useState } from 'react'
import type { Recipe } from '@/lib/types'
import { RecipePlaceholderIllustration } from './RecipePlaceholderIllustration'

const DIFFICULTY_COLORS = {
  'Facile':   { bg: '#4A6741', text: '#F5ECD8' },
  'Moyen':    { bg: '#C4A882', text: '#2C1F14' },
  'Élaboré':  { bg: '#D4633A', text: '#F5ECD8' },
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
      <path d="M7 4 L7 7 L9.5 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

export function RecipeCard({ recipe, tiltClass }: { recipe: Recipe; tiltClass?: string }) {
  const [hovered, setHovered] = useState(false)
  const diffColor = DIFFICULTY_COLORS[recipe.difficulty]

  return (
    <Link
      href={`/recette/${recipe.slug}`}
      className="block group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <article
        className={`rounded-xl overflow-hidden transition-all duration-300 ${tiltClass ?? ''}`}
        style={{
          background: '#FAF5ED',
          boxShadow: hovered
            ? '0 14px 50px rgba(44,31,20,0.18), 0 4px 12px rgba(44,31,20,0.1)'
            : '0 8px 40px rgba(44,31,20,0.12), 0 2px 8px rgba(44,31,20,0.06)',
          transform: hovered
            ? 'rotate(0deg) translateY(-6px)'
            : undefined,
          transition: 'transform 300ms cubic-bezier(0.34,1.2,0.64,1), box-shadow 300ms ease',
        }}
      >
        {/* Illustration */}
        <div className="relative h-44 overflow-hidden" style={{ background: '#F2EBE0' }}>
          <RecipePlaceholderIllustration
            category={recipe.category}
            name={recipe.name}
            hasSteam={recipe.has_steam}
          />
          {/* Badge catégorie */}
          <span
            className="absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full"
            style={{ background: '#D4633A', color: '#F5ECD8', fontFamily: 'var(--font-lato)', fontWeight: 600 }}
          >
            {recipe.category}
          </span>
        </div>

        {/* Contenu */}
        <div className="p-5">
          <h3
            className="leading-tight mb-1"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '22px',
              letterSpacing: '-0.02em',
              color: '#2C1F14',
            }}
          >
            {recipe.name}
          </h3>

          {/* Meta */}
          <div className="flex items-center gap-3 mb-3">
            <span
              className="flex items-center gap-1.5 text-sm"
              style={{ fontFamily: 'var(--font-dm-mono)', color: '#8A7060' }}
            >
              <ClockIcon />
              {recipe.total_time} min
            </span>
            <span
              className="text-xs px-2 py-0.5 rounded-full"
              style={{
                background: diffColor.bg,
                color: diffColor.text,
                fontFamily: 'var(--font-lato)',
                fontWeight: 600,
              }}
            >
              {recipe.difficulty}
            </span>
          </div>

          <p
            className="text-sm leading-relaxed mb-5 line-clamp-2"
            style={{ fontFamily: 'var(--font-lora)', color: '#8A7060' }}
          >
            {recipe.short_desc}
          </p>

          <span
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            style={{
              background: hovered ? '#3d5636' : '#4A6741',
              color: '#F5ECD8',
              fontFamily: 'var(--font-lato)',
              transition: 'background 200ms ease',
            }}
          >
            Je cuisine ça →
          </span>
        </div>
      </article>
    </Link>
  )
}
