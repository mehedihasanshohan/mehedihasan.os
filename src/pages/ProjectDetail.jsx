// import { useParams, Navigate, useNavigate } from 'react-router-dom'
// import { useRef } from 'react'
// import { projects } from '../data/projects.js'
// import BgCanvas from '../components/BgCanvas.jsx'
// import { useScrollProgress, mapRange } from '../hooks/useScrollAnimation.js'
// import { useMediaQuery } from '../hooks/useMediaQuery.js'
// import Reveal from '../components/Reveal.jsx'

// export default function ProjectDetail() {
//   const { id } = useParams()
//   const project = projects.find(p => p.id === id)
//   if (!project) return <Navigate to="/" replace />

//   const idx = projects.findIndex(p => p.id === id)
//   const prev = projects[idx - 1]
//   const next = projects[idx + 1]

//   return (
//     <>
//       <BgCanvas />
//       <div style={{ position:'relative', zIndex:1, minHeight:'100vh' }}>
//         <ProjectHero project={project} />
//         <ProjectBody project={project} prev={prev} next={next} />
//       </div>
//     </>
//   )
// }

// function ProjectHero({ project }) {
//   const heroRef = useRef(null)
//   const progress = useScrollProgress(heroRef)
//   const titleY = mapRange(progress, 0, 0.65, 0, -70)
//   const op = Math.max(0, mapRange(progress, 0.15, 0.65, 1, 0))

//   return (
//     <section ref={heroRef} style={{
//       minHeight:'85vh', display:'flex', flexDirection:'column',
//       alignItems:'center', justifyContent:'center',
//       textAlign:'center', padding:'120px 40px 80px',
//       position:'relative', overflow:'hidden',
//     }}>
//       {/* Color glow */}
//       <div style={{
//         position:'absolute', inset:0,
//         background:`radial-gradient(ellipse at 50% 55%, ${project.color}10, transparent 68%)`,
//         pointerEvents:'none',
//       }} />
//       {/* Top border accent */}
//       <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:`linear-gradient(90deg, transparent, ${project.color}, transparent)` }} />

//       <div style={{
//         transform:`translateY(${titleY}px)`,
//         opacity: op,
//         transition:'transform 0.05s linear',
//         maxWidth:700,
//       }}>
//         <div style={{ fontSize:10, color:'var(--cyan)', letterSpacing:4, marginBottom:18, display:'flex', alignItems:'center', justifyContent:'center', gap:10 }}>
//           <span style={{ color:'var(--muted)' }}>PROJECT</span>
//           <span style={{ color:project.color }}>{project.num}</span>
//         </div>

//         <h1 style={{
//           fontFamily:'Orbitron,sans-serif',
//           fontSize:'clamp(28px,6vw,64px)',
//           fontWeight:900, letterSpacing:2,
//           background:`linear-gradient(135deg, var(--text) 20%, ${project.color})`,
//           WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
//           marginBottom:18, lineHeight:1.05,
//         }}>{project.name}</h1>

//         <p style={{ fontFamily:'Inter,sans-serif', fontSize:17, color:'var(--muted)', maxWidth:500, lineHeight:1.7, margin:'0 auto 40px' }}>
//           {project.tagline}
//         </p>

//         <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
//           <a href="#" style={{
//             background:'transparent', border:`1px solid ${project.color}`,
//             color:project.color, fontFamily:'JetBrains Mono,monospace',
//             fontSize:11, letterSpacing:2, padding:'12px 26px', borderRadius:4,
//             textDecoration:'none', transition:'all 0.3s',
//           }}
//           onMouseEnter={e => { e.currentTarget.style.background=project.color+'1A'; e.currentTarget.style.boxShadow=`0 0 20px ${project.color}44` }}
//           onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.boxShadow='none' }}>
//             ◈ LIVE DEMO
//           </a>
//           <a href="#" style={{
//             background:'transparent', border:'1px solid var(--border2)',
//             color:'var(--muted)', fontFamily:'JetBrains Mono,monospace',
//             fontSize:11, letterSpacing:2, padding:'12px 26px', borderRadius:4,
//             textDecoration:'none', transition:'all 0.3s',
//           }}
//           onMouseEnter={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--text)' }}
//           onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border2)'; e.currentTarget.style.color='var(--muted)' }}>
//             ⌂ GITHUB
//           </a>
//         </div>
//       </div>

