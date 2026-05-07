import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllRecipes } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Admin — CookDrop',
}

export default async function AdminPage() {
  const recipes = await getAllRecipes()

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '36px',
            letterSpacing: '-0.02em',
            color: '#2C1F14',
          }}
        >
          Back-office
        </h1>
        <span
          className="text-sm px-3 py-1.5 rounded-full"
          style={{ background: '#D4633A20', color: '#D4633A', fontFamily: 'var(--font-lato)', fontWeight: 600 }}
        >
          Admin
        </span>
      </div>

      {/* Stats rapides */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Recettes', value: recipes.length },
          { label: 'Drops programmés', value: '—' },
          { label: 'Sans illustration', value: '0' },
          { label: 'Non programmées', value: recipes.length },
        ].map(stat => (
          <div
            key={stat.label}
            className="rounded-xl p-4 text-center"
            style={{ background: '#FAF5ED', border: '1.5px solid #E8D5B7' }}
          >
            <p
              style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '28px', color: '#2C1F14' }}
            >
              {stat.value}
            </p>
            <p style={{ fontFamily: 'var(--font-lato)', fontSize: '12px', color: '#8A7060', marginTop: '4px' }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Catalogue recettes */}
      <div className="flex items-center justify-between mb-4">
        <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '22px', color: '#2C1F14' }}>
          Catalogue de recettes
        </h2>
        <button
          className="px-4 py-2 rounded-lg text-sm"
          style={{ background: '#4A6741', color: '#F5ECD8', fontFamily: 'var(--font-lato)', fontWeight: 600 }}
        >
          + Nouvelle recette
        </button>
      </div>

      <div className="rounded-xl overflow-hidden" style={{ border: '1.5px solid #E8D5B7' }}>
        <table className="w-full">
          <thead>
            <tr style={{ background: '#FAF5ED', borderBottom: '1.5px solid #E8D5B7' }}>
              {['Nom', 'Catégorie', 'Difficulté', 'Durée', 'Actions'].map(h => (
                <th
                  key={h}
                  className="text-left px-4 py-3 text-xs"
                  style={{ fontFamily: 'var(--font-lato)', color: '#8A7060', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe, i) => (
              <tr
                key={recipe.id}
                style={{ borderBottom: i < recipes.length - 1 ? '1px solid #F2EBE0' : 'none', background: '#FDFAF6' }}
              >
                <td className="px-4 py-3">
                  <p style={{ fontFamily: 'var(--font-lato)', color: '#2C1F14', fontSize: '14px', fontWeight: 600 }}>
                    {recipe.name}
                  </p>
                </td>
                <td className="px-4 py-3">
                  <span
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{ background: '#D4633A20', color: '#D4633A', fontFamily: 'var(--font-lato)' }}
                  >
                    {recipe.category}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span style={{ fontFamily: 'var(--font-lato)', color: '#8A7060', fontSize: '13px' }}>
                    {recipe.difficulty}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span style={{ fontFamily: 'var(--font-dm-mono)', color: '#8A7060', fontSize: '13px' }}>
                    {recipe.total_time} min
                  </span>
                </td>
                <td className="px-4 py-3">
                  <Link
                    href={`/recette/${recipe.slug}`}
                    className="text-xs"
                    style={{ color: '#4A6741', fontFamily: 'var(--font-lato)' }}
                  >
                    Voir →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Programmation drops */}
      <div className="mt-10">
        <h2 className="mb-4" style={{ fontFamily: 'var(--font-playfair)', fontSize: '22px', color: '#2C1F14' }}>
          Prochains drops
        </h2>
        <div
          className="rounded-xl p-6 text-center"
          style={{ background: '#FAF5ED', border: '1.5px dashed #C4A882' }}
        >
          <p style={{ fontFamily: 'var(--font-lora)', color: '#8A7060', fontSize: '15px' }}>
            Le calendrier de programmation nécessite une connexion Supabase.
          </p>
          <p className="text-xs mt-2" style={{ fontFamily: 'var(--font-lato)', color: '#C4A882' }}>
            Configurez votre .env.local pour accéder à cette fonctionnalité.
          </p>
        </div>
      </div>
    </div>
  )
}
