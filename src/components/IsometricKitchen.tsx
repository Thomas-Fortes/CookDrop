export function IsometricKitchen() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Carreaux de faïence 48×48 — crème chaud avec joints beiges */}
          <pattern id="tiles" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <rect width="48" height="48" fill="#DDD3C3" />
            <rect x="2" y="2" width="44" height="44" fill="#FAF5ED" rx="2" />
          </pattern>

          {/* Grain du bois sur le plan de travail */}
          <pattern id="wood" x="0" y="0" width="360" height="7" patternUnits="userSpaceOnUse">
            <rect width="360" height="7" fill="#C4A882" />
            <path d="M0 2.5 Q60 1.5 120 3 Q200 4 280 2.5 Q330 2 360 2.5" stroke="#B49060" strokeWidth="1" fill="none" opacity="0.45" />
            <path d="M0 5 Q90 4 180 5.5 Q270 6 360 5" stroke="#D4B890" strokeWidth="0.6" fill="none" opacity="0.3" />
          </pattern>

          {/* Dégradé pour la face avant du comptoir */}
          <linearGradient id="counter-front" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8A6B45" />
            <stop offset="60%" stopColor="#6B5236" />
            <stop offset="100%" stopColor="#543E28" />
          </linearGradient>

          {/* Lumière chaude centrée sur les cartes */}
          <radialGradient id="warm-light" cx="50%" cy="52%" r="45%">
            <stop offset="0%" stopColor="rgba(245,236,216,0.22)" />
            <stop offset="100%" stopColor="rgba(44,31,20,0.0)" />
          </radialGradient>

          {/* Vignette douce */}
          <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="100%" stopColor="rgba(44,31,20,0.10)" />
          </radialGradient>
        </defs>

        {/* ─── MUR : fond lin chaud ─── */}
        <polygon points="0,0 1440,0 1440,420 0,420" fill="#FAF5ED" />

        {/* Carreaux de faïence sur tout le mur */}
        <polygon points="0,0 1440,0 1440,415 0,415" fill="url(#tiles)" />

        {/* Listel en sable chaud en bas du mur (séparation mur / plan de travail) */}
        <polygon points="0,405 1440,395 1440,425 0,435" fill="#C4A882" opacity="0.7" />
        <polygon points="0,402 1440,392 1440,407 0,417" fill="#D4B896" opacity="0.5" />

        {/* ─── FENÊTRE dans le mur ─── */}
        <rect x="540" y="50" width="360" height="240" rx="6" fill="#E8D5B7" opacity="0.18" />
        <rect x="548" y="58" width="344" height="224" rx="4" fill="#FFF8EE" opacity="0.16" />
        {/* Croisillons */}
        <line x1="720" y1="58" x2="720" y2="282" stroke="#C4A882" strokeWidth="3" opacity="0.35" />
        <line x1="548" y1="170" x2="892" y2="170" stroke="#C4A882" strokeWidth="3" opacity="0.35" />
        {/* Encadrement */}
        <rect x="540" y="50" width="360" height="240" rx="6" fill="none" stroke="#C4A882" strokeWidth="4" opacity="0.4" />
        {/* Reflet de lumière sur la fenêtre */}
        <rect x="556" y="66" width="80" height="18" rx="4" fill="white" opacity="0.12" transform="rotate(-5,596,75)" />

        {/* ─── ÉTAGÈRE MURALE GAUCHE ─── */}
        <rect x="40" y="155" width="130" height="9" rx="3" fill="#C4A882" opacity="0.85" />
        <rect x="40" y="164" width="130" height="4" rx="1" fill="#A8886A" opacity="0.5" />
        {/* Supports d'étagère */}
        <path d="M48 164 L36 195" stroke="#B89465" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
        <path d="M162 164 L174 195" stroke="#B89465" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
        {/* Bocaux sur l'étagère */}
        {[55, 85, 112, 140].map((x, i) => (
          <g key={i} transform={`translate(${x}, 118)`}>
            <ellipse cx="11" cy="38" rx="11" ry="4" fill="#8A7060" opacity="0.45" />
            <rect x="1" y="12" width="20" height="26" rx="5"
              fill={['#D4633A', '#4A6741', '#C4A882', '#D4B896'][i]}
              opacity="0.72" />
            <ellipse cx="11" cy="12" rx="11" ry="4" fill={['#E4733A', '#5A7751', '#D4B896', '#E8C9A0'][i]} opacity="0.85" />
            <ellipse cx="11" cy="10" rx="7" ry="3" fill="#F5ECD8" opacity="0.35" />
          </g>
        ))}

        {/* ─── USTENSILES SUSPENDUS GAUCHE ─── */}
        <g transform="translate(20, 280)">
          {/* Barre de suspension */}
          <rect x="0" y="0" width="8" height="50" rx="4" fill="#C4A882" opacity="0.6" />
          {/* Louche */}
          <line x1="4" y1="50" x2="4" y2="115" stroke="#C4A882" strokeWidth="3.5" strokeLinecap="round" opacity="0.7" />
          <ellipse cx="4" cy="122" rx="15" ry="11" fill="#C4A882" opacity="0.6" />
          <ellipse cx="4" cy="121" rx="12" ry="9" fill="#D4B896" opacity="0.4" />
        </g>

        {/* ─── USTENSILES SUSPENDUS DROITE ─── */}
        <g transform="translate(1408, 280)">
          <rect x="0" y="0" width="8" height="50" rx="4" fill="#C4A882" opacity="0.6" />
          {/* Spatule isométrique */}
          <line x1="4" y1="50" x2="4" y2="108" stroke="#8A6B45" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
          <rect x="-8" y="108" width="24" height="18" rx="4" fill="#9A7B55" opacity="0.7" />
        </g>

        {/* ─── PLAN DE TRAVAIL EN BOIS (surface principale) ─── */}
        {/* Surface principale avec grain bois */}
        <polygon points="-80,425 1520,405 1520,570 -80,590" fill="url(#wood)" />

        {/* Reflet de surface (lustre du bois poli) */}
        <polygon points="-80,425 1520,405 1520,430 -80,450" fill="white" opacity="0.07" />

        {/* Arête avant du plan de travail */}
        <polygon points="-80,590 1520,570 1520,588 -80,608" fill="#D4B896" opacity="0.55" />

        {/* ─── OBJETS SUR LE PLAN DE TRAVAIL ─── */}

        {/* === ZONE GAUCHE === */}

        {/* Casserole (dutch oven) */}
        <g transform="translate(155, 460)">
          {/* Ombre portée */}
          <ellipse cx="0" cy="75" rx="55" ry="12" fill="rgba(44,31,20,0.18)" />
          {/* Corps */}
          <ellipse cx="0" cy="10" rx="52" ry="18" fill="#5A6B7A" />
          <rect x="-52" y="10" width="104" height="55" rx="0" fill="#5A6B7A" />
          <rect x="-52" y="10" width="104" height="55" rx="3" fill="#5A6B7A" />
          <ellipse cx="0" cy="65" rx="52" ry="12" fill="#4A5B6A" />
          {/* Couvercle */}
          <ellipse cx="0" cy="10" rx="56" ry="20" fill="#4A5B6A" />
          <ellipse cx="0" cy="8" rx="54" ry="19" fill="#6A7B8A" />
          <ellipse cx="0" cy="6" rx="52" ry="18" fill="#8A9BAA" />
          <ellipse cx="0" cy="5" rx="48" ry="16" fill="#7A8B9A" />
          {/* Bouton couvercle */}
          <ellipse cx="0" cy="-8" rx="9" ry="4" fill="#C4A882" />
          <rect x="-4" y="-14" width="8" height="9" rx="3" fill="#C4A882" />
          {/* Poignées */}
          <path d="M-52 25 Q-68 20 -66 32 Q-64 44 -52 42" fill="#4A5B6A" />
          <path d="M52 25 Q68 20 66 32 Q64 44 52 42" fill="#4A5B6A" />
          {/* Liseré terre cuite */}
          <ellipse cx="0" cy="38" rx="52" ry="7" fill="none" stroke="#D4633A" strokeWidth="2.5" opacity="0.55" />
        </g>

        {/* Ail à gauche de la casserole */}
        <g transform="translate(255, 494)">
          <ellipse cx="0" cy="18" rx="18" ry="7" fill="rgba(44,31,20,0.10)" />
          <ellipse cx="0" cy="8" rx="17" ry="14" fill="#F0E8DA" />
          <ellipse cx="0" cy="6" rx="15" ry="12" fill="#FAF5ED" />
          <path d="M-7 -4 Q0 -16 7 -4" stroke="#C4A882" strokeWidth="1.5" fill="none" />
          <path d="M-9 4 Q0 10 9 4" stroke="#D4C4B0" strokeWidth="1" fill="none" opacity="0.5" />
          <path d="M-8 -1 Q0 5 8 -1" stroke="#D4C4B0" strokeWidth="1" fill="none" opacity="0.5" />
        </g>

        {/* Planche à découper — centre-gauche */}
        <g transform="translate(360, 455)">
          <ellipse cx="60" cy="95" rx="68" ry="12" fill="rgba(44,31,20,0.12)" />
          <rect x="0" y="0" width="120" height="88" rx="7" fill="#D4A870" />
          {/* Grain bois sur la planche */}
          {[12, 24, 36, 48, 60, 72].map((y, i) => (
            <line key={i} x1="6" y1={y} x2="114" y2={y + 1} stroke="#C49060" strokeWidth="0.9" opacity="0.45" />
          ))}
          {/* Rainure de jus */}
          <rect x="8" y="6" width="104" height="76" rx="4" fill="none" stroke="#C49060" strokeWidth="1.5" opacity="0.4" />
          {/* Poignée */}
          <rect x="106" y="28" width="32" height="32" rx="9" fill="#C49060" />
          <ellipse cx="122" cy="44" rx="6" ry="5" fill="#B4805A" opacity="0.6" />
        </g>

        {/* Herbes fraîches (basilic/ciboulette) sur la planche */}
        <g transform="translate(402, 455)">
          <path d="M12 75 L4 30 M12 75 L12 22 M12 75 L20 34 M12 75 L22 26 M12 75 L2 24"
            stroke="#4A6741" strokeWidth="1.8" strokeLinecap="round" />
          <ellipse cx="4" cy="29" rx="9" ry="4" fill="#4A6741" opacity="0.85" transform="rotate(-25,4,29)" />
          <ellipse cx="12" cy="22" rx="9" ry="4" fill="#5A7751" opacity="0.85" />
          <ellipse cx="20" cy="33" rx="8" ry="3.5" fill="#4A6741" opacity="0.85" transform="rotate(20,20,33)" />
          <ellipse cx="22" cy="25" rx="8" ry="3.5" fill="#5A7751" opacity="0.75" transform="rotate(30,22,25)" />
          <ellipse cx="2" cy="23" rx="8" ry="3.5" fill="#4A6741" opacity="0.75" transform="rotate(-30,2,23)" />
        </g>

        {/* Citrons à droite de la planche */}
        <g transform="translate(500, 488)">
          <ellipse cx="14" cy="34" rx="20" ry="8" fill="rgba(44,31,20,0.10)" />
          <ellipse cx="14" cy="24" rx="19" ry="14" fill="#D4B840" opacity="0.85" />
          <ellipse cx="14" cy="22" rx="17" ry="12" fill="#E4C850" opacity="0.9" />
          <ellipse cx="7" cy="20" rx="5" ry="4" fill="#F4D860" opacity="0.5" />
          <ellipse cx="20" cy="40" rx="16" ry="12" fill="#D4B840" opacity="0.8" transform="rotate(-15,20,40)" />
        </g>

        {/* === ZONE DROITE === */}

        {/* Pot en céramique avec ustensiles */}
        <g transform="translate(1180, 452)">
          <ellipse cx="0" cy="85" rx="42" ry="12" fill="rgba(44,31,20,0.15)" />
          <rect x="-40" y="16" width="80" height="70" rx="12" fill="#C4A882" />
          <ellipse cx="0" cy="16" rx="40" ry="14" fill="#D4B896" />
          <ellipse cx="0" cy="14" rx="36" ry="12" fill="#E0C8A0" />
          {/* Motif rayé sur le pot */}
          <path d="M-40 45 Q0 47 40 45" stroke="#B89465" strokeWidth="10" fill="none" opacity="0.22" />
          <path d="M-40 65 Q0 67 40 65" stroke="#B89465" strokeWidth="8" fill="none" opacity="0.15" />
          {/* Cuillère en bois */}
          <rect x="-16" y="-58" width="7" height="78" rx="3.5" fill="#D4B896" transform="rotate(-10,-12,-58)" />
          <ellipse cx="-18" cy="-60" rx="13" ry="9" fill="#C4A882" transform="rotate(-10,-18,-60)" />
          {/* Spatule */}
          <rect x="2" y="-68" width="6" height="88" rx="2" fill="#8A6B45" />
          <rect x="-6" y="-70" width="20" height="18" rx="3" fill="#9A7B55" />
          {/* Fouet */}
          <path d="M20 -55 L20 14" stroke="#C4A882" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M15 -56 Q20 -72 25 -56" stroke="#C4A882" strokeWidth="2" fill="none" />
          <path d="M17 -50 Q20 -64 23 -50" stroke="#B89465" strokeWidth="1.5" fill="none" />
          <path d="M16 -44 Q20 -56 24 -44" stroke="#C4A882" strokeWidth="1.5" fill="none" opacity="0.7" />
        </g>

        {/* Pot de fines herbes (terre cuite) */}
        <g transform="translate(1060, 468)">
          <ellipse cx="0" cy="66" rx="30" ry="9" fill="rgba(44,31,20,0.14)" />
          <path d="M-28 30 Q-32 60 -30 60 L30 60 Q32 60 28 30 Z" fill="#D4633A" />
          <ellipse cx="0" cy="30" rx="28" ry="9" fill="#E07348" />
          <ellipse cx="0" cy="28" rx="24" ry="7" fill="#5A3E28" />
          <ellipse cx="0" cy="26" rx="20" ry="5" fill="#4A3020" />
          {/* Tiges */}
          <path d="M0 26 L-14 -8 M0 26 L-5 -14 M0 26 L5 -16 M0 26 L14 -6 M0 26 L9 -18"
            stroke="#4A6741" strokeWidth="1.8" strokeLinecap="round" />
          {/* Feuilles */}
          <ellipse cx="-14" cy="-9" rx="7" ry="3.5" fill="#4A6741" opacity="0.9" transform="rotate(-30,-14,-9)" />
          <ellipse cx="-5" cy="-15" rx="7" ry="3.5" fill="#5A7751" opacity="0.9" transform="rotate(-10,-5,-15)" />
          <ellipse cx="5" cy="-17" rx="7" ry="3.5" fill="#4A6741" opacity="0.9" transform="rotate(10,5,-17)" />
          <ellipse cx="14" cy="-7" rx="7" ry="3.5" fill="#5A7751" opacity="0.9" transform="rotate(25,14,-7)" />
          <ellipse cx="9" cy="-19" rx="6" ry="3" fill="#4A6741" opacity="0.85" transform="rotate(15,9,-19)" />
        </g>

        {/* Bouteille d'huile d'olive */}
        <g transform="translate(1300, 453)">
          <ellipse cx="0" cy="92" rx="20" ry="7" fill="rgba(44,31,20,0.12)" />
          <rect x="-20" y="22" width="40" height="70" rx="6" fill="#7BAB4A" opacity="0.82" />
          <rect x="-14" y="5" width="28" height="20" rx="5" fill="#6B9B3A" opacity="0.85" />
          <rect x="-6" y="-5" width="12" height="13" rx="3" fill="#5A8030" />
          {/* Étiquette */}
          <rect x="-16" y="30" width="32" height="36" rx="4" fill="#FAF5ED" opacity="0.72" />
          <ellipse cx="0" cy="46" rx="9" ry="5" fill="#4A6741" opacity="0.55" transform="rotate(-20,0,46)" />
          <ellipse cx="0" cy="58" rx="7" ry="3.5" fill="#4A6741" opacity="0.4" transform="rotate(15,0,58)" />
          {/* Huile visible */}
          <rect x="-18" y="22" width="36" height="40" rx="4" fill="#9BBB5A" opacity="0.25" />
        </g>

        {/* Rouleau à pâtisserie (droite, posé sur le plan) */}
        <g transform="translate(930, 502) rotate(-15)">
          <rect x="-55" y="-8" width="110" height="16" rx="8" fill="#D4B896" />
          <rect x="-50" y="-6" width="100" height="12" rx="6" fill="#C4A882" />
          {/* Grain */}
          {[-30, -10, 10, 30].map((x, i) => (
            <line key={i} x1={x} y1="-6" x2={x + 2} y2="6" stroke="#B89465" strokeWidth="0.8" opacity="0.4" />
          ))}
          {/* Poignées */}
          <rect x="-68" y="-10" width="18" height="20" rx="6" fill="#B89465" />
          <rect x="50" y="-10" width="18" height="20" rx="6" fill="#B89465" />
          {/* Embouts */}
          <rect x="-76" y="-7" width="10" height="14" rx="5" fill="#A87855" />
          <rect x="66" y="-7" width="10" height="14" rx="5" fill="#A87855" />
        </g>

        {/* ─── FACE AVANT DU COMPTOIR ─── */}
        <polygon points="-80,590 1520,570 1520,900 -80,900" fill="url(#counter-front)" />

        {/* Rainure décorative sur la face avant */}
        <polygon points="-80,620 1520,600 1520,606 -80,626" fill="white" opacity="0.04" />
        <polygon points="-80,630 1520,610 1520,612 -80,632" fill="rgba(44,31,20,0.12)" />

        {/* ─── LUMIÈRE CHAUDE SUR LES CARTES ─── */}
        <rect width="1440" height="900" fill="url(#warm-light)" />

        {/* ─── VIGNETTE DOUCE ─── */}
        <rect width="1440" height="900" fill="url(#vignette)" />
      </svg>
    </div>
  )
}
