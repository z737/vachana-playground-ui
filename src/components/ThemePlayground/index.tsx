import { useRef, useState, useEffect, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { X, Sun, Moon, ChevronDown } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { SYSTEMS, RADIUS_KEYS, RADIUS_LABELS, fontPrimaryMap, fontSecondaryMap, fontLabelMap } from '../../data/systems'

const PAGES = [
  { path: '/',                 label: 'Vachana STT' },
  { path: '/agent-config',     label: 'Inya Agent Config' },
  { path: '/agent-dashboard',  label: 'Aura Dashboard' },
]

export default function ThemePlayground() {
  const { state, setState, isPanelOpen, setPanelOpen, RAINBOW } = useTheme()
  const navigate  = useNavigate()
  const location  = useLocation()
  const panelRef  = useRef<HTMLDivElement>(null)

  // ── Drag state ──
  const [dragged, setDragged]   = useState(false)
  const dragState = useRef({ active: false, ox: 0, oy: 0 })

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (!panelRef.current) return
    const r = panelRef.current.getBoundingClientRect()
    dragState.current = { active: true, ox: e.clientX - r.left, oy: e.clientY - r.top }
    panelRef.current.style.transition = 'none'
    setDragged(true)
    panelRef.current.style.right = 'auto'
    panelRef.current.style.left  = r.left + 'px'
    panelRef.current.style.top   = r.top  + 'px'
  }, [])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!dragState.current.active || !panelRef.current) return
      panelRef.current.style.left = (e.clientX - dragState.current.ox) + 'px'
      panelRef.current.style.top  = (e.clientY - dragState.current.oy) + 'px'
    }
    const onUp = () => { dragState.current.active = false }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
    }
  }, [])

  // ── System change resets neutral/primary ──
  function onSystemChange(sys: string) {
    const s = SYSTEMS[sys as keyof typeof SYSTEMS]
    setState(prev => ({
      ...prev,
      system:  sys as typeof prev.system,
      neutral: s.neutrals[0].key,
      primary: s.primaries[0].key,
    }))
  }

  const sys = SYSTEMS[state.system]
  const radiusIdx = RADIUS_KEYS.indexOf(state.radius)

  if (!isPanelOpen) return null

  return (
    <div
      ref={panelRef}
      className={`theme-panel open${dragged ? ' dragged' : ''}`}
    >
      {/* Header / drag handle */}
      <div className="theme-panel-header" onMouseDown={onMouseDown}>
        <div className="theme-panel-title-group">
          <div className="theme-panel-drag-dots">
            <span /><span /><span />
          </div>
          <span className="theme-panel-title">Theme Playground</span>
        </div>
        <button className="theme-panel-close" onClick={() => setPanelOpen(false)}>
          <X size={14} strokeWidth={2.5} />
        </button>
      </div>

      <div className="theme-panel-body">

        {/* Page */}
        <div className="tp-section">
          <div className="tp-label">Page</div>
          <div className="tp-select-wrap">
            <select
              className="tp-select"
              value={location.pathname}
              onChange={e => navigate(e.target.value)}
            >
              {PAGES.map(p => (
                <option key={p.path} value={p.path}>{p.label}</option>
              ))}
            </select>
            <span className="tp-select-icon"><ChevronDown size={13} strokeWidth={2} /></span>
          </div>
        </div>

        {/* Mode */}
        <div className="tp-section">
          <div className="tp-label">Mode</div>
          <div className="tp-mode-row">
            {(['light','dark'] as const).map(m => (
              <button
                key={m}
                className={`tp-mode-btn${state.theme === m ? ' active' : ''}`}
                onClick={() => setState(prev => ({ ...prev, theme: m }))}
              >
                {m === 'light' ? <Sun size={14} strokeWidth={2} /> : <Moon size={14} strokeWidth={2} />}
                {m === 'light' ? 'Light' : 'Dark'}
              </button>
            ))}
          </div>
        </div>

        {/* Design System */}
        <div className="tp-section">
          <div className="tp-label">Design System</div>
          <div className="tp-system-row">
            {(Object.keys(SYSTEMS) as Array<keyof typeof SYSTEMS>).map(key => (
              <button
                key={key}
                className={`tp-system-btn${state.system === key ? ' active' : ''}`}
                onClick={() => onSystemChange(key)}
              >
                {SYSTEMS[key].label}
              </button>
            ))}
          </div>
        </div>

        {/* Neutral */}
        <div className="tp-section">
          <div className="tp-label">Neutral</div>
          <div className="tp-neutral-grid">
            {sys.neutrals.map(n => (
              <button
                key={n.key}
                className={`tp-neutral-btn${state.neutral === n.key ? ' active' : ''}`}
                onClick={() => setState(prev => ({ ...prev, neutral: n.key }))}
              >
                <span className="tp-neutral-swatch" style={{ background: n.swatch }} />
                <span className="tp-neutral-name">{n.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Primary Color */}
        <div className="tp-section">
          <div className="tp-label">Primary Color</div>
          <div className="tp-color-row">
            {sys.primaries.map(p => (
              <button
                key={p.key}
                className={`tp-color-dot${state.primary === p.key ? ' active' : ''}`}
                style={{ background: p.color }}
                title={p.name}
                onClick={() => setState(prev => ({ ...prev, primary: p.key }))}
              />
            ))}
            {/* Custom color dot */}
            <label
              className={`tp-color-dot tp-custom-dot${state.primary === 'custom' ? ' active' : ''}`}
              title="Custom"
              style={state.primary === 'custom'
                ? { backgroundColor: state.customColor, backgroundImage: 'none', borderRadius: '50%' }
                : { background: 'conic-gradient(hsl(0,100%,55%), hsl(30,100%,55%), hsl(60,100%,55%), hsl(90,100%,55%), hsl(120,100%,55%), hsl(150,100%,55%), hsl(180,100%,55%), hsl(210,100%,55%), hsl(240,100%,55%), hsl(270,100%,55%), hsl(300,100%,55%), hsl(330,100%,55%), hsl(360,100%,55%))', borderRadius: '50%' }
              }
            >
              <input
                type="color"
                value={state.customColor}
                onChange={e => {
                  const hex = e.target.value
                  setState(prev => ({ ...prev, primary: 'custom', customColor: hex }))
                }}
              />
            </label>
          </div>
        </div>

        {/* Corner Radius */}
        <div className="tp-section">
          <div className="tp-label">Corner Radius</div>
          <div className="tp-radius-wrap">
            <input
              type="range"
              className="tp-radius-range"
              min={0} max={3} step={1}
              value={radiusIdx}
              onChange={e => setState(prev => ({ ...prev, radius: RADIUS_KEYS[+e.target.value] }))}
            />
            <div className="tp-radius-ticks">
              {RADIUS_LABELS.map((lbl, i) => (
                <span
                  key={lbl}
                  className={radiusIdx === i ? 'active' : ''}
                  onClick={() => setState(prev => ({ ...prev, radius: RADIUS_KEYS[i] }))}
                >
                  {lbl}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Primary Font */}
        <div className="tp-section">
          <div className="tp-label">Primary Font</div>
          <div className="tp-select-wrap">
            <select
              className="tp-select"
              value={state.fontPrimary}
              onChange={e => setState(prev => ({ ...prev, fontPrimary: e.target.value }))}
            >
              {Object.keys(fontPrimaryMap).map(k => (
                <option key={k} value={k}>{fontPrimaryMap[k].split("'")[1]}</option>
              ))}
            </select>
            <span className="tp-select-icon"><ChevronDown size={13} strokeWidth={2} /></span>
          </div>
        </div>

        {/* Body Font */}
        <div className="tp-section">
          <div className="tp-label">Body Font</div>
          <div className="tp-select-wrap">
            <select
              className="tp-select"
              value={state.fontSecondary}
              onChange={e => setState(prev => ({ ...prev, fontSecondary: e.target.value }))}
            >
              {Object.keys(fontSecondaryMap).map(k => (
                <option key={k} value={k}>{fontSecondaryMap[k].split("'")[1]}</option>
              ))}
            </select>
            <span className="tp-select-icon"><ChevronDown size={13} strokeWidth={2} /></span>
          </div>
        </div>

        {/* Label Font */}
        <div className="tp-section">
          <div className="tp-label">Label Font</div>
          <div className="tp-select-wrap">
            <select
              className="tp-select"
              value={state.fontLabel}
              onChange={e => setState(prev => ({ ...prev, fontLabel: e.target.value }))}
            >
              {Object.keys(fontLabelMap).map(k => (
                <option key={k} value={k}>{fontLabelMap[k].split("'")[1]}</option>
              ))}
            </select>
            <span className="tp-select-icon"><ChevronDown size={13} strokeWidth={2} /></span>
          </div>
        </div>

      </div>
    </div>
  )
}
