// import { useState, useEffect } from 'react'

// const STEPS = [
//   { text: 'Initializing React Universe...', duration: 600 },
//   { text: 'Mounting Root Node...', duration: 700 },
//   { text: 'Rendering Components...', duration: 700 },
//   { text: 'Hydrating State...', duration: 500 },
//   { text: 'Painting to DOM...', duration: 400 },
// ]

// export default function PageLoader({ onDone }) {
//   const [activeLines, setActiveLines] = useState([])
//   const [checkedLines, setCheckedLines] = useState([])
//   const [barWidth, setBarWidth] = useState(0)
//   const [exiting, setExiting] = useState(false)

//   useEffect(() => {
//     let elapsed = 0
//     const totalTime = 2800

//     STEPS.forEach((step, i) => {
//       // Show line
//       setTimeout(() => {
//         setActiveLines(prev => [...prev, i])
//         setBarWidth(Math.round(((i + 1) / STEPS.length) * 100))
//       }, elapsed)

//       // Check it off shortly after
//       setTimeout(() => {
//         setCheckedLines(prev => [...prev, i])
//       }, elapsed + step.duration * 0.7)

//       elapsed += step.duration
//     })

//     // Trigger exit
//     setTimeout(() => {
//       setExiting(true)
//       setTimeout(onDone, 700)
//     }, totalTime)
//   }, [])

//   return (
//     <div style={{
//       position: 'fixed',
//       inset: 0,
//       zIndex: 99999,
//       background: '#0B0F19',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       opacity: exiting ? 0 : 1,
//       // transform: exiting ? 'scale(1.015)' : 'scale(1)',
//       transition: 'opacity 0.65s cubic-bezier(0.4,0,0.2,1), transform 0.65s cubic-bezier(0.4,0,0.2,1)',
//       pointerEvents: exiting ? 'none' : 'all',
//       fontFamily: 'JetBrains Mono, monospace',
//     }}>

//       {/* Subtle grid overlay */}
//       <div style={{
//         position: 'absolute',
//         inset: 0,
//         backgroundImage: `
//           linear-gradient(rgba(0,245,255,0.025) 1px, transparent 1px),
//           linear-gradient(90deg, rgba(0,245,255,0.025) 1px, transparent 1px)
//         `,
//         backgroundSize: '40px 40px',
//         pointerEvents: 'none',
//       }} />

//       {/* Radial glow */}
//       <div style={{
//         position: 'absolute',
//         inset: 0,
//         background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,245,255,0.06), transparent)',
//         pointerEvents: 'none',
//       }} />

//       {/* Corner brackets */}
//       {[
//         { top: 24, left: 24, rotate: '0deg' },
//         { top: 24, right: 24, rotate: '90deg' },
//         { bottom: 24, right: 24, rotate: '180deg' },
//         { bottom: 24, left: 24, rotate: '270deg' },
//       ].map((pos, i) => (
//         <div key={i} style={{
//           position: 'absolute',
//           width: 28, height: 28,
//           ...pos,
//           borderTop: '1.5px solid rgba(0,245,255,0.35)',
//           borderLeft: '1.5px solid rgba(0,245,255,0.35)',
//           transform: `rotate(${pos.rotate})`,
//           animation: 'cornerPulse 2.5s ease-in-out infinite',
//           animationDelay: `${i * 0.2}s`,
//         }} />
//       ))}

//       {/* Main content */}
//       <div style={{ width: 'min(480px, 90vw)', display: 'flex', flexDirection: 'column', gap: 0 }}>

//         {/* Logo / Title */}
//         <div style={{ marginBottom: 44, textAlign: 'center' }}>
//           <div style={{
//             fontFamily: 'Orbitron, sans-serif',
//             fontSize: 11,
//             color: 'rgba(0,245,255,0.5)',
//             letterSpacing: 6,
//             marginBottom: 10,
//           }}>
//             REACT UNIVERSE
//           </div>
//           <div style={{
//             fontFamily: 'Orbitron, sans-serif',
//             fontSize: 'clamp(20px, 4vw, 28px)',
//             fontWeight: 900,
//             color: '#FFFFFF',
//             letterSpacing: 3,
//             background: 'linear-gradient(135deg, #fff 40%, #00F5FF)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//             backgroundClip: 'text',
//           }}>
//             MEHEDI HASAN
//           </div>
//         </div>

