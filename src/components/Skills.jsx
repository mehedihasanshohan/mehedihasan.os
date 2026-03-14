// import { useEffect, useRef } from 'react'
// import Reveal from './Reveal.jsx'
// import { useTheme } from '../hooks/useTheme.jsx'

// const skills = [
//   { id: 0, label: 'JavaScript', x: 0.5, y: 0.48, color: '#F7DF1E', size: 26, desc: 'Core language · ES2024' },
//   { id: 1, label: 'React', x: 0.3, y: 0.28, color: '#00F5FF', size: 23, desc: 'v18 · Concurrent Mode' },
//   { id: 2, label: 'TypeScript', x: 0.7, y: 0.28, color: '#3178C6', size: 21, desc: 'Type-safe JS · Strict mode' },
//   { id: 3, label: 'Next.js', x: 0.14, y: 0.48, color: '#CCCCCC', size: 19, desc: 'App Router · RSC' },
//   { id: 4, label: 'useState', x: 0.22, y: 0.14, color: '#00F5FF', size: 13, desc: 'Local state · Re-renders' },
//   { id: 5, label: 'useEffect', x: 0.38, y: 0.09, color: '#00F5FF', size: 13, desc: 'Side effects · Cleanup' },
//   { id: 6, label: 'Context API', x: 0.14, y: 0.25, color: '#A78BFA', size: 15, desc: 'Global state · Provider' },
//   { id: 7, label: 'Custom Hooks', x: 0.38, y: 0.22, color: '#A78BFA', size: 15, desc: 'Reusable logic · DRY' },
//   { id: 8, label: 'Tailwind CSS', x: 0.65, y: 0.5, color: '#06B6D4', size: 19, desc: 'Utility-first · JIT' },
//   { id: 9, label: 'Redux', x: 0.5, y: 0.72, color: '#764ABC', size: 17, desc: 'Flux · RTK · Thunks' },
//   { id: 10, label: 'Node.js', x: 0.82, y: 0.5, color: '#22C55E', size: 17, desc: 'Backend · Express' },
//   { id: 11, label: 'GraphQL', x: 0.76, y: 0.7, color: '#E535AB', size: 15, desc: 'Query language · Apollo' },
//   { id: 12, label: 'Git', x: 0.86, y: 0.24, color: '#F97316', size: 15, desc: 'Version control' },
//   { id: 13, label: 'Vite', x: 0.61, y: 0.14, color: '#A855F7', size: 14, desc: 'Build tool · HMR' },
//   { id: 14, label: 'Framer Motion', x: 0.2, y: 0.72, color: '#FF0066', size: 14, desc: 'Animation · Gestures' },
//   { id: 15, label: 'Testing', x: 0.5, y: 0.88, color: '#22C55E', size: 15, desc: 'Jest · RTL · Vitest' },
// ]
// const edges = [
//   [0,1],[0,2],[0,9],[0,8],[0,10],
//   [1,3],[1,4],[1,5],[1,6],[1,7],[1,9],[1,14],
//   [2,1],[2,13],[2,12],
//   [3,6],[10,11],[0,13],[0,15],[9,15],
// ]

// export default function Skills() {
//   const containerRef = useRef(null)
//   const canvasRef = useRef(null)
//   const tooltipRef = useRef(null)
//   const hoveredRef = useRef(null)
//   const animRef = useRef(null)
//   const { dark } = useTheme()

//   useEffect(() => {
//     const container = containerRef.current
//     const canvas = canvasRef.current
//     const ctx = canvas.getContext('2d')
//     let t = 0

//     const resize = () => {
//       canvas.width = container.clientWidth
//       canvas.height = container.clientHeight
//     }
//     resize()
//     window.addEventListener('resize', resize)

//     const getPos = (s) => ({
//       x: s.x * canvas.width,
//       y: s.y * canvas.height,
//     })

//     const draw = () => {
//       t += 0.012
//       ctx.clearRect(0, 0, canvas.width, canvas.height)
//       const hovered = hoveredRef.current

//       // edges
//       edges.forEach(([ai, bi]) => {
//         const a = getPos(skills[ai])
//         const b = getPos(skills[bi])
//         const isHigh = hovered !== null && (hovered === ai || hovered === bi)
//         const op = hovered === null ? 0.18 : (isHigh ? 0.85 : 0.04)
//         const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y)
//         grad.addColorStop(0, `rgba(0,245,255,${op})`)
//         grad.addColorStop(1, `rgba(124,58,237,${op})`)
//         ctx.beginPath()
//         ctx.moveTo(a.x, a.y)
//         ctx.lineTo(b.x, b.y)
//         ctx.strokeStyle = grad
//         ctx.lineWidth = isHigh ? 1.5 : 0.7
//         ctx.stroke()
//       })