//       <div style={{ position:'absolute', bottom:28, left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:6, animation:'heroBounce 2s ease-in-out infinite' }}>
//         <span style={{ fontSize:9, color:'var(--muted)', letterSpacing:2 }}>SCROLL TO EXPLORE</span>
//         <div style={{ width:1, height:28, background:`linear-gradient(180deg,${project.color},transparent)` }} />
//       </div>
//       <style>{`@keyframes heroBounce{0%,100%{transform:translateX(-50%) translateY(0);opacity:.5}50%{transform:translateX(-50%) translateY(7px);opacity:1}}`}</style>
//     </section>
//   )
// }

// function ProjectBody({ project, prev, next }) {
//   const bodyRef = useRef(null)
//   const progress = useScrollProgress(bodyRef)
//   const navigate = useNavigate()
//   const isMobile = useMediaQuery('(max-width: 680px)')

//   return (
//     <div ref={bodyRef} style={{ maxWidth:900, margin:'0 auto', padding:`0 ${isMobile?20:40}px 120px` }}>

//       {/* Tech stack */}
//       <Reveal>
//         <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:14, padding:32, marginBottom:28 }}>
//           <div style={{ fontSize:9, color:'var(--cyan)', letterSpacing:3, marginBottom:20 }}>TECH STACK</div>
//           <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
//             {project.tech.map((t, i) => {
//               const p = Math.max(0, Math.min(1, mapRange(progress, i * 0.03, i * 0.03 + 0.14, 0, 1)))
//               return (
//                 <div key={t} style={{
//                   fontFamily:'JetBrains Mono,monospace', fontSize:12,
//                   color:'var(--text2)', background:'var(--surface2)',
//                   border:'1px solid var(--border)', padding:'8px 16px', borderRadius:6,
//                   opacity:p, transform:`translateY(${(1-p)*14}px)`,
//                   transition:'opacity 0.4s, transform 0.4s',
//                   letterSpacing:1,
//                 }}>{t}</div>
//               )
//             })}
//           </div>
//         </div>
//       </Reveal>

//       {/* Problem / Solution */}
//       <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap:20, marginBottom:28 }}>
//         {[
//           { label:'THE PROBLEM', content:project.problem, accent:'#FF5F57' },
//           { label:'THE SOLUTION', content:project.solution, accent:project.color },
//         ].map((item, i) => (
//           <Reveal key={item.label} delay={i * 100}>
//             <div style={{
//               background:'var(--surface)', border:'1px solid var(--border)',
//               borderRadius:14, padding:28, height:'100%',
//               borderTop:`2px solid ${item.accent}`,
//             }}>
//               <div style={{ fontSize:9, color:item.accent, letterSpacing:3, marginBottom:14 }}>{item.label}</div>
//               <p style={{ fontFamily:'Inter,sans-serif', fontSize:14, color:'var(--muted)', lineHeight:1.8 }}>{item.content}</p>
//             </div>
//           </Reveal>
//         ))}
//       </div>

//       {/* Impact */}
//       <Reveal>
//         <div style={{
//           background:`linear-gradient(135deg,${project.color}0C,var(--surface))`,
//           border:`1px solid ${project.color}30`, borderRadius:14,
//           padding:28, marginBottom:28,
//           display:'flex', gap:20, alignItems:'flex-start',
//         }}>
//           <div style={{ fontSize:28, flexShrink:0 }}>📈</div>
//           <div>
//             <div style={{ fontSize:9, color:project.color, letterSpacing:3, marginBottom:12 }}>IMPACT & RESULTS</div>
//             <p style={{ fontFamily:'Inter,sans-serif', fontSize:15, color:'var(--text2)', lineHeight:1.8 }}>{project.impact}</p>
//           </div>
//         </div>
//       </Reveal>

