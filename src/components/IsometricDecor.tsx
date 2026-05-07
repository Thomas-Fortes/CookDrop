export function IsometricDecor() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Carreaux de faïence pattern */}
      <svg className="absolute right-0 top-0 opacity-5 w-64 h-64" viewBox="0 0 80 80">
        <pattern id="tiles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect width="18" height="18" x="1" y="1" fill="none" stroke="#4A6741" strokeWidth="0.5" />
        </pattern>
        <rect width="80" height="80" fill="url(#tiles)" />
      </svg>

      {/* Ustensile — louche isométrique */}
      <svg className="absolute left-4 bottom-8 opacity-10 w-20 h-20" viewBox="0 0 60 80" fill="none">
        <ellipse cx="20" cy="20" rx="14" ry="12" stroke="#2C1F14" strokeWidth="2.5" />
        <path d="M28 28 L40 60 Q42 66 38 68 Q34 70 32 65 L20 33" stroke="#2C1F14" strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      {/* Spatule isométrique */}
      <svg className="absolute right-8 bottom-12 opacity-10 w-16 h-24" viewBox="0 0 40 80" fill="none">
        <rect x="14" y="0" width="12" height="28" rx="2" stroke="#2C1F14" strokeWidth="2.5" />
        <path d="M20 28 L20 72" stroke="#2C1F14" strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      {/* Lumière chaude centrale */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(196,168,130,0.08) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
