import Reveal from './Reveal.jsx'

const experiments = [
  { icon:'⚡', name:'useOptimistic Hook', desc:"Exploring React 18's concurrent features to build instant UI feedback with automatic rollback on error.", status:'ACTIVE' },
  { icon:'🧠', name:'Fiber Reconciler Deep-Dive', desc:"Reading React's source to understand how work loops, lanes, and commit phases drive rendering.", status:'IN PROGRESS' },
  { icon:'🎭', name:'CSS-in-JS vs Tailwind Perf', desc:"Benchmarking runtime style injection vs utility-first at scale — results were surprising.", status:'COMPLETED' },
  { icon:'🌐', name:'WebGL Fluid Simulation', desc:'GPU-accelerated fluid dynamics in the browser for interactive background effects.', status:'ACTIVE' },
  { icon:'🔮', name:'Virtual Scroll Engine', desc:'Custom windowed list rendering 100k items at 60fps without any external library.', status:'COMPLETED' },
  { icon:'🧬', name:'State Machine Architecture', desc:'XState-inspired finite state machines for predictable UI behavior in complex flows.', status:'IN PROGRESS' },
]

const statusColor = { ACTIVE:'#00F5FF', 'IN PROGRESS':'#A78BFA', COMPLETED:'#22C55E' }

export default function Experiments() {
  return (
    <section id="experiments" style={{ position:'relative', zIndex:1 }}>
      <div className="section-container">
        <Reveal className="section-header">
          <span className="section-tag">RESEARCH LAB</span>
          <h2 className="section-title">Experiments</h2>
          <div className="section-line" />
        </Reveal>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:20 }}>
          {experiments.map((e, i) => (
            <Reveal key={e.name} delay={i * 80}>
              <div style={{
                background:'var(--surface)',
                border:'1px solid rgba(124,58,237,0.18)',
                borderRadius:10,
                padding:24,
                cursor:'pointer',
                transition:'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                height:'100%',
              }}
              onMouseEnter={ev => {
                ev.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)'
                ev.currentTarget.style.transform = 'translateY(-5px)'
                ev.currentTarget.style.boxShadow = 'var(--glow-purple)'
              }}
              onMouseLeave={ev => {
                ev.currentTarget.style.borderColor = 'rgba(124,58,237,0.18)'
                ev.currentTarget.style.transform = 'translateY(0)'
                ev.currentTarget.style.boxShadow = 'none'
              }}>
                <span style={{ fontSize:24, marginBottom:14, display:'block' }}>{e.icon}</span>
                <div style={{ fontFamily:'Orbitron,sans-serif', fontSize:13, color:'var(--text)', marginBottom:8, letterSpacing:1 }}>
                  {e.name}
                </div>
                <p style={{ fontFamily:'Inter,sans-serif', fontSize:12, color:'var(--muted)', lineHeight:1.65, marginBottom:14 }}>
                  {e.desc}
                </p>
                <div style={{ fontSize:9, letterSpacing:2, color:statusColor[e.status], display:'flex', alignItems:'center', gap:7 }}>
                  <span style={{
                    width:6, height:6, borderRadius:'50%',
                    background:statusColor[e.status],
                    animation: e.status !== 'COMPLETED' ? 'dotPulse 1.4s infinite' : 'none',
                    flexShrink:0,
                  }} />
                  {e.status}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes dotPulse {
          0%,100%{opacity:1;transform:scale(1)}
          50%{opacity:0.4;transform:scale(0.75)}
        }
      `}</style>
    </section>
  )
}