//       // nodes
//       skills.forEach((s, i) => {
//         const pos = getPos(s)
//         const pulse = Math.sin(t * 2 + i * 0.6) * 2.5
//         const isActive = hovered === null || hovered === i ||
//           edges.some(([a,b]) => (a === hovered && b === i) || (b === hovered && a === i))
//         const alpha = isActive ? 1 : 0.2
//         const r = s.size + pulse * 0.4 + (hovered === i ? 5 : 0)

//         if (hovered === i) {
//           const grd = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, r + 18)
//           grd.addColorStop(0, s.color + '40')
//           grd.addColorStop(1, 'transparent')
//           ctx.beginPath()
//           ctx.arc(pos.x, pos.y, r + 18, 0, Math.PI * 2)
//           ctx.fillStyle = grd
//           ctx.fill()
//         }

//         ctx.beginPath()
//         ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2)
//         const hexAlpha = Math.round(alpha * 28).toString(16).padStart(2,'0')
//         ctx.fillStyle = s.color + hexAlpha
//         ctx.fill()
//         const borderAlpha = Math.round(alpha * 210).toString(16).padStart(2,'0')
//         ctx.strokeStyle = s.color + borderAlpha
//         ctx.lineWidth = hovered === i ? 2 : 1
//         ctx.stroke()

//         ctx.fillStyle = `rgba(${dark ? '255,255,255' : '10,15,30'},${alpha * 0.9})`
//         ctx.font = `${Math.max(9, s.size * 0.52)}px JetBrains Mono`
//         ctx.textAlign = 'center'
//         ctx.textBaseline = 'middle'
//         ctx.fillText(s.label, pos.x, pos.y + r + 14)
//       })

//       animRef.current = requestAnimationFrame(draw)
//     }
//     draw()

//     const onMove = (e) => {
//       const rect = canvas.getBoundingClientRect()
//       const mx = e.clientX - rect.left
//       const my = e.clientY - rect.top
//       let found = null
//       skills.forEach((s, i) => {
//         const p = getPos(s)
//         if (Math.hypot(mx - p.x, my - p.y) < s.size + 10) found = i
//       })
//       hoveredRef.current = found
//       const tip = tooltipRef.current
//       if (found !== null) {
//         const s = skills[found]
//         tip.textContent = `${s.label} — ${s.desc}`
//         tip.style.left = (e.clientX - rect.left + 14) + 'px'
//         tip.style.top = (e.clientY - rect.top - 34) + 'px'
//         tip.style.opacity = '1'
//       } else {
//         tip.style.opacity = '0'
//       }
//     }
//     const onLeave = () => { hoveredRef.current = null; tooltipRef.current.style.opacity = '0' }
//     canvas.addEventListener('mousemove', onMove)
//     canvas.addEventListener('mouseleave', onLeave)

//     return () => {
//       cancelAnimationFrame(animRef.current)
//       window.removeEventListener('resize', resize)
//       canvas.removeEventListener('mousemove', onMove)
//       canvas.removeEventListener('mouseleave', onLeave)
//     }
//   }, [dark])

//   return (
//     <section id="skills" style={{ position:'relative', zIndex:1 }}>
//       <div className="section-container">
//         <Reveal className="section-header">
//           <span className="section-tag">DEPENDENCY GRAPH</span>
//           <h2 className="section-title">Skills</h2>
//           <div className="section-line" />
//         </Reveal>
//         <Reveal>
//           <div ref={containerRef} style={{
//             width:'100%', height:480,
//             border:'1px solid var(--border)',
//             borderRadius:14,
//             background:'var(--surface)',
//             backdropFilter:'blur(12px)',
//             position:'relative',
//             overflow:'hidden',
//           }}>
//             <canvas ref={canvasRef} style={{ display:'block', width:'100%', height:'100%' }} />
//             <div ref={tooltipRef} style={{
//               position:'absolute',
//               background:'var(--bg)',
//               border:'1px solid var(--cyan)',
//               borderRadius:6,
//               padding:'8px 14px',
//               fontSize:11,
//               color:'var(--cyan)',
//               pointerEvents:'none',
//               opacity:0,
//               transition:'opacity 0.2s',
//               whiteSpace:'nowrap',
//               boxShadow:'var(--glow-cyan)',
//               zIndex:10,
//             }} />
//           </div>
//           <p style={{ fontSize:10, color:'var(--muted)', letterSpacing:1, marginTop:12, textAlign:'center' }}>
//             HOVER NODES TO EXPLORE CONNECTIONS · CLICK FOR DETAILS
//           </p>
//         </Reveal>
//       </div>
//     </section>
//   )
// }









