import { Variants, Transition } from "framer-motion";

// Easing
export const MASON_EASE: [number, number, number, number] = [0.65, 0, 0.35, 1];

// Transitions
export const smoothTransition: Transition = {
  duration: 0.6,
  ease: MASON_EASE,
};

export const hoverTransition: Transition = {
  duration: 0.3,
  ease: "easeOut",
};

export const staggerDelay = 0.04;

// Variants

// 1. Scroll-based reveal: fade in + move upward
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
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
  hidden: { opacity: 0, y: 28 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: MASON_EASE,
    }
  },
};

// 3. Image & project card animations: Scale in + Fade in
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
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

// Video/Grain overlays
export const grainOverlay: Variants = {
  animate: {
    x: ["0%", "-5%", "-15%", "7%", "-5%", "-25%", "15%", "0%"],
    y: ["0%", "-10%", "5%", "-25%", "8%", "15%", "-5%", "0%"],
    transition: {
      duration: 8,
      ease: "linear",
      repeat: Infinity,
    }
  }
};

// Viewport config
export const viewportConfig = {
  once: true,
  margin: "-10% 0px -10% 0px", // Trigger slightly before entering/leaving
  amount: 0.2, // At least 20% visible
};
