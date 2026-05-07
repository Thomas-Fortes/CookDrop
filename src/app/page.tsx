import type { Metadata } from 'next'
import { getTodayDrop } from '@/lib/data'
import { RecipeCard } from '@/components/RecipeCard'
import { IsometricKitchen } from '@/components/IsometricKitchen'
import { Countdown } from '@/components/Countdown'

export const metadata: Metadata = {
  title: 'CookDrop — Le menu du jour',
  description: 'Deux recettes simples tombent chaque matin. Choisissez, cuisinez, mangez bien.',
}

export const revalidate = 3600

export default async function HomePage() {
  const drop = await getTodayDrop()

  return (
    <div className="relative" style={{ minHeight: '100vh' }}>
      {/* Cuisine isométrique en fond plein écran */}
      <IsometricKitchen />

      {/* Contenu par-dessus la cuisine */}
      <div className="relative z-10 flex flex-col items-center px-4" style={{ paddingTop: '5vh', paddingBottom: '4vh' }}>

        {/* Titre — flotte dans la zone mur/carreaux */}
        <div className="text-center mb-8">
          <h1
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(32px, 5.5vw, 52px)',
              letterSpacing: '-0.02em',
              color: '#2C1F14',
              textShadow: '0 2px 16px rgba(242,235,224,0.9), 0 0 40px rgba(242,235,224,0.7)',
            }}
          >
            Le menu du jour
          </h1>
          <p
            className="mt-2 italic"
            style={{
              fontFamily: 'var(--font-lora)',
              fontSize: '17px',
              color: '#2C1F14',
              opacity: 0.7,
              textShadow: '0 1px 8px rgba(242,235,224,0.95)',
            }}
          >
            2 recettes. Choisissez. Cuisinez.
          </p>
        </div>

        {/* Cartes — posées sur le plan de travail */}
        {drop ? (
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 w-full max-w-3xl">
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
          <div
            className="text-center py-16 px-8 rounded-2xl"
            style={{ background: 'rgba(250,245,237,0.85)', boxShadow: '0 8px 40px rgba(44,31,20,0.12)' }}
          >
            <p style={{ fontFamily: 'var(--font-lora)', color: '#8A7060', fontSize: '18px' }}>
              Aucun drop programmé aujourd'hui. Revenez demain !
            </p>
          </div>
        )}

        <Countdown />
      </div>
    </div>
  )
}
