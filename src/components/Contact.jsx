// import { useState } from 'react'
// import Reveal from './Reveal.jsx'

// export default function Contact() {
//   const [sent, setSent] = useState(false)

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setSent(true)
//   }

//   return (
//     <section id="contact" style={{ position:'relative', zIndex:1 }}>
//       <div className="section-container">
//         <Reveal className="section-header">
//           <span className="section-tag">SIGNAL TRANSMISSION</span>
//           <h2 className="section-title">Contact</h2>
//           <div className="section-line" />
//         </Reveal>

//         <Reveal>
//           <div style={{ maxWidth:580, margin:'0 auto' }}>
//             <div style={{
//               background:'var(--surface)',
//               border:'1px solid var(--border)',
//               borderRadius:14,
//               overflow:'hidden',
//               boxShadow:'0 0 60px rgba(0,245,255,0.04)',
//             }}>
//               {/* Terminal header */}
//               <div style={{
//                 background:'var(--surface2)',
//                 padding:'13px 20px',
//                 display:'flex',
//                 alignItems:'center',
//                 gap:8,
//                 borderBottom:'1px solid var(--border2)',
//               }}>
//                 {['#FF5F57','#FEBC2E','#28C840'].map(c => (
//                   <div key={c} style={{ width:10, height:10, borderRadius:'50%', background:c }} />
//                 ))}
//                 <span style={{ fontSize:10, color:'var(--muted)', letterSpacing:2, marginLeft:10, fontFamily:'JetBrains Mono,monospace' }}>
//                   SIGNAL_CONSOLE — MEHEDI.DEV
//                 </span>
//               </div>

//               <div style={{ padding:32 }}>
//                 <div style={{ fontSize:12, color:'var(--cyan)', letterSpacing:2, marginBottom:24, display:'flex', alignItems:'center', gap:8 }}>
//                   <span style={{ color:'var(--purple-light)' }}>&gt;</span> Send Signal to Developer
//                 </div>

