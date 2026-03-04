'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ children }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');

    if (!hasVisited) {
      setLoading(true);

      setTimeout(() => {
        localStorage.setItem('hasVisited', 'true');
        setLoading(false);
      }, 2500); // ⏳ 2.5 second loading time
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          >
            <div className="text-center">

              {/* Brand Name */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                className="text-5xl md:text-6xl font-bold tracking-[0.3em] text-white"
              >
                WELCOME TO KAZI'S NATION
              </motion.h1>

              {/* Animated Line Loader */}
              <div className="mt-8 flex justify-center">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 200 }}
                  transition={{ duration: 3, ease: 'easeInOut' }}
                  className="h-[2px] bg-white"
                />
              </div>

              {/* Rotating Circle */}
              {/* <motion.div
                className="mt-8 w-10 h-10 border border-white rounded-full mx-auto"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: 'linear',
                }}
              /> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    </>
  );
}