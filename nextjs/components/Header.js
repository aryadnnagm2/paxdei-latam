
import Link from 'next/link'
export default function Header() {
  return (
    <header style={{borderBottom:'1px solid #eee', padding:'1rem 0', background:'#fff'}}>
      <div style={{maxWidth:1000, margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0 1rem'}}>
        <div><strong>Pax Dei Latam</strong></div>
        <nav>
          <Link href="/">Home</Link> | <Link href="/dashboard">Mercado</Link> | <Link href="/login">Login</Link>
        </nav>
      </div>
    </header>
  )
}
