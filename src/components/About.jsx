import { about, skills, education } from '../data/info';
import styles from './About.module.css';

const skillCards = [
  { key: 'tecnologias', title: 'Tecnologías' },
  { key: 'herramientas', title: 'Herramientas' },
];

export default function About() {
  return (
    <section id="about" className="section about reveal">
      <span className="section-tag">{about.tag}</span>
      <h2 className="section-title">{about.title}</h2>

      {/* Bloque 1: texto + 2 cards de skills */}
      <div className="about-grid">
        <div className="about-text">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>

        <div className="about-cards">
          {skillCards.map((card) => (
            <article key={card.key} className="skill-card">
              <h3>{card.title}</h3>
              <ul>
                {skills[card.key].map((item) => (
                  <li key={item}>
                    <span className="pill">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      {/* Bloque 2: formación a ancho completo */}
      <div className={styles.formation}>
        <h3 className={styles.formationLabel}>Formación</h3>
        <div className={styles.formationGrid}>
          {education.map((item) => (
            <article
              key={`${item.institution}-${item.field}`}
              className={styles.eduCard}
            >
              <p className={styles.eduInstitution}>{item.institution}</p>
              <p className={styles.eduField}>{item.field}</p>
              {item.period ? (
                <p className={styles.eduPeriod}>{item.period}</p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
