// ============================================
// REUSABLE ANIMATION VARIANTS FOR FRAMER MOTION
// ============================================

// Fade animations
export const fadeIn = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const fadeDown = {
  hidden: { opacity: 0, y: -40 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

export const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

// Scale animations
export const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

export const popIn = {
  hidden: { opacity: 0, scale: 0.5 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 20 
    }
  }
};

export const bounceIn = {
  hidden: { opacity: 0, scale: 0, y: 20 },
  show: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 15 
    }
  }
};

// Stagger container - untuk animasi berurutan
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren
    }
  }
});

// Stagger item - child dari stagger container
export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

// Slide animations
export const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

export const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

// Floating animation - untuk elemen dekoratif
export const floating = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const floatingSlow = {
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Pulse animation
export const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Rotate animation
export const rotateSlow = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

// Glow animation for hover
export const glowHover = {
  rest: { 
    boxShadow: "0 0 0 rgba(59, 130, 246, 0)",
    scale: 1 
  },
  hover: { 
    boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)",
    scale: 1.05,
    transition: { duration: 0.3 }
  }
};

// Text reveal animation
export const textReveal = {
  hidden: { 
    opacity: 0, 
    y: 20,
    filter: "blur(10px)"
  },
  show: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

// Card hover effect
export const cardHover = {
  rest: { 
    y: 0,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
  },
  hover: { 
    y: -8,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

// Timeline grow animation
export const timelineGrow = {
  hidden: { scaleY: 0, originY: 0 },
  show: { 
    scaleY: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
  }
};

// Counter animation helper
export const counterVariants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

// Parallax scroll helper (use with useTransform)
export const parallaxValues = {
  slow: [0, -50],
  medium: [0, -100],
  fast: [0, -200]
};

// Wave animation for backgrounds
export const wave = {
  animate: {
    x: [0, -1000],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

// Shimmer effect
export const shimmer = {
  animate: {
    backgroundPosition: ["200% 0", "-200% 0"],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear"
    }
  }
};
