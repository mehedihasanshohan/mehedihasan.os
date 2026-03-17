// import { useRef } from 'react'
// import { Link } from 'react-router-dom'
// import Reveal from './Reveal.jsx'
// import { projects } from '../data/projects.js'
// import { useScrollProgress, mapRange } from '../hooks/useScrollAnimation.js'

// export default function Projects() {
//   const sectionRef = useRef(null)
//   const progress = useScrollProgress(sectionRef)

//   return (
//     <section id="projects" ref={sectionRef} style={{ position:'relative', zIndex:1 }}>
//       <div className="section-container">
//         <Reveal className="section-header">
//           <span className="section-tag">PRODUCT LAB</span>
//           <h2 className="section-title">Projects</h2>
//           <div className="section-line" />
//         </Reveal>

//         <div style={{
//           display:'grid',
//           gridTemplateColumns:'repeat(auto-fit, minmax(320px, 1fr))',
//           gap:24,
//         }}>
//           {projects.map((p, i) => {
//             // Interpolated scroll: each card enters based on scroll progress through section
//             const cardProgress = mapRange(progress, i * 0.06, i * 0.06 + 0.18, 0, 1)
//             const clampedP = Math.max(0, Math.min(1, cardProgress))

//             return (
//               <div
//                 key={p.id}
//                 className="glass-card"
//                 style={{
//                   padding: 28,
//                   opacity: clampedP,
//                   transform: `translateY(${(1 - clampedP) * 30}px)`,
//                   transition: 'opacity 0.5s, transform 0.5s, border-color 0.4s, box-shadow 0.4s',
//                   display:'flex',
//                   flexDirection:'column',
//                   gap:0,
//                 }}
//               >
//                 <div style={{ fontSize:10, color:'var(--cyan)', letterSpacing:3, marginBottom:12, opacity:0.6 }}>
//                   {p.num} // PROJECT
//                 </div>
//                 <div style={{
//                   fontFamily:'Orbitron,sans-serif',
//                   fontSize:16,
//                   fontWeight:700,
//                   color:'var(--text)',
//                   marginBottom:16,
//                   letterSpacing:1,
//                 }}>
//                   {p.name}
//                 </div>

//                 <div style={{ fontSize:9, color:'var(--muted)', letterSpacing:2, textTransform:'uppercase', marginBottom:4 }}>Problem</div>
//                 <p style={{ fontFamily:'Inter,sans-serif', fontSize:13, color:'var(--muted)', lineHeight:1.6, marginBottom:12 }}>
//                   {p.problem}
//                 </p>

//                 <div style={{ fontSize:9, color:'var(--muted)', letterSpacing:2, textTransform:'uppercase', marginBottom:4 }}>Solution</div>
//                 <p style={{ fontFamily:'Inter,sans-serif', fontSize:13, color:'var(--muted)', lineHeight:1.6, marginBottom:16 }}>
//                   {p.solution}
//                 </p>

//                 <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:20 }}>
//                   {p.tech.slice(0,4).map(t => (
//                     <span key={t} style={{
//                       fontSize:9, letterSpacing:1, color:'var(--purple-light)',
//                       border:'1px solid var(--border)', padding:'3px 8px', borderRadius:2,
//                       background:'var(--purple-dim)',
//                     }}>{t}</span>
//                   ))}
//                 </div>

//                 <div style={{ display:'flex', gap:10, flexWrap:'wrap', marginTop:'auto' }}>
//                   <a href="#" className="project-btn-live">◈ LIVE DEMO</a>
//                   <Link to={`/projects/${p.id}`} className="project-btn-case">⌥ CASE STUDY</Link>
//                   <a href="#" className="project-btn-ghost">⌂ GITHUB</a>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>

//       <style>{`
//         .project-btn-live {
//           font-size:10px; letter-spacing:1.5px; padding:7px 14px; border-radius:3px;
//           cursor:pointer; transition:all 0.3s; text-decoration:none;
//           font-family:'JetBrains Mono',monospace;
//           background:var(--cyan-dim); color:var(--cyan); border:1px solid var(--border);
//         }
//         .project-btn-live:hover { background:rgba(0,245,255,0.18); box-shadow:var(--glow-cyan); }
//         .project-btn-case {
//           font-size:10px; letter-spacing:1.5px; padding:7px 14px; border-radius:3px;
//           cursor:pointer; transition:all 0.3s; text-decoration:none;
//           font-family:'JetBrains Mono',monospace;
//           background:var(--purple-dim); color:var(--purple-light); border:1px solid rgba(124,58,237,0.25);
//         }
//         .project-btn-case:hover { box-shadow:var(--glow-purple); }
//         .project-btn-ghost {
//           font-size:10px; letter-spacing:1.5px; padding:7px 14px; border-radius:3px;
//           cursor:pointer; transition:all 0.3s; text-decoration:none;
//           font-family:'JetBrains Mono',monospace;
//           background:transparent; color:var(--muted); border:1px solid var(--border2);
//         }
//         .project-btn-ghost:hover { border-color:var(--border); color:var(--text2); }
//       `}</style>
//     </section>
//   )
// }






// import { useRef } from 'react'
// import { Link } from 'react-router-dom'
// import Reveal from './Reveal.jsx'
// import { projects } from '../data/projects.js'
// import { useScrollProgress, mapRange } from '../hooks/useScrollAnimation.js'

// export default function Projects() {
//   const sectionRef = useRef(null)
//   const progress = useScrollProgress(sectionRef)

//   return (
//     <section id="projects" ref={sectionRef} style={{ position: 'relative', zIndex: 1 }}>
//       <div className="section-container">
//         <Reveal className="section-header">
//           <span className="section-tag">PRODUCT LAB</span>
//           <h2 className="section-title">Projects</h2>
//           <div className="section-line" />
//         </Reveal>

//         <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
//           {projects.map((p, i) => {
//             const cardProgress = mapRange(progress, i * 0.06, i * 0.06 + 0.18, 0, 1)
//             const clampedP = Math.max(0, Math.min(1, cardProgress))
//             const isEven = i % 2 === 0

//             return (
//               <div
//                 key={p.id}
//                 className="glass-card"
//                 style={{
//                   padding: 0,
//                   opacity: clampedP,
//                   transform: `translateY(${(1 - clampedP) * 30}px)`,
//                   transition: 'opacity 0.5s, transform 0.5s, border-color 0.4s, box-shadow 0.4s',
//                   overflow: 'hidden',
//                   borderTop: `2px solid ${p.color}55`,
//                   position: 'relative',
//                 }}
//               >
//                 {/* Accent glow top-left */}
//                 <div style={{
//                   position: 'absolute', top: 0, left: 0, width: 200, height: 200,
//                   background: `radial-gradient(circle, ${p.color}12, transparent 70%)`,
//                   pointerEvents: 'none',
//                 }} />

