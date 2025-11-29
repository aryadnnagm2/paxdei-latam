
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import Header from '../components/Header'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

export default function Login() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const signIn = async () => {
    setLoading(true)
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (error) alert(error.message)
    else alert('Revisa tu email para iniciar sesión (link mágico)')
    setLoading(false)
  }

  return (
    <div>
      <Header />
      <main style={{maxWidth:600, margin:'2rem auto', padding:'0 1rem'}}>
        <h2>Login / Register</h2>
        <p>Ingresa tu email para recibir un link de acceso.</p>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="tuemail@ejemplo.com" style={{width:'100%',padding:8}} />
        <button onClick={signIn} disabled={loading} style={{marginTop:10}}>{loading ? 'Enviando...' : 'Enviar link'}</button>
      </main>
    </div>
  )
}
