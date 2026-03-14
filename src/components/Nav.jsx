import { useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme.jsx'

export default function Nav() {
  const { dark, toggle } = useTheme()
  const loc = useLocation()
  const navigate = useNavigate()
  const isHome = loc.pathname === '/'

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="nav">
      {isHome ? (
        <>
          <a onClick={() => scrollTo('hero')} style={{cursor:'pointer'}}>Root</a>
          <a onClick={() => scrollTo('about')} style={{cursor:'pointer'}}>About</a>
          <a onClick={() => scrollTo('skills')} style={{cursor:'pointer'}}>Skills</a>
          <a onClick={() => scrollTo('projects')} style={{cursor:'pointer'}}>Projects</a>
          <a onClick={() => scrollTo('experiments')} style={{cursor:'pointer'}}>Lab</a>
          <a onClick={() => scrollTo('contact')} style={{cursor:'pointer'}}>Contact</a>
        </>
      ) : (
        <button
          onClick={() => navigate('/')}
          style={{
            background:'none', border:'none', cursor:'pointer',
            color:'var(--muted)', fontSize:'16px', letterSpacing:'1.5px',
            padding:'6px 14px', borderRadius:'50px', transition:'all 0.25s',
            fontFamily:'JetBrains Mono, monospace',
          }}
          onMouseEnter={e => e.currentTarget.style.color='var(--cyan)'}
          onMouseLeave={e => e.currentTarget.style.color='var(--muted)'}
        >
          ← Back
        </button>
      )}
      <button className="nav-theme-btn" onClick={toggle} title="Toggle theme">
        {dark ? '☀' : '◑'}
      </button>
    </nav>
  )
}
