'use client';
import type { Variants } from 'framer-motion';

export const fadeUp = (reduced: boolean): Variants => ({
  hidden: { opacity: 0, y: reduced ? 0 : 20 },
  show: { opacity: 1, y: 0, transition: { duration: reduced ? 0 : 0.5 } },
});

export const stagger = (reduced: boolean): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: reduced ? 0 : 0.08, delayChildren: 0.1 },
  },
});