//                 {!sent ? (
//                   <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:18 }}>
//                     {[
//                       { label:'identifier', type:'text', placeholder:'your_name' },
//                       { label:'return_address', type:'email', placeholder:'your@email.com' },
//                     ].map(f => (
//                       <div key={f.label}>
//                         <label style={{ fontSize:10, color:'var(--cyan)', letterSpacing:2, display:'block', marginBottom:8 }}>
//                           <span style={{ color:'var(--muted)' }}>// </span>{f.label}
//                         </label>
//                         <input
//                           type={f.type}
//                           placeholder={f.placeholder}
//                           required
//                           style={{
//                             width:'100%', background:'var(--surface)',
//                             border:'1px solid var(--border)', color:'var(--text)',
//                             fontFamily:'JetBrains Mono,monospace', fontSize:13,
//                             padding:'12px 16px', borderRadius:4, outline:'none',
//                             transition:'border-color 0.3s, box-shadow 0.3s',
//                           }}
//                           onFocus={e => {
//                             e.target.style.borderColor = 'var(--cyan)'
//                             e.target.style.boxShadow = 'var(--glow-cyan)'
//                           }}
//                           onBlur={e => {
//                             e.target.style.borderColor = 'var(--border)'
//                             e.target.style.boxShadow = 'none'
//                           }}
//                         />
//                       </div>
//                     ))}
//                     <div>
//                       <label style={{ fontSize:10, color:'var(--cyan)', letterSpacing:2, display:'block', marginBottom:8 }}>
//                         <span style={{ color:'var(--muted)' }}>// </span>signal_payload
//                       </label>
//                       <textarea
//                         rows={4}
//                         placeholder="Describe your project or message..."
//                         required
//                         style={{
//                           width:'100%', background:'var(--surface)',
//                           border:'1px solid var(--border)', color:'var(--text)',
//                           fontFamily:'JetBrains Mono,monospace', fontSize:13,
//                           padding:'12px 16px', borderRadius:4, outline:'none',
//                           resize:'none', transition:'border-color 0.3s, box-shadow 0.3s',
//                         }}
//                         onFocus={e => {
//                           e.target.style.borderColor = 'var(--cyan)'
//                           e.target.style.boxShadow = 'var(--glow-cyan)'
//                         }}
//                         onBlur={e => {
//                           e.target.style.borderColor = 'var(--border)'
//                           e.target.style.boxShadow = 'none'
//                         }}
//                       />
//                     </div>
//                     <button type="submit" style={{
//                       background:'transparent', border:'1px solid var(--cyan)',
//                       color:'var(--cyan)', fontFamily:'JetBrains Mono,monospace',
//                       fontSize:12, letterSpacing:3, padding:14, cursor:'pointer',
//                       borderRadius:4, transition:'all 0.3s', marginTop:4,
//                     }}
//                     onMouseEnter={e => {
//                       e.currentTarget.style.background = 'var(--cyan-dim)'
//                       e.currentTarget.style.boxShadow = 'var(--glow-cyan)'
//                     }}
//                     onMouseLeave={e => {
//                       e.currentTarget.style.background = 'transparent'
//                       e.currentTarget.style.boxShadow = 'none'
//                     }}>
//                       ▶ TRANSMIT MESSAGE
//                     </button>
//                   </form>
//                 ) : (
//                   <div style={{
//                     textAlign:'center', padding:'30px 0',
//                     color:'#22c55e', fontSize:13, letterSpacing:2,
//                     animation:'fadeUp 0.5s ease',
//                   }}>
//                     <div style={{ fontSize:32, marginBottom:12 }}>✓</div>
//                     Signal received. Developer will respond shortly.
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div style={{ display:'flex', justifyContent:'center', gap:32, marginTop:40, flexWrap:'wrap' }}>
//               {[['✉ EMAIL','mailto:mehedi@example.com'],['⌂ GITHUB','#'],['⬡ LINKEDIN','#'],['◈ RESUME','#']].map(([l,h]) => (
//                 <a key={l} href={h} style={{
//                   color:'var(--muted)', textDecoration:'none', fontSize:10,
//                   letterSpacing:2, transition:'color 0.25s',
//                 }}
//                 onMouseEnter={e => e.currentTarget.style.color='var(--cyan)'}
//                 onMouseLeave={e => e.currentTarget.style.color='var(--muted)'}>
//                   {l}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </Reveal>
//       </div>
//       <style>{`
//         @keyframes fadeUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
//       `}</style>
//     </section>
//   )
// }










import { useState, useEffect, useRef } from 'react'
import Reveal from './Reveal.jsx'

const BOOT_LINES = [
  { text: 'MEHEDI_OS v2.0.25 — Portfolio Terminal', color: 'var(--cyan)', delay: 0 },
  { text: 'Initializing communication stack...', color: 'var(--muted)', delay: 120 },
  { text: 'Signal encoder ready.', color: 'var(--muted)', delay: 220 },
  { text: 'Type  help  to see available commands.', color: '#22c55e', delay: 340 },
]

const ASCII = `
  ███╗   ███╗██╗  ██╗
  ████╗ ████║██║  ██║
  ██╔████╔██║███████║
  ██║╚██╔╝██║██╔══██║
  ██║ ╚═╝ ██║██║  ██║
  ╚═╝     ╚═╝╚═╝  ╚═╝`

