'use client'
import { useState } from 'react'
import type { Recipe } from '@/lib/types'
import { IngredientsList } from './IngredientsList'
import { RecipeSteps } from './RecipeSteps'
import { StickyTimer } from './StickyTimer'
import { RecipePlaceholderIllustration } from './RecipePlaceholderIllustration'

const DIFFICULTY_COLORS = {
  'Facile':  { bg: '#4A6741', text: '#F5ECD8' },
  'Moyen':   { bg: '#C4A882', text: '#2C1F14' },
  'Élaboré': { bg: '#D4633A', text: '#F5ECD8' },
}

export function RecipePageClient({ recipe }: { recipe: Recipe }) {
  const [timerMinutes, setTimerMinutes] = useState<number | null>(null)
  const diffColor = DIFFICULTY_COLORS[recipe.difficulty]

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Illustration hero */}
      <div
        className="relative w-full rounded-2xl overflow-hidden mb-8"
        style={{ height: '280px', background: '#F2EBE0' }}
      >
        <RecipePlaceholderIllustration
          category={recipe.category}
          name={recipe.name}
          hasSteam={recipe.has_steam}
        />
      </div>

      {/* Titre & meta */}
      <div className="mb-6">
        <div className="flex items-start gap-3 flex-wrap mb-3">
          <span
            className="text-xs px-2.5 py-1 rounded-full"
            style={{ background: '#D4633A', color: '#F5ECD8', fontFamily: 'var(--font-lato)', fontWeight: 600 }}
          >
            {recipe.category}
          </span>
          <span
            className="text-xs px-2.5 py-1 rounded-full"
            style={{ background: diffColor.bg, color: diffColor.text, fontFamily: 'var(--font-lato)', fontWeight: 600 }}
          >
            {recipe.difficulty}
          </span>
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(28px, 5vw, 40px)',
            letterSpacing: '-0.02em',
            color: '#2C1F14',
          }}
        >
          {recipe.name}
        </h1>

        {/* Ligne meta */}
        <div
          className="flex items-center gap-5 mt-3 flex-wrap"
          style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '13px', color: '#8A7060' }}
        >
          <span>⏱ {recipe.total_time} min total</span>
          <span>🔪 {recipe.prep_time} min prep</span>
          <span>🍳 {recipe.cook_time} min cuisson</span>
          <span>👤 {recipe.servings} pers.</span>
        </div>

        <p
          className="mt-4 leading-relaxed"
          style={{ fontFamily: 'var(--font-lora)', fontSize: '15px', color: '#8A7060' }}
        >
          {recipe.long_desc}
        </p>
      </div>

      {/* Bouton timer global */}
      {timerMinutes === null && (
        <button
          onClick={() => setTimerMinutes(recipe.total_time)}
          className="mb-8 flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm"
          style={{
            background: '#2C1F14',
            color: '#F5ECD8',
            fontFamily: 'var(--font-lato)',
            fontWeight: 600,
          }}
        >
          ⏱ Démarrer le timer ({recipe.total_time} min)
        </button>
      )}

      {/* Séparateur */}
      <div className="h-px mb-8" style={{ background: '#E8D5B7' }} />

      {/* Ingrédients */}
      <section className="mb-10">
        <h2
          className="mb-5"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '24px',
            letterSpacing: '-0.02em',
            color: '#2C1F14',
          }}
        >
          Ingrédients
        </h2>
        {recipe.ingredients && (
          <IngredientsList ingredients={recipe.ingredients} baseServings={recipe.servings} />
        )}
      </section>

      {/* Séparateur */}
      <div className="h-px mb-8" style={{ background: '#E8D5B7' }} />

      {/* Étapes */}
      <section className="mb-24">
        <h2
          className="mb-5"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '24px',
            letterSpacing: '-0.02em',
            color: '#2C1F14',
          }}
        >
          Préparation
        </h2>
        {recipe.steps && (
          <RecipeSteps
            steps={recipe.steps.sort((a, b) => a.step_order - b.step_order)}
            onStartTimer={(min) => setTimerMinutes(min)}
          />
        )}
      </section>

      {/* Timer sticky */}
      {timerMinutes !== null && (
        <StickyTimer
          initialMinutes={timerMinutes}
          onClose={() => setTimerMinutes(null)}
        />
      )}
    </div>
  )
}
