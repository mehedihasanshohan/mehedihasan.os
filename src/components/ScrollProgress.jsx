import { usePageScroll } from '../hooks/useScrollAnimation.js'

export default function ScrollProgress() {
  const progress = usePageScroll()
  const pct = Math.round(progress * 100)

  return (
    <>
      <div className="scroll-bar" style={{ width: `${pct}%` }} />
      <div className="scroll-label">RENDER PROGRESS: {pct}%</div>
    </>
  )
}
