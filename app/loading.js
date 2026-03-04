'use client';

import { motion } from 'framer-motion';

export default function loading() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
    >
      <div className="text-center text-white">
        <motion.div
          className="w-10 h-10 border border-white rounded-full mx-auto"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
        />
        <p className="mt-4 tracking-widest text-sm">LOADING</p>
      </div>
    </motion.div>
  );
}