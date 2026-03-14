// import { useEffect, useRef } from 'react'
// import { useTheme } from '../hooks/useTheme.jsx'

// export default function BgCanvas() {
//   const canvasRef = useRef(null)
//   const { dark } = useTheme()
//   const animRef = useRef(null)

//   useEffect(() => {
//     const canvas = canvasRef.current
//     const ctx = canvas.getContext('2d')
//     canvas.width = window.innerWidth
//     canvas.height = window.innerHeight

//     const color = dark ? '0,245,255' : '0,110,204'

//     const particles = Array.from({ length: 100 }, () => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       vx: (Math.random() - 0.5) * 0.25,
//       vy: (Math.random() - 0.5) * 0.25,
//       size: Math.random() * 2 + 0.8,
//       opacity: Math.random() * 0.6 + 0.3,
//     }))

//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height)
//       particles.forEach(p => {
//         p.x += p.vx; p.y += p.vy
//         if (p.x < 0) p.x = canvas.width
//         if (p.x > canvas.width) p.x = 0
//         if (p.y < 0) p.y = canvas.height
//         if (p.y > canvas.height) p.y = 0

//         ctx.beginPath()
//         ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
//         ctx.fillStyle = `rgba(${color},${p.opacity})`
//         ctx.fill()
//       })

//       particles.forEach((a, i) => {
//         particles.slice(i + 1).forEach(b => {
//           const dist = Math.hypot(a.x - b.x, a.y - b.y)
//           if (dist < 110) {
//             ctx.beginPath()
//             ctx.moveTo(a.x, a.y)
//             ctx.lineTo(b.x, b.y)
//             ctx.strokeStyle = `rgba(${color},${(1 - dist / 110) * 0.12})`
//             ctx.lineWidth = 0.5
//             ctx.stroke()
//           }
//         })
//       })
//       animRef.current = requestAnimationFrame(draw)
//     }
//     draw()

//     const resize = () => {
//       canvas.width = window.innerWidth
//       canvas.height = window.innerHeight
//     }
//     window.addEventListener('resize', resize)

//     return () => {
//       cancelAnimationFrame(animRef.current)
//       window.removeEventListener('resize', resize)
//     }
//   }, [dark])

//   return (
//     <canvas
//       ref={canvasRef}
//       style={{
//         position: 'fixed', inset: 0, zIndex: 0,
//         opacity: dark ? 0.35 : 0.2,
//         pointerEvents: 'none',
//       }}
//     />
//   )
// }



// import { useEffect, useRef } from 'react'
// import { useTheme } from '../hooks/useTheme.jsx'

// export default function BgCanvas() {
//   const canvasRef = useRef(null)
//   const { dark } = useTheme()
//   const animRef = useRef(null)

//   useEffect(() => {
//     const canvas = canvasRef.current
//     const ctx = canvas.getContext('2d')

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth
//       canvas.height = window.innerHeight
//     }

//     resizeCanvas()

//     const color = dark ? '200,255,255' : '0,110,204'

//     // ⭐ Particle System
//     const particles = Array.from({ length: 140 }, () => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       vx: (Math.random() - 0.5) * 0.25,
//       vy: (Math.random() - 0.5) * 0.25,
//       size: Math.random() * 2 + 0.8,
//       opacity: Math.random() * 0.6 + 0.3,
//       bright: Math.random() > 0.85
//     }))

//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height)

//       // ⭐ Draw particles
//       particles.forEach(p => {
//         p.x += p.vx
//         p.y += p.vy

//         if (p.x < 0) p.x = canvas.width
//         if (p.x > canvas.width) p.x = 0
//         if (p.y < 0) p.y = canvas.height
//         if (p.y > canvas.height) p.y = 0

//         ctx.beginPath()
//         ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)

//         if (p.bright) {
//           ctx.shadowBlur = 15
//           ctx.shadowColor = `rgba(${color},1)`
//         } else {
//           ctx.shadowBlur = 6
//           ctx.shadowColor = `rgba(${color},0.6)`
//         }

//         ctx.fillStyle = `rgba(${color},${p.opacity})`
//         ctx.fill()

//         ctx.shadowBlur = 0
//       })

//       // 🔗 Connection lines
//       particles.forEach((a, i) => {
//         particles.slice(i + 1).forEach(b => {
//           const dist = Math.hypot(a.x - b.x, a.y - b.y)

//           if (dist < 120) {
//             ctx.beginPath()
//             ctx.moveTo(a.x, a.y)
//             ctx.lineTo(b.x, b.y)

//             ctx.strokeStyle = `rgba(${color},${(1 - dist / 120) * 0.15})`
//             ctx.lineWidth = 0.6
//             ctx.stroke()
//           }
//         })
//       })

//       animRef.current = requestAnimationFrame(draw)
//     }

//     draw()

//     window.addEventListener('resize', resizeCanvas)

//     return () => {
//       cancelAnimationFrame(animRef.current)
//       window.removeEventListener('resize', resizeCanvas)
//     }
//   }, [dark])

//   return (
//     <canvas
//       ref={canvasRef}
//       style={{
//         position: 'fixed',
//         inset: 0,
//         zIndex: 0,
//         opacity: dark ? 0.45 : 0.25,
//         pointerEvents: 'none'
//       }}
//     />
//   )
// }








import { useEffect, useRef } from 'react'
import { useTheme } from '../hooks/useTheme.jsx'

export default function BgCanvas() {
  const canvasRef = useRef(null)
  const { dark } = useTheme()
  const animRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
    }

    resizeCanvas()

    const color = dark ? '0, 245, 255' : '0, 110, 204'
    const lineOpacityFactor = dark ? 0.15 : 0.25

    const particles = Array.from({ length: 140 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      size: Math.random() * 2 + 0.8,
      opacity: Math.random() * 0.6 + 0.3,
      bright: Math.random() > 0.85
    }))

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      // ⭐ Draw particles
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = window.innerWidth
        if (p.x > window.innerWidth) p.x = 0
        if (p.y < 0) p.y = window.innerHeight
        if (p.y > window.innerHeight) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)

        if (p.bright) {
          ctx.shadowBlur = dark ? 15 : 8
          ctx.shadowColor = `rgba(${color},1)`
        } else {
          ctx.shadowBlur = dark ? 6 : 4
          ctx.shadowColor = `rgba(${color},0.6)`
        }

        ctx.fillStyle = `rgba(${color},${p.opacity})`
        ctx.fill()
        ctx.shadowBlur = 0
      })

      //  Connection lines
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y)

          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)

            ctx.strokeStyle = `rgba(${color},${(1 - dist / 120) * lineOpacityFactor})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        })
      })

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    window.addEventListener('resize', resizeCanvas)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [dark])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        opacity: dark ? 0.45 : 0.8,
        pointerEvents: 'none'
      }}
    />
  )
}