//                 <div style={{
//                   display: 'grid',
//                   gridTemplateColumns: 'clamp(180px, 28%, 260px) 1fr',
//                   minHeight: 220,
//                 }}>
//                   {/* Left: Number + Meta */}
//                   <div style={{
//                     borderRight: `1px solid ${p.color}25`,
//                     padding: 'clamp(20px, 3vw, 32px)',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     justifyContent: 'space-between',
//                     background: `linear-gradient(160deg, ${p.color}08, transparent)`,
//                     position: 'relative',
//                   }}>
//                     <div>
//                       <div style={{
//                         fontFamily: 'Orbitron, sans-serif',
//                         fontSize: 'clamp(36px, 6vw, 64px)',
//                         fontWeight: 900,
//                         color: p.color,
//                         opacity: 0.15,
//                         lineHeight: 1,
//                         letterSpacing: -2,
//                       }}>{p.num}</div>

//                       <div style={{
//                         fontSize: 9, color: p.color, letterSpacing: 3,
//                         marginTop: 12, marginBottom: 6,
//                         border: `1px solid ${p.color}30`,
//                         padding: '3px 8px', borderRadius: 2,
//                         display: 'inline-block',
//                         background: `${p.color}10`,
//                       }}>{p.category}</div>

//                       <div style={{ fontSize: 9, color: 'var(--muted)', letterSpacing: 2, marginBottom: 16, opacity: 0.6 }}>
//                         {p.year}
//                       </div>
//                     </div>

//                     {/* Tech pills - vertical */}
//                     <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
//                       {p.tech.slice(0, 3).map(t => (
//                         <span key={t} style={{
//                           fontSize: 8, letterSpacing: 1,
//                           color: 'var(--muted)',
//                           padding: '2px 0',
//                           borderLeft: `2px solid ${p.color}40`,
//                           paddingLeft: 8,
//                           whiteSpace: 'nowrap',
//                           overflow: 'hidden',
//                           textOverflow: 'ellipsis',
//                         }}>{t}</span>
//                       ))}
//                       {p.tech.length > 3 && (
//                         <span style={{ fontSize: 8, color: p.color, opacity: 0.6, paddingLeft: 8 }}>
//                           +{p.tech.length - 3} more
//                         </span>
//                       )}
//                     </div>
//                   </div>

//                   {/* Right: Content */}
//                   <div style={{ padding: 'clamp(20px, 3vw, 32px)', display: 'flex', flexDirection: 'column', gap: 0, minWidth: 0 }}>
//                     <div style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: 3, marginBottom: 8, opacity: 0.5 }}>
//                       // PROJECT_{p.num}
//                     </div>

//                     <div style={{
//                       fontFamily: 'Orbitron, sans-serif',
//                       fontSize: 'clamp(14px, 2.5vw, 20px)',
//                       fontWeight: 700,
//                       color: 'var(--text)',
//                       marginBottom: 6,
//                       letterSpacing: 1,
//                       wordBreak: 'break-word',
//                     }}>{p.name}</div>

//                     <div style={{
//                       fontSize: 11, color: p.color,
//                       letterSpacing: 1, marginBottom: 16,
//                       fontStyle: 'italic', opacity: 0.8,
//                       wordBreak: 'break-word',
//                     }}>{p.tagline}</div>

//                     <p style={{
//                       fontFamily: 'Inter, sans-serif',
//                       fontSize: 'clamp(12px, 1.5vw, 13px)',
//                       color: 'var(--muted)', lineHeight: 1.7,
//                       marginBottom: 20,
//                       wordBreak: 'break-word',
//                     }}>{p.problem}</p>

//                     {/* Feature pills */}
//                     <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
//                       {p.features.slice(0, 3).map(f => (
//                         <span key={f} style={{
//                           fontSize: 9, letterSpacing: 0.5,
//                           color: 'var(--muted)',
//                           border: '1px solid var(--border)',
//                           padding: '3px 8px', borderRadius: 2,
//                           background: 'var(--surface2)',
//                           whiteSpace: 'nowrap',
//                         }}>◈ {f}</span>
//                       ))}
//                     </div>

//                     {/* CTA Buttons */}
//                     <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 'auto' }}>
//                       <a href={p.liveUrl} className="project-btn-live" style={{
//                         background: `${p.color}12`,
//                         color: p.color,
//                         border: `1px solid ${p.color}40`,
//                       }}
//                         onMouseEnter={e => { e.currentTarget.style.background = `${p.color}22`; e.currentTarget.style.boxShadow = `0 0 16px ${p.color}33` }}
//                         onMouseLeave={e => { e.currentTarget.style.background = `${p.color}12`; e.currentTarget.style.boxShadow = 'none' }}>
//                         ◈ LIVE DEMO
//                       </a>
//                       <Link to={`/projects/${p.id}`} className="project-btn-case">
//                         ⌥ CASE STUDY
//                       </Link>
//                       <a href={p.githubUrl} className="project-btn-ghost">
//                         ⌂ GITHUB
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>

//       <style>{`
//         .project-btn-live {
//           font-size:10px; letter-spacing:1.5px; padding:7px 14px; border-radius:3px;
//           cursor:pointer; transition:all 0.3s; text-decoration:none;
//           font-family:'JetBrains Mono',monospace; white-space:nowrap;
//         }
//         .project-btn-case {
//           font-size:10px; letter-spacing:1.5px; padding:7px 14px; border-radius:3px;
//           cursor:pointer; transition:all 0.3s; text-decoration:none;
//           font-family:'JetBrains Mono',monospace;
//           background:var(--purple-dim); color:var(--purple-light);
//           border:1px solid rgba(124,58,237,0.25); white-space:nowrap;
//         }
//         .project-btn-case:hover { box-shadow:var(--glow-purple); }
//         .project-btn-ghost {
//           font-size:10px; letter-spacing:1.5px; padding:7px 14px; border-radius:3px;
//           cursor:pointer; transition:all 0.3s; text-decoration:none;
//           font-family:'JetBrains Mono',monospace;
//           background:transparent; color:var(--muted); border:1px solid var(--border2);
//           white-space:nowrap;
//         }
//         .project-btn-ghost:hover { border-color:var(--border); color:var(--text2); }

//         @media (max-width: 600px) {
//           .project-card-grid {
//             grid-template-columns: 1fr !important;
//           }
//         }
//       `}</style>
//     </section>
//   )
// }









// import { useRef } from 'react'
// import { Link } from 'react-router-dom'
// import Reveal from './Reveal.jsx'
// import { projects } from '../data/projects.js'
// import { useScrollProgress, mapRange } from '../hooks/useScrollAnimation.js'

// export default function Projects() {
//   const sectionRef = useRef(null)
//   const progress = useScrollProgress(sectionRef)

//   return (
//     <section id="projects" ref={sectionRef} style={{ position: 'relative', zIndex: 1 }}>
//       <div className="section-container">
//         <Reveal className="section-header">
//           <span className="section-tag">PRODUCT LAB</span>
//           <h2 className="section-title">Projects</h2>
//           <div className="section-line" />
//         </Reveal>

//         {/* Timeline wrapper */}
//         <div style={{ position: 'relative' }}>

//           {/* Vertical timeline spine */}
//           <div style={{
//             position: 'absolute',
//             left: 'clamp(16px, 4vw, 32px)',
//             top: 0, bottom: 0,
//             width: 1,
//             background: 'linear-gradient(180deg, transparent, var(--border) 10%, var(--border) 90%, transparent)',
//             zIndex: 0,
//           }} />

