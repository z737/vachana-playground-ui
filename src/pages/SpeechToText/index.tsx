import { useState } from 'react'
import { Download, Sparkles, Plus, Palette, Clock, Mic, Cpu, Languages, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import Sidebar from '../../components/Sidebar'
import { useTheme } from '../../context/ThemeContext'
import { blurUp, slideRight, scaleIn } from '../../lib/motionVariants'

export default function SpeechToTextPage() {
  const { setPanelOpen } = useTheme()
  const [activeTab, setActiveTab] = useState<'realtime' | 'manual'>('realtime')
  const [activeNavTab, setActiveNavTab] = useState<'playground' | 'code'>('playground')
  const [model, setModel] = useState('Gnani Vachana V1.1')
  const [language, setLanguage] = useState('Auto-Detect')

  return (
    <div className="layout">
      <Sidebar />

      <main className="main-wrap">
        {/* Page Header */}
        <header className="page-header">
          <motion.h1 className="page-title" {...blurUp}>Speech To Text</motion.h1>
          <div className="page-actions">
            <button className="btn-download" aria-label="Download">
              <Download size={20} strokeWidth={1.8} />
            </button>
            <div className="btn-upgrade">
              <Sparkles size={20} strokeWidth={1.8} />
              <span className="btn-upgrade-text">Upgrade</span>
            </div>
            <button className="btn-create">
              <Plus size={20} strokeWidth={2} />
              <span className="btn-create-text">Create</span>
            </button>
            <button className="palette-btn" onClick={() => setPanelOpen(true)} aria-label="Theme playground">
              <Palette size={18} strokeWidth={1.8} />
            </button>
          </div>
        </header>

        {/* Tab Navigation */}
        <nav className="tab-header">
          <div className="tab-list">
            <div
              className={`tab-item${activeNavTab === 'playground' ? ' active' : ''}`}
              onClick={() => setActiveNavTab('playground')}
            >
              <span className="tab-item-label">Playground</span>
            </div>
            <div
              className={`tab-item${activeNavTab === 'code' ? ' active' : ''}`}
              onClick={() => setActiveNavTab('code')}
            >
              <span className="tab-item-label">Code Sample</span>
            </div>
          </div>
          <button className="history-btn">
            <Clock size={20} strokeWidth={1.8} />
            <span className="history-btn-text">History</span>
          </button>
        </nav>

        {/* Content */}
        <div className="content-area">
          <div className="inner-content">
            <div className="content-center">

              {/* Toggle */}
              <div className="tab-toggle">
                <div
                  className={`tab-toggle-item${activeTab === 'realtime' ? ' active' : ''}`}
                  onClick={() => setActiveTab('realtime')}
                >
                  Real-time
                </div>
                <div
                  className={`tab-toggle-item${activeTab === 'manual' ? ' active' : ''}`}
                  onClick={() => setActiveTab('manual')}
                >
                  Manual
                </div>
              </div>

              {/* Hero text */}
              <motion.p className="hero-text" {...blurUp} transition={{ ...blurUp.transition, delay: 0.1 }}>
                Speak in any languages and see<br />the live transcription
              </motion.p>

              {/* Mic */}
              <div className="mic-section">
                <motion.button className="mic-button" aria-label="Start speaking" {...scaleIn}>
                  <Mic size={48} strokeWidth={1.8} color="white" />
                </motion.button>
                <span className="start-speaking">Start Speaking</span>
              </div>

            </div>
          </div>

          {/* Config Panel */}
          <motion.aside className="config-panel" {...slideRight}>
            {/* Model */}
            <div className="config-section">
              <div className="config-section-header">
                <div className="config-icon-box">
                  <Cpu size={20} strokeWidth={1.8} />
                </div>
                <div className="config-section-text">
                  <span className="config-label">Model</span>
                  <span className="config-sublabel">Select the transcription engine</span>
                </div>
              </div>
              <div className="model-card">
                <div className="config-dropdown">
                  <span className="config-dropdown-value">{model}</span>
                  <ChevronDown size={20} strokeWidth={1.8} />
                </div>
                <p className="model-card-desc">
                  Our Flagship model, optimised for Indian languages &amp; accents with high STT accuracy
                </p>
              </div>
            </div>

            <div className="config-divider" />

            {/* Input Language */}
            <div className="config-section">
              <div className="config-section-header">
                <div className="config-icon-box">
                  <Languages size={20} strokeWidth={1.8} />
                </div>
                <div className="config-section-text">
                  <span className="config-label">Input Language</span>
                  <span className="config-sublabel">10 Indian Languages available</span>
                </div>
              </div>
              <div className="config-dropdown">
                <span className="config-dropdown-value">{language}</span>
                <ChevronDown size={20} strokeWidth={1.8} />
              </div>
            </div>
          </motion.aside>
        </div>
      </main>
    </div>
  )
}
