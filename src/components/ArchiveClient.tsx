'use client'
import { useState } from 'react'
import Link from 'next/link'
import type { DailyDrop, Category, Difficulty } from '@/lib/types'
import { RecipePlaceholderIllustration } from './RecipePlaceholderIllustration'

const CATEGORIES: (Category | 'Toutes')[] = ['Toutes', 'Pâtes', 'Végétarien', 'Viande', 'Poisson', 'Soupe', 'Riz', 'Autre']
const DIFFICULTIES: (Difficulty | 'Toutes')[] = ['Toutes', 'Facile', 'Moyen', 'Élaboré']

function FilterPill({
  label,
  active,
  onClick,
}: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-1.5 rounded-full text-sm transition-all"
      style={{
        background: active ? '#4A6741' : '#FAF5ED',
        color: active ? '#F5ECD8' : '#8A7060',
        border: `1.5px solid ${active ? '#4A6741' : '#E8D5B7'}`,
        fontFamily: 'var(--font-lato)',
        fontWeight: active ? 600 : 400,
      }}
    >
      {label}
    </button>
  )
}

function MiniRecipeCard({ recipe, date }: { recipe: NonNullable<DailyDrop['recipe_1']>; date: string }) {
  return (
    <Link href={`/recette/${recipe.slug}`} className="block group">
      <div
        className="rounded-xl overflow-hidden transition-all duration-200"
        style={{
          background: '#FAF5ED',
          boxShadow: '0 2px 12px rgba(44,31,20,0.08)',
        }}
      >
        <div className="relative h-28" style={{ background: '#F2EBE0' }}>
          <RecipePlaceholderIllustration category={recipe.category} name={recipe.name} hasSteam={recipe.has_steam} />
          <span
            className="absolute top-2 right-2 text-xs px-2 py-0.5 rounded-full"
            style={{ background: '#D4633A', color: '#F5ECD8', fontFamily: 'var(--font-lato)', fontWeight: 600 }}
          >
            {recipe.category}
          </span>
        </div>
        <div className="p-3">
          <p
            className="text-sm leading-tight mb-1"
            style={{ fontFamily: 'var(--font-playfair)', color: '#2C1F14' }}
          >
            {recipe.name}
          </p>
          <p
            className="text-xs"
            style={{ fontFamily: 'var(--font-dm-mono)', color: '#8A7060' }}
          >
            {recipe.total_time} min · {recipe.difficulty}
          </p>
          <p
            className="text-xs mt-0.5"
            style={{ fontFamily: 'var(--font-lato)', color: '#C4A882' }}
          >
            {new Date(date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })}
          </p>
        </div>
      </div>
    </Link>
  )
}

export function ArchiveClient({ drops }: { drops: DailyDrop[] }) {
  const [catFilter, setCatFilter] = useState<Category | 'Toutes'>('Toutes')
  const [diffFilter, setDiffFilter] = useState<Difficulty | 'Toutes'>('Toutes')
  const [maxTime, setMaxTime] = useState<number | null>(null)

  const allRecipes = drops.flatMap(d => {
    const pairs: { recipe: NonNullable<typeof d.recipe_1>; date: string }[] = []
    if (d.recipe_1) pairs.push({ recipe: d.recipe_1, date: d.date })
    if (d.recipe_2) pairs.push({ recipe: d.recipe_2, date: d.date })
    return pairs
  })

  const filtered = allRecipes.filter(({ recipe }) => {
    if (catFilter !== 'Toutes' && recipe.category !== catFilter) return false
    if (diffFilter !== 'Toutes' && recipe.difficulty !== diffFilter) return false
    if (maxTime !== null && recipe.total_time > maxTime) return false
    return true
  })

  return (
    <div>
      {/* Filtres */}
      <div className="mb-8 space-y-4">
        <div>
          <p className="text-xs mb-2" style={{ fontFamily: 'var(--font-lato)', color: '#8A7060' }}>Catégorie</p>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(c => (
              <FilterPill key={c} label={c} active={catFilter === c} onClick={() => setCatFilter(c)} />
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-8">
          <div>
            <p className="text-xs mb-2" style={{ fontFamily: 'var(--font-lato)', color: '#8A7060' }}>Difficulté</p>
            <div className="flex flex-wrap gap-2">
              {DIFFICULTIES.map(d => (
                <FilterPill key={d} label={d} active={diffFilter === d} onClick={() => setDiffFilter(d)} />
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs mb-2" style={{ fontFamily: 'var(--font-lato)', color: '#8A7060' }}>Durée max</p>
            <div className="flex flex-wrap gap-2">
              {([null, 20, 30, 45] as const).map(t => (
                <FilterPill
                  key={String(t)}
                  label={t === null ? 'Toutes' : `≤ ${t} min`}
                  active={maxTime === t}
                  onClick={() => setMaxTime(t)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Résultats */}
      <p className="text-sm mb-4" style={{ fontFamily: 'var(--font-lato)', color: '#8A7060' }}>
        {filtered.length} recette{filtered.length > 1 ? 's' : ''}
      </p>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filtered.map(({ recipe, date }) => (
            <MiniRecipeCard key={`${recipe.id}-${date}`} recipe={recipe} date={date} />
          ))}
        </div>
      ) : (
        <p
          className="text-center py-16"
          style={{ fontFamily: 'var(--font-lora)', color: '#8A7060', fontSize: '16px' }}
        >
          Aucune recette ne correspond à ces filtres.
        </p>
      )}
    </div>
  )
}
