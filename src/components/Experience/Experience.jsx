import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { experience, experienceSection } from '../../data/info';
import { fadeUpSoft, getVariants, staggerContainer } from '../../lib/motion';
import { usePrefersReducedMotion } from '../../lib/hooks';
import styles from './Experience.module.css';

export default function Experience() {
  const reduced = usePrefersReducedMotion();
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return undefined;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const view = window.innerHeight;
      const total = rect.height + view * 0.35;
      const passed = view * 0.35 - rect.top;
      const next = Math.min(1, Math.max(0, passed / total));
      setProgress(next);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <motion.div
          variants={getVariants(reduced, fadeUpSoft)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="eyebrow">{experienceSection.tag}</p>
          <h2 className={`display ${styles.title}`}>{experienceSection.title}</h2>
        </motion.div>

        <div className={styles.track} ref={trackRef}>
          <div className={styles.line} aria-hidden="true">
            <span style={{ transform: `scaleY(${progress})` }} />
          </div>

          <motion.ol
            className={styles.list}
            variants={getVariants(reduced, staggerContainer(0.1))}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {experience.map((item) => (
              <motion.li key={item.id} className={styles.item} variants={fadeUpSoft}>
                <div className={styles.dot} aria-hidden="true" />
                <div className={styles.meta}>
                  <time>{item.period}</time>
                  {item.current ? <span className={styles.now}>Actual</span> : null}
                </div>
                <h3>{item.role}</h3>
                <p className={styles.company}>{item.company}</p>
                <p className={styles.desc}>{item.desc}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
