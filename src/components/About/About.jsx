import { motion } from 'motion/react';
import { about } from '../../data/info';
import { fadeUpSoft, getVariants, staggerContainer } from '../../lib/motion';
import { usePrefersReducedMotion } from '../../lib/hooks';
import styles from './About.module.css';

export default function About() {
  const reduced = usePrefersReducedMotion();
  const [lead, ...rest] = about.paragraphs;

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <motion.div
          variants={getVariants(reduced, staggerContainer(0.1))}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.p className="eyebrow" variants={fadeUpSoft}>
            {about.tag}
          </motion.p>
          <motion.h2 className={`display ${styles.title}`} variants={fadeUpSoft}>
            {about.title}
          </motion.h2>
        </motion.div>

        <div className={styles.layout}>
          <motion.p
            className={styles.highlight}
            variants={getVariants(reduced, fadeUpSoft)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            {about.highlight}
          </motion.p>

          <div className={styles.columns}>
            <motion.p
              variants={getVariants(reduced, fadeUpSoft)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {lead}
            </motion.p>
            <div className={styles.secondary}>
              {rest.map((p) => (
                <motion.p
                  key={p.slice(0, 24)}
                  variants={getVariants(reduced, fadeUpSoft)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>
        </div>

        <motion.ul
          className={styles.facts}
          variants={getVariants(reduced, staggerContainer(0.08))}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {about.facts.map((fact) => (
            <motion.li key={fact.label} variants={fadeUpSoft}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
