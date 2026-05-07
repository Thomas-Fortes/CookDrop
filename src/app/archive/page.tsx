import type { Metadata } from 'next'
import { getArchive } from '@/lib/data'
import { ArchiveClient } from '@/components/ArchiveClient'

export const metadata: Metadata = {
  title: 'Archive des drops — CookDrop',
  description: 'Toutes les recettes proposées depuis le lancement. Filtrez par catégorie, difficulté et durée.',
}

export const revalidate = 3600

export default async function ArchivePage() {
  const drops = await getArchive()

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(30px, 5vw, 42px)',
            letterSpacing: '-0.02em',
            color: '#2C1F14',
          }}
        >
          Tous les drops
        </h1>
        <p
          className="mt-2"
          style={{ fontFamily: 'var(--font-lora)', color: '#8A7060', fontSize: '15px' }}
        >
          Retrouvez toutes les recettes proposées depuis le lancement.
        </p>
      </div>

      <ArchiveClient drops={drops} />
    </div>
  )
}