//           <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(32px, 5vw, 52px)' }}>
//             {projects.map((p, i) => {
//               const cardProgress = mapRange(progress, i * 0.07, i * 0.07 + 0.2, 0, 1)
//               const cp = Math.max(0, Math.min(1, cardProgress))

//               return (
//                 <div
//                   key={p.id}
//                   style={{
//                     display: 'flex',
//                     gap: 'clamp(20px, 4vw, 40px)',
//                     alignItems: 'flex-start',
//                     opacity: cp,
//                     transform: `translateX(${(1 - cp) * -24}px)`,
//                     transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)',
//                     position: 'relative',
//                     zIndex: 1,
//                   }}
//                 >
//                   {/* Timeline node */}
//                   <div style={{
//                     flexShrink: 0,
//                     width: 'clamp(32px, 6vw, 64px)',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     paddingTop: 20,
//                     gap: 6,
//                   }}>
//                     {/* Outer ring */}
//                     <div style={{
//                       width: 'clamp(28px, 4vw, 40px)',
//                       height: 'clamp(28px, 4vw, 40px)',
//                       borderRadius: '50%',
//                       border: `1.5px solid ${p.color}`,
//                       background: `${p.color}12`,
//                       display: 'flex', alignItems: 'center', justifyContent: 'center',
//                       boxShadow: `0 0 16px ${p.color}30`,
//                       flexShrink: 0,
//                     }}>
//                       {/* Inner dot */}
//                       <div style={{
//                         width: 8, height: 8, borderRadius: '50%',
//                         background: p.color,
//                         boxShadow: `0 0 8px ${p.color}`,
//                       }} />
//                     </div>
//                     {/* Year tag */}
//                     <div style={{
//                       fontSize: 8, color: p.color, letterSpacing: 1,
//                       opacity: 0.7, whiteSpace: 'nowrap',
//                     }}>{p.year}</div>
//                   </div>

//                   {/* Card */}
//                   <div
//                     className="glass-card"
//                     style={{
//                       flex: 1,
//                       minWidth: 0,
//                       padding: 0,
//                       overflow: 'hidden',
//                       borderTop: `2px solid ${p.color}55`,
//                       position: 'relative',
//                     }}
//                   >
//                     {/* Top accent glow */}
//                     <div style={{
//                       position: 'absolute', top: 0, right: 0,
//                       width: 'clamp(100px, 20vw, 180px)',
//                       height: 'clamp(100px, 20vw, 180px)',
//                       background: `radial-gradient(circle, ${p.color}0E, transparent 70%)`,
//                       pointerEvents: 'none',
//                     }} />

//                     {/* Card inner: two columns on desktop, stack on mobile */}
//                     <div style={{
//                       display: 'grid',
//                       gridTemplateColumns: 'clamp(100px, 22%, 200px) 1fr',
//                       minHeight: 180,
//                     }}>

//                       {/* Left strip */}
//                       <div style={{
//                         borderRight: `1px solid ${p.color}20`,
//                         padding: 'clamp(16px, 2.5vw, 28px) clamp(12px, 2vw, 20px)',
//                         background: `linear-gradient(160deg, ${p.color}08, transparent)`,
//                         display: 'flex', flexDirection: 'column',
//                         justifyContent: 'space-between', gap: 12,
//                       }}>
//                         {/* Big faded number */}
//                         <div style={{
//                           fontFamily: 'Orbitron, sans-serif',
//                           fontSize: 'clamp(40px, 7vw, 72px)',
//                           fontWeight: 900,
//                           color: p.color, opacity: 0.1,
//                           lineHeight: 1, letterSpacing: -2,
//                           userSelect: 'none',
//                         }}>{p.num}</div>

//                         {/* Category + stack */}
//                         <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
//                           <span style={{
//                             fontSize: 8, color: p.color, letterSpacing: 2,
//                             border: `1px solid ${p.color}35`,
//                             padding: '2px 7px', borderRadius: 2,
//                             background: `${p.color}10`,
//                             display: 'inline-block', whiteSpace: 'nowrap',
//                             width: 'fit-content',
//                           }}>{p.category}</span>

//                           {p.tech.slice(0, 4).map(t => (
//                             <div key={t} style={{
//                               fontSize: 8, color: 'var(--muted)',
//                               borderLeft: `2px solid ${p.color}40`,
//                               paddingLeft: 7, letterSpacing: 0.5,
//                               overflow: 'hidden', textOverflow: 'ellipsis',
//                               whiteSpace: 'nowrap',
//                             }}>{t}</div>
//                           ))}
//                           {p.tech.length > 4 && (
//                             <div style={{ fontSize: 8, color: p.color, opacity: 0.5, paddingLeft: 7 }}>
//                               +{p.tech.length - 4} more
//                             </div>
//                           )}
//                         </div>
//                       </div>

//                       {/* Right content */}
//                       <div style={{
//                         padding: 'clamp(16px, 2.5vw, 28px)',
//                         display: 'flex', flexDirection: 'column', gap: 0, minWidth: 0,
//                       }}>
//                         {/* Project label */}
//                         <div style={{
//                           fontSize: 9, color: 'var(--muted)',
//                           letterSpacing: 3, marginBottom: 6,
//                           opacity: 0.45,
//                         }}>// PROJECT_{p.num}</div>

//                         {/* Name */}
//                         <div style={{
//                           fontFamily: 'Orbitron, sans-serif',
//                           fontSize: 'clamp(13px, 2.5vw, 19px)',
//                           fontWeight: 700, color: 'var(--text)',
//                           letterSpacing: 1, marginBottom: 4,
//                           wordBreak: 'break-word',
//                         }}>{p.name}</div>

//                         {/* Tagline */}
//                         <div style={{
//                           fontSize: 11, color: p.color,
//                           letterSpacing: 0.5, marginBottom: 14,
//                           opacity: 0.8, fontStyle: 'italic',
//                           wordBreak: 'break-word',
//                         }}>{p.tagline}</div>

//                         {/* Problem snippet */}
//                         <p style={{
//                           fontFamily: 'Inter, sans-serif',
//                           fontSize: 'clamp(11px, 1.5vw, 13px)',
//                           color: 'var(--muted)', lineHeight: 1.7,
//                           marginBottom: 16,
//                           wordBreak: 'break-word',
//                           /* Clamp to 3 lines */
//                           display: '-webkit-box',
//                           WebkitLineClamp: 3,
//                           WebkitBoxOrient: 'vertical',
//                           overflow: 'hidden',
//                         }}>{p.problem}</p>

//                         {/* Feature chips — horizontal scroll on mobile */}
//                         <div style={{
//                           display: 'flex', gap: 6, marginBottom: 20,
//                           flexWrap: 'wrap',
//                         }}>
//                           {p.features.slice(0, 3).map(f => (
//                             <span key={f} style={{
//                               fontSize: 8, color: 'var(--muted)',
//                               border: '1px solid var(--border)',
//                               padding: '3px 8px', borderRadius: 2,
//                               background: 'var(--surface2)',
//                               whiteSpace: 'nowrap',
//                               letterSpacing: 0.3,
//                             }}>◈ {f}</span>
//                           ))}
//                         </div>

