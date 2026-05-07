import type { Category } from '@/lib/types'

/* Couleur d'accent par catégorie */
const CAT: Record<string, { plate: string; food: string; accent: string }> = {
  'Pâtes':      { plate: '#FAF5ED', food: '#D4B060', accent: '#D4633A' },
  'Végétarien': { plate: '#FAF5ED', food: '#7BAB4A', accent: '#4A6741' },
  'Poisson':    { plate: '#FAF5ED', food: '#6A9FBF', accent: '#3A7494' },
  'Viande':     { plate: '#FAF5ED', food: '#B06040', accent: '#8B4513' },
  'Soupe':      { plate: '#FAF5ED', food: '#D4A060', accent: '#C4A882' },
  'Riz':        { plate: '#FAF5ED', food: '#E8D080', accent: '#9B8B6E' },
  'Autre':      { plate: '#FAF5ED', food: '#C4A882', accent: '#8A7060' },
}

export function RecipePlaceholderIllustration({
  category,
  name,
  hasSteam,
  large = false,
}: {
  category: Category
  name: string
  hasSteam?: boolean
  large?: boolean
}) {
  const c = CAT[category] ?? CAT['Autre']
  const scale = large ? 1.4 : 1

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 280"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Fond carreaux discrets */}
          <pattern id={`tile-${name}`} x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <rect width="32" height="32" fill="#F2EBE0" />
            <rect x="1.5" y="1.5" width="29" height="29" fill="#FAF5ED" rx="1" />
          </pattern>

          {/* Grain bois du plan */}
          <pattern id={`wood-${name}`} x="0" y="0" width="200" height="6" patternUnits="userSpaceOnUse">
            <rect width="200" height="6" fill="#D4B896" />
            <path d="M0 3 Q50 2 100 3.5 Q150 4 200 3" stroke="#C4A070" strokeWidth="0.8" fill="none" opacity="0.4" />
          </pattern>

          {/* Ombre douce sous l'assiette */}
          <radialGradient id={`shadow-${name}`} cx="50%" cy="100%" r="50%">
            <stop offset="0%" stopColor="rgba(44,31,20,0.20)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Mur / fond carreaux */}
        <rect width="400" height="160" fill={`url(#tile-${name})`} />

        {/* Plan de travail bois (zone basse) */}
        <polygon points="0,145 400,140 400,280 0,280" fill={`url(#wood-${name})`} />
        {/* Listel séparation mur / plan */}
        <polygon points="0,145 400,140 400,148 0,153" fill="#C4A882" opacity="0.5" />

        {/* Nappe / set de table (cercle doux sous l'assiette) */}
        <ellipse cx="200" cy="210" rx="130" ry="45" fill="#FAF5ED" opacity="0.55" />

        {/* Ombre portée assiette */}
        <ellipse cx="200" cy="230" rx="68" ry="14" fill="rgba(44,31,20,0.14)" />

        {/* Assiette — vue isométrique 3/4 */}
        {/* Bord extérieur */}
        <ellipse cx="200" cy="210" rx="78" ry="30" fill={c.plate} />
        {/* Ombre intérieure de l'assiette */}
        <ellipse cx="200" cy="210" rx="72" ry="27" fill="rgba(196,168,130,0.12)" />
        {/* Creux de l'assiette */}
        <ellipse cx="200" cy="208" rx="60" ry="23" fill={c.plate} />
        {/* Bord surélevé (liseret) */}
        <ellipse cx="200" cy="208" rx="60" ry="23" fill="none" stroke={c.accent} strokeWidth="1.2" opacity="0.25" />

        {/* Contenu du plat (simplifié par catégorie) */}
        <FoodContent category={category} colors={c} cx={200} cy={205} />

        {/* Vapeur si plat chaud */}
        {hasSteam && (
          <>
            <path className="steam-path" d="M178 178 Q175 168 178 158 Q181 148 178 142" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path className="steam-path" d="M200 174 Q197 162 200 152 Q203 142 200 136" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" style={{ animationDelay: '0.8s' }} />
            <path className="steam-path" d="M222 178 Q219 168 222 158 Q225 148 222 142" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" style={{ animationDelay: '1.6s' }} />
          </>
        )}

        {/* Déco côté gauche : herbes */}
        <path d="M50 185 L42 162 M50 185 L50 158 M50 185 L58 165" stroke="#4A6741" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <ellipse cx="42" cy="162" rx="7" ry="3" fill="#4A6741" opacity="0.4" transform="rotate(-25,42,162)" />
        <ellipse cx="50" cy="158" rx="7" ry="3" fill="#5A7751" opacity="0.4" />
        <ellipse cx="58" cy="164" rx="6" ry="3" fill="#4A6741" opacity="0.4" transform="rotate(20,58,164)" />

        {/* Déco côté droit : couteau + fourchette isométrique */}
        <line x1="322" y1="190" x2="318" y2="240" stroke="#C4A882" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
        <path d="M318 190 L316 195 L320 197 L322 190Z" fill="#C4A882" opacity="0.55" />
        <line x1="334" y1="190" x2="334" y2="240" stroke="#C4A882" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
        <path d="M331 190 L331 200 L334 202 L337 200 L337 190" fill="none" stroke="#C4A882" strokeWidth="1.5" opacity="0.55" />

        {/* Lumière chaude en coin */}
        <radialGradient id={`light-${name}`} cx="70%" cy="30%" r="40%">
          <stop offset="0%" stopColor="rgba(245,236,216,0.18)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <rect width="400" height="280" fill={`url(#light-${name})`} />
      </svg>
    </div>
  )
}

