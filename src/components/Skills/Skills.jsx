import { motion } from 'motion/react';
import { skillGroups, skillsSection } from '../../data/info';
import { fadeUpSoft, getVariants, staggerContainer } from '../../lib/motion';
import { usePrefersReducedMotion } from '../../lib/hooks';
import styles from './Skills.module.css';

export default function Skills() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <motion.div
          variants={getVariants(reduced, fadeUpSoft)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="eyebrow">{skillsSection.tag}</p>
          <h2 className={`display ${styles.title}`}>{skillsSection.title}</h2>
        </motion.div>

        <motion.div
          className={styles.matrix}
          variants={getVariants(reduced, staggerContainer(0.08))}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillGroups.map((group) => (
            <motion.div key={group.id} className={styles.group} variants={fadeUpSoft}>
              <h3>{group.label}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