//                         {/* Divider */}
//                         <div style={{
//                           height: 1, marginBottom: 16,
//                           background: `linear-gradient(90deg, ${p.color}25, transparent)`,
//                         }} />

//                         {/* CTAs */}
//                         <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 'auto' }}>
//                           <a
//                             href={p.liveUrl}
//                             style={{
//                               display: 'inline-flex', alignItems: 'center', gap: 6,
//                               fontSize: 9, letterSpacing: 1.5,
//                               padding: '6px 14px', borderRadius: 3,
//                               background: `${p.color}12`,
//                               border: `1px solid ${p.color}40`,
//                               color: p.color,
//                               textDecoration: 'none', transition: 'all 0.3s',
//                               fontFamily: 'JetBrains Mono, monospace',
//                               whiteSpace: 'nowrap',
//                             }}
//                             onMouseEnter={e => { e.currentTarget.style.background = `${p.color}22`; e.currentTarget.style.boxShadow = `0 0 14px ${p.color}30` }}
//                             onMouseLeave={e => { e.currentTarget.style.background = `${p.color}12`; e.currentTarget.style.boxShadow = 'none' }}
//                           >◈ LIVE</a>

//                           <Link
//                             to={`/projects/${p.id}`}
//                             style={{
//                               display: 'inline-flex', alignItems: 'center', gap: 6,
//                               fontSize: 9, letterSpacing: 1.5,
//                               padding: '6px 14px', borderRadius: 3,
//                               background: 'var(--purple-dim)',
//                               border: '1px solid rgba(124,58,237,0.3)',
//                               color: 'var(--purple-light)',
//                               textDecoration: 'none', transition: 'all 0.3s',
//                               fontFamily: 'JetBrains Mono, monospace',
//                               whiteSpace: 'nowrap',
//                             }}
//                             onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--glow-purple)'}
//                             onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
//                           >⌥ CASE STUDY</Link>

//                           <a
//                             href={p.githubUrl}
//                             style={{
//                               display: 'inline-flex', alignItems: 'center', gap: 6,
//                               fontSize: 9, letterSpacing: 1.5,
//                               padding: '6px 14px', borderRadius: 3,
//                               background: 'transparent',
//                               border: '1px solid var(--border2)',
//                               color: 'var(--muted)',
//                               textDecoration: 'none', transition: 'all 0.3s',
//                               fontFamily: 'JetBrains Mono, monospace',
//                               whiteSpace: 'nowrap',
//                             }}
//                             onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)' }}
//                             onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--muted)' }}
//                           >⌂ GITHUB</a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @media (max-width: 520px) {
//           /* On very small screens, collapse left strip into top bar */
//           .proj-inner-grid {
//             grid-template-columns: 1fr !important;
//           }
//           .proj-left-strip {
//             border-right: none !important;
//             border-bottom: 1px solid rgba(255,255,255,0.06);
//             flex-direction: row !important;
//             align-items: center;
//             flex-wrap: wrap;
//           }
//         }
//       `}</style>
//     </section>
//   )
// }








// import { useRef, useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import Reveal from './Reveal.jsx'
// import { projects } from '../data/projects.js'

// export default function Projects() {
//   const [activeIdx, setActiveIdx] = useState(0)
//   const sectionRef = useRef(null)

//   useEffect(() => {
//     const handleScroll = () => {
//       const section = sectionRef.current
//       if (!section) return
//       const rect = section.getBoundingClientRect()
//       const sectionH = section.offsetHeight
//       const viewH = window.innerHeight
//       const scrolled = Math.max(0, Math.min(0.999, -rect.top / (sectionH - viewH)))
//       const idx = Math.min(projects.length - 1, Math.floor(scrolled * projects.length))
//       setActiveIdx(idx)
//     }
//     window.addEventListener('scroll', handleScroll, { passive: true })
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const active = projects[activeIdx]

//   return (
//     <section
//       id="projects"
//       ref={sectionRef}
//       style={{ position: 'relative', zIndex: 1, height: `${projects.length * 120 + 50}vh` }}
//     >
//       <div style={{
//         position: 'sticky', top: 0, height: '100vh',
//         display: 'flex', flexDirection: 'column',
//         justifyContent: 'center', overflow: 'hidden',
//         padding: '0 clamp(16px,5vw,48px)',
//       }}>

//         {/* header */}
//         <div className="section-header" style={{ marginBottom: 28, position: 'relative', zIndex: 2 }}>
//           <span className="section-tag">PRODUCT LAB</span>
//           <h2 className="section-title">Projects</h2>
//           <div className="section-line" />
//         </div>

//         {/* grid */}
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: '420px 1fr',
//           gap: 'clamp(32px,5vw,64px)',
//           alignItems: 'center',
//           maxWidth: 1100, margin: '0 auto', width: '100%',
//         }}>

//           {/* ── LEFT: stacked cards ── */}
//           <div style={{ position: 'relative', height: 360 }}>
//             {[...projects].reverse().map((p, ri) => {
//               const i = projects.length - 1 - ri  // real index
//               const isActive = i === activeIdx
//               const stackPos = i - activeIdx       // negative=behind, 0=active, positive=above

//               // only show active + 1 behind + 1 above
//               if (Math.abs(stackPos) > 1) return null

//               const scale = isActive ? 1 : 0.91
//               const ty = stackPos > 0 ? -22 : stackPos < 0 ? 14 : 0
//               const tx = stackPos < 0 ? -10 : 0
//               const blur = isActive ? 0 : 2
//               const op = isActive ? 1 : stackPos < 0 ? 0.4 : 0.7
//               const zIdx = isActive ? 10 : stackPos < 0 ? 5 : 8

//               return (
//                 <div
//                   key={p.id}
//                   onClick={() => !isActive && setActiveIdx(i)}
//                   style={{
//                     position: 'absolute', inset: 0,
//                     borderRadius: 14,
//                     border: `1px solid ${isActive ? p.color + '70' : 'var(--border)'}`,
//                     background: isActive
//                       ? `linear-gradient(140deg, ${p.color}0F, var(--bg2) 60%)`
//                       : 'var(--surface)',
//                     boxShadow: isActive
//                       ? `0 20px 60px ${p.color}20, 0 0 0 1px ${p.color}15`
//                       : '0 4px 20px rgba(0,0,0,0.4)',
//                     transform: `scale(${scale}) translateY(${ty}px) translateX(${tx}px)`,
//                     filter: `blur(${blur}px)`,
//                     opacity: op,
//                     zIndex: zIdx,
//                     transition: 'all 0.55s cubic-bezier(0.34,1.1,0.64,1)',
//                     cursor: isActive ? 'default' : 'pointer',
//                     overflow: 'hidden',
//                     display: 'flex', flexDirection: 'column',
//                   }}
//                 >
//                   {/* top accent */}
//                   <div style={{
//                     height: 2, flexShrink: 0,
//                     background: `linear-gradient(90deg, ${p.color}${isActive ? 'EE' : '44'}, transparent)`,
//                     transition: 'background 0.4s',
//                   }} />

