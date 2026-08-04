export const easeOut = [0.22, 1, 0.36, 1];

export const fadeClip = {
  hidden: { opacity: 0, clipPath: 'inset(0 0 100% 0)' },
  visible: {
    opacity: 1,
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 0.85, ease: easeOut },
  },
};

export const fadeUpSoft = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export const scaleMask = {
  hidden: { opacity: 0, scale: 1.06, clipPath: 'inset(12% 18% 12% 18%)' },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 1.05, ease: easeOut },
  },
};

export const staggerContainer = (stagger = 0.08, delay = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

export const lineChild = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const reducedMotionVariant = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

export function getVariants(reduced, variants) {
  return reduced ? reducedMotionVariant : variants;
}
