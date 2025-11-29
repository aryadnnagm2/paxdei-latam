
import Link from 'next/link'
export default function ClanCard({ clan }) {
  return (
    <article style={{border:'1px solid #eee', padding:12, borderRadius:6, marginBottom:10}}>
      <h3>{clan.name} {clan.tag ? `(${clan.tag})` : ''}</h3>
      <p style={{margin:0}}>{clan.description}</p>
      <div style={{marginTop:8}}><Link href={`/clan/${clan.id}`}>Ver clan</Link></div>
    </article>
  )
}
