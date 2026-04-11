import { useState } from 'react'
import {
  ChevronLeft, ChevronRight, ChevronDown, Code2, Bot, Users, BookMarked, Wrench,
  ArrowUpRight, Play, MoreHorizontal, TrendingUp, MessageSquare, HelpCircle, Palette, CheckCheck
} from 'lucide-react'
import InyaLogo from '../../assets/Inya Logo.png'
import AgentImage from '../../assets/agentimage.png'
import IconRail from '../../components/IconRail'
import NavSidebar from '../../components/NavSidebar'
import { useTheme } from '../../context/ThemeContext'

const navItems = [
  { icon: <Bot size={16} strokeWidth={1.8} />,         label: 'Agent',         active: true },
  { icon: <Users size={16} strokeWidth={1.8} />,       label: 'Workforce',     badge: 'Beta' },
  { icon: <BookMarked size={16} strokeWidth={1.8} />,  label: 'Knowledge Base' },
  { icon: <Wrench size={16} strokeWidth={1.8} />,      label: 'Tools' },
]

const settingsNav = [
  'System Prompt','Agent Details','Conversation Flow','Transcriber',
  'LLM Model','Voice','Telephony','Analytics','Variables','Others'
]

function SliderCard({ title, desc, withToggle = false }: { title: string; desc: string; withToggle?: boolean }) {
  const [val, setVal] = useState(0.5)
  const pct = (val / 1) * 100
  return (
    <div className="setting-card slider-card">
      <div className="slider-card-info">
        <div className="slider-card-title-row">
          <div className="slider-card-title">{title}</div>
          {withToggle && (
            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span className="toggle-track" />
            </label>
          )}
        </div>
        <div className="slider-card-desc">{desc}</div>
      </div>
      <div className="slider-card-controls">
        <input
          type="range" className="range-slider" min={0} max={1} step={0.1}
          value={val}
          style={{ background: `linear-gradient(to right, var(--brand) ${pct}%, var(--bg-item) ${pct}%)` }}
          onChange={e => setVal(+e.target.value)}
        />
        <div className="slider-value">{val.toFixed(1)}</div>
      </div>
    </div>
  )
}

export default function AgentConfigPage() {
  const { setPanelOpen } = useTheme()
  const [activeSettingsNav, setActiveSettingsNav] = useState('Transcriber')

  return (
    <div className="layout">
      <IconRail logoSrc={InyaLogo} />
      <NavSidebar title="Build" items={navItems} />

      <div className="main-wrap">
        {/* Topbar */}
        <header className="agent-topbar">
          <div className="topbar-left">
            <div className="topbar-back"><ChevronLeft size={16} strokeWidth={1.8} /></div>
            <div className="topbar-agent">
              <img src={AgentImage} alt="Agent" className="agent-icon-img" />
              <span className="topbar-agent-name">Appointment Booking Agent</span>
            </div>
            <div className="version-chip">
              <div className="version-env">
                <Code2 size={13} strokeWidth={1.8} className="version-env-icon" />
                <span className="version-env-label">Dev</span>
              </div>
              <div className="version-divider" />
              <div className="version-status">
                <span className="version-status-dot" />
                <span className="version-status-label">Draft</span>
                <ChevronDown size={12} strokeWidth={1.8} />
              </div>
            </div>
            <div className="version-saved">
              <CheckCheck size={14} strokeWidth={2.5} />
              <span>Saved</span>
            </div>
          </div>
          <div className="topbar-right">
            <button className="btn-promote">
              <ArrowUpRight size={14} strokeWidth={1.8} />
              Promote to Staging
            </button>
            <button className="btn-test">
              <Play size={14} strokeWidth={1.8} />
              Test
              <ChevronDown size={12} strokeWidth={1.8} />
            </button>
            <button className="btn-more"><MoreHorizontal size={16} strokeWidth={1.8} /></button>
            <button className="palette-btn" onClick={() => setPanelOpen(true)} aria-label="Theme playground">
              <Palette size={18} strokeWidth={1.8} />
            </button>
          </div>
        </header>

        {/* Sub Tabs */}
        <div className="sub-tabs">
          <div className="sub-tabs-left">
            {['Configuration','Integrations','Actions'].map(t => (
              <div key={t} className={`sub-tab${t === 'Configuration' ? ' active' : ''}`}>{t}</div>
            ))}
          </div>
          <div className="sub-tabs-right">
            <button className="sub-tab-btn"><TrendingUp size={14} strokeWidth={1.8} /> Analytics</button>
            <button className="sub-tab-btn"><MessageSquare size={14} strokeWidth={1.8} /> Conversation logs</button>
          </div>
        </div>

        {/* Content */}
        <div className="agent-content">
          {/* Settings Nav */}
          <div className="settings-nav">
            {settingsNav.map(item => (
              <div
                key={item}
                className={`settings-nav-item${activeSettingsNav === item ? ' active' : ''}`}
                onClick={() => setActiveSettingsNav(item)}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Settings Pane */}
          <div className="settings-pane">

            {/* Transcriber Settings */}
            <div className="setting-card">
              <div className="setting-card-heading">Transcriber Settings</div>
              <div className="setting-card-desc">Streamlines the customer experience, reduces wait times, and improves overall efficiency</div>
              <div className="card-divider" />
              <div className="form-row">
                <div className="form-field">
                  <div className="form-label">Provider <HelpCircle size={11} strokeWidth={2} /></div>
                  <div className="form-select-wrap">
                    <select className="form-select">
                      <option>deepgram</option><option>assemblyai</option><option>openai</option>
                    </select>
                    <span className="form-select-icon"><ChevronDown size={14} strokeWidth={2} /></span>
                  </div>
                </div>
                <div className="form-field">
                  <div className="form-label">Model <HelpCircle size={11} strokeWidth={2} /></div>
                  <div className="form-select-wrap">
                    <select className="form-select">
                      <option>Nova 2</option><option>Nova</option><option>Enhanced</option>
                    </select>
                    <span className="form-select-icon"><ChevronDown size={14} strokeWidth={2} /></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Allow Interruptions */}
            <div className="setting-card">
              <div className="toggle-card-header">
                <div className="toggle-card-title">Allow Interruptions <HelpCircle size={14} strokeWidth={1.8} /></div>
                <label className="toggle"><input type="checkbox" defaultChecked /><span className="toggle-track" /></label>
              </div>
              <div className="toggle-card-desc">Allows you to access an interactive virtual assistant designed to help with a variety of tasks.</div>
            </div>

            {/* Interrupt Initial Message */}
            <div className="setting-card">
              <div className="toggle-card-header">
                <div className="toggle-card-title">Interrupt Initial Message <HelpCircle size={14} strokeWidth={1.8} /></div>
                <label className="toggle"><input type="checkbox" defaultChecked /><span className="toggle-track" /></label>
              </div>
              <div className="toggle-card-desc">Allows you to access an interactive virtual assistant designed to help with a variety of tasks.</div>
            </div>

            <SliderCard
              title="Background Noise Filtering"
              desc="Adjust how sensitive the interruption feature is to background noise"
              withToggle
            />
            <SliderCard title="Max Speech Duration" desc="Maximum time the agent listens for continuous speech before stopping." />
            <SliderCard title="Initial Silence Timeout" desc="Time to wait for user to start speaking before canceling recognition." />
            <SliderCard title="End Silence Timeout" desc="Time to wait after the user stops speaking before ending recognition." />

          </div>
        </div>
      </div>
    </div>
  )
}
