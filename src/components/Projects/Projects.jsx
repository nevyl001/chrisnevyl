import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { projects, projectsSection } from '../../data/info';
import { fadeUpSoft, getVariants } from '../../lib/motion';
import { usePrefersReducedMotion } from '../../lib/hooks';
import styles from './Projects.module.css';

function hasValidUrl(url) {
  return Boolean(url && url !== '#');
}

export default function Projects() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          variants={getVariants(reduced, fadeUpSoft)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <p className="eyebrow">{projectsSection.tag}</p>
          <h2 className={`display ${styles.title}`}>{projectsSection.title}</h2>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((project) => {
            const linked = hasValidUrl(project.url);

            return (
              <motion.article
                key={project.id}
                className={styles.card}
                variants={getVariants(reduced, fadeUpSoft)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
              >
                <div className={styles.meta}>
                  <span>{project.num}</span>
                  <span>{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p className={styles.desc}>{project.desc}</p>
                <ul className={styles.tags}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                {linked ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.link}
                  >
                    Abrir proyecto
                    <ExternalLink size={15} aria-hidden="true" />
                  </a>
                ) : (
                  <p className={styles.private}>Proyecto privado · URL no disponible</p>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
