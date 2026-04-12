import type { Variants, Transition } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1] as const

export const EASE = ease

// Slide from left — sidebars
export const slideLeft: { initial: object; animate: object; transition: Transition } = {
  initial:    { x: -20, opacity: 0 },
  animate:    { x: 0,   opacity: 1 },
  transition: { duration: 0.26, ease },
}

// Slide from right — config panels
export const slideRight: { initial: object; animate: object; transition: Transition } = {
  initial:    { x: 20, opacity: 0 },
  animate:    { x: 0,  opacity: 1 },
  transition: { duration: 0.26, ease, delay: 0.06 },
}

// Blur-up — headings and hero text
export const blurUp: { initial: object; animate: object; transition: Transition } = {
  initial:    { opacity: 0, y: 8, filter: 'blur(6px)' },
  animate:    { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.3, ease },
}

// Stagger container
export const staggerContainer: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.055, delayChildren: 0.05 } },
}

// Stagger child — cards
export const fadeUp: Variants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.22, ease } },
}

// Scale-in — mic button, focal elements
export const scaleIn: { initial: object; animate: object; transition: Transition } = {
  initial:    { opacity: 0, scale: 0.88 },
  animate:    { opacity: 1, scale: 1 },
  transition: { duration: 0.28, ease, delay: 0.16 },
}
