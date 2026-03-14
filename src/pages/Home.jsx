import BgCanvas from '../components/BgCanvas.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Skills from '../components/Skills.jsx'
import Projects from '../components/Projects.jsx'
import Experiments from '../components/Experiments.jsx'
import Contact from '../components/Contact.jsx'

export default function Home() {
  return (
    <>
      <BgCanvas />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <Experiments /> */}
      <Contact />
      <footer style={{
        textAlign:'center', padding:'40px 24px',
        fontSize:10, color:'rgba(247, 247, 247, 0.45)',
        letterSpacing:2,
        borderTop:'1px solid var(--border2)',
        position:'relative', zIndex:1,
      }}>
        <div style={{ marginBottom:8, fontFamily:'Orbitron,sans-serif', fontSize:11, color:'var(--cyan)', letterSpacing:3 }}>
          MEHEDI HASAN
        </div>
        <div>Built with React Universe · © 2026 · All components rendered</div>
        <div style={{ marginTop:8, fontSize:9, opacity:0.9 }}>Press ⌘K for Command Palette</div>
      </footer>
    </>
  )
}
