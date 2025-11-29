
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import Header from '../components/Header'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

export default function Dashboard() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    supabase.from('orders').select('*').then(res => setOrders(res.data || []))
  },[])

  return (
    <div>
      <Header />
      <main style={{maxWidth:800, margin:'2rem auto', padding:'0 1rem'}}>
        <h2>Dashboard</h2>
        <p>Lista pública de órdenes</p>
        <ul>
          {orders.map(o => <li key={o.id}>{o.type} - {o.item} x{o.quantity} ({o.price})</li>)}
        </ul>
      </main>
    </div>
  )
}
