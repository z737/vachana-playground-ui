import { createPortal } from 'react-dom'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import ThemePlayground from './components/ThemePlayground'
import SpeechToTextPage from './pages/SpeechToText'
import AgentConfigPage from './pages/AgentConfig'
import AgentDashboardPage from './pages/AgentDashboard'
import PageTransition from './components/PageTransition'
import { useTheme } from './context/ThemeContext'

function ModeTransition() {
  const { state } = useTheme()
  return (
    <AnimatePresence>
      <motion.div
        key={state.theme}
        initial={{ opacity: 0.18 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        style={{
          position: 'fixed', inset: 0, zIndex: 9998,
          background: state.theme === 'dark' ? '#000' : '#fff',
          pointerEvents: 'none',
        }}
      />
    </AnimatePresence>
  )
}

export default function App() {
  const location = useLocation()
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/"                element={<PageTransition><SpeechToTextPage /></PageTransition>} />
          <Route path="/agent-config"    element={<PageTransition><AgentConfigPage /></PageTransition>} />
          <Route path="/agent-dashboard" element={<PageTransition><AgentDashboardPage /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      <ModeTransition />
      {createPortal(<ThemePlayground />, document.body)}
    </>
  )
}