// import { useEffect, useRef } from 'react'
// import Reveal from './Reveal.jsx'
// import { useTheme } from '../hooks/useTheme.jsx'

// const skills = [
//   { id: 0, label: 'JavaScript', x: 0.5, y: 0.48, color: '#F7DF1E', size: 26, desc: 'ES2024 · Execution Context · Hoisting' },
//   { id: 1, label: 'React', x: 0.3, y: 0.32, color: '#00F5FF', size: 24, desc: 'Fiber Architecture · Reconciliation' },
//   { id: 2, label: 'TypeScript', x: 0.7, y: 0.32, color: '#3178C6', size: 21, desc: 'Type-safe JS · Generics · Utility Types' },
//   { id: 3, label: 'Next.js', x: 0.14, y: 0.48, color: '#E2E8F0', size: 19, desc: 'App Router · Server Components · ISR' },

//   // React Deep Tech
//   { id: 4, label: 'Fiber Tree', x: 0.22, y: 0.16, color: '#00F5FF', size: 14, desc: 'Work-in-progress tree · Linked list traversal' },
//   { id: 5, label: 'Scheduler', x: 0.38, y: 0.12, color: '#00F5FF', size: 14, desc: 'Task prioritization · MessageChannel API' },
//   { id: 6, label: 'Diffing Algo', x: 0.14, y: 0.28, color: '#A78BFA', size: 15, desc: 'Heuristic algorithm · Key-based matching' },
//   { id: 7, label: 'Custom Hooks', x: 0.38, y: 0.25, color: '#A78BFA', size: 15, desc: 'Encapsulated logic · useDebugValue' },

//   // Performance & Core
//   { id: 8, label: 'Tailwind CSS', x: 0.65, y: 0.5, color: '#06B6D4', size: 19, desc: 'Utility-first · Design Systems' },
//   { id: 9, label: 'Memoization', x: 0.5, y: 0.75, color: '#F43F5E', size: 17, desc: 'useMemo · useCallback · React.memo' },
//   { id: 10, label: 'Node.js', x: 0.82, y: 0.5, color: '#22C55E', size: 17, desc: 'Backend · Event-driven architecture' },
//   { id: 11, label: 'Hydration', x: 0.78, y: 0.72, color: '#FACC15', size: 15, desc: 'SSR hydration · Progressive enhancement' },
//   { id: 12, label: 'Git', x: 0.86, y: 0.24, color: '#F97316', size: 15, desc: 'Version control · Branching strategy' },
//   { id: 13, label: 'Vite', x: 0.61, y: 0.16, color: '#A855F7', size: 14, desc: 'Build tool · Native ESM HMR' },
//   { id: 14, label: 'Framer Motion', x: 0.2, y: 0.72, color: '#FF0066', size: 14, desc: 'Hardware accelerated animations' },
//   { id: 15, label: 'Perf Testing', x: 0.5, y: 0.9, color: '#22C55E', size: 15, desc: 'Lighthouse · Profiler · Web Vitals' },
// ]

// const edges = [
//   [0,1],[0,2],[0,8],[0,10],[0,13],
//   [1,3],[1,4],[1,5],[1,6],[1,7],[1,9],[1,14],
//   [2,1],[2,13],[2,12],
//   [3,6],[10,11],[9,15],[0,15],
// ]

// export default function Skills() {
//   const containerRef = useRef(null)
//   const canvasRef = useRef(null)
//   const tooltipRef = useRef(null)
//   const hoveredRef = useRef(null)
//   const animRef = useRef(null)
//   const { dark } = useTheme()

//   useEffect(() => {
//     const container = containerRef.current
//     const canvas = canvasRef.current
//     const ctx = canvas.getContext('2d')
//     let t = 0

//     const resize = () => {
//       const dpr = window.devicePixelRatio || 1
//       canvas.width = container.clientWidth * dpr
//       canvas.height = container.clientHeight * dpr
//       ctx.scale(dpr, dpr)
//       canvas.style.width = container.clientWidth + 'px'
//       canvas.style.height = container.clientHeight + 'px'
//     }
//     resize()
//     window.addEventListener('resize', resize)