//         {/* Terminal window */}
//         <div style={{
//           background: 'rgba(255,255,255,0.025)',
//           border: '1px solid rgba(0,245,255,0.15)',
//           borderRadius: 10,
//           overflow: 'hidden',
//         }}>
//           {/* Terminal header bar */}
//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: 7,
//             padding: '10px 16px',
//             background: 'rgba(255,255,255,0.03)',
//             borderBottom: '1px solid rgba(0,245,255,0.08)',
//           }}>
//             <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#FF5F57' }} />
//             <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#FEBC2E' }} />
//             <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#28C840' }} />
//             <span style={{ fontSize: 10, color: 'rgba(136,146,164,0.6)', letterSpacing: 2, marginLeft: 10 }}>
//               SYSTEM_BOOT.tsx
//             </span>
//           </div>

//           {/* Log lines */}
//           <div style={{ padding: '20px 22px', minHeight: 150, display: 'flex', flexDirection: 'column', gap: 13 }}>
//             {STEPS.map((step, i) => {
//               const isActive = activeLines.includes(i)
//               const isDone = checkedLines.includes(i)
//               const isCurrent = activeLines.includes(i) && !isDone

//               return (
//                 <div
//                   key={i}
//                   style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: 12,
//                     opacity: isActive ? 1 : 0,
//                     transform: isActive ? 'translateY(0)' : 'translateY(6px)',
//                     transition: 'opacity 0.35s cubic-bezier(0.16,1,0.3,1), transform 0.35s cubic-bezier(0.16,1,0.3,1)',
//                   }}
//                 >
//                   {/* Status icon */}
//                   <span style={{ width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
//                     {isDone ? (
//                       <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                         <circle cx="7" cy="7" r="6" stroke="#22c55e" strokeWidth="1.5" fill="rgba(34,197,94,0.1)" />
//                         <path d="M4.5 7l2 2 3-3" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                       </svg>
//                     ) : (
//                       <div style={{
//                         width: 7, height: 7, borderRadius: '50%',
//                         background: '#00F5FF',
//                         boxShadow: '0 0 8px rgba(0,245,255,0.8)',
//                         animation: isCurrent ? 'dotBlink 0.8s ease-in-out infinite' : 'none',
//                       }} />
//                     )}
//                   </span>

//                   {/* Text */}
//                   <span style={{
//                     fontSize: 12,
//                     color: isDone ? 'rgba(255,255,255,0.5)' : isCurrent ? '#00F5FF' : 'rgba(255,255,255,0.3)',
//                     letterSpacing: 1,
//                     transition: 'color 0.4s',
//                   }}>
//                     {step.text}
//                   </span>

//                   {/* Typing cursor on active line */}
//                   {isCurrent && (
//                     <span style={{
//                       display: 'inline-block',
//                       width: 7, height: 13,
//                       background: '#00F5FF',
//                       marginLeft: -6,
//                       animation: 'cursorBlink 0.6s step-end infinite',
//                       opacity: 0.9,
//                     }} />
//                   )}
//                 </div>
//               )
//             })}
//           </div>
//         </div>

//         {/* Progress bar */}
//         <div style={{ marginTop: 24 }}>
//           <div style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             marginBottom: 8,
//           }}>
//             <span style={{ fontSize: 9, color: 'rgba(0,245,255,0.5)', letterSpacing: 2 }}>MOUNTING</span>
//             <span style={{ fontSize: 9, color: '#00F5FF', letterSpacing: 1, fontVariantNumeric: 'tabular-nums' }}>
//               {barWidth}%
//             </span>
//           </div>
//           <div style={{
//             height: 2,
//             background: 'rgba(0,245,255,0.1)',
//             borderRadius: 2,
//             overflow: 'hidden',
//           }}>
//             <div style={{
//               height: '100%',
//               width: `${barWidth}%`,
//               background: 'linear-gradient(90deg, #7C3AED, #00F5FF)',
//               borderRadius: 2,
//               boxShadow: '0 0 12px rgba(0,245,255,0.6)',
//               transition: 'width 0.6s cubic-bezier(0.16,1,0.3,1)',
//               position: 'relative',
//             }}>
//               {/* Shimmer */}
//               <div style={{
//                 position: 'absolute',
//                 inset: 0,
//                 background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
//                 animation: 'shimmer 1.2s ease-in-out infinite',
//               }} />
//             </div>
//           </div>
//         </div>

