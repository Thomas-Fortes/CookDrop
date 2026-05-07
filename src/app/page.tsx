import type { Metadata } from 'next'
import { getTodayDrop } from '@/lib/data'
import { RecipeCard } from '@/components/RecipeCard'
import { IsometricDecor } from '@/components/IsometricDecor'
import { Countdown } from '@/components/Countdown'

export const metadata: Metadata = {
  title: 'CookDrop — Le menu du jour',
  description: 'Deux recettes simples tombent chaque matin. Choisissez, cuisinez, mangez bien.',
}

export const revalidate = 3600

export default async function HomePage() {
  const drop = await getTodayDrop()

  return (
    <div className="relative min-h-screen px-4 py-10">
      <IsometricDecor />

      <div className="relative max-w-3xl mx-auto">
        {/* Titre */}
        <div className="text-center mb-10">
          <h1
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(36px, 6vw, 52px)',
              letterSpacing: '-0.02em',
              color: '#2C1F14',
            }}
          >
            Le menu du jour
          </h1>
          <p
            className="mt-2 text-lg italic"
            style={{ fontFamily: 'var(--font-lora)', color: '#8A7060' }}
          >
            2 recettes. Choisissez. Cuisinez.
          </p>
        </div>

        {/* Drop cards */}
        {drop ? (
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {drop.recipe_1 && (
              <div className="drop-card-1">
                <RecipeCard recipe={drop.recipe_1} tiltClass="recipe-card-tilt-1" />
              </div>
            )}
            {drop.recipe_2 && (
              <div className="drop-card-2">
                <RecipeCard recipe={drop.recipe_2} tiltClass="recipe-card-tilt-2" />
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-20">
            <p style={{ fontFamily: 'var(--font-lora)', color: '#8A7060', fontSize: '18px' }}>
              Aucun drop programmé pour aujourd'hui. Revenez demain !
            </p>
          </div>
        )}

        <Countdown />
      </div>
    </div>
  )
}
