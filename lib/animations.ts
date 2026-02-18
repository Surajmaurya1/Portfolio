
import { Variants, Transition } from "framer-motion";

// Easing
export const PALMER_EASE: [number, number, number, number] = [0.65, 0, 0.35, 1]; // cubic-bezier(0.65, 0, 0.35, 1)

// Transitions
export const smoothTransition: Transition = {
  duration: 0.7,
  ease: PALMER_EASE,
};

export const hoverTransition: Transition = {
  duration: 0.2, // Fast hover in
  ease: "easeOut",
};

export const staggerDelay = 0.05;

// Variants

// 1. Scroll-based reveal: fade in + move upward
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 }, // 32px is roughly 2rem
  visible: { 
    opacity: 1, 
    y: 0,
    transition: smoothTransition
  },
};

// 2. Text motion: Staggered animation for letters/words
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    }
  },
};

// 3. Image & project card animations: Scale in + Fade in
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: smoothTransition
  },
};

// 4. Hover micro-interactions
export const hoverScaleWrapper: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.03,
    transition: hoverTransition
  },
};

// 5. Page transitions (if needed, though Next.js handles route transitions)
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: smoothTransition
  },
  exit: { 
    opacity: 0, 
    y: -10,
    transition: smoothTransition 
  },
};

// Viewport config
export const viewportConfig = {
  once: true,
  margin: "-10% 0px -10% 0px", // Trigger slightly before entering/leaving
  amount: 0.2, // At least 20% visible
};