//         {/* Footer hint */}
//         <div style={{
//           marginTop: 28,
//           textAlign: 'center',
//           fontSize: 9,
//           color: 'rgba(136,146,164,0.35)',
//           letterSpacing: 2,
//         }}>
//           FRONTEND DEVELOPER · REACT UNIVERSE v1.0
//         </div>
//       </div>

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Orbitron:wght@700;900&display=swap');
//         @keyframes dotBlink {
//           0%, 100% { opacity: 1; transform: scale(1); }
//           50% { opacity: 0.3; transform: scale(0.7); }
//         }
//         @keyframes cursorBlink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }
//         @keyframes cornerPulse {
//           0%, 100% { opacity: 0.35; }
//           50% { opacity: 0.8; }
//         }
//         @keyframes shimmer {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(200%); }
//         }
//       `}</style>
//     </div>
//   )
// }








import { useState, useEffect } from 'react'

const STEPS = [
  { text: 'Initializing React Universe...', duration: 600 },
  { text: 'Mounting Root Node...', duration: 700 },
  { text: 'Rendering Components...', duration: 700 },
  { text: 'Hydrating State...', duration: 500 },
  { text: 'Painting to DOM...', duration: 400 },
]

export default function PageLoader({ onDone }) {
  const [activeLines, setActiveLines] = useState([])
  const [checkedLines, setCheckedLines] = useState([])
  const [barWidth, setBarWidth] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    // Lock scroll while loader is active
    document.body.style.overflow = 'hidden'
    window.scrollTo(0, 0)

    let elapsed = 0
    const totalTime = 2800

    STEPS.forEach((step, i) => {
      setTimeout(() => {
        setActiveLines(prev => [...prev, i])
        setBarWidth(Math.round(((i + 1) / STEPS.length) * 100))
      }, elapsed)

      setTimeout(() => {
        setCheckedLines(prev => [...prev, i])
      }, elapsed + step.duration * 0.7)

      elapsed += step.duration
    })

    // Force scroll=0 before exit, then unlock
    setTimeout(() => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      setExiting(true)

      setTimeout(() => {
        document.body.style.overflow = ''
        onDone()
      }, 700)
    }, totalTime)

    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 99999,
      background: '#0B0F19',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: exiting ? 0 : 1,
      transition: 'opacity 0.65s cubic-bezier(0.4,0,0.2,1)',
      pointerEvents: exiting ? 'none' : 'all',
      fontFamily: 'JetBrains Mono, monospace',
    }}>

      {/* Subtle grid overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,245,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,245,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
      }} />

      {/* Radial glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,245,255,0.06), transparent)',
        pointerEvents: 'none',
      }} />

      {/* Corner brackets */}
      {[
        { top: 24, left: 24, rotate: '0deg' },
        { top: 24, right: 24, rotate: '90deg' },
        { bottom: 24, right: 24, rotate: '180deg' },
        { bottom: 24, left: 24, rotate: '270deg' },
      ].map((pos, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: 28, height: 28,
          ...pos,
          borderTop: '1.5px solid rgba(0,245,255,0.35)',
          borderLeft: '1.5px solid rgba(0,245,255,0.35)',
          transform: `rotate(${pos.rotate})`,
          animation: 'cornerPulse 2.5s ease-in-out infinite',
          animationDelay: `${i * 0.2}s`,
        }} />
      ))}

      {/* Main content */}
      <div style={{ width: 'min(480px, 90vw)', display: 'flex', flexDirection: 'column', gap: 0 }}>

        {/* Logo / Title */}
        <div style={{ marginBottom: 44, textAlign: 'center' }}>
          <div style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: 11,
            color: 'rgba(0,245,255,0.5)',
            letterSpacing: 6,
            marginBottom: 10,
          }}>
            REACT UNIVERSE
          </div>
          <div style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: 'clamp(20px, 4vw, 28px)',
            fontWeight: 900,
            letterSpacing: 3,
            background: 'linear-gradient(135deg, #fff 40%, #00F5FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            MEHEDI HASAN
          </div>
        </div>

        {/* Terminal window */}
        <div style={{
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(0,245,255,0.15)',
          borderRadius: 10,
          overflow: 'hidden',
        }}>
          {/* Terminal header bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 7,
            padding: '10px 16px',
            background: 'rgba(255,255,255,0.03)',
            borderBottom: '1px solid rgba(0,245,255,0.08)',
          }}>
            <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#FF5F57' }} />
            <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#FEBC2E' }} />
            <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#28C840' }} />
            <span style={{ fontSize: 10, color: 'rgba(136,146,164,0.6)', letterSpacing: 2, marginLeft: 10 }}>
              SYSTEM_BOOT.tsx
            </span>
          </div>

          {/* Log lines */}
          <div style={{ padding: '20px 22px', minHeight: 150, display: 'flex', flexDirection: 'column', gap: 13 }}>
            {STEPS.map((step, i) => {
              const isActive = activeLines.includes(i)
              const isDone = checkedLines.includes(i)
              const isCurrent = activeLines.includes(i) && !isDone

              return (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'translateY(0)' : 'translateY(6px)',
                    transition: 'opacity 0.35s cubic-bezier(0.16,1,0.3,1), transform 0.35s cubic-bezier(0.16,1,0.3,1)',
                  }}
                >
                  <span style={{ width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {isDone ? (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="6" stroke="#22c55e" strokeWidth="1.5" fill="rgba(34,197,94,0.1)" />
                        <path d="M4.5 7l2 2 3-3" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <div style={{
                        width: 7, height: 7, borderRadius: '50%',
                        background: '#00F5FF',
                        boxShadow: '0 0 8px rgba(0,245,255,0.8)',
                        animation: isCurrent ? 'dotBlink 0.8s ease-in-out infinite' : 'none',
                      }} />
                    )}
                  </span>

                  <span style={{
                    fontSize: 12,
                    color: isDone ? 'rgba(255,255,255,0.5)' : isCurrent ? '#00F5FF' : 'rgba(255,255,255,0.3)',
                    letterSpacing: 1,
                    transition: 'color 0.4s',
                  }}>
                    {step.text}
                  </span>

                  {isCurrent && (
                    <span style={{
                      display: 'inline-block',
                      width: 7, height: 13,
                      background: '#00F5FF',
                      marginLeft: -6,
                      animation: 'cursorBlink 0.6s step-end infinite',
                      opacity: 0.9,
                    }} />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ marginTop: 24 }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 8,
          }}>
            <span style={{ fontSize: 9, color: 'rgba(0,245,255,0.5)', letterSpacing: 2 }}>MOUNTING</span>
            <span style={{ fontSize: 9, color: '#00F5FF', letterSpacing: 1, fontVariantNumeric: 'tabular-nums' }}>
              {barWidth}%
            </span>
          </div>
          <div style={{
            height: 2,
            background: 'rgba(0,245,255,0.1)',
            borderRadius: 2,
            overflow: 'hidden',
          }}>
            <div style={{
              height: '100%',
              width: `${barWidth}%`,
              background: 'linear-gradient(90deg, #7C3AED, #00F5FF)',
              borderRadius: 2,
              boxShadow: '0 0 12px rgba(0,245,255,0.6)',
              transition: 'width 0.6s cubic-bezier(0.16,1,0.3,1)',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                animation: 'shimmer 1.2s ease-in-out infinite',
              }} />
            </div>
          </div>
        </div>

        {/* Footer hint */}
        <div style={{
          marginTop: 28,
          textAlign: 'center',
          fontSize: 9,
          color: 'rgba(136,146,164,0.35)',
          letterSpacing: 2,
        }}>
          FRONTEND DEVELOPER · REACT UNIVERSE v1.0
        </div>
      </div>

      <style>{`
        @keyframes dotBlink {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.7); }
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes cornerPulse {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.8; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  )
}