//       {/* Features */}
//       <Reveal>
//         <div style={{ background:'var(--surface)', border:'1px solid var(--border)', borderRadius:14, padding:32, marginBottom:48 }}>
//           <div style={{ fontSize:9, color:'var(--cyan)', letterSpacing:3, marginBottom:22 }}>KEY FEATURES</div>
//           <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap:14 }}>
//             {project.features.map((f, i) => {
//               const fp = Math.max(0, Math.min(1, mapRange(progress, 0.28 + i*0.04, 0.28 + i*0.04 + 0.12, 0, 1)))
//               return (
//                 <div key={f} style={{ display:'flex', alignItems:'flex-start', gap:10, opacity:fp, transform:`translateX(${(1-fp)*-18}px)`, transition:'opacity 0.4s, transform 0.4s' }}>
//                   <span style={{ color:project.color, fontSize:12, marginTop:2, flexShrink:0 }}>◈</span>
//                   <span style={{ fontFamily:'Inter,sans-serif', fontSize:13, color:'var(--muted)', lineHeight:1.65 }}>{f}</span>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </Reveal>

//       {/* Prev / Next */}
//       <div style={{ display:'flex', justifyContent:'space-between', gap:16, flexWrap:'wrap' }}>
//         {prev ? (
//           <button onClick={() => navigate(`/projects/${prev.id}`)} style={{
//             display:'flex', flexDirection:'column', gap:5, textAlign:'left',
//             padding:'18px 24px', borderRadius:10, flex:1, minWidth:180,
//             background:'var(--surface)', border:'1px solid var(--border)',
//             cursor:'pointer', transition:'all 0.3s', fontFamily:'inherit',
//           }}
//           onMouseEnter={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform='translateX(-4px)' }}
//           onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform='translateX(0)' }}>
//             <span style={{ fontSize:9, color:'var(--muted)', letterSpacing:2 }}>← PREVIOUS</span>
//             <span style={{ fontFamily:'Orbitron,sans-serif', fontSize:12, color:'var(--text)', fontWeight:700, letterSpacing:1 }}>{prev.name}</span>
//           </button>
//         ) : <div style={{ flex:1 }} />}

//         {next ? (
//           <button onClick={() => navigate(`/projects/${next.id}`)} style={{
//             display:'flex', flexDirection:'column', gap:5, textAlign:'right', alignItems:'flex-end',
//             padding:'18px 24px', borderRadius:10, flex:1, minWidth:180,
//             background:'var(--surface)', border:'1px solid var(--border)',
//             cursor:'pointer', transition:'all 0.3s', fontFamily:'inherit',
//           }}
//           onMouseEnter={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform='translateX(4px)' }}
//           onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform='translateX(0)' }}>
//             <span style={{ fontSize:9, color:'var(--muted)', letterSpacing:2 }}>NEXT →</span>
//             <span style={{ fontFamily:'Orbitron,sans-serif', fontSize:12, color:'var(--text)', fontWeight:700, letterSpacing:1 }}>{next.name}</span>
//           </button>
//         ) : <div style={{ flex:1 }} />}
//       </div>
//     </div>
//   )
// }












import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
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
      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
        <ProjectHero project={project} />
        <ProjectBody project={project} prev={prev} next={next} />
      </div>
    </>
  )
}

