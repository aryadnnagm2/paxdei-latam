
import { createClient } from '@supabase/supabase-js'
import Header from '../../components/Header'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

export default function ClanPage({ clan, orders }) {
  return (
    <div>
      <Header />
      <main style={{maxWidth:800, margin:'2rem auto', padding:'0 1rem'}}>
        <h2>{clan?.name || 'Clan'}</h2>
        <p>{clan?.description}</p>
        <h3>Órdenes</h3>
        <ul>
          {(orders||[]).map(o => <li key={o.id}>{o.type} - {o.item} x{o.quantity} ({o.price})</li>)}
        </ul>
      </main>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  const { id } = ctx.params
  const { data: clan } = await supabase.from('clans').select('*').eq('id', id).single()
  const { data: orders } = await supabase.from('orders').select('*').eq('clan_id', id).order('created_at', {ascending:false})
  return { props: { clan: clan || null, orders: orders || [] } }
}
