'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { createGalleryVariants, buttonTapAnimation } from '@/lib/motion';

export default function Gallery({ images }: { images: { url: string; alt: string; }[]; }) {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(0);
  const [full, setFull] = useState(false);
  const reduced = useReducedMotion();
  const galleryVariants = createGalleryVariants();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'Escape' && full) setFull(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [current, full]);

  const next = () => { setDir(1); setCurrent((p) => (p + 1) % images.length); };
  const prev = () => { setDir(-1); setCurrent((p) => (p - 1 + images.length) % images.length); };

  const onDragEnd = (_: any, { offset }: any) => {
    const threshold = 50;
    if (offset.x < -threshold) next();
    else if (offset.x > threshold) prev();
  };

  return (
    <>
      <div className={`relative ${full ? 'fixed inset-0 z-50 bg-black' : 'rounded-2xl overflow-hidden'}`}>
        <div className={`relative w-full ${full ? 'h-screen' : 'aspect-[16/9]'}`}>
          <AnimatePresence initial={false} custom={dir}>
            <motion.div key={current} custom={dir} variants={galleryVariants}
              initial="enter" animate="center" exit="exit"
              transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: reduced ? 0 : 0.2 } }}
              drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={1} onDragEnd={onDragEnd}
              className="absolute w-full h-full">
              <Image src={images[current].url} alt={images[current].alt} fill
                className={`${full ? 'object-contain' : 'object-cover'}`} sizes="100vw" />
            </motion.div>
          </AnimatePresence>

          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 focus:outline-none" aria-label="Previous image">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 focus:outline-none" aria-label="Next image">
            <ChevronRight className="w-6 h-6" />
          </button>

          <button onClick={() => setFull((v) => !v)} className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 focus:outline-none"
            aria-label={full ? 'Exit fullscreen' : 'Enter fullscreen'}>
            {full ? <X className="w-6 h-6" /> : <ExpandIcon className="w-6 h-6" />}
          </button>

          <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {current + 1} / {images.length}
          </div>
        </div>

        {!full && (
          <div className="flex justify-center mt-4 space-x-2 px-4">
            {images.map((_, i) => (
              <motion.button key={i} whileTap={buttonTapAnimation} onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i); }}
                className={`w-2 h-2 rounded-full focus:outline-none ${current === i ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-700'}`}
                aria-label={`Go to image ${i + 1}`} />
            ))}
          </div>
        )}
      </div>

      {full && <div className="fixed inset-0 bg-black z-40" onClick={() => setFull(false)} />}
    </>
  );
}

const ExpandIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 3 21 3 21 9"></polyline>
    <polyline points="9 21 3 21 3 15"></polyline>
    <line x1="21" y1="3" x2="14" y2="10"></line>
    <line x1="3" y1="21" x2="10" y2="14"></line>
  </svg>
);