/* ── IMAGE SLIDER ── */
function ImageSlider({ images, color }) {
  const [active, setActive] = useState(0)
  const [fading, setFading] = useState(false)

  const goTo = (idx) => {
    if (idx === active) return
    setFading(true)
    setTimeout(() => { setActive(idx); setFading(false) }, 280)
  }
  const prev = () => goTo((active - 1 + images.length) % images.length)
  const next = () => goTo((active + 1) % images.length)

  return (
    <div style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', border: `1px solid ${color}30`, marginBottom: 28 }}>
      {/* Main image */}
      <div style={{ position: 'relative', width: '100%', paddingTop: '52%', background: 'var(--bg2)' }}>
        <img
          src={images[active]}
          alt={`slide-${active}`}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover',
            opacity: fading ? 0 : 1,
            transition: 'opacity 0.28s ease',
          }}
        />
        {/* overlay gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(to top, ${color}22, transparent 50%)`,
          pointerEvents: 'none',
        }} />

        {/* Prev/Next buttons */}
        {images.length > 1 && (
          <>
            <button onClick={prev} style={{
              position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.55)', border: `1px solid ${color}40`,
              color: color, width: 36, height: 36, borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', fontSize: 14, transition: 'all 0.25s',
              backdropFilter: 'blur(8px)',
            }}
              onMouseEnter={e => e.currentTarget.style.background = `${color}22`}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.55)'}
            >‹</button>
            <button onClick={next} style={{
              position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.55)', border: `1px solid ${color}40`,
              color: color, width: 36, height: 36, borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', fontSize: 14, transition: 'all 0.25s',
              backdropFilter: 'blur(8px)',
            }}
              onMouseEnter={e => e.currentTarget.style.background = `${color}22`}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.55)'}
            >›</button>
          </>
        )}

        {/* Slide counter */}
        <div style={{
          position: 'absolute', bottom: 12, right: 14,
          fontSize: 9, letterSpacing: 2, color: color,
          background: 'rgba(0,0,0,0.6)', padding: '3px 10px',
          borderRadius: 20, backdropFilter: 'blur(8px)',
          border: `1px solid ${color}30`,
        }}>
          {active + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail dots */}
      <div style={{
        display: 'flex', gap: 8, padding: '12px 16px',
        background: 'var(--surface)', borderTop: `1px solid ${color}15`,
        alignItems: 'center',
      }}>
        {images.map((img, i) => (
          <button key={i} onClick={() => goTo(i)} style={{
            width: i === active ? 28 : 8,
            height: 8, borderRadius: 4,
            background: i === active ? color : 'var(--border)',
            border: 'none', cursor: 'pointer',
            transition: 'all 0.3s',
            padding: 0,
            flexShrink: 0,
          }} />
        ))}
        <span style={{ marginLeft: 'auto', fontSize: 9, color: 'var(--muted)', letterSpacing: 2, opacity: 0.5 }}>
          SCREENSHOT {active + 1}
        </span>
      </div>
    </div>
  )
}

