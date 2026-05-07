'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function CasseroleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      {/* Corps casserole isométrique */}
      <ellipse cx="14" cy="17" rx="9" ry="5" fill="#C4A882" opacity="0.4" />
      <path d="M5 13 Q5 22 14 22 Q23 22 23 13 L23 11 Q23 9 14 9 Q5 9 5 11 Z" fill="#C4A882" />
      <ellipse cx="14" cy="11" rx="9" ry="2.5" fill="#F5ECD8" />
      {/* Queue */}
      <path d="M23 14 L28 12" stroke="#C4A882" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

const NAV_LINKS = [
  { href: '/', label: "Aujourd'hui" },
  { href: '/archive', label: 'Archive' },
  { href: '/profil', label: 'Mon profil' },
]

export function Header() {
  const pathname = usePathname()
  const today = new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })

  return (
    <header style={{ background: '#2C1F14' }}>
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <CasseroleIcon />
          <div>
            <span
              className="block text-xl tracking-tight leading-none"
              style={{ fontFamily: 'var(--font-playfair)', color: '#F5ECD8', letterSpacing: '-0.02em' }}
            >
              CookDrop
            </span>
            <span
              className="block text-xs italic capitalize leading-none mt-0.5"
              style={{ fontFamily: 'var(--font-lato)', color: '#C4A882' }}
            >
              {today} · 2 plats au menu
            </span>
          </div>
        </Link>

        <nav className="hidden sm:flex items-center gap-6">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm transition-colors"
              style={{
                fontFamily: 'var(--font-lato)',
                color: pathname === href ? '#F5ECD8' : '#8A7060',
                fontWeight: pathname === href ? 600 : 400,
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile burger */}
        <button className="sm:hidden flex flex-col gap-1.5 p-1" aria-label="Menu">
          <span className="block w-6 h-0.5" style={{ background: '#C4A882' }} />
          <span className="block w-6 h-0.5" style={{ background: '#C4A882' }} />
          <span className="block w-6 h-0.5" style={{ background: '#C4A882' }} />
        </button>
      </div>
    </header>
  )
}