//                   {/* corner brackets */}
//                   {['tl','tr','bl','br'].map(pos => (
//                     <div key={pos} style={{
//                       position: 'absolute', width: 10, height: 10, zIndex: 3, pointerEvents: 'none',
//                       top: pos.includes('t') ? 8 : 'auto',
//                       bottom: pos.includes('b') ? 8 : 'auto',
//                       left: pos.includes('l') ? 8 : 'auto',
//                       right: pos.includes('r') ? 8 : 'auto',
//                       borderTop:    pos.includes('t') ? `1px solid ${p.color}` : 'none',
//                       borderBottom: pos.includes('b') ? `1px solid ${p.color}` : 'none',
//                       borderLeft:   pos.includes('l') ? `1px solid ${p.color}` : 'none',
//                       borderRight:  pos.includes('r') ? `1px solid ${p.color}` : 'none',
//                       opacity: isActive ? 0.8 : 0.15,
//                       transition: 'opacity 0.4s',
//                     }} />
//                   ))}

//                   {/* ambient glow */}
//                   <div style={{
//                     position: 'absolute', top: 0, right: 0,
//                     width: '60%', height: '55%', pointerEvents: 'none',
//                     background: `radial-gradient(ellipse at 85% 10%, ${p.color}${isActive ? '12' : '05'}, transparent 65%)`,
//                     transition: 'background 0.4s',
//                   }} />

//                   <div style={{ padding: '22px 24px', flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
//                     {/* label + number */}
//                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
//                       <div>
//                         <div style={{ fontSize: 8, color: p.color, letterSpacing: 2, marginBottom: 6, opacity: isActive ? 1 : 0.5 }}>
//                           PROJECT_{p.num} // {p.category.toUpperCase()}
//                         </div>
//                         <div style={{
//                           fontFamily: 'Orbitron, sans-serif',
//                           fontSize: isActive ? 20 : 16,
//                           fontWeight: 900, letterSpacing: 1,
//                           color: isActive ? 'var(--text)' : 'var(--text2)',
//                           transition: 'all 0.4s',
//                         }}>{p.name}</div>
//                       </div>
//                       <div style={{
//                         fontFamily: 'Orbitron, sans-serif', fontSize: 52,
//                         fontWeight: 900, color: p.color,
//                         opacity: isActive ? 0.15 : 0.05,
//                         lineHeight: 1, userSelect: 'none',
//                         transition: 'opacity 0.4s',
//                       }}>{p.num}</div>
//                     </div>

//                     {/* tagline */}
//                     <div style={{
//                       fontSize: 11, color: p.color, fontStyle: 'italic',
//                       opacity: isActive ? 0.9 : 0.35, marginBottom: 16,
//                       transition: 'opacity 0.4s', lineHeight: 1.5,
//                     }}>{p.tagline}</div>

//                     {/* tech */}
//                     <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 'auto' }}>
//                       {p.tech.slice(0, 4).map(t => (
//                         <span key={t} style={{
//                           fontSize: 8, padding: '2px 8px', borderRadius: 2,
//                           color: isActive ? p.color : 'var(--muted)',
//                           border: `1px solid ${isActive ? p.color + '40' : 'var(--border)'}`,
//                           background: isActive ? `${p.color}0A` : 'transparent',
//                           transition: 'all 0.4s', whiteSpace: 'nowrap',
//                         }}>{t}</span>
//                       ))}
//                       {p.tech.length > 4 && (
//                         <span style={{ fontSize: 8, color: 'var(--muted)', opacity: 0.4, alignSelf: 'center' }}>+{p.tech.length - 4}</span>
//                       )}
//                     </div>
//                   </div>

//                   {/* bottom bar */}
//                   <div style={{
//                     padding: '8px 24px',
//                     borderTop: `1px solid ${isActive ? p.color + '25' : 'var(--border)'}`,
//                     display: 'flex', justifyContent: 'space-between', alignItems: 'center',
//                     background: isActive ? `${p.color}06` : 'transparent',
//                     transition: 'all 0.4s', flexShrink: 0,
//                   }}>
//                     <span style={{ fontSize: 8, color: 'var(--muted)', letterSpacing: 1.5, opacity: 0.45 }}>
//                       {p.year} · {p.features.length} FEATURES
//                     </span>
//                     {/* progress dots */}
//                     <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
//                       {projects.map((_, di) => (
//                         <div key={di} style={{
//                           width: di === activeIdx ? 18 : 5, height: 4, borderRadius: 2,
//                           background: di === activeIdx ? active.color : 'var(--border)',
//                           transition: 'all 0.4s',
//                         }} />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>

//           {/* ── RIGHT: details ── */}
//           <div key={activeIdx} style={{
//             display: 'flex', flexDirection: 'column', gap: 0,
//             animation: 'detailsIn 0.5s cubic-bezier(0.16,1,0.3,1) forwards',
//           }}>
//             {/* accent */}
//             <div style={{
//               width: 36, height: 2, marginBottom: 18,
//               background: active.color,
//               boxShadow: `0 0 10px ${active.color}88`,
//             }} />

//             {/* name */}
//             <h3 style={{
//               fontFamily: 'Orbitron, sans-serif',
//               fontSize: 'clamp(22px,3.5vw,38px)',
//               fontWeight: 900, letterSpacing: 2,
//               background: `linear-gradient(135deg, var(--text) 30%, ${active.color})`,
//               WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text', marginBottom: 8, lineHeight: 1.1,
//             }}>{active.name}</h3>

//             <div style={{ fontSize: 12, color: active.color, fontStyle: 'italic', letterSpacing: 0.5, marginBottom: 18, opacity: 0.85 }}>
//               {active.tagline}
//             </div>

//             {/* problem */}
//             <div style={{ marginBottom: 4 }}>
//               <div style={{ fontSize: 8, color: 'var(--muted)', letterSpacing: 3, marginBottom: 6, opacity: 0.5 }}>THE PROBLEM</div>
//               <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'var(--muted)', lineHeight: 1.75 }}>{active.problem}</p>
//             </div>

//             <div style={{ height: 1, margin: '14px 0', background: `linear-gradient(90deg, ${active.color}30, transparent)` }} />

//             {/* features */}
//             <div style={{ marginBottom: 18 }}>
//               <div style={{ fontSize: 8, color: 'var(--muted)', letterSpacing: 3, marginBottom: 10, opacity: 0.5 }}>KEY FEATURES</div>
//               <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
//                 {active.features.slice(0, 4).map((f, fi) => (
//                   <div key={f} style={{
//                     display: 'flex', alignItems: 'flex-start', gap: 8,
//                     animation: `featureIn 0.4s cubic-bezier(0.16,1,0.3,1) ${fi * 55}ms both`,
//                   }}>
//                     <span style={{ color: active.color, fontSize: 10, flexShrink: 0, marginTop: 3 }}>◈</span>
//                     <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'var(--muted)', lineHeight: 1.6 }}>{f}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* tech */}
//             <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 22 }}>
//               {active.tech.map((t, ti) => (
//                 <span key={t} style={{
//                   fontSize: 9, padding: '3px 9px', borderRadius: 2,
//                   color: active.color, border: `1px solid ${active.color}40`,
//                   background: `${active.color}0A`,
//                   animation: `techIn 0.35s ease ${ti * 35}ms both`,
//                   whiteSpace: 'nowrap',
//                   fontFamily: 'JetBrains Mono, monospace',
//                 }}>{t}</span>
//               ))}
//             </div>

