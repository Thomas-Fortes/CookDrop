import type { Category } from '@/lib/types'

const CATEGORY_COLORS: Record<string, string> = {
  'Pâtes':       '#D4633A',
  'Végétarien':  '#4A6741',
  'Poisson':     '#3A7494',
  'Viande':      '#8B4513',
  'Soupe':       '#C4A882',
  'Riz':         '#9B8B6E',
  'Autre':       '#8A7060',
}

export function RecipePlaceholderIllustration({ category, name, hasSteam }: { category: Category; name: string; hasSteam?: boolean }) {
  const color = CATEGORY_COLORS[category] ?? '#8A7060'
  const initial = name.charAt(0)

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Plan de travail isométrique */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice">
        {/* Fond parchemin */}
        <rect width="400" height="280" fill="#FAF5ED" />
        {/* Plan de travail bois */}
        <ellipse cx="200" cy="200" rx="160" ry="60" fill="#C4A882" opacity="0.2" />
        <ellipse cx="200" cy="190" rx="150" ry="55" fill="#E8D5B7" opacity="0.4" />
        {/* Assiette isométrique */}
        <ellipse cx="200" cy="160" rx="70" ry="28" fill="white" opacity="0.9" />
        <ellipse cx="200" cy="160" rx="56" ry="22" fill={color} opacity="0.15" />
        <ellipse cx="200" cy="158" rx="56" ry="22" fill={color} opacity="0.12" />
        {/* Lettre initiale */}
        <text x="200" y="167" textAnchor="middle" fontSize="40" fontFamily="serif" fill={color} opacity="0.5" fontWeight="bold">
          {initial}
        </text>
        {/* Vapeur si plat chaud */}
        {hasSteam && (
          <>
            <path d="M185 125 Q182 115 185 105 Q188 95 185 88" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" className="steam-path" />
            <path d="M200 120 Q197 108 200 98 Q203 88 200 82" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" className="steam-path" style={{ animationDelay: '0.8s' }} />
            <path d="M215 125 Q212 115 215 105 Q218 95 215 88" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" className="steam-path" style={{ animationDelay: '1.6s' }} />
          </>
        )}
      </svg>
    </div>
  )
}
