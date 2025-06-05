import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    // y: 20, // Optional: slide in from bottom
  },
  in: {
    opacity: 1,
    // y: 0,
  },
  out: {
    opacity: 0,
    // y: -20, // Optional: slide out to top
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate', // Or 'easeInOut' or Apple's cubic-bezier(0.4, 0, 0.2, 1)
  duration: 0.6, // Adjust duration for a luxurious feel
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition; 