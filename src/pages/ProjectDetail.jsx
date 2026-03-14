import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { projects } from '../data/projects.js'
import BgCanvas from '../components/BgCanvas.jsx'
import { useScrollProgress, mapRange } from '../hooks/useScrollAnimation.js'
import { useMediaQuery } from '../hooks/useMediaQuery.js'
import Reveal from '../components/Reveal.jsx'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)
  if (!project) return <Navigate to="/" replace />

  const idx = projects.findIndex(p => p.id === id)
  const prev = projects[idx - 1]
  const next = projects[idx + 1]

  return (
    <>
      <BgCanvas />
      <div style={{ position:'relative', zIndex:1, minHeight:'100vh' }}>
        <ProjectHero project={project} />
        <ProjectBody project={project} prev={prev} next={next} />
      </div>
    </>
  )
}

function ProjectHero({ project }) {
  const heroRef = useRef(null)
  const progress = useScrollProgress(heroRef)
  const titleY = mapRange(progress, 0, 0.65, 0, -70)
  const op = Math.max(0, mapRange(progress, 0.15, 0.65, 1, 0))

  return (
    <section ref={heroRef} style={{
      minHeight:'85vh', display:'flex', flexDirection:'column',
      alignItems:'center', justifyContent:'center',
      textAlign:'center', padding:'120px 40px 80px',
      position:'relative', overflow:'hidden',
    }}>
      {/* Color glow */}
      <div style={{
        position:'absolute', inset:0,
        background:`radial-gradient(ellipse at 50% 55%, ${project.color}10, transparent 68%)`,
        pointerEvents:'none',
      }} />
      {/* Top border accent */}
      <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:`linear-gradient(90deg, transparent, ${project.color}, transparent)` }} />

      <div style={{
        transform:`translateY(${titleY}px)`,
        opacity: op,
        transition:'transform 0.05s linear',
        maxWidth:700,
      }}>
        <div style={{ fontSize:10, color:'var(--cyan)', letterSpacing:4, marginBottom:18, display:'flex', alignItems:'center', justifyContent:'center', gap:10 }}>
          <span style={{ color:'var(--muted)' }}>PROJECT</span>
          <span style={{ color:project.color }}>{project.num}</span>
        </div>

        <h1 style={{
          fontFamily:'Orbitron,sans-serif',
          fontSize:'clamp(28px,6vw,64px)',
          fontWeight:900, letterSpacing:2,
          background:`linear-gradient(135deg, var(--text) 20%, ${project.color})`,
          WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
          marginBottom:18, lineHeight:1.05,
        }}>{project.name}</h1>

        <p style={{ fontFamily:'Inter,sans-serif', fontSize:17, color:'var(--muted)', maxWidth:500, lineHeight:1.7, margin:'0 auto 40px' }}>
          {project.tagline}
        </p>

        <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
          <a href="#" style={{
            background:'transparent', border:`1px solid ${project.color}`,
            color:project.color, fontFamily:'JetBrains Mono,monospace',
            fontSize:11, letterSpacing:2, padding:'12px 26px', borderRadius:4,
            textDecoration:'none', transition:'all 0.3s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background=project.color+'1A'; e.currentTarget.style.boxShadow=`0 0 20px ${project.color}44` }}
          onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.boxShadow='none' }}>
            ◈ LIVE DEMO
          </a>
          <a href="#" style={{
            background:'transparent', border:'1px solid var(--border2)',
            color:'var(--muted)', fontFamily:'JetBrains Mono,monospace',
            fontSize:11, letterSpacing:2, padding:'12px 26px', borderRadius:4,
            textDecoration:'none', transition:'all 0.3s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--text)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border2)'; e.currentTarget.style.color='var(--muted)' }}>
            ⌂ GITHUB
          </a>
        </div>
      </div>

      <div style={{ position:'absolute', bottom:28, left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:6, animation:'heroBounce 2s ease-in-out infinite' }}>
        <span style={{ fontSize:9, color:'var(--muted)', letterSpacing:2 }}>SCROLL TO EXPLORE</span>
        <div style={{ width:1, height:28, background:`linear-gradient(180deg,${project.color},transparent)` }} />
      </div>
      <style>{`@keyframes heroBounce{0%,100%{transform:translateX(-50%) translateY(0);opacity:.5}50%{transform:translateX(-50%) translateY(7px);opacity:1}}`}</style>
    </section>
  )
}

function ProjectBody({ project, prev, next }) {
  const bodyRef = useRef(null)
  const progress = useScrollProgress(bodyRef)
  const navigate = useNavigate()
  const isMobile = useMediaQuery('(max-width: 680px)')

  return (
    <div ref={bodyRef} style={{ maxWidth:900, margin:'0 auto', padding:`0 ${isMobile?20:40}px 120px` }}>

      {/* Tech stack */}
      <Reveal>
        <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:14, padding:32, marginBottom:28 }}>
          <div style={{ fontSize:9, color:'var(--cyan)', letterSpacing:3, marginBottom:20 }}>TECH STACK</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
            {project.tech.map((t, i) => {
              const p = Math.max(0, Math.min(1, mapRange(progress, i * 0.03, i * 0.03 + 0.14, 0, 1)))
              return (
                <div key={t} style={{
                  fontFamily:'JetBrains Mono,monospace', fontSize:12,
                  color:'var(--text2)', background:'var(--surface2)',
                  border:'1px solid var(--border)', padding:'8px 16px', borderRadius:6,
                  opacity:p, transform:`translateY(${(1-p)*14}px)`,
                  transition:'opacity 0.4s, transform 0.4s',
                  letterSpacing:1,
                }}>{t}</div>
              )
            })}
          </div>
        </div>
      </Reveal>

      {/* Problem / Solution */}
      <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap:20, marginBottom:28 }}>
        {[
          { label:'THE PROBLEM', content:project.problem, accent:'#FF5F57' },
          { label:'THE SOLUTION', content:project.solution, accent:project.color },
        ].map((item, i) => (
          <Reveal key={item.label} delay={i * 100}>
            <div style={{
              background:'var(--surface)', border:'1px solid var(--border)',
              borderRadius:14, padding:28, height:'100%',
              borderTop:`2px solid ${item.accent}`,
            }}>
              <div style={{ fontSize:9, color:item.accent, letterSpacing:3, marginBottom:14 }}>{item.label}</div>
              <p style={{ fontFamily:'Inter,sans-serif', fontSize:14, color:'var(--muted)', lineHeight:1.8 }}>{item.content}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Impact */}
      <Reveal>
        <div style={{
          background:`linear-gradient(135deg,${project.color}0C,var(--surface))`,
          border:`1px solid ${project.color}30`, borderRadius:14,
          padding:28, marginBottom:28,
          display:'flex', gap:20, alignItems:'flex-start',
        }}>
          <div style={{ fontSize:28, flexShrink:0 }}>📈</div>
          <div>
            <div style={{ fontSize:9, color:project.color, letterSpacing:3, marginBottom:12 }}>IMPACT & RESULTS</div>
            <p style={{ fontFamily:'Inter,sans-serif', fontSize:15, color:'var(--text2)', lineHeight:1.8 }}>{project.impact}</p>
          </div>
        </div>
      </Reveal>

      {/* Features */}
      <Reveal>
        <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:14, padding:32, marginBottom:48 }}>
          <div style={{ fontSize:9, color:'var(--cyan)', letterSpacing:3, marginBottom:22 }}>KEY FEATURES</div>
          <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap:14 }}>
            {project.features.map((f, i) => {
              const fp = Math.max(0, Math.min(1, mapRange(progress, 0.28 + i*0.04, 0.28 + i*0.04 + 0.12, 0, 1)))
              return (
                <div key={f} style={{ display:'flex', alignItems:'flex-start', gap:10, opacity:fp, transform:`translateX(${(1-fp)*-18}px)`, transition:'opacity 0.4s, transform 0.4s' }}>
                  <span style={{ color:project.color, fontSize:12, marginTop:2, flexShrink:0 }}>◈</span>
                  <span style={{ fontFamily:'Inter,sans-serif', fontSize:13, color:'var(--muted)', lineHeight:1.65 }}>{f}</span>
                </div>
              )
            })}
          </div>
        </div>
      </Reveal>

      {/* Prev / Next */}
      <div style={{ display:'flex', justifyContent:'space-between', gap:16, flexWrap:'wrap' }}>
        {prev ? (
          <button onClick={() => navigate(`/projects/${prev.id}`)} style={{
            display:'flex', flexDirection:'column', gap:5, textAlign:'left',
            padding:'18px 24px', borderRadius:10, flex:1, minWidth:180,
            background:'var(--surface)', border:'1px solid var(--border)',
            cursor:'pointer', transition:'all 0.3s', fontFamily:'inherit',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform='translateX(-4px)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform='translateX(0)' }}>
            <span style={{ fontSize:9, color:'var(--muted)', letterSpacing:2 }}>← PREVIOUS</span>
            <span style={{ fontFamily:'Orbitron,sans-serif', fontSize:12, color:'var(--text)', fontWeight:700, letterSpacing:1 }}>{prev.name}</span>
          </button>
        ) : <div style={{ flex:1 }} />}

        {next ? (
          <button onClick={() => navigate(`/projects/${next.id}`)} style={{
            display:'flex', flexDirection:'column', gap:5, textAlign:'right', alignItems:'flex-end',
            padding:'18px 24px', borderRadius:10, flex:1, minWidth:180,
            background:'var(--surface)', border:'1px solid var(--border)',
            cursor:'pointer', transition:'all 0.3s', fontFamily:'inherit',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform='translateX(4px)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform='translateX(0)' }}>
            <span style={{ fontSize:9, color:'var(--muted)', letterSpacing:2 }}>NEXT →</span>
            <span style={{ fontFamily:'Orbitron,sans-serif', fontSize:12, color:'var(--text)', fontWeight:700, letterSpacing:1 }}>{next.name}</span>
          </button>
        ) : <div style={{ flex:1 }} />}
      </div>
    </div>
  )
}
