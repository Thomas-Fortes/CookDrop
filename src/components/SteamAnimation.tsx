export function SteamAnimation() {
  return (
    <svg
      className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
      width="60"
      height="40"
      viewBox="0 0 60 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        className="steam-path"
        d="M15 35 Q12 25 15 15 Q18 5 15 0"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        className="steam-path"
        d="M30 35 Q27 22 30 12 Q33 2 30 0"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        style={{ animationDelay: '0.8s' }}
      />
      <path
        className="steam-path"
        d="M45 35 Q42 25 45 15 Q48 5 45 0"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        style={{ animationDelay: '1.6s' }}
      />
    </svg>
  )
}