//             {/* CTAs */}
//             <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
//               <a href={active.liveUrl} style={{
//                 fontSize: 10, letterSpacing: 1.5, padding: '8px 20px', borderRadius: 3,
//                 background: `${active.color}15`, border: `1px solid ${active.color}55`,
//                 color: active.color, textDecoration: 'none',
//                 fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'nowrap', transition: 'all 0.25s',
//               }}
//                 onMouseEnter={e => { e.currentTarget.style.background = `${active.color}28`; e.currentTarget.style.boxShadow = `0 0 16px ${active.color}33` }}
//                 onMouseLeave={e => { e.currentTarget.style.background = `${active.color}15`; e.currentTarget.style.boxShadow = 'none' }}
//               >◈ LIVE DEMO</a>

//               <Link to={`/projects/${active.id}`} style={{
//                 fontSize: 10, letterSpacing: 1.5, padding: '8px 20px', borderRadius: 3,
//                 background: 'var(--purple-dim)', border: '1px solid rgba(124,58,237,0.35)',
//                 color: 'var(--purple-light)', textDecoration: 'none',
//                 fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'nowrap', transition: 'all 0.25s',
//               }}
//                 onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--glow-purple)'}
//                 onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
//               >⌥ CASE STUDY</Link>

//               <a href={active.githubUrl} style={{
//                 fontSize: 10, letterSpacing: 1.5, padding: '8px 20px', borderRadius: 3,
//                 background: 'transparent', border: '1px solid var(--border2)',
//                 color: 'var(--muted)', textDecoration: 'none',
//                 fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'nowrap', transition: 'all 0.25s',
//               }}
//                 onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)' }}
//                 onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--muted)' }}
//               >⌂ GITHUB</a>
//             </div>
//           </div>
//         </div>

//         {/* scroll hint */}
//         <div style={{
//           position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)',
//           display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5,
//           opacity: activeIdx === projects.length - 1 ? 0 : 0.35,
//           transition: 'opacity 0.5s', pointerEvents: 'none',
//         }}>
//           <span style={{ fontSize: 8, color: 'var(--muted)', letterSpacing: 3 }}>SCROLL</span>
//           <div style={{ width: 1, height: 22, background: `linear-gradient(180deg, ${active.color}, transparent)`, animation: 'scrollBounce 2s ease-in-out infinite' }} />
//         </div>
//       </div>

//       <style>{`
//         @keyframes detailsIn {
//           from { opacity:0; transform:translateX(18px); }
//           to   { opacity:1; transform:translateX(0); }
//         }
//         @keyframes featureIn {
//           from { opacity:0; transform:translateX(-10px); }
//           to   { opacity:1; transform:translateX(0); }
//         }
//         @keyframes techIn {
//           from { opacity:0; transform:translateY(5px); }
//           to   { opacity:1; transform:translateY(0); }
//         }
//         @keyframes scrollBounce {
//           0%,100%{transform:translateY(0)} 50%{transform:translateY(5px)}
//         }
//         @media (max-width:768px){
//           #projects>div { position:relative !important; height:auto !important; padding:40px 16px !important; }
//           #projects>div>div:nth-child(2) { grid-template-columns:1fr !important; }
//           #projects>div>div:nth-child(2)>div:first-child { height:280px !important; }
//         }
//       `}</style>
//     </section>
//   )
// }










