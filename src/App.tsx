import { createPortal } from 'react-dom'
import { Routes, Route } from 'react-router-dom'
import ThemePlayground from './components/ThemePlayground'
import SpeechToTextPage from './pages/SpeechToText'
import AgentConfigPage from './pages/AgentConfig'
import AgentDashboardPage from './pages/AgentDashboard'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/"                element={<SpeechToTextPage />} />
        <Route path="/agent-config"    element={<AgentConfigPage />} />
        <Route path="/agent-dashboard" element={<AgentDashboardPage />} />
      </Routes>
      {createPortal(<ThemePlayground />, document.body)}
    </>
  )
}
