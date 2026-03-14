import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './hooks/useTheme.jsx'
import Cursor from './components/Cursor.jsx'
import Nav from './components/Nav.jsx'
import TreeNav from './components/TreeNav.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import CommandPalette from './components/CommandPalette.jsx'
import PageLoader from './components/PageLoader.jsx'
import Home from './pages/Home.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <ThemeProvider>
      {/*
        Cursor, ScrollProgress, ScrollToTop are rendered OUTSIDE the animated
        wrapper div — any ancestor with transform/opacity/will-change creates a
        new stacking context that breaks position:fixed children.
      */}
      <Cursor />
      <ScrollProgress />
      <ScrollToTop />

      {/* Loader overlay */}
      {!loaded && <PageLoader onDone={() => setLoaded(true)} />}

      {/* Main content — animated wrapper (has transform, so cursor must stay above) */}
      <div style={{
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)',
        transitionDelay: loaded ? '0.05s' : '0s',
      }}>
        <Nav />
        {isHome && <TreeNav />}
        <CommandPalette />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}
