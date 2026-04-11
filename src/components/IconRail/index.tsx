import { LayoutGrid, Cpu, Plug, BookOpen, Settings2, Bell, Shield, HelpCircle } from 'lucide-react'

interface IconRailProps {
  logoSrc: string
  activeIndex?: number
}

const topIcons = [
  { icon: <LayoutGrid size={18} strokeWidth={1.8} />, title: 'Build', active: true },
  { icon: <Cpu size={18} strokeWidth={1.8} />,        title: 'Agents' },
  { icon: <Plug size={18} strokeWidth={1.8} />,       title: 'Integrations' },
  { icon: <BookOpen size={18} strokeWidth={1.8} />,   title: 'Knowledge' },
  { icon: <Settings2 size={18} strokeWidth={1.8} />,  title: 'Settings' },
]

const bottomIcons = [
  { icon: <Bell size={18} strokeWidth={1.8} /> },
  { icon: <Shield size={18} strokeWidth={1.8} /> },
  { icon: <HelpCircle size={18} strokeWidth={1.8} /> },
]

export default function IconRail({ logoSrc, activeIndex = 0 }: IconRailProps) {
  return (
    <div className="icon-rail">
      <div className="ir-top">
        <div className="ir-platform">
          <img src={logoSrc} alt="Logo" className="ir-logo" />
        </div>
        {topIcons.map((btn, i) => (
          <div key={i} className={`ir-btn${i === activeIndex ? ' active' : ''}`} title={btn.title}>
            {btn.icon}
          </div>
        ))}
      </div>
      <div className="ir-bottom">
        {bottomIcons.map((btn, i) => (
          <div key={i} className="ir-btn">{btn.icon}</div>
        ))}
        <div className="ir-avatar">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face" alt="User" />
        </div>
      </div>
    </div>
  )
}
