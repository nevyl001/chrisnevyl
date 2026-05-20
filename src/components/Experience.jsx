import { experience } from '../data/info';

export default function Experience() {
  return (
    <section id="experience" className="section experience reveal">
      <span className="section-tag">Experiencia</span>
      <h2 className="section-title">Trayectoria profesional</h2>

      <div className="timeline">
        {experience.map((item) => (
          <article key={`${item.company}-${item.period}`} className="timeline-item">
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-content">
              <time>{item.period}</time>
              <h3>{item.role}</h3>
              <p className="timeline-company">{item.company}</p>
              <p className="timeline-desc">{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