//     const getPos = (s) => ({
//       x: s.x * container.clientWidth,
//       y: s.y * container.clientHeight,
//     })

//     const draw = () => {
//       t += 0.012
//       ctx.clearRect(0, 0, container.clientWidth, container.clientHeight)
//       const hovered = hoveredRef.current

//       // Edges (Connections)
//       edges.forEach(([ai, bi]) => {
//         const a = getPos(skills[ai])
//         const b = getPos(skills[bi])
//         const isHigh = hovered !== null && (hovered === ai || hovered === bi)
//         const op = hovered === null ? 0.2 : (isHigh ? 0.9 : 0.05)

//         const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y)
//         grad.addColorStop(0, isHigh ? 'rgba(0,245,255,1)' : `rgba(0,245,255,${op})`)
//         grad.addColorStop(1, isHigh ? 'rgba(124,58,237,1)' : `rgba(124,58,237,${op})`)

//         ctx.beginPath()
//         ctx.moveTo(a.x, a.y)
//         ctx.lineTo(b.x, b.y)
//         ctx.strokeStyle = grad
//         ctx.lineWidth = isHigh ? 2 : 0.8
//         ctx.stroke()
//       })

//       // Nodes (Skills)
//       skills.forEach((s, i) => {
//         const pos = getPos(s)
//         const pulse = Math.sin(t * 2 + i * 0.6) * 2.5
//         const isActive = hovered === null || hovered === i ||
//           edges.some(([a,b]) => (a === hovered && b === i) || (b === hovered && a === i))
//         const alpha = isActive ? 1 : 0.15
//         const r = s.size + pulse * 0.4 + (hovered === i ? 6 : 0)

//         // Glow behind node
//         if (hovered === i) {
//           const grd = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, r + 20)
//           grd.addColorStop(0, s.color + '60')
//           grd.addColorStop(1, 'transparent')
//           ctx.beginPath()
//           ctx.arc(pos.x, pos.y, r + 20, 0, Math.PI * 2)
//           ctx.fillStyle = grd
//           ctx.fill()
//         }

//         // Inner Circle
//         ctx.beginPath()
//         ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2)
//         const hexAlpha = Math.round(alpha * 40).toString(16).padStart(2,'0')
//         ctx.fillStyle = s.color + hexAlpha
//         ctx.fill()

//         // Border
//         const borderAlpha = Math.round(alpha * 255).toString(16).padStart(2,'0')
//         ctx.strokeStyle = s.color + borderAlpha
//         ctx.lineWidth = hovered === i ? 2.5 : 1.2
//         ctx.stroke()

//         // Label with improved contrast
//         ctx.fillStyle = dark ? `rgba(255,255,255,${alpha})` : `rgba(10,15,30,${alpha})`
//         ctx.font = `${hovered === i ? '600' : '500'} ${Math.max(10, s.size * 0.55)}px Inter`
//         ctx.textAlign = 'center'
//         ctx.textBaseline = 'middle'
//         ctx.fillText(s.label, pos.x, pos.y + r + 16)
//       })

//       animRef.current = requestAnimationFrame(draw)
//     }
//     draw()

//     const onMove = (e) => {
//       const rect = canvas.getBoundingClientRect()
//       const mx = e.clientX - rect.left
//       const my = e.clientY - rect.top
//       let found = null
//       skills.forEach((s, i) => {
//         const p = getPos(s)
//         if (Math.hypot(mx - p.x, my - p.y) < s.size + 15) found = i
//       })
//       hoveredRef.current = found
//       const tip = tooltipRef.current
//       if (found !== null) {
//         const s = skills[found]
//         tip.innerHTML = `<span style="font-weight:700">${s.label}</span><br/><span style="opacity:0.8; font-size:10px">${s.desc}</span>`

//         // Tooltip position safety check
//         let tx = e.clientX - rect.left + 15
//         let ty = e.clientY - rect.top - 45
//         if (tx + 180 > container.clientWidth) tx -= 200

//         tip.style.left = tx + 'px'
//         tip.style.top = ty + 'px'
//         tip.style.opacity = '1'
//       } else {
//         tip.style.opacity = '0'
//       }
//     }

