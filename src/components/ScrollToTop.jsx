import { usePageScroll } from '../hooks/useScrollAnimation.js'

export default function ScrollToTop() {
  const progress = usePageScroll()
  const visible = progress > 0.2

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      title="Back to top"
      style={{
        position: 'fixed',
        bottom: 32,
        right: 32,
        width: 42,
        height: 42,
        borderRadius: '50%',
        background: 'var(--bg2)',
        border: '1px solid var(--border)',
        color: 'var(--cyan)',
        fontSize: 16,
        cursor: 'pointer',
        zIndex: 800,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.85)',
        transition: 'opacity 0.35s, transform 0.35s cubic-bezier(0.34,1.56,0.64,1)',
        pointerEvents: visible ? 'auto' : 'none',
        backdropFilter: 'blur(12px)',
        boxShadow: visible ? 'var(--glow-cyan)' : 'none',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'var(--cyan-dim)'
        e.currentTarget.style.borderColor = 'var(--cyan)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'var(--bg2)'
        e.currentTarget.style.borderColor = 'var(--border)'
      }}
    >
      ↑
    </button>
  )
}
