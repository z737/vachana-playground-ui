import React, { createContext, useContext, useState, useEffect } from 'react'
import {
  SYSTEMS, ALL_VAR_KEYS, RAINBOW,
  fontPrimaryMap, fontSecondaryMap, fontLabelMap, PURPLE_DEFAULT,
} from '../data/systems'
import type { DesignSystemKey, RadiusKey, ThemeMode } from '../data/systems'

// ===== TYPES =====
export interface ThemeState {
  system: DesignSystemKey
  theme: ThemeMode
  neutral: string
  primary: string
  customColor: string
  radius: RadiusKey
  fontPrimary: string
  fontSecondary: string
  fontLabel: string
}

interface ThemeContextValue {
  state: ThemeState
  setState: React.Dispatch<React.SetStateAction<ThemeState>>
  isPanelOpen: boolean
  setPanelOpen: (open: boolean) => void
  RAINBOW: string
}

// ===== COLOR UTILS =====
function hexToRgb(hex: string) {
  const h = hex.replace('#', '')
  return { r: parseInt(h.slice(0,2),16), g: parseInt(h.slice(2,4),16), b: parseInt(h.slice(4,6),16) }
}
function rgbToHex(r: number, g: number, b: number) {
  return '#' + [r,g,b].map(v => Math.min(255, Math.max(0, Math.round(v))).toString(16).padStart(2,'0')).join('')
}
function darken(hex: string, amt: number) {
  const {r,g,b} = hexToRgb(hex)
  return rgbToHex(r*(1-amt), g*(1-amt), b*(1-amt))
}
function lighten(hex: string, amt: number) {
  const {r,g,b} = hexToRgb(hex)
  return rgbToHex(r+(255-r)*amt, g+(255-g)*amt, b+(255-b)*amt)
}

// ===== HELPERS =====
function clearInlineVars() {
  ALL_VAR_KEYS.forEach(v => {
    document.documentElement.style.removeProperty(v)
    document.body.style.removeProperty(v)
  })
}
function applyVarsToRoot(vars: Record<string, string>) {
  // Apply to body so inline styles beat body[data-theme="dark"] CSS rules
  Object.entries(vars).forEach(([k,v]) => document.body.style.setProperty(k,v))
}
function applyCustomColor(hex: string, isDark: boolean) {
  const brand     = isDark ? lighten(hex, 0.12) : hex
  const brandDark = isDark ? hex : darken(hex, 0.25)
  const gradStart = lighten(brand, 0.18)
  const gradEnd   = darken(brand, 0.08)
  const avatarBg  = isDark ? darken(hex, 0.55) : lighten(hex, 0.72)
  const avatarText= isDark ? lighten(hex, 0.5)  : darken(hex, 0.45)
  applyVarsToRoot({
    '--brand': brand, '--brand-dark': brandDark,
    '--brand-gradient-start': gradStart, '--brand-gradient-end': gradEnd,
    '--org-avatar-bg': avatarBg, '--org-avatar-text': avatarText
  })
}

// ===== CONTEXT =====
const ThemeContext = createContext<ThemeContextValue | null>(null)

function readLS(key: string, fallback: string) {
  return localStorage.getItem(key) ?? fallback
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ThemeState>({
    system:        readLS('tp-system',       'tailwind')  as DesignSystemKey,
    theme:         readLS('tp-theme',        'light')     as ThemeMode,
    neutral:       readLS('tp-neutral',      'inya'),
    primary:       readLS('tp-primary',      'purple'),
    customColor:   readLS('tp-custom-color', '#7f56d9'),
    radius:        readLS('tp-radius',       'medium')    as RadiusKey,
    fontPrimary:   readLS('tp-font-primary', 'aspekta'),
    fontSecondary: readLS('tp-font-secondary','google-sans'),
    fontLabel:     readLS('tp-font-label',   'azeret'),
  })

  const [isPanelOpen, setPanelOpen] = useState(false)

  // ===== APPLY STATE =====
  useEffect(() => {
    const b = document.body
    const root = document.documentElement
    const isDark = state.theme === 'dark'

    b.dataset.theme  = state.theme
    b.dataset.radius = state.radius

    if (state.system === 'tailwind') {
      clearInlineVars()
      b.dataset.neutral = state.neutral
      b.dataset.primary = state.primary
      if (state.primary === 'custom') {
        applyCustomColor(state.customColor, isDark)
        applyVarsToRoot({ '--brand-btn': state.customColor, '--brand-btn-dark': darken(state.customColor, 0.12) })
      }
    } else {
      delete b.dataset.neutral
      delete b.dataset.primary

      const sys     = SYSTEMS[state.system]
      const neutral = sys.neutrals.find(n => n.key === state.neutral) || sys.neutrals[0]
      const primary = sys.primaries.find(p => p.key === state.primary)

      const neutralVars = isDark ? neutral.dark : neutral.light
      if (neutralVars) applyVarsToRoot(neutralVars)

      if (state.primary === 'custom') {
        applyCustomColor(state.customColor, isDark)
        const hex = state.customColor
        applyVarsToRoot({ '--brand-btn': hex, '--brand-btn-dark': darken(hex, 0.12) })
      } else if (primary?.vars) {
        applyVarsToRoot(isDark ? primary.vars.dark : primary.vars.light)
        applyVarsToRoot({
          '--brand-btn':      primary.vars.light['--brand'],
          '--brand-btn-dark': primary.vars.light['--brand-gradient-end'],
        })
      } else {
        applyVarsToRoot(isDark ? PURPLE_DEFAULT.dark : PURPLE_DEFAULT.light)
        applyVarsToRoot({
          '--brand-btn':      PURPLE_DEFAULT.light['--brand'],
          '--brand-btn-dark': PURPLE_DEFAULT.light['--brand-gradient-end'],
        })
      }
    }

    // Fonts
    root.style.setProperty('--font-serif',   fontPrimaryMap[state.fontPrimary]   || fontPrimaryMap['aspekta'])
    root.style.setProperty('--font-body',    fontSecondaryMap[state.fontSecondary] || fontSecondaryMap['google-sans'])
    root.style.setProperty('--font-poppins', fontSecondaryMap[state.fontSecondary] || fontSecondaryMap['google-sans'])
    root.style.setProperty('--font-mono',    fontLabelMap[state.fontLabel]   || fontLabelMap['azeret'])

    // Persist
    localStorage.setItem('tp-system',         state.system)
    localStorage.setItem('tp-theme',          state.theme)
    localStorage.setItem('tp-neutral',        state.neutral)
    localStorage.setItem('tp-primary',        state.primary)
    localStorage.setItem('tp-custom-color',   state.customColor)
    localStorage.setItem('tp-radius',         state.radius)
    localStorage.setItem('tp-font-primary',   state.fontPrimary)
    localStorage.setItem('tp-font-secondary', state.fontSecondary)
    localStorage.setItem('tp-font-label',     state.fontLabel)
  }, [state])

  return (
    <ThemeContext.Provider value={{ state, setState, isPanelOpen, setPanelOpen, RAINBOW }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider')
  return ctx
}