/* Rendu du contenu de l'assiette par catégorie */
function FoodContent({
  category,
  colors: c,
  cx,
  cy,
}: {
  category: Category
  colors: { plate: string; food: string; accent: string }
  cx: number
  cy: number
}) {
  switch (category) {
    case 'Pâtes':
      return (
        <g>
          {/* Nids de pâtes */}
          <ellipse cx={cx} cy={cy} rx="44" ry="17" fill={c.food} opacity="0.85" />
          {[...Array(5)].map((_, i) => (
            <path key={i} d={`M${cx - 30 + i * 14} ${cy - 10} Q${cx - 22 + i * 14} ${cy} ${cx - 30 + i * 14} ${cy + 10}`}
              stroke={c.accent} strokeWidth="2" fill="none" opacity="0.5" strokeLinecap="round" />
          ))}
          <ellipse cx={cx - 8} cy={cy - 6} rx="8" ry="5" fill={c.accent} opacity="0.6" />
        </g>
      )
    case 'Végétarien':
      return (
        <g>
          <ellipse cx={cx} cy={cy} rx="44" ry="17" fill={c.food} opacity="0.7" />
          {[[-18, -8], [0, -10], [18, -8], [-10, 4], [10, 4]].map(([dx, dy], i) => (
            <ellipse key={i} cx={cx + dx} cy={cy + dy} rx="10" ry="6"
              fill={i % 2 === 0 ? c.food : c.accent} opacity="0.75"
              transform={`rotate(${i * 30}, ${cx + dx}, ${cy + dy})`} />
          ))}
        </g>
      )
    case 'Poisson':
      return (
        <g>
          <ellipse cx={cx} cy={cy} rx="44" ry="17" fill="#E8E0D4" opacity="0.5" />
          {/* Filet de poisson */}
          <ellipse cx={cx} cy={cy - 2} rx="36" ry="13" fill={c.food} opacity="0.8" />
          {/* Écailles / texture */}
          {[-20, -6, 8, 22].map((dx, i) => (
            <ellipse key={i} cx={cx + dx} cy={cy - 2} rx="9" ry="5"
              fill={c.accent} opacity="0.25" />
          ))}
          <ellipse cx={cx - 12} cy={cy - 8} rx="6" ry="3" fill="#E8D080" opacity="0.7" />
          <ellipse cx={cx + 10} cy={cy - 8} rx="5" ry="3" fill="#E8D080" opacity="0.6" />
        </g>
      )
    case 'Soupe':
      return (
        <g>
          <ellipse cx={cx} cy={cy} rx="50" ry="20" fill={c.food} opacity="0.75" />
          <ellipse cx={cx} cy={cy} rx="42" ry="16" fill={c.food} opacity="0.6" />
          {/* Surface bouillon */}
          <ellipse cx={cx - 10} cy={cy - 4} rx="8" ry="4" fill="white" opacity="0.2" />
          <ellipse cx={cx + 15} cy={cy - 2} rx="5" ry="3" fill="white" opacity="0.15" />
          <circle cx={cx - 5} cy={cy + 5} r="4" fill={c.accent} opacity="0.6" />
          <circle cx={cx + 12} cy={cy + 3} r="3" fill="#4A6741" opacity="0.6" />
        </g>
      )
    case 'Viande':
      return (
        <g>
          <ellipse cx={cx} cy={cy} rx="44" ry="17" fill="#E8D8C8" opacity="0.5" />
          {/* Pièce de viande */}
          <ellipse cx={cx - 4} cy={cy - 2} rx="28" ry="12" fill={c.food} opacity="0.9" />
          <ellipse cx={cx - 4} cy={cy - 4} rx="24" ry="10" fill={c.accent} opacity="0.35" />
          {/* Sauce */}
          <path d={`M${cx + 18} ${cy - 2} Q${cx + 28} ${cy + 4} ${cx + 20} ${cy + 10}`}
            stroke={c.accent} strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.7" />
          {/* Garniture verte */}
          <ellipse cx={cx + 22} cy={cy - 8} rx="7" ry="3.5" fill="#4A6741" opacity="0.7" transform={`rotate(-20,${cx + 22},${cy - 8})`} />
        </g>
      )
    case 'Riz':
      return (
        <g>
          <ellipse cx={cx} cy={cy} rx="44" ry="17" fill={c.food} opacity="0.75" />
          {/* Grains de riz */}
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * Math.PI * 2
            const r = 22
            return (
              <ellipse key={i}
                cx={cx + Math.cos(angle) * r * 0.7}
                cy={cy + Math.sin(angle) * r * 0.4 - 3}
                rx="5" ry="2.5"
                fill="white" opacity="0.5"
                transform={`rotate(${(i * 30)}, ${cx + Math.cos(angle) * r * 0.7}, ${cy + Math.sin(angle) * r * 0.4 - 3})`}
              />
            )
          })}
          <ellipse cx={cx + 16} cy={cy - 6} rx="9" ry="5" fill={c.accent} opacity="0.65" />
        </g>
      )
    default:
      return (
        <g>
          <ellipse cx={cx} cy={cy} rx="44" ry="17" fill={c.food} opacity="0.7" />
          <ellipse cx={cx} cy={cy - 4} rx="32" ry="12" fill={c.accent} opacity="0.4" />
        </g>
      )
  }
}
