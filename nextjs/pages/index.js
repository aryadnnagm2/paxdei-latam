
import Link from 'next/link'
import Header from '../components/Header'
import ClanCard from '../components/ClanCard'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default function Home({ clans }) {
  return (
    <div>
      <Header />
      <main style={{maxWidth:800, margin:'2rem auto', padding:'0 1rem'}}>
        <h1>Pax Dei Latam</h1>
        <p>Portal minimalista para clanes latinos.</p>
        <section>
          {clans.length === 0 && <p>No hay clanes aún.</p>}
          {clans.map(c => <ClanCard key={c.id} clan={c} />)}
        </section>
        <div style={{marginTop:20}}>
          <Link href="/login">Login / Register</Link>
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const { data } = await supabase.from('clans').select('*').limit(50)
  return { props: { clans: data || [] } }
}