/* ── HERO ── */
function ProjectHero({ project }) {
  const heroRef = useRef(null)
  const progress = useScrollProgress(heroRef)
  const titleY = mapRange(progress, 0, 0.65, 0, -70)
  const op = Math.max(0, mapRange(progress, 0.15, 0.65, 1, 0))

  return (
    <section ref={heroRef} style={{
      minHeight: '85vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center',
      padding: 'clamp(100px, 15vw, 120px) clamp(20px, 5vw, 40px) 80px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(ellipse at 50% 55%, ${project.color}10, transparent 68%)`,
        pointerEvents: 'none',
      }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }} />

      <div style={{
        transform: `translateY(${titleY}px)`,
        opacity: op,
        transition: 'transform 0.05s linear',
        maxWidth: 700,
        width: '100%',
      }}>
        <div style={{
          fontSize: 10, color: 'var(--cyan)', letterSpacing: 4,
          marginBottom: 18, display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: 10, flexWrap: 'wrap',
        }}>
          <span style={{ color: 'var(--muted)' }}>PROJECT</span>
          <span style={{ color: project.color }}>{project.num}</span>
          <span style={{
            fontSize: 8, color: project.color, border: `1px solid ${project.color}40`,
            padding: '2px 8px', borderRadius: 2, background: `${project.color}10`,
            letterSpacing: 2,
          }}>{project.category}</span>
          <span style={{ fontSize: 8, color: 'var(--muted)', letterSpacing: 2, opacity: 0.5 }}>{project.year}</span>
        </div>

        <h1 style={{
          fontFamily: 'Orbitron, sans-serif',
          fontSize: 'clamp(26px, 6vw, 64px)',
          fontWeight: 900, letterSpacing: 2,
          background: `linear-gradient(135deg, var(--text) 20%, ${project.color})`,
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          marginBottom: 18, lineHeight: 1.05,
          wordBreak: 'break-word',
        }}>{project.name}</h1>

        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 'clamp(14px, 2vw, 17px)',
          color: 'var(--muted)', maxWidth: 500,
          lineHeight: 1.7, margin: '0 auto 40px',
          wordBreak: 'break-word',
        }}>{project.tagline}</p>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={project.liveUrl} style={{
            background: 'transparent', border: `1px solid ${project.color}`,
            color: project.color, fontFamily: 'JetBrains Mono, monospace',
            fontSize: 11, letterSpacing: 2, padding: 'clamp(8px,2vw,12px) clamp(16px,3vw,26px)',
            borderRadius: 4, textDecoration: 'none', transition: 'all 0.3s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = project.color + '1A'; e.currentTarget.style.boxShadow = `0 0 20px ${project.color}44` }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.boxShadow = 'none' }}>
            ◈ LIVE DEMO
          </a>
          <a href={project.githubUrl} style={{
            background: 'transparent', border: '1px solid var(--border2)',
            color: 'var(--muted)', fontFamily: 'JetBrains Mono, monospace',
            fontSize: 11, letterSpacing: 2, padding: 'clamp(8px,2vw,12px) clamp(16px,3vw,26px)',
            borderRadius: 4, textDecoration: 'none', transition: 'all 0.3s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--muted)' }}>
            ⌂ GITHUB
          </a>
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        animation: 'heroBounce 2s ease-in-out infinite',
      }}>
        <span style={{ fontSize: 9, color: 'var(--muted)', letterSpacing: 2 }}>SCROLL TO EXPLORE</span>
        <div style={{ width: 1, height: 28, background: `linear-gradient(180deg,${project.color},transparent)` }} />
      </div>
      <style>{`@keyframes heroBounce{0%,100%{transform:translateX(-50%) translateY(0);opacity:.5}50%{transform:translateX(-50%) translateY(7px);opacity:1}}`}</style>
    </section>
  )
}

