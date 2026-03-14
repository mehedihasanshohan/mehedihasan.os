import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { projects } from '../data/projects.js'
import { useScrollProgress, mapRange } from '../hooks/useScrollAnimation.js'

export default function Projects() {
  const sectionRef = useRef(null)
  const progress = useScrollProgress(sectionRef)

  return (
    <section id="projects" ref={sectionRef} style={{ position:'relative', zIndex:1 }}>
      <div className="section-container">
        <Reveal className="section-header">
          <span className="section-tag">PRODUCT LAB</span>
          <h2 className="section-title">Projects</h2>
          <div className="section-line" />
        </Reveal>

        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit, minmax(320px, 1fr))',
          gap:24,
        }}>
          {projects.map((p, i) => {
            // Interpolated scroll: each card enters based on scroll progress through section
            const cardProgress = mapRange(progress, i * 0.06, i * 0.06 + 0.18, 0, 1)
            const clampedP = Math.max(0, Math.min(1, cardProgress))

            return (
              <div
                key={p.id}
                className="glass-card"
                style={{
                  padding: 28,
                  opacity: clampedP,
                  transform: `translateY(${(1 - clampedP) * 30}px)`,
                  transition: 'opacity 0.5s, transform 0.5s, border-color 0.4s, box-shadow 0.4s',
                  display:'flex',
                  flexDirection:'column',
                  gap:0,
                }}
              >
                <div style={{ fontSize:10, color:'var(--cyan)', letterSpacing:3, marginBottom:12, opacity:0.6 }}>
                  {p.num} // PROJECT
                </div>
                <div style={{
                  fontFamily:'Orbitron,sans-serif',
                  fontSize:16,
                  fontWeight:700,
                  color:'var(--text)',
                  marginBottom:16,
                  letterSpacing:1,
                }}>
                  {p.name}
                </div>

                <div style={{ fontSize:9, color:'var(--muted)', letterSpacing:2, textTransform:'uppercase', marginBottom:4 }}>Problem</div>
                <p style={{ fontFamily:'Inter,sans-serif', fontSize:13, color:'var(--muted)', lineHeight:1.6, marginBottom:12 }}>
                  {p.problem}
                </p>

                <div style={{ fontSize:9, color:'var(--muted)', letterSpacing:2, textTransform:'uppercase', marginBottom:4 }}>Solution</div>
                <p style={{ fontFamily:'Inter,sans-serif', fontSize:13, color:'var(--muted)', lineHeight:1.6, marginBottom:16 }}>
                  {p.solution}
                </p>

                <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:20 }}>
                  {p.tech.slice(0,4).map(t => (
                    <span key={t} style={{
                      fontSize:9, letterSpacing:1, color:'var(--purple-light)',
                      border:'1px solid var(--border)', padding:'3px 8px', borderRadius:2,
                      background:'var(--purple-dim)',
                    }}>{t}</span>
                  ))}
                </div>

                <div style={{ display:'flex', gap:10, flexWrap:'wrap', marginTop:'auto' }}>
                  <a href="#" className="project-btn-live">◈ LIVE DEMO</a>
                  <Link to={`/projects/${p.id}`} className="project-btn-case">⌥ CASE STUDY</Link>
                  <a href="#" className="project-btn-ghost">⌂ GITHUB</a>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        .project-btn-live {
          font-size:10px; letter-spacing:1.5px; padding:7px 14px; border-radius:3px;
          cursor:pointer; transition:all 0.3s; text-decoration:none;
          font-family:'JetBrains Mono',monospace;
          background:var(--cyan-dim); color:var(--cyan); border:1px solid var(--border);
        }
        .project-btn-live:hover { background:rgba(0,245,255,0.18); box-shadow:var(--glow-cyan); }
        .project-btn-case {
          font-size:10px; letter-spacing:1.5px; padding:7px 14px; border-radius:3px;
          cursor:pointer; transition:all 0.3s; text-decoration:none;
          font-family:'JetBrains Mono',monospace;
          background:var(--purple-dim); color:var(--purple-light); border:1px solid rgba(124,58,237,0.25);
        }
        .project-btn-case:hover { box-shadow:var(--glow-purple); }
        .project-btn-ghost {
          font-size:10px; letter-spacing:1.5px; padding:7px 14px; border-radius:3px;
          cursor:pointer; transition:all 0.3s; text-decoration:none;
          font-family:'JetBrains Mono',monospace;
          background:transparent; color:var(--muted); border:1px solid var(--border2);
        }
        .project-btn-ghost:hover { border-color:var(--border); color:var(--text2); }
      `}</style>
    </section>
  )
}
