import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: 8,
        background: 'linear-gradient(135deg, #C4531A 0%, #E07B39 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Casserole body */}
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        <path
          d="M5 13 Q5 22 14 22 Q23 22 23 13 L23 11 Q23 9 14 9 Q5 9 5 11 Z"
          fill="white"
          opacity="0.95"
        />
        {/* Lid */}
        <ellipse cx="14" cy="11" rx="9" ry="2.2" fill="white" opacity="0.75" />
        <path d="M12 9 L12 7 Q14 6 16 7 L16 9" fill="white" opacity="0.75" />
        {/* Handle */}
        <path d="M23 14 L27 12" stroke="white" strokeWidth="2.2" strokeLinecap="round" opacity="0.9" />
        {/* Steam dots */}
        <circle cx="10" cy="7" r="1" fill="white" opacity="0.5" />
        <circle cx="14" cy="5.5" r="1" fill="white" opacity="0.5" />
        <circle cx="18" cy="7" r="1" fill="white" opacity="0.5" />
      </svg>
    </div>,
    size
  )
}
