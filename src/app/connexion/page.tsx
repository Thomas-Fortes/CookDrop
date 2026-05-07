'use client'
import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase-client'

export default function ConnexionPage() {
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    const supabase = createClient()
    try {
      if (mode === 'login') {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) { setMessage(error.message); return }
        window.location.href = '/'
      } else {
        const { error } = await supabase.auth.signUp({ email, password })
        if (error) { setMessage(error.message); return }
        setMessage('Vérifiez vos emails pour confirmer votre compte.')
      }
    } finally {
      setLoading(false)
    }
  }

  async function handleGoogle() {
    const supabase = createClient()
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/` },
    })
  }

  const inputStyle = {
    background: '#FAF5ED',
    border: '1.5px solid #E8D5B7',
    borderRadius: '10px',
    padding: '12px 16px',
    fontFamily: 'var(--font-lora)',
    fontSize: '15px',
    color: '#2C1F14',
    width: '100%',
    outline: 'none',
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12" style={{ background: '#F2EBE0' }}>
      <div
        className="w-full max-w-sm p-8 rounded-2xl"
        style={{
          background: '#FAF5ED',
          boxShadow: '0 8px 40px rgba(44,31,20,0.12)',
        }}
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <h1
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '28px',
              letterSpacing: '-0.02em',
              color: '#2C1F14',
            }}
          >
            CookDrop
          </h1>
          <p style={{ fontFamily: 'var(--font-lora)', color: '#8A7060', fontSize: '14px', marginTop: '4px' }}>
            {mode === 'login' ? 'Content de te revoir 👋' : 'Bienvenue dans la cuisine'}
          </p>
        </div>

        {/* Onglets */}
        <div
          className="flex rounded-xl mb-6 p-1"
          style={{ background: '#F2EBE0' }}
        >
          {(['login', 'signup'] as const).map(m => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className="flex-1 py-2 text-sm rounded-lg transition-all"
              style={{
                fontFamily: 'var(--font-lato)',
                fontWeight: 600,
                background: mode === m ? '#FAF5ED' : 'transparent',
                color: mode === m ? '#2C1F14' : '#8A7060',
                boxShadow: mode === m ? '0 1px 6px rgba(44,31,20,0.08)' : 'none',
              }}
            >
              {m === 'login' ? 'Se connecter' : 'Créer un compte'}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={inputStyle}
          />

          {message && (
            <p
              className="text-sm text-center"
              style={{ fontFamily: 'var(--font-lato)', color: message.includes('Vérifiez') ? '#4A6741' : '#D4633A' }}
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="py-3 rounded-xl text-sm font-semibold transition-colors mt-1"
            style={{
              background: '#4A6741',
              color: '#F5ECD8',
              fontFamily: 'var(--font-lato)',
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? '...' : mode === 'login' ? 'Connexion' : 'Créer le compte'}
          </button>
        </form>

        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px" style={{ background: '#E8D5B7' }} />
          <span style={{ fontFamily: 'var(--font-lato)', color: '#8A7060', fontSize: '12px' }}>ou</span>
          <div className="flex-1 h-px" style={{ background: '#E8D5B7' }} />
        </div>

        <button
          onClick={handleGoogle}
          className="w-full py-3 rounded-xl text-sm flex items-center justify-center gap-3 transition-colors"
          style={{
            background: '#FAF5ED',
            border: '1.5px solid #E8D5B7',
            color: '#2C1F14',
            fontFamily: 'var(--font-lato)',
            fontWeight: 600,
          }}
        >
          <GoogleIcon />
          Continuer avec Google
        </button>

        <p className="text-center mt-6 text-xs" style={{ fontFamily: 'var(--font-lato)', color: '#8A7060' }}>
          <Link href="/" style={{ color: '#4A6741' }}>← Retour au menu</Link>
        </p>
      </div>
    </div>
  )
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z" />
      <path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2.01c-.72.49-1.63.78-2.7.78-2.09 0-3.85-1.4-4.49-3.3H1.83v2.07A8 8 0 0 0 8.98 17z" />
      <path fill="#FBBC05" d="M4.49 10.53A4.8 4.8 0 0 1 4.24 9c0-.53.09-1.04.25-1.53V5.4H1.83A8 8 0 0 0 .98 9c0 1.29.31 2.51.85 3.6l2.66-2.07z" />
      <path fill="#EA4335" d="M8.98 4.17c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 8.98 1 8 8 0 0 0 1.83 5.4L4.49 7.47c.64-1.9 2.4-3.3 4.49-3.3z" />
    </svg>
  )
}