import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      const sectionH = section.offsetHeight
      const viewH = window.innerHeight
      const scrolled = Math.max(0, Math.min(0.999, -rect.top / (sectionH - viewH)))
      const idx = Math.min(projects.length - 1, Math.floor(scrolled * projects.length))
      setActiveIdx(idx)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const active = projects[activeIdx]

  /* ── MOBILE: simple stacked list, no sticky ── */
  if (isMobile) {
    return (
      <section id="projects" ref={sectionRef} style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-container">
          <Reveal className="section-header">
            <span className="section-tag">PRODUCT LAB</span>
            <h2 className="section-title">Projects</h2>
            <div className="section-line" />
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {projects.map((p, i) => (
              <MobileCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </section>
    )
  }

  /* ── DESKTOP: sticky scroll-driven ── */
  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{ position: 'relative', zIndex: 1, height: `${projects.length * 120 + 50}vh` }}
    >
      <div style={{
        position: 'sticky', top: 0, height: '100vh',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', overflow: 'hidden',
        padding: '0 clamp(24px, 5vw, 56px)',
      }}>
        {/* header */}
        <div className="section-header" style={{ marginBottom: 28, position: 'relative', zIndex: 2 }}>
          <span className="section-tag">PRODUCT LAB</span>
          <h2 className="section-title">Projects</h2>
          <div className="section-line" />
        </div>

        {/* grid — fluid, not hardcoded */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 420px) 1fr',
          gap: 'clamp(32px, 5vw, 64px)',
          alignItems: 'center',
          maxWidth: 1100, margin: '0 auto', width: '100%',
        }}>

          {/* ── LEFT: stacked cards ── */}
          <div style={{ position: 'relative', height: 'clamp(300px, 40vh, 380px)' }}>
            {[...projects].reverse().map((p, ri) => {
              const i = projects.length - 1 - ri
              const isActive = i === activeIdx
              const stackPos = i - activeIdx
              if (Math.abs(stackPos) > 1) return null

              const scale = isActive ? 1 : 0.91
              const ty = stackPos > 0 ? -22 : stackPos < 0 ? 14 : 0
              const tx = stackPos < 0 ? -10 : 0
              const op = isActive ? 1 : stackPos < 0 ? 0.38 : 0.68
              const zIdx = isActive ? 10 : stackPos < 0 ? 5 : 8

              return (
                <div
                  key={p.id}
                  onClick={() => !isActive && setActiveIdx(i)}
                  style={{
                    position: 'absolute', inset: 0,
                    borderRadius: 14,
                    border: `1px solid ${isActive ? p.color + '70' : 'var(--border)'}`,
                    background: isActive
                      ? `linear-gradient(140deg, ${p.color}0F, var(--bg2) 60%)`
                      : 'var(--surface)',
                    boxShadow: isActive
                      ? `0 20px 60px ${p.color}20, 0 0 0 1px ${p.color}15`
                      : '0 4px 20px rgba(0,0,0,0.4)',
                    transform: `scale(${scale}) translateY(${ty}px) translateX(${tx}px)`,
                    filter: isActive ? 'none' : 'blur(1.5px)',
                    opacity: op,
                    zIndex: zIdx,
                    transition: 'all 0.55s cubic-bezier(0.34,1.1,0.64,1)',
                    cursor: isActive ? 'default' : 'pointer',
                    overflow: 'hidden',
                    display: 'flex', flexDirection: 'column',
                  }}
                >
                  <div style={{ height: 2, flexShrink: 0, background: `linear-gradient(90deg, ${p.color}${isActive ? 'EE' : '44'}, transparent)`, transition: 'background 0.4s' }} />

                  {/* corner brackets */}
                  {['tl','tr','bl','br'].map(pos => (
                    <div key={pos} style={{
                      position: 'absolute', width: 10, height: 10, zIndex: 3, pointerEvents: 'none',
                      top: pos.includes('t') ? 8 : 'auto', bottom: pos.includes('b') ? 8 : 'auto',
                      left: pos.includes('l') ? 8 : 'auto', right: pos.includes('r') ? 8 : 'auto',
                      borderTop:    pos.includes('t') ? `1px solid ${p.color}` : 'none',
                      borderBottom: pos.includes('b') ? `1px solid ${p.color}` : 'none',
                      borderLeft:   pos.includes('l') ? `1px solid ${p.color}` : 'none',
                      borderRight:  pos.includes('r') ? `1px solid ${p.color}` : 'none',
                      opacity: isActive ? 0.8 : 0.12, transition: 'opacity 0.4s',
                    }} />
                  ))}

                  <div style={{
                    position: 'absolute', top: 0, right: 0, width: '60%', height: '55%', pointerEvents: 'none',
                    background: `radial-gradient(ellipse at 85% 10%, ${p.color}${isActive ? '12' : '05'}, transparent 65%)`,
                  }} />

                  <div style={{ padding: '20px 22px', flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: 8, color: p.color, letterSpacing: 2, marginBottom: 5, opacity: isActive ? 1 : 0.5 }}>
                          PROJECT_{p.num} // {p.category.toUpperCase()}
                        </div>
                        <div style={{
                          fontFamily: 'Orbitron, sans-serif',
                          fontSize: isActive ? 'clamp(18px,2vw,24px)' : 'clamp(13px,1.5vw,16px)',
                          fontWeight: 900, letterSpacing: 1,
                          color: isActive ? 'var(--text)' : 'var(--text2)',
                          transition: 'all 0.4s', wordBreak: 'break-word',
                        }}>{p.name}</div>
                      </div>
                      <div style={{
                        fontFamily: 'Orbitron, sans-serif',
                        fontSize: 'clamp(36px,4vw,52px)',
                        fontWeight: 900, color: p.color,
                        opacity: isActive ? 0.15 : 0.05,
                        lineHeight: 1, userSelect: 'none', flexShrink: 0,
                        transition: 'opacity 0.4s',
                      }}>{p.num}</div>
                    </div>

                    <div style={{
                      fontSize: 13, color: p.color, fontStyle: 'italic',
                      opacity: isActive ? 0.9 : 0.3, marginBottom: 14,
                      transition: 'opacity 0.4s', lineHeight: 1.5,
                      display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                    }}>{p.tagline}</div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 'auto' }}>
                      {p.tech.slice(0, 4).map(t => (
                        <span key={t} style={{
                          fontSize: 10, padding: '2px 7px', borderRadius: 2,
                          color: isActive ? p.color : 'var(--muted)',
                          border: `1px solid ${isActive ? p.color + '40' : 'var(--border)'}`,
                          background: isActive ? `${p.color}0A` : 'transparent',
                          transition: 'all 0.4s', whiteSpace: 'nowrap',
                        }}>{t}</span>
                      ))}
                      {p.tech.length > 4 && <span style={{ fontSize: 8, color: 'var(--muted)', opacity: 0.4, alignSelf: 'center' }}>+{p.tech.length - 4}</span>}
                    </div>
                  </div>

                  <div style={{
                    padding: '7px 22px',
                    borderTop: `1px solid ${isActive ? p.color + '25' : 'var(--border)'}`,
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    background: isActive ? `${p.color}06` : 'transparent',
                    transition: 'all 0.4s', flexShrink: 0,
                  }}>
                    <span style={{ fontSize: 8, color: 'var(--muted)', letterSpacing: 1.5, opacity: 0.4 }}>{p.year} · {p.features.length} FEATURES</span>
                    <div style={{ display: 'flex', gap: 4 }}>
                      {projects.map((_, di) => (
                        <div key={di} style={{ width: di === activeIdx ? 18 : 5, height: 4, borderRadius: 2, background: di === activeIdx ? active.color : 'var(--border)', transition: 'all 0.4s' }} />
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* ── RIGHT: details ── */}
          <div key={activeIdx} style={{ display: 'flex', flexDirection: 'column', animation: 'detailsIn 0.5s cubic-bezier(0.16,1,0.3,1) forwards', minWidth: 0 }}>
            <div style={{ width: 36, height: 2, marginBottom: 18, background: active.color, boxShadow: `0 0 10px ${active.color}88` }} />
            <h3 style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: 'clamp(20px,3vw,36px)',
              fontWeight: 900, letterSpacing: 2,
              background: `linear-gradient(135deg, var(--text) 30%, ${active.color})`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text', marginBottom: 8, lineHeight: 1.1, wordBreak: 'break-word',
            }}>{active.name}</h3>
            <div style={{ fontSize: 16, color: active.color, fontStyle: 'italic', letterSpacing: 0.5, marginBottom: 16, opacity: 0.85 }}>{active.tagline}</div>
            {/* <div style={{ marginBottom: 4 }}>
              <div style={{ fontSize: 12, color: 'var(--muted)', letterSpacing: 3, marginBottom: 6, opacity: 0.5 }}>THE PROBLEM</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'var(--muted)', lineHeight: 1.75 }}>{active.problem}</p>
            </div> */}
            <div style={{ height: 1, margin: '14px 0', background: `linear-gradient(90deg, ${active.color}30, transparent)` }} />
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 12, color: 'var(--muted)', letterSpacing: 3, marginBottom: 10, opacity: 0.5 }}>KEY FEATURES</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {active.features.slice(0, 4).map((f, fi) => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, animation: `featureIn 0.4s cubic-bezier(0.16,1,0.3,1) ${fi * 55}ms both` }}>
                    <span style={{ color: active.color, fontSize: 14, flexShrink: 0, marginTop: 3 }}>◈</span>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
              {active.tech.map((t, ti) => (
                <span key={t} style={{
                  fontSize: 12, padding: '3px 9px', borderRadius: 2,
                  color: active.color, border: `1px solid ${active.color}40`,
                  background: `${active.color}0A`,
                  animation: `techIn 0.35s ease ${ti * 35}ms both`,
                  whiteSpace: 'nowrap', fontFamily: 'JetBrains Mono, monospace',
                }}>{t}</span>
              ))}
            </div>
            {/* <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href={active.liveUrl} style={{ fontSize: 10, letterSpacing: 1.5, padding: '8px 20px', borderRadius: 3, background: `${active.color}15`, border: `1px solid ${active.color}55`, color: active.color, textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'nowrap', transition: 'all 0.25s' }}
                onMouseEnter={e => { e.currentTarget.style.background = `${active.color}28`; e.currentTarget.style.boxShadow = `0 0 16px ${active.color}33` }}
                onMouseLeave={e => { e.currentTarget.style.background = `${active.color}15`; e.currentTarget.style.boxShadow = 'none' }}>◈ LIVE DEMO</a>
              <Link to={`/projects/${active.id}`} style={{ fontSize: 10, letterSpacing: 1.5, padding: '8px 20px', borderRadius: 3, background: 'var(--purple-dim)', border: '1px solid rgba(124,58,237,0.35)', color: 'var(--purple-light)', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'nowrap', transition: 'all 0.25s' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--glow-purple)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>⌥ CASE STUDY</Link>
              <a href={active.githubUrl} style={{ fontSize: 10, letterSpacing: 1.5, padding: '8px 20px', borderRadius: 3, background: 'transparent', border: '1px solid var(--border2)', color: 'var(--muted)', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'nowrap', transition: 'all 0.25s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--muted)' }}>⌂ GITHUB</a>
            </div> */}
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
  <a
    href={active.liveUrl}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      fontSize: 12, letterSpacing: 1.5, padding: '8px 20px', borderRadius: 3,
      background: `${active.color}15`, border: `1px solid ${active.color}55`,
      color: active.color, textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace',
      whiteSpace: 'nowrap', transition: 'all 0.25s'
    }}
    onMouseEnter={e => {
      e.currentTarget.style.background = `${active.color}28`;
      e.currentTarget.style.boxShadow = `0 0 16px ${active.color}33`
    }}
    onMouseLeave={e => {
      e.currentTarget.style.background = `${active.color}15`;
      e.currentTarget.style.boxShadow = 'none'
    }}
  >
    ◈ LIVE DEMO
  </a>

  <Link
    to={`/projects/${active.id}`}
    style={{
      fontSize: 12, letterSpacing: 1.5, padding: '8px 20px', borderRadius: 3,
      background: 'var(--purple-dim)', border: '1px solid rgba(124,58,237,0.35)',
      color: 'var(--purple-light)', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace',
      whiteSpace: 'nowrap', transition: 'all 0.25s'
    }}
    onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--glow-purple)'}
    onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
  >
    ⌥ CASE STUDY
  </Link>

  <a
    href={active.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => !active.githubUrl && e.preventDefault()}
    style={{
      fontSize: 12, letterSpacing: 1.5, padding: '8px 20px', borderRadius: 3,
      background: 'transparent', border: '1px solid var(--border2)',
      color: 'var(--muted)', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace',
      whiteSpace: 'nowrap', transition: 'all 0.25s'
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = 'var(--border)';
      e.currentTarget.style.color = 'var(--text2)'
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'var(--border2)';
      e.currentTarget.style.color = 'var(--muted)'
    }}
  >
    ⌂ GITHUB
  </a>
