import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef   = useRef(null)
  const dotRef    = useRef(null)

  useEffect(() => {
    const mouse  = { x: -300, y: -300 }
    const smooth = { x: -300, y: -300 }
    const ring   = { x: -300, y: -300 }
    let raf = null
    let isHover = false

    const setTransform = (el, x, y, extra = '') =>
      el && (el.style.transform = `translate(${x}px, ${y}px)${extra}`)

    const show = (v) => {
      const o = v ? '1' : '0'
      ;[cursorRef, ringRef, dotRef].forEach(r => {
        if (r.current) r.current.style.opacity = o
      })
    }

    const onMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY

      // On first move: snap everything so nothing flies in from off-screen
      if (smooth.x === -300) {
        smooth.x = ring.x = mouse.x
        smooth.y = ring.y = mouse.y
        show(true)
      }
    }

    const onOver = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, select')) {
        isHover = true
        if (cursorRef.current) {
          cursorRef.current.style.fontSize  = '11px'
          cursorRef.current.style.color     = '#A78BFA'
          cursorRef.current.style.textShadow= '0 0 12px rgba(167,139,250,0.9)'
        }
        if (ringRef.current) {
          ringRef.current.style.width        = '52px'
          ringRef.current.style.height       = '52px'
          ringRef.current.style.borderColor  = 'rgba(167,139,250,0.4)'
          ringRef.current.style.marginLeft   = '-26px'
          ringRef.current.style.marginTop    = '-26px'
        }
      }
    }

    const onOut = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, select')) {
        isHover = false
        if (cursorRef.current) {
          cursorRef.current.style.fontSize   = '14px'
          cursorRef.current.style.color      = '#00F5FF'
          cursorRef.current.style.textShadow = '0 0 10px rgba(0,245,255,0.7)'
        }
        if (ringRef.current) {
          ringRef.current.style.width        = '38px'
          ringRef.current.style.height       = '38px'
          ringRef.current.style.borderColor  = 'rgba(0,245,255,0.25)'
          ringRef.current.style.marginLeft   = '-19px'
          ringRef.current.style.marginTop    = '-19px'
        }
      }
    }

    const lerp = (a, b, t) => a + (b - a) * t

    const tick = () => {
      // Smooth cursor — 20% each frame (~responsive)
      smooth.x = lerp(smooth.x, mouse.x, 0.20)
      smooth.y = lerp(smooth.y, mouse.y, 0.20)

      // Ring — 10% each frame (floaty)
      ring.x = lerp(ring.x, mouse.x, 0.10)
      ring.y = lerp(ring.y, mouse.y, 0.10)

      // Apply via transform — GPU composited, no layout reflow
      setTransform(cursorRef.current, smooth.x, smooth.y)
      setTransform(ringRef.current,   ring.x,   ring.y)
      setTransform(dotRef.current,    mouse.x,  mouse.y)   // dot: exact

      raf = requestAnimationFrame(tick)
    }

    document.addEventListener('mousemove',  onMove,              { passive: true })
    document.addEventListener('mouseleave', () => show(false))
    document.addEventListener('mouseenter', () => { if (smooth.x !== -300) show(true) })
    document.addEventListener('mouseover',  onOver)
    document.addEventListener('mouseout',   onOut)

    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove',  onMove)
      document.removeEventListener('mouseleave', () => show(false))
      document.removeEventListener('mouseenter', () => show(true))
      document.removeEventListener('mouseover',  onOver)
      document.removeEventListener('mouseout',   onOut)
    }
  }, [])

  return (
    <>
      {/* <> label — smoothly lerped */}
      <div
        ref={cursorRef}
        style={{
          position:     'fixed',
          top:          0,
          left:         0,
          pointerEvents:'none',
          zIndex:       99999,
          opacity:      0,
          fontFamily:   'JetBrains Mono, monospace',
          fontSize:     '14px',
          fontWeight:   700,
          color:        '#00F5FF',
          textShadow:   '0 0 10px rgba(0,245,255,0.7)',
          userSelect:   'none',
          lineHeight:   1,
          whiteSpace:   'nowrap',
          // offset so the text is centered on the pointer
          marginLeft:   '-11px',
          marginTop:    '-9px',
          // only transition decorative props, NOT transform (rAF owns that)
          transition:   'color 0.2s ease, font-size 0.2s ease, text-shadow 0.2s ease, opacity 0.3s ease',
          willChange:   'transform',
        }}
      >
        &lt;&gt;
      </div>

      {/* Glow ring — floaty, lags behind */}
      <div
        ref={ringRef}
        style={{
          position:     'fixed',
          top:          0,
          left:         0,
          pointerEvents:'none',
          zIndex:       99997,
          opacity:      0,
          width:        '38px',
          height:       '38px',
          borderRadius: '50%',
          border:       '1px solid rgba(0,245,255,0.25)',
          boxShadow:    '0 0 10px rgba(0,245,255,0.07)',
          // center the circle on the point
          marginLeft:   '-19px',
          marginTop:    '-19px',
          transition:   'width 0.3s ease, height 0.3s ease, border-color 0.2s ease, margin 0.3s ease, opacity 0.3s ease',
          willChange:   'transform',
        }}
      />

      {/* Sharp dot — snaps to exact mouse position, no lerp */}
      <div
        ref={dotRef}
        style={{
          position:     'fixed',
          top:          0,
          left:         0,
          pointerEvents:'none',
          zIndex:       99998,
          opacity:      0,
          width:        '4px',
          height:       '4px',
          borderRadius: '50%',
          background:   '#00F5FF',
          boxShadow:    '0 0 6px rgba(0,245,255,1)',
          marginLeft:   '-2px',
          marginTop:    '-2px',
          transition:   'opacity 0.3s ease',
          willChange:   'transform',
        }}
      />
    </>
  )
}
