import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const commands = [
  { name: 'Open Projects', desc: 'Navigate to Projects section', icon: '◈', key: 'P', section: 'projects' },
  { name: 'About Me', desc: 'Navigate to About section', icon: '◎', key: 'A', section: 'about' },
  { name: 'Skills Graph', desc: 'View technology dependency graph', icon: '⬡', key: 'S', section: 'skills' },
  { name: 'Experiments Lab', desc: 'See experiments', icon: '⚗', key: 'E', section: 'experiments' },
  { name: 'Contact Developer', desc: 'Send a signal', icon: '✉', key: 'C', section: 'contact' },
  { name: 'View Resume', desc: 'Download PDF resume', icon: '⌥', key: 'R', action: 'resume' },
  { name: 'GitHub Profile', desc: 'View repositories', icon: '⌂', key: 'G', action: 'github' },
]

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const navigate = useNavigate()

  const filtered = commands.filter(c =>
    c.name.toLowerCase().includes(query.toLowerCase()) ||
    c.desc.toLowerCase().includes(query.toLowerCase())
  )

  const run = useCallback((cmd) => {
    if (cmd.section) {
      navigate('/')
      setTimeout(() => {
        document.getElementById(cmd.section)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
    setOpen(false)
  }, [navigate])

  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setOpen(o => !o); setQuery(''); setActive(0) }
      if (!open) return
      if (e.key === 'Escape') setOpen(false)
      if (e.key === 'ArrowDown') setActive(a => Math.min(a + 1, filtered.length - 1))
      if (e.key === 'ArrowUp') setActive(a => Math.max(a - 1, 0))
      if (e.key === 'Enter' && filtered[active]) run(filtered[active])
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, filtered, active, run])

  if (!open) return null

  return (
    <div
      onClick={() => setOpen(false)}
      style={{
        position:'fixed',inset:0,
        background:'rgba(0,0,0,0.6)',
        backdropFilter:'blur(12px)',
        zIndex:9000,
        display:'flex',alignItems:'flex-start',
        justifyContent:'center',
        paddingTop:'18vh',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width:'min(580px,90vw)',
          background:'var(--bg)',
          border:'1px solid var(--border)',
          borderRadius:12,
          overflow:'hidden',
          boxShadow:'0 0 80px rgba(0,245,255,0.12), 0 40px 80px rgba(0,0,0,0.5)',
          animation:'paletteIn 0.2s cubic-bezier(0.34,1.56,0.64,1)',
        }}
      >
        <style>{`@keyframes paletteIn{from{opacity:0;transform:scale(0.95) translateY(-10px)}to{opacity:1;transform:scale(1) translateY(0)}}`}</style>
        <input
          autoFocus
          value={query}
          onChange={e => { setQuery(e.target.value); setActive(0) }}
          placeholder="Type a command or search..."
          style={{
            width:'100%',background:'transparent',border:'none',
            borderBottom:'1px solid var(--border2)',
            color:'var(--text)',
            fontFamily:'JetBrains Mono,monospace',
            fontSize:14,padding:'18px 20px',outline:'none',letterSpacing:1,
          }}
        />
        <div style={{padding:8}}>
          {filtered.map((c, i) => (
            <div
              key={c.name}
              onClick={() => run(c)}
              style={{
                display:'flex',alignItems:'center',gap:14,
                padding:'12px 14px',borderRadius:6,
                cursor:'pointer',
                background: i === active ? 'var(--cyan-dim)' : 'transparent',
                borderLeft: i === active ? '2px solid var(--cyan)' : '2px solid transparent',
                transition:'all 0.15s',
              }}
              onMouseEnter={() => setActive(i)}
            >
              <span style={{fontSize:16,width:24,textAlign:'center'}}>{c.icon}</span>
              <div style={{flex:1}}>
                <div style={{fontSize:13,color:'var(--text)'}}>{c.name}</div>
                <div style={{fontSize:10,color:'var(--muted)',letterSpacing:1,marginTop:2}}>{c.desc}</div>
              </div>
              <span style={{
                fontSize:9,color:'var(--cyan)',
                border:'1px solid var(--border)',
                padding:'2px 6px',borderRadius:3,
                background:'var(--cyan-dim)',
              }}>{c.key}</span>
            </div>
          ))}
        </div>
        <div style={{
          padding:'10px 18px',borderTop:'1px solid var(--border2)',
          display:'flex',gap:20,fontSize:10,color:'var(--muted)',letterSpacing:1,
        }}>
          {[['↑↓','Navigate'],['↵','Select'],['Esc','Close']].map(([k,l]) => (
            <span key={k} style={{display:'flex',alignItems:'center',gap:6}}>
              <span style={{background:'var(--surface2)',padding:'2px 6px',borderRadius:3,fontFamily:'monospace'}}>{k}</span> {l}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