/* ── BODY ── */
function ProjectBody({ project, prev, next }) {
  const bodyRef = useRef(null)
  const progress = useScrollProgress(bodyRef)
  const navigate = useNavigate()
  const isMobile = useMediaQuery('(max-width: 680px)')

  return (
    <div ref={bodyRef} style={{ maxWidth: 900, margin: '0 auto', padding: `0 ${isMobile ? 20 : 40}px 120px` }}>

      {/* IMAGE SLIDER */}
      <Reveal>
        <ImageSlider images={project.images} color={project.color} />
      </Reveal>

      {/* Tech stack */}
      <Reveal>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14, padding: 'clamp(20px,3vw,32px)', marginBottom: 28 }}>
          <div style={{ fontSize: 9, color: 'var(--cyan)', letterSpacing: 3, marginBottom: 20 }}>TECH STACK</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {project.tech.map((t, i) => {
              const p = Math.max(0, Math.min(1, mapRange(progress, i * 0.03, i * 0.03 + 0.14, 0, 1)))
              return (
                <div key={t} style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 12,
                  color: 'var(--text2)', background: 'var(--surface2)',
                  border: '1px solid var(--border)', padding: '8px 16px', borderRadius: 6,
                  opacity: p, transform: `translateY(${(1 - p) * 14}px)`,
                  transition: 'opacity 0.4s, transform 0.4s', letterSpacing: 1,
                }}>{t}</div>
              )
            })}
          </div>
        </div>
      </Reveal>

      {/* Problem / Solution */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 20, marginBottom: 28 }}>
        {[
          { label: 'THE PROBLEM', content: project.problem, accent: '#FF5F57' },
          { label: 'THE SOLUTION', content: project.solution, accent: project.color },
        ].map((item, i) => (
          <Reveal key={item.label} delay={i * 100}>
            <div style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 14, padding: 'clamp(18px,3vw,28px)', height: '100%',
              borderTop: `2px solid ${item.accent}`,
            }}>
              <div style={{ fontSize: 9, color: item.accent, letterSpacing: 3, marginBottom: 14 }}>{item.label}</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'var(--muted)', lineHeight: 1.8, wordBreak: 'break-word' }}>{item.content}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Impact */}
      <Reveal>
        <div style={{
          background: `linear-gradient(135deg,${project.color}0C,var(--surface))`,
          border: `1px solid ${project.color}30`, borderRadius: 14,
          padding: 'clamp(18px,3vw,28px)', marginBottom: 28,
          display: 'flex', gap: 20, alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}>
          <div style={{ fontSize: 28, flexShrink: 0 }}>📈</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 9, color: project.color, letterSpacing: 3, marginBottom: 12 }}>IMPACT & RESULTS</div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: 'var(--text2)', lineHeight: 1.8, wordBreak: 'break-word' }}>{project.impact}</p>
          </div>
        </div>
      </Reveal>

      {/* Features */}
      <Reveal>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14, padding: 'clamp(20px,3vw,32px)', marginBottom: 48 }}>
          <div style={{ fontSize: 9, color: 'var(--cyan)', letterSpacing: 3, marginBottom: 22 }}>KEY FEATURES</div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 14 }}>
            {project.features.map((f, i) => {
              const fp = Math.max(0, Math.min(1, mapRange(progress, 0.28 + i * 0.04, 0.28 + i * 0.04 + 0.12, 0, 1)))
              return (
                <div key={f} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 10,
                  opacity: fp, transform: `translateX(${(1 - fp) * -18}px)`,
                  transition: 'opacity 0.4s, transform 0.4s',
                }}>
                  <span style={{ color: project.color, fontSize: 12, marginTop: 2, flexShrink: 0 }}>◈</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'var(--muted)', lineHeight: 1.65, wordBreak: 'break-word' }}>{f}</span>
                </div>
              )
            })}
          </div>
        </div>
      </Reveal>

      {/* Prev / Next */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        {prev ? (
          <button onClick={() => navigate(`/projects/${prev.id}`)} style={{
            display: 'flex', flexDirection: 'column', gap: 5, textAlign: 'left',
            padding: 'clamp(14px,2vw,18px) clamp(16px,3vw,24px)',
            borderRadius: 10, flex: 1, minWidth: 'min(180px, 40vw)',
            background: 'var(--surface)', border: '1px solid var(--border)',
            cursor: 'pointer', transition: 'all 0.3s', fontFamily: 'inherit',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateX(-4px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}>
            <span style={{ fontSize: 9, color: 'var(--muted)', letterSpacing: 2 }}>← PREVIOUS</span>
            <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 12, color: 'var(--text)', fontWeight: 700, letterSpacing: 1, wordBreak: 'break-word' }}>{prev.name}</span>
          </button>
        ) : <div style={{ flex: 1 }} />}

        {next ? (
          <button onClick={() => navigate(`/projects/${next.id}`)} style={{
            display: 'flex', flexDirection: 'column', gap: 5, textAlign: 'right', alignItems: 'flex-end',
            padding: 'clamp(14px,2vw,18px) clamp(16px,3vw,24px)',
            borderRadius: 10, flex: 1, minWidth: 'min(180px, 40vw)',
            background: 'var(--surface)', border: '1px solid var(--border)',
            cursor: 'pointer', transition: 'all 0.3s', fontFamily: 'inherit',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateX(4px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}>
            <span style={{ fontSize: 9, color: 'var(--muted)', letterSpacing: 2 }}>NEXT →</span>
            <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 12, color: 'var(--text)', fontWeight: 700, letterSpacing: 1, wordBreak: 'break-word' }}>{next.name}</span>
          </button>
        ) : <div style={{ flex: 1 }} />}
      </div>
    </div>
  )
}