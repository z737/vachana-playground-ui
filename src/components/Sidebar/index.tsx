import { AlignLeft, Brain, AudioLines, Mic, Languages, ScanFace, KeyRound, BarChart3, CreditCard, BookOpen, ChevronDown, ChevronsUpDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'
import VachanaLogo from '../../assets/Logo.png'
import { slideLeft } from '../../lib/motionVariants'

interface NavItem {
  icon: React.ReactNode
  label: string
  active?: boolean
}

interface NavSection {
  label: string
  items: NavItem[]
}

const navSections: NavSection[] = [
  {
    label: 'Intelligence',
    items: [
      { icon: <AlignLeft size={16} strokeWidth={1.8} />, label: 'Speech to Text', active: true },
      { icon: <Brain size={16} strokeWidth={1.8} />,     label: 'Speech Understanding' },
    ]
  },
  {
    label: 'Voice',
    items: [
      { icon: <AudioLines size={16} strokeWidth={1.8} />, label: 'Text to Speech' },
      { icon: <Mic size={16} strokeWidth={1.8} />,        label: 'Voice Cloning' },
    ]
  },
  {
    label: 'Others',
    items: [
      { icon: <Languages size={16} strokeWidth={1.8} />,  label: 'Translate' },
      { icon: <ScanFace size={16} strokeWidth={1.8} />,   label: 'Voice Biometrics' },
      { icon: <KeyRound size={16} strokeWidth={1.8} />,   label: 'API Keys' },
      { icon: <BarChart3 size={16} strokeWidth={1.8} />,  label: 'Usage' },
      { icon: <CreditCard size={16} strokeWidth={1.8} />, label: 'Billing' },
    ]
  }
]

export default function Sidebar() {
  useTheme() // ensures sidebar re-renders on theme change

  return (
    <motion.aside className="sidebar" {...slideLeft}>
      <div className="sidebar-top">
        <div className="sidebar-header">
          {/* Platform switch */}
          <div className="platform-switch">
            <div className="platform-switch-left">
              <div className="platform-avatar">
                <img src={VachanaLogo} alt="Vachana" onError={e => { (e.target as HTMLImageElement).style.display='none' }} />
              </div>
              <div className="platform-name-group">
                <span className="platform-name">Vachana</span>
                <span className="badge">Free</span>
              </div>
            </div>
          </div>

          {/* Org selector */}
          <div className="org-selector">
            <div className="org-selector-left">
              <div className="org-avatar"><span className="org-avatar-text">AO</span></div>
              <span className="org-name">Personal Org</span>
            </div>
            <div className="chevron-vertical"><ChevronsUpDown size={16} strokeWidth={1.8} /></div>
          </div>
        </div>

        {/* Nav sections */}
        <div className="nav-sections">
          {navSections.map(section => (
            <div key={section.label}>
              <div className="nav-section-label">{section.label}</div>
              <div className="nav-items">
                {section.items.map(item => (
                  <a key={item.label} className={`nav-item${item.active ? ' active' : ''}`} href="#">
                    {item.icon}
                    <span className="nav-item-label">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-bottom">
        <div className="sidebar-bottom-nav">
          <div className="nav-items">
            <a className="nav-item" href="#">
              <BookOpen size={16} strokeWidth={1.8} />
              <span className="nav-item-label">Documentation</span>
            </a>
          </div>
        </div>

        {/* Credits pill */}
        <div className="credits-section">
          <div className="credits-pill">
            <div className="credits-ring">
              <svg viewBox="0 0 32 32">
                <circle className="track" cx="16" cy="16" r="12"/>
                <circle className="progress" cx="16" cy="16" r="12"/>
              </svg>
            </div>
            <div className="credits-info">
              <span className="credits-label">Credits Left</span>
              <span className="credits-value">62.1k of 75k</span>
            </div>
          </div>
        </div>

        {/* User profile */}
        <div className="user-profile">
          <div className="user-avatar">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face" alt="Olivia Rhye" />
          </div>
          <div className="user-info">
            <div className="user-details">
              <span className="user-name">Olivia Rhye</span>
              <span className="user-org">oliviarhye's org</span>
            </div>
            <div className="chevron-vertical"><ChevronsUpDown size={16} strokeWidth={1.8} /></div>
          </div>
        </div>
      </div>
    </motion.aside>
  )
}
