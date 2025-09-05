// lib/motion.ts
import type { Variants } from 'framer-motion';

export const createCardVariants = (reduced: boolean): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: reduced ? 0 : 0.4 }
  },
  hover: {
    y: reduced ? 0 : -5,
    scale: reduced ? 1 : 1.03,
    boxShadow:
      '0 10px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
    transition: { duration: 0.2 }
  }
});

export const createContainerVariants = (reduced: boolean): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: reduced ? 0 : 0.1, delayChildren: 0.1 }
  }
});

export const createPageVariants = (reduced: boolean): Variants => ({
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: reduced ? 0 : 0.5, ease: 'easeInOut' }
  },
  exit: { opacity: 0, y: -20, transition: { duration: reduced ? 0 : 0.3 } }
});

export const createGalleryVariants = (): Variants => ({
  enter: (dir: number) => ({ x: dir > 0 ? 1000 : -1000, opacity: 0 }),
  center: { zIndex: 1, x: 0, opacity: 1 },
  exit: (dir: number) => ({ zIndex: 0, x: dir < 0 ? 1000 : -1000, opacity: 0 })
});

// ✅ just export a const; no need for AnimationProps typing
export const buttonTapAnimation = { scale: 0.95 } as const;

export const featureTagVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
};

export const formSuccessVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};
