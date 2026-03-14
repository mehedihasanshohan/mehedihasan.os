import { useRef, useEffect, useState } from 'react'

export default function Reveal({ children, direction = 'up', delay = 0, className = '', style = {} }) {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true) },
      { threshold: 0.12 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const dirClass = direction === 'left' ? 'reveal-left'
    : direction === 'right' ? 'reveal-right' : 'reveal'

  return (
    <div
      ref={ref}
      className={`${dirClass} ${vis ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  )
}