const COMMANDS = {
  help: {
    output: [
      { text: 'Available commands:', color: 'var(--cyan)' },
      { text: '  whoami       — Who is this developer?', color: 'var(--text2)' },
      { text: '  email        — Get email address', color: 'var(--text2)' },
      { text: '  github       — View repositories', color: 'var(--text2)' },
      { text: '  linkedin     — Connect on LinkedIn', color: 'var(--text2)' },
      { text: '  resume       — Download resume', color: 'var(--text2)' },
      { text: '  availability — Current work status', color: 'var(--text2)' },
      { text: '  stack        — Tech stack overview', color: 'var(--text2)' },
      { text: '  hire [msg]   — Send a message directly', color: 'var(--text2)' },
      { text: '  clear        — Clear terminal', color: 'var(--text2)' },
    ],
  },
  whoami: {
    output: [
      { text: ASCII, color: 'var(--cyan)', pre: true },
      { text: 'Mehedi Hasan — Frontend Developer', color: 'var(--cyan)' },
      { text: 'Location   : Rajbari, Dhaka, Bangladesh 🌏', color: 'var(--text2)' },
      { text: 'Focus      : JavaScript · React · Node.js · UI Engineering', color: 'var(--text2)' },
      { text: 'Philosophy : Ship fast, iterate faster.', color: 'var(--text2)' },
    ],
  },
  email: {
    output: [
      { text: '📧  mhshohan04@gmail.com', color: 'var(--cyan)' },
      { text: 'Copied to clipboard ✓', color: '#22c55e' },
    ],
    action: () => navigator.clipboard?.writeText('mhshohan04@gmail.com'),
  },
  github: {
    output: [
      { text: '⌂   github.com/mehedihasanshohan', color: 'var(--cyan)' },
      { text: 'Opening in new tab...', color: '#22c55e' },
    ],
    action: () => window.open('https://github.com/mehedihasanshohan', '_blank'),
  },
  linkedin: {
    output: [
      { text: '⬡   linkedin.com/in/mehedi', color: 'var(--cyan)' },
      { text: 'Opening in new tab...', color: '#22c55e' },
    ],
    action: () => window.open('https://linkedin.com/in/mehedihasanshohan', '_blank'),
  },
  resume: {
    output: [
      { text: 'Fetching resume payload...', color: 'var(--muted)' },
      { text: 'Download started ✓  Mehedi_Hasan_CV.pdf', color: '#22c55e' },
    ],
    action: () => {
      const a = document.createElement('a')
      // a.href = 'cv.pdf'
      // a.download = 'Mehedi_Hasan_CV.pdf'
      a.href = '/resume_Mehedi_Hasan_Frontend_Developer_mernstack.pdf'
      a.download = 'resume_Mehedi_Hasan_Frontend_Developer_mernstack.pdf'
      a.click()
    },
  },
  availability: {
    output: [
      { text: '● STATUS : OPEN TO OPPORTUNITIES', color: '#22c55e' },
      { text: '  Type   : Full-time / Contract / Freelance', color: 'var(--text2)' },
      { text: '  Notice : Available immediately', color: 'var(--text2)' },
      { text: '  Remote : Preferred · Open to relocation', color: 'var(--text2)' },
    ],
  },
  stack: {
    output: [
      { text: 'Core     ──  JavaScript ', color: 'var(--cyan)' },
      { text: 'Framework──  React.js · Next.js', color: '#A78BFA' },
      { text: 'Styling  ──  Tailwind · Framer Motion', color: '#06B6D4' },
      { text: 'Tooling  ──  Vite · Git · Node.js', color: '#F97316' },
      { text: 'Testing  ──  React Testing Library', color: '#22C55E' },
    ],
  },
  clear: { clear: true },
}

const SUGGESTIONS = ['help', 'whoami', 'email', 'github', 'linkedin', 'resume', 'availability', 'stack', 'hire']

export default function Contact() {
  const [lines, setLines]       = useState([])
  const [booted, setBooted]     = useState(false)
  const [input, setInput]       = useState('')
  const [history, setHistory]   = useState([])
  const [histIdx, setHistIdx]   = useState(-1)
  const [suggestion, setSuggestion] = useState('')
  const [sending, setSending]   = useState(false)
  const [sentMsg, setSentMsg]   = useState(false)
  const bottomRef = useRef(null)
  const inputRef  = useRef(null)

  // Boot sequence
  useEffect(() => {
    let mounted = true
    const timers = BOOT_LINES.map((l, i) =>
      setTimeout(() => {
        if (!mounted) return
        setLines(prev => [...prev, { ...l, id: Date.now() + i }])
        if (i === BOOT_LINES.length - 1) setBooted(true)
      }, l.delay)
    )
    return () => { mounted = false; timers.forEach(clearTimeout) }
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines])

  // Autocomplete suggestion
  useEffect(() => {
    if (!input) { setSuggestion(''); return }
    const base = input.split(' ')[0]
    const match = SUGGESTIONS.find(s => s.startsWith(base) && s !== base)
    setSuggestion(match ? input + match.slice(base.length) : '')
  }, [input])

  const pushLines = (newLines) => {
    setLines(prev => [...prev, ...newLines.map((l, i) => ({ ...l, id: Date.now() + i }))])
  }

  const runCommand = (raw) => {
    const trimmed = raw.trim().toLowerCase()
    const [cmd, ...args] = trimmed.split(' ')

    // Echo the command
    pushLines([{ text: `> ${raw}`, color: 'var(--cyan)', bold: true }])

    if (!trimmed) return

    // hire command — special
    if (cmd === 'hire') {
      const msg = args.join(' ')
      if (!msg) {
        pushLines([
          { text: 'Usage: hire <your message>', color: '#F97316' },
          { text: 'Example: hire Hey Mehedi, we\'d love to chat!', color: 'var(--muted)' },
        ])
        return
      }
      setSending(true)
      pushLines([{ text: 'Encrypting signal...', color: 'var(--muted)' }])
      setTimeout(() => {
        pushLines([
          { text: '✓ Signal transmitted successfully!', color: '#22c55e' },
          { text: `  Message : "${msg}"`, color: 'var(--text2)' },
          { text: '  Response within 24h · mhshohan04@gmail.com', color: 'var(--muted)' },
        ])
        setSending(false)
        setSentMsg(true)
      }, 1200)
      return
    }

    if (cmd === 'clear') {
      setLines([])
      return
    }

    const found = COMMANDS[cmd]
    if (!found) {
      pushLines([
        { text: `bash: ${cmd}: command not found`, color: '#F43F5E' },
        { text: 'Type  help  to see available commands.', color: 'var(--muted)' },
      ])
      return
    }

    pushLines(found.output || [])
    if (found.action) setTimeout(found.action, 400)
  }

  const onKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      if (suggestion) setInput(suggestion)
    }
    if (e.key === 'Enter') {
      runCommand(input)
      setHistory(h => [input, ...h])
      setHistIdx(-1)
      setInput('')
      setSuggestion('')
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(histIdx + 1, history.length - 1)
      setHistIdx(next)
      setInput(history[next] || '')
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = Math.max(histIdx - 1, -1)
      setHistIdx(next)
      setInput(next === -1 ? '' : history[next])
    }
  }

  return (
    <section id="contact" style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-container">
        <Reveal className="section-header">
          <span className="section-tag">SIGNAL TRANSMISSION</span>
          <h2 className="section-title">Contact</h2>
          <div className="section-line" />
        </Reveal>

        <Reveal>
          <div style={{ maxWidth: 680, margin: '0 auto' }}>

            {/* Terminal window */}
            <div style={{
              background: 'var(--bg2)',
              border: '1px solid var(--border)',
              borderRadius: 14,
              overflow: 'hidden',
              boxShadow: '0 0 60px rgba(0,245,255,0.05)',
            }}>

              {/* Title bar */}
              <div style={{
                background: 'var(--surface2)',
                padding: '11px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                borderBottom: '1px solid var(--border2)',
              }}>
                {['#FF5F57', '#FEBC2E', '#28C840'].map(c => (
                  <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                ))}
                <span style={{
                  fontSize: 10, color: 'var(--muted)', letterSpacing: 2,
                  marginLeft: 10, fontFamily: 'JetBrains Mono, monospace',
                }}>
                  mehedi@portfolio ~ contact
                </span>
                {sentMsg && (
                  <span style={{
                    marginLeft: 'auto', fontSize: 9, color: '#22c55e',
                    letterSpacing: 1.5, fontFamily: 'JetBrains Mono, monospace',
                  }}>
                    ● SIGNAL SENT
                  </span>
                )}
              </div>

              {/* Output area */}
              <div
                onClick={() => inputRef.current?.focus()}
                style={{
                  height: 380,
                  overflowY: 'auto',
                  padding: '20px 24px 8px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: 12,
                  lineHeight: 1.9,
                  cursor: 'text',
                  scrollbarWidth: 'thin',
                }}
              >
                {lines.map(l => (
                  <div
                    key={l.id}
                    style={{
                      color: l.color || 'var(--text2)',
                      fontWeight: l.bold ? 700 : 400,
                      whiteSpace: l.pre ? 'pre' : 'pre-wrap',
                      letterSpacing: l.pre ? 0 : 0.3,
                      fontSize: l.pre ? 9 : 12,
                      lineHeight: l.pre ? 1.3 : 1.9,
                    }}
                  >
                    {l.text}
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>

              {/* Divider */}
              <div style={{ borderTop: '1px solid var(--border2)', margin: '0 24px' }} />

              {/* Input row */}
              <div style={{
                padding: '12px 24px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                position: 'relative',
              }}>
                <span style={{
                  color: 'var(--cyan)', fontFamily: 'JetBrains Mono, monospace',
                  fontSize: 12, flexShrink: 0,
                }}>
                  ❯
                </span>

                {/* Ghost suggestion */}
                <div style={{
                  position: 'absolute',
                  left: 46,
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: 12,
                  color: 'var(--border)',
                  pointerEvents: 'none',
                  letterSpacing: 0.3,
                  whiteSpace: 'pre',
                }}>
                  {suggestion}
                </div>

                <input
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  disabled={sending}
                  autoFocus={booted}
                  placeholder={booted ? '' : 'booting...'}
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: 'var(--text)',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 12,
                    letterSpacing: 0.3,
                    caretColor: 'var(--cyan)',
                  }}
                />
                {sending && (
                  <span style={{
                    fontSize: 10, color: 'var(--cyan)',
                    letterSpacing: 2, animation: 'pulse 1s ease-in-out infinite',
                  }}>
                    TRANSMITTING
                  </span>
                )}
              </div>
            </div>

            {/* Quick command pills */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 8,
              marginTop: 16,
              justifyContent: 'center',
            }}>
              {['whoami', 'email', 'availability', 'stack', 'hire Hey!'].map(cmd => (
                <button
                  key={cmd}
                  onClick={() => {
                    runCommand(cmd)
                    setHistory(h => [cmd, ...h])
                    setInput('')
                    inputRef.current?.focus()
                  }}
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    color: 'var(--muted)',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 10,
                    letterSpacing: 1.5,
                    padding: '5px 14px',
                    borderRadius: 20,
                    cursor: 'pointer',
                    transition: 'all 0.25s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--cyan)'
                    e.currentTarget.style.color = 'var(--cyan)'
                    e.currentTarget.style.background = 'var(--cyan-dim)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.color = 'var(--muted)'
                    e.currentTarget.style.background = 'var(--surface)'
                  }}
                >
                  {cmd}
                </button>
              ))}
            </div>

            <p style={{
              fontSize: 12, color: 'var(--muted)', letterSpacing: 2,
              textAlign: 'center', marginTop: 14, opacity: 0.9,
              fontFamily: 'JetBrains Mono, monospace',
            }}>
              TAB TO AUTOCOMPLETE · ↑↓ COMMAND HISTORY · TYPE help TO START
            </p>

          </div>
        </Reveal>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
      `}</style>
    </section>
  )
}