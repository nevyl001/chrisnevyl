import { motion } from 'motion/react';
import { education, educationSection } from '../../data/info';
import { fadeUpSoft, getVariants, staggerContainer } from '../../lib/motion';
import { usePrefersReducedMotion } from '../../lib/hooks';
import styles from './Education.module.css';

export default function Education() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="education" className={`section ${styles.education}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          variants={getVariants(reduced, fadeUpSoft)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="eyebrow">{educationSection.tag}</p>
          <h2 className={`display ${styles.title}`}>{educationSection.title}</h2>
        </motion.div>

        <motion.ul
          className={styles.list}
          variants={getVariants(reduced, staggerContainer(0.06))}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {education.map((item) => (
            <motion.li
              key={`${item.institution}-${item.field}`}
              variants={fadeUpSoft}
            >
              <p className={styles.school}>{item.institution}</p>
              <p className={styles.field}>{item.field}</p>
              {item.period ? <p className={styles.period}>{item.period}</p> : null}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
