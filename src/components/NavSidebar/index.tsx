import { useState } from 'react'
import { PanelLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import { slideLeft } from '../../lib/motionVariants'

interface NavItem {
  icon: React.ReactNode
  label: string
  href?: string
  badge?: string
  active?: boolean
}

interface NavSidebarProps {
  title: string
  items: NavItem[]
  activeLabel?: string
}

export default function NavSidebar({ title, items, activeLabel }: NavSidebarProps) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <motion.div
      className={`nav-sidebar${collapsed ? ' nav-sidebar-collapsed' : ''}`}
      {...slideLeft}
      transition={{ ...slideLeft.transition, delay: 0.05 }}
    >
      <div className="nav-sidebar-header">
        {!collapsed && <span className="nav-sidebar-title">{title}</span>}
        <button
          className="nav-sidebar-collapse-btn"
          onClick={() => setCollapsed(c => !c)}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <PanelLeft size={16} strokeWidth={1.8} />
        </button>
      </div>
      <nav className="nav-list">
        {items.map(item => (
          <a
            key={item.label}
            className={`nav-item${item.active || item.label === activeLabel ? ' active' : ''}${collapsed ? ' nav-item-icon-only' : ''}`}
            href={item.href ?? '#'}
            title={collapsed ? item.label : undefined}
          >
            {item.icon}
            {!collapsed && (
              <>
                {item.label}
                {item.badge && <span className="badge-beta">{item.badge}</span>}
              </>
            )}
          </a>
        ))}
      </nav>
    </motion.div>
  )
}