</div>
          </div>
        </div>

        {/* scroll hint */}
        <div style={{
          position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5,
          opacity: activeIdx === projects.length - 1 ? 0 : 0.35, transition: 'opacity 0.5s', pointerEvents: 'none',
        }}>
          <span style={{ fontSize: 8, color: 'var(--muted)', letterSpacing: 3 }}>SCROLL</span>
          <div style={{ width: 1, height: 22, background: `linear-gradient(180deg, ${active.color}, transparent)`, animation: 'scrollPulse 2s ease-in-out infinite' }} />
        </div>
      </div>

      <style>{`
        @keyframes detailsIn { from{opacity:0;transform:translateX(18px)} to{opacity:1;transform:translateX(0)} }
        @keyframes featureIn { from{opacity:0;transform:translateX(-10px)} to{opacity:1;transform:translateX(0)} }
        @keyframes techIn    { from{opacity:0;transform:translateY(5px)} to{opacity:1;transform:translateY(0)} }
        @keyframes scrollPulse { 0%,100%{opacity:0.5;transform:scaleY(1)} 50%{opacity:1;transform:scaleY(1.15)} }
      `}</style>
    </section>
  )
}

/* ── MOBILE CARD ── */
function MobileCard({ p }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{
      border: `1px solid ${open ? p.color + '60' : 'var(--border)'}`,
      borderRadius: 12, overflow: 'hidden',
      background: open ? `linear-gradient(140deg,${p.color}0D,var(--bg2) 60%)` : 'var(--surface)',
      boxShadow: open ? `0 8px 32px ${p.color}18` : 'none',
      transition: 'all 0.4s',
    }}>
      <div style={{ height: 2, background: `linear-gradient(90deg,${p.color}${open?'CC':'44'},transparent)`, transition: 'background 0.4s' }} />
      <div style={{ padding: '18px 18px 0', cursor: 'pointer' }} onClick={() => setOpen(v => !v)}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontSize: 8, color: p.color, letterSpacing: 2, marginBottom: 4 }}>PROJECT_{p.num} // {p.category.toUpperCase()}</div>
            <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 16, fontWeight: 900, color: 'var(--text)', letterSpacing: 1 }}>{p.name}</div>
          </div>
          <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 36, fontWeight: 900, color: p.color, opacity: 0.12, lineHeight: 1, userSelect: 'none' }}>{p.num}</div>
        </div>
        <div style={{ fontSize: 11, color: p.color, fontStyle: 'italic', opacity: 0.8, marginTop: 6, marginBottom: 14, lineHeight: 1.5 }}>{p.tagline}</div>
      </div>
      {/* expandable */}
      <div style={{ overflow: 'hidden', maxHeight: open ? '500px' : '0', transition: 'max-height 0.45s cubic-bezier(0.16,1,0.3,1)', padding: open ? '0 18px 18px' : '0 18px 0' }}>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 14 }}>{p.problem}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 16 }}>
          {p.tech.map(t => <span key={t} style={{ fontSize: 8, padding: '2px 7px', borderRadius: 2, color: p.color, border: `1px solid ${p.color}40`, background: `${p.color}0A`, whiteSpace: 'nowrap', fontFamily: 'JetBrains Mono, monospace' }}>{t}</span>)}
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <a href={p.liveUrl} style={{ fontSize: 9, padding: '6px 14px', borderRadius: 3, background: `${p.color}15`, border: `1px solid ${p.color}50`, color: p.color, textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace', letterSpacing: 1.5 }}>◈ LIVE</a>
          <Link to={`/projects/${p.id}`} style={{ fontSize: 9, padding: '6px 14px', borderRadius: 3, background: 'var(--purple-dim)', border: '1px solid rgba(124,58,237,0.3)', color: 'var(--purple-light)', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace', letterSpacing: 1.5 }}>⌥ CASE STUDY</Link>
          <a href={p.githubUrl} style={{ fontSize: 9, padding: '6px 14px', borderRadius: 3, background: 'transparent', border: '1px solid var(--border2)', color: 'var(--muted)', textDecoration: 'none', fontFamily: 'JetBrains Mono, monospace', letterSpacing: 1.5 }}>⌂ GITHUB</a>
        </div>
      </div>
      <div style={{ padding: '7px 18px', borderTop: `1px solid ${p.color}18`, display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }} onClick={() => setOpen(v => !v)}>
        <span style={{ fontSize: 8, color: 'var(--muted)', letterSpacing: 1.5, opacity: 0.4 }}>{p.year} · {p.features.length} FEATURES</span>
        <span style={{ fontSize: 8, color: p.color, letterSpacing: 1, opacity: 0.7 }}>{open ? '▲ COLLAPSE' : '▼ EXPAND'}</span>
      </div>
    </div>
  )
}