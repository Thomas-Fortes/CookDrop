import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mon profil — CookDrop',
}

export default function ProfilPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1
        className="mb-8"
        style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: '36px',
          letterSpacing: '-0.02em',
          color: '#2C1F14',
        }}
      >
        Mon profil
      </h1>

      {/* Invitation à se connecter (état non-connecté) */}
      <div
        className="rounded-2xl p-8 text-center mb-8"
        style={{ background: '#FAF5ED', boxShadow: '0 2px 12px rgba(44,31,20,0.06)' }}
      >
        <p
          className="mb-4"
          style={{ fontFamily: 'var(--font-lora)', color: '#8A7060', fontSize: '16px' }}
        >
          Connectez-vous pour retrouver vos recettes cuisinées sur tous vos appareils.
        </p>
        <Link
          href="/connexion"
          className="inline-block px-6 py-3 rounded-xl text-sm"
          style={{ background: '#4A6741', color: '#F5ECD8', fontFamily: 'var(--font-lato)', fontWeight: 600 }}
        >
          Se connecter
        </Link>
      </div>

      {/* Sections */}
      {[
        { title: 'Recettes cuisinées', desc: 'Retrouvez toutes les recettes que vous avez marquées comme cuisinées.', count: 0 },
        { title: 'Mes favoris', desc: 'Vos recettes sauvegardées pour les retrouver facilement.', count: 0 },
      ].map(section => (
        <div
          key={section.title}
          className="rounded-xl p-5 mb-4"
          style={{ background: '#FAF5ED', border: '1.5px solid #E8D5B7' }}
        >
          <div className="flex items-center justify-between mb-2">
            <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '20px', color: '#2C1F14' }}>
              {section.title}
            </h2>
            <span
              className="text-sm px-3 py-1 rounded-full"
              style={{ background: '#F2EBE0', color: '#8A7060', fontFamily: 'var(--font-dm-mono)' }}
            >
              {section.count}
            </span>
          </div>
          <p style={{ fontFamily: 'var(--font-lora)', color: '#8A7060', fontSize: '14px' }}>
            {section.desc}
          </p>
        </div>
      ))}

      {/* Réglages */}
      <div
        className="rounded-xl p-5 mt-6"
        style={{ background: '#FAF5ED', border: '1.5px solid #E8D5B7' }}
      >
        <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '20px', color: '#2C1F14', marginBottom: '16px' }}>
          Réglages
        </h2>
        <label className="flex items-center justify-between cursor-pointer">
          <div>
            <p style={{ fontFamily: 'var(--font-lato)', color: '#2C1F14', fontSize: '14px', fontWeight: 600 }}>
              Notifications — Drop du jour
            </p>
            <p style={{ fontFamily: 'var(--font-lora)', color: '#8A7060', fontSize: '13px' }}>
              Recevez une notification quand les recettes du jour sont disponibles
            </p>
          </div>
          <div
            className="w-11 h-6 rounded-full relative ml-4 flex-shrink-0"
            style={{ background: '#E8D5B7' }}
          >
            <div
              className="absolute top-1 left-1 w-4 h-4 rounded-full"
              style={{ background: '#8A7060' }}
            />
          </div>
        </label>
      </div>
    </div>
  )
}