//     const onLeave = () => { hoveredRef.current = null; tooltipRef.current.style.opacity = '0' }
//     canvas.addEventListener('mousemove', onMove)
//     canvas.addEventListener('mouseleave', onLeave)

//     return () => {
//       cancelAnimationFrame(animRef.current)
//       window.removeEventListener('resize', resize)
//       canvas.removeEventListener('mousemove', onMove)
//       canvas.removeEventListener('mouseleave', onLeave)
//     }
//   }, [dark])

//   return (
//     <section id="skills" style={{ position:'relative', zIndex:1 }}>
//       <div className="section-container">
//         <Reveal className="section-header">
//           <span className="section-tag">DEPENDENCY GRAPH</span>
//           <h2 className="section-title">Skills</h2>
//           <div className="section-line" />
//         </Reveal>
//         <Reveal>
//           <div ref={containerRef} style={{
//             width:'100%', height:520,
//             border:'1px solid var(--border)',
//             borderRadius:14,
//             background:'var(--surface)',
//             backdropFilter:'blur(12px)',
//             position:'relative',
//             overflow:'hidden',
//           }}>
//             <canvas ref={canvasRef} style={{ display:'block' }} />
//             <div ref={tooltipRef} style={{
//               position:'absolute',
//               background:'rgba(11, 15, 25, 0.95)',
//               border:'1px solid var(--cyan)',
//               borderRadius:4,
//               padding:'10px 16px',
//               fontSize:11,
//               color:'#FFFFFF',
//               pointerEvents:'none',
//               opacity:0,
//               transition:'opacity 0.2s, transform 0.2s',
//               whiteSpace:'nowrap',
//               boxShadow:'var(--glow-cyan)',
//               zIndex:10,
//               fontFamily:'JetBrains Mono, monospace',
//               lineHeight:'1.5'
//             }} />
//           </div>
//           <p style={{ fontSize:10, color:'var(--muted)', letterSpacing:1.5, marginTop:16, textAlign:'center', opacity: 0.7 }}>
//             INTERACTIVE GRAPH · HOVER NODES TO TRACE COMPONENT DEPENDENCIES
//           </p>
//         </Reveal>
//       </div>
//     </section>
//   )
// }






















import { useEffect, useRef } from 'react'
import Reveal from './Reveal.jsx'
import { useTheme } from '../hooks/useTheme.jsx'

const skills = [
  { id:0,  label:'JavaScript', x:0.5,  y:0.48, color:'#F7DF1E', size:26, desc:'ES2024 · Execution Context · Hoisting',      prof:95, cat:'Core'      },
  { id:1,  label:'React',      x:0.3,  y:0.32, color:'#00F5FF', size:24, desc:'Fiber Architecture · Reconciliation · Hooks', prof:92, cat:'Framework'  },
  { id:2,  label:'TypeScript', x:0.7,  y:0.32, color:'#3178C6', size:21, desc:'Type-safe JS · Generics · Utility Types',     prof:85, cat:'Core'      },
  { id:3,  label:'Next.js',    x:0.14, y:0.48, color:'#E2E8F0', size:19, desc:'App Router · Server Components · ISR',        prof:80, cat:'Framework'  },
  { id:4,  label:'Fiber Tree', x:0.22, y:0.16, color:'#00F5FF', size:14, desc:'Work-in-progress tree · Linked list traversal',prof:70, cat:'Deep Tech'  },
  { id:5,  label:'Scheduler',  x:0.38, y:0.10, color:'#00F5FF', size:14, desc:'Task prioritization · MessageChannel API',    prof:65, cat:'Deep Tech'  },
  { id:6,  label:'Diffing',    x:0.14, y:0.28, color:'#A78BFA', size:15, desc:'Heuristic algorithm · Key-based matching',    prof:75, cat:'Deep Tech'  },
  { id:7,  label:'Hooks',      x:0.38, y:0.24, color:'#A78BFA', size:15, desc:'Custom hooks · useDebugValue · Composition',  prof:90, cat:'Deep Tech'  },
  { id:8,  label:'Tailwind',   x:0.65, y:0.50, color:'#06B6D4', size:19, desc:'Utility-first · Design Systems · JIT',        prof:88, cat:'Styling'    },
  { id:9,  label:'Memoization',x:0.5,  y:0.76, color:'#F43F5E', size:17, desc:'useMemo · useCallback · React.memo',          prof:82, cat:'Performance' },
  { id:10, label:'Node.js',    x:0.82, y:0.50, color:'#22C55E', size:17, desc:'Backend · Event-driven architecture',         prof:75, cat:'Backend'    },
  { id:11, label:'Hydration',  x:0.78, y:0.72, color:'#FACC15', size:15, desc:'SSR hydration · Progressive enhancement',     prof:72, cat:'Performance' },
  { id:12, label:'Git',        x:0.86, y:0.24, color:'#F97316', size:15, desc:'Version control · Branching strategy',        prof:90, cat:'Tooling'    },
  { id:13, label:'Vite',       x:0.61, y:0.14, color:'#A855F7', size:14, desc:'Build tool · Native ESM · HMR',               prof:85, cat:'Tooling'    },
  { id:14, label:'Framer',     x:0.2,  y:0.72, color:'#FF0066', size:14, desc:'Hardware accelerated animations',             prof:78, cat:'Styling'    },
  { id:15, label:'Perf',       x:0.5,  y:0.90, color:'#22C55E', size:15, desc:'Lighthouse · Profiler · Web Vitals',          prof:80, cat:'Performance' },
]

