import Link from 'next/link'

export default function Home() {
  return (
    
    <div>
      <h1>Hola desde el index page</h1>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}
