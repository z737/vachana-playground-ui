import type { Variants, Transition } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

// Slide from left — sidebars
export const slideLeft = {
  initial:    { x: -20, opacity: 0 } as const,
  animate:    { x: 0,   opacity: 1 } as const,
  transition: { duration: 0.26, ease } satisfies Transition,
}

// Slide from right — config panels
export const slideRight = {
  initial:    { x: 20, opacity: 0 } as const,
  animate:    { x: 0,  opacity: 1 } as const,
  transition: { duration: 0.26, ease, delay: 0.06 } satisfies Transition,
}

// Blur-up — headings and hero text
export const blurUp = {
  initial:    { opacity: 0, y: 8, filter: 'blur(6px)' } as const,
  animate:    { opacity: 1, y: 0, filter: 'blur(0px)' } as const,
  transition: { duration: 0.3, ease } satisfies Transition,
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
export const scaleIn = {
  initial:    { opacity: 0, scale: 0.88 } as const,
  animate:    { opacity: 1, scale: 1 } as const,
  transition: { duration: 0.28, ease, delay: 0.16 } satisfies Transition,
}
