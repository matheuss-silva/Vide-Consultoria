export const easeOutExpo = [0.22, 1, 0.36, 1];

export const viewportConfig = {
  once: true,
  amount: 0.12,
  margin: "0px 0px 140px 0px",
};

export const fadeInUp = (delay = 0, distance = 28, amount = 0.22) => ({
  initial: { opacity: 0, y: distance, willChange: "transform, opacity" },
  whileInView: {
    opacity: 1,
    y: 0,
    transitionEnd: { willChange: "auto" },
  },
  viewport: { once: true, amount, margin: viewportConfig.margin },
  transition: {
    duration: 0.72,
    delay,
    ease: easeOutExpo,
  },
});

export const fadeInScale = (delay = 0, scale = 0.96, amount = 0.22) => ({
  initial: { opacity: 0, scale, willChange: "transform, opacity" },
  whileInView: {
    opacity: 1,
    scale: 1,
    transitionEnd: { willChange: "auto" },
  },
  viewport: { once: true, amount, margin: viewportConfig.margin },
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
  hidden: { opacity: 0, y: distance, willChange: "transform, opacity" },
  show: {
    opacity: 1,
    y: 0,
    transitionEnd: { willChange: "auto" },
    transition: {
      duration: 0.68,
      ease: easeOutExpo,
    },
  },
});