const edges = [
  [0,1],[0,2],[0,8],[0,10],[0,13],
  [1,3],[1,4],[1,5],[1,6],[1,7],[1,9],[1,14],
  [2,1],[2,13],[2,12],
  [3,6],[10,11],[9,15],[0,15],
]

const CAT_COLORS = {
  'Core':       '#F7DF1E',
  'Framework':  '#00F5FF',
  'Deep Tech':  '#A78BFA',
  'Styling':    '#06B6D4',
  'Performance':'#F43F5E',
  'Backend':    '#22C55E',
  'Tooling':    '#F97316',
}

export default function Skills() {
  const containerRef  = useRef(null)
  const canvasRef     = useRef(null)
  const panelNameRef  = useRef(null)
  const panelDescRef  = useRef(null)
  const panelCatRef   = useRef(null)
  const panelBarRef   = useRef(null)
  const panelWrapRef  = useRef(null)
  const hoveredRef    = useRef(null)
  const selectedRef   = useRef(null)
  const packetsRef    = useRef([])
  const animRef       = useRef(null)
  const tickRef       = useRef(0)
  const { dark }      = useTheme()

  useEffect(() => {
    const container = containerRef.current
    const canvas    = canvasRef.current
    const ctx       = canvas.getContext('2d')

    // ── Resize ──────────────────────────────────────────────
    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width  = container.clientWidth  * dpr
      canvas.height = container.clientHeight * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width  = container.clientWidth  + 'px'
      canvas.style.height = container.clientHeight + 'px'
    }
    resize()
    window.addEventListener('resize', resize)

    const W = () => container.clientWidth
    const H = () => container.clientHeight
    const pos = (s) => ({ x: s.x * W(), y: s.y * H() })

    // ── Packets ──────────────────────────────────────────────
    const spawnPacket = () => {
      const ei = Math.floor(Math.random() * edges.length)
      const [ai, bi] = edges[ei]
      const rev = Math.random() > 0.5
      packetsRef.current.push({
        from:  rev ? bi : ai,
        to:    rev ? ai : bi,
        t:     0,
        speed: 0.005 + Math.random() * 0.007,
      })
    }
    for (let i = 0; i < 10; i++) setTimeout(spawnPacket, i * 250)

    // ── Panel helpers ────────────────────────────────────────
    const showPanel = (s, lock) => {
      if (!panelNameRef.current) return
      panelNameRef.current.textContent  = s.label
      panelNameRef.current.style.color  = s.color
      panelDescRef.current.textContent  = s.desc
      panelCatRef.current.textContent   = s.cat
      panelCatRef.current.style.color   = CAT_COLORS[s.cat] || 'var(--cyan)'
      panelCatRef.current.style.borderColor = CAT_COLORS[s.cat] || 'var(--cyan)'

      if (lock) {
        panelWrapRef.current.style.display = 'flex'
        panelBarRef.current.style.width    = '0%'
        panelBarRef.current.style.background = s.color
        setTimeout(() => {
          if (panelBarRef.current) panelBarRef.current.style.width = s.prof + '%'
        }, 60)
      }
    }

    const resetPanel = () => {
      if (!panelNameRef.current) return
      panelNameRef.current.textContent = 'Hover or click a node'
      panelNameRef.current.style.color = 'var(--muted)'
      panelDescRef.current.textContent = ''
      panelCatRef.current.textContent  = ''
      panelWrapRef.current.style.display = 'none'
    }

    // ── Draw loop ────────────────────────────────────────────
    const draw = () => {
      tickRef.current += 0.012
      const t = tickRef.current
      ctx.clearRect(0, 0, W(), H())

      const hov = hoveredRef.current
      const sel = selectedRef.current
      const active = hov ?? sel

      // Edges
      edges.forEach(([ai, bi]) => {
        const a = pos(skills[ai])
        const b = pos(skills[bi])
        const isHigh = active !== null && (active === ai || active === bi)
        const op = active === null ? 0.18 : (isHigh ? 0.9 : 0.04)

        const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y)
        grad.addColorStop(0, `rgba(0,245,255,${op})`)
        grad.addColorStop(1, `rgba(124,58,237,${op})`)

        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.strokeStyle = grad
        ctx.lineWidth   = isHigh ? 1.8 : 0.7
        ctx.stroke()
      })

      // Packets — only visible on active edges
      const pkts = packetsRef.current
      for (let i = pkts.length - 1; i >= 0; i--) {
        const p = pkts[i]
        p.t += p.speed
        if (p.t >= 1) { pkts.splice(i, 1); spawnPacket(); continue }

        // only draw if this edge touches the active node
        const onActiveEdge = active !== null &&
          (p.from === active || p.to === active)
        if (!onActiveEdge) continue

        const a  = pos(skills[p.from])
        const b  = pos(skills[p.to])
        const px = a.x + (b.x - a.x) * p.t
        const py = a.y + (b.y - a.y) * p.t

        // Trail
        ctx.beginPath()
        ctx.arc(px, py, 4.5, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0,245,255,0.12)'
        ctx.fill()
        // Core dot
        ctx.beginPath()
        ctx.arc(px, py, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0,245,255,0.95)'
        ctx.fill()
      }

      // Nodes
      skills.forEach((s, i) => {
        const p    = pos(s)
        const pulse = Math.sin(t * 2 + i * 0.6) * 2.2
        const isEdgeActive = active !== null &&
          edges.some(([a,b]) => (a === active && b === i) || (b === active && a === i))
        const isSelf   = active === i
        const isActive = active === null || isSelf || isEdgeActive
        const alpha    = isActive ? 1 : 0.1
        const r        = s.size + pulse * 0.35 + (isSelf ? 5 : 0)

        // Selection ring (clicked)
        if (sel === i) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, r + 16, 0, Math.PI * 2)
          ctx.fillStyle = s.color + '14'
          ctx.fill()
          ctx.beginPath()
          ctx.arc(p.x, p.y, r + 16, 0, Math.PI * 2)
          ctx.strokeStyle = s.color + '55'
          ctx.lineWidth = 1
          ctx.stroke()
        }

        // Hover ring
        if (hov === i) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, r + 10, 0, Math.PI * 2)
          ctx.fillStyle = s.color + '10'
          ctx.fill()
        }

        // Node fill
        ctx.beginPath()
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
        ctx.fillStyle   = s.color + Math.round(alpha * 38).toString(16).padStart(2,'0')
        ctx.fill()

        // Node border
        ctx.strokeStyle = s.color + Math.round(alpha * 230).toString(16).padStart(2,'0')
        ctx.lineWidth   = isSelf ? 2.5 : 1.2
        ctx.stroke()

        // Label
        ctx.fillStyle    = dark
          ? `rgba(225,232,245,${alpha})`
          : `rgba(10,15,35,${alpha})`
        ctx.font         = `${isSelf ? 600 : 500} ${Math.max(10, s.size * 0.52)}px Inter, sans-serif`
        ctx.textAlign    = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(s.label, p.x, p.y + r + 15)
      })

      animRef.current = requestAnimationFrame(draw)
    }
    draw()

    // ── Mouse move ───────────────────────────────────────────
    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      const mx   = e.clientX - rect.left
      const my   = e.clientY - rect.top
      let found  = null
      skills.forEach((s, i) => {
        const p = pos(s)
        if (Math.hypot(mx - p.x, my - p.y) < s.size + 14) found = i
      })
      hoveredRef.current = found
      canvas.style.cursor = found !== null ? 'pointer' : 'default'

      if (found !== null && found !== selectedRef.current) {
        showPanel(skills[found], false)
      } else if (found === null && selectedRef.current === null) {
        resetPanel()
      } else if (found === null && selectedRef.current !== null) {
        showPanel(skills[selectedRef.current], true)
      }
    }

    // ── Click ────────────────────────────────────────────────
    const onClick = (e) => {
      const rect = canvas.getBoundingClientRect()
      const mx   = e.clientX - rect.left
      const my   = e.clientY - rect.top
      let found  = null
      skills.forEach((s, i) => {
        const p = pos(s)
        if (Math.hypot(mx - p.x, my - p.y) < s.size + 14) found = i
      })

      if (found === selectedRef.current) {
        selectedRef.current = null
        resetPanel()
      } else {
        selectedRef.current = found
        if (found !== null) showPanel(skills[found], true)
        else resetPanel()
      }
    }

    const onLeave = () => {
      hoveredRef.current = null
      canvas.style.cursor = 'default'
      if (selectedRef.current === null) resetPanel()
      else showPanel(skills[selectedRef.current], true)
    }

    canvas.addEventListener('mousemove', onMove)
    canvas.addEventListener('click',     onClick)
    canvas.addEventListener('mouseleave',onLeave)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMove)
      canvas.removeEventListener('click',     onClick)
      canvas.removeEventListener('mouseleave',onLeave)
    }
  }, [dark])

  return (
    <section id="skills" style={{ position:'relative', zIndex:1 }}>
      <div className="section-container">

        <Reveal className="section-header">
          <span className="section-tag">DEPENDENCY GRAPH</span>
          <h2 className="section-title">Skills</h2>
          <div className="section-line" />
        </Reveal>

        <Reveal>
          {/* Canvas container */}
          <div
            ref={containerRef}
            style={{
              width:'100%', height:520,
              border:'1px solid var(--border)',
              borderRadius:'14px 14px 0 0',
              background:'var(--surface)',
              backdropFilter:'blur(12px)',
              position:'relative',
              overflow:'hidden',
            }}
          >
            <canvas ref={canvasRef} style={{ display:'block' }} />
          </div>

          {/* Info panel */}
          <div style={{
            border:'1px solid var(--border)',
            borderTop:'none',
            borderRadius:'0 0 14px 14px',
            background:'var(--bg2)',
            padding:'14px 24px',
            display:'flex',
            alignItems:'center',
            gap:16,
            flexWrap:'wrap',
            minHeight:62,
          }}>
            {/* Left — name + desc */}
            <div style={{ flex:1, minWidth:180 }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:4 }}>
                <span
                  ref={panelNameRef}
                  style={{
                    fontFamily:'Orbitron, sans-serif',
                    fontSize:13,
                    fontWeight:700,
                    letterSpacing:1,
                    color:'var(--muted)',
                    transition:'color 0.3s',
                  }}
                >
                  Hover or click a node
                </span>
                <span
                  ref={panelCatRef}
                  style={{
                    fontSize:9,
                    letterSpacing:2,
                    padding:'2px 8px',
                    borderRadius:3,
                    border:'1px solid transparent',
                    fontFamily:'JetBrains Mono, monospace',
                    transition:'color 0.3s, border-color 0.3s',
                  }}
                />
              </div>
              <div
                ref={panelDescRef}
                style={{
                  fontSize:11,
                  color:'var(--muted)',
                  fontFamily:'JetBrains Mono, monospace',
                  letterSpacing:0.5,
                  opacity:0.8,
                }}
              />
            </div>

            {/* Right — proficiency bar */}
            <div
              ref={panelWrapRef}
              style={{
                display:'none',
                alignItems:'center',
                gap:10,
                flexShrink:0,
              }}
            >
              <span style={{ fontSize:10, color:'var(--muted)', letterSpacing:1.5, fontFamily:'JetBrains Mono, monospace' }}>
                PROFICIENCY
              </span>
              <div style={{
                width:120,
                height:3,
                background:'var(--border)',
                borderRadius:2,
                overflow:'hidden',
              }}>
                <div
                  ref={panelBarRef}
                  style={{
                    height:'100%',
                    width:'0%',
                    borderRadius:2,
                    transition:'width 0.6s cubic-bezier(0.16,1,0.3,1)',
                  }}
                />
              </div>
            </div>
          </div>

          <p style={{
            fontSize:10,
            color:'var(--muted)',
            letterSpacing:1.5,
            marginTop:14,
            textAlign:'center',
            opacity:0.6,
            fontFamily:'JetBrains Mono, monospace',
          }}>
            INTERACTIVE GRAPH · HOVER TO TRACE DEPENDENCIES · CLICK TO INSPECT
          </p>
        </Reveal>

      </div>
    </section>
  )
}