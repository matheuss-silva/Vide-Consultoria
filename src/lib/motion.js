export const easeOutExpo = [0.22, 1, 0.36, 1];

export const viewportConfig = {
  once: true,
  amount: 0.22,
};

export const fadeInUp = (delay = 0, distance = 28, amount = 0.22) => ({
  initial: { opacity: 0, y: distance },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount },
  transition: {
    duration: 0.72,
    delay,
    ease: easeOutExpo,
  },
});

export const fadeInScale = (delay = 0, scale = 0.96, amount = 0.22) => ({
  initial: { opacity: 0, scale },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount },
  transition: {
    duration: 0.72,
    delay,
    ease: easeOutExpo,
  },
});

export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const staggerItem = (distance = 28) => ({
  hidden: { opacity: 0, y: distance },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.68,
      ease: easeOutExpo,
    },
  },
});
