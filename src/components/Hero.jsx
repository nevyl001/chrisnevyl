import { hero } from '../data/info';

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero reveal revealed">
      <div className="hero-badge hero-anim" style={{ animationDelay: '0.1s' }}>
        <span className="hero-dot" aria-hidden="true" />
        {hero.badge}
      </div>

      <h1 className="hero-title">
        <span className="hero-anim" style={{ animationDelay: '0.2s' }}>
          {hero.titleLine1}
        </span>
        <span
          className="hero-anim hero-title-muted"
          style={{ animationDelay: '0.35s' }}
        >
          {hero.titleLine2}
        </span>
        <span className="hero-anim" style={{ animationDelay: '0.5s' }}>
          {hero.titleLine3}
        </span>
      </h1>

      <p className="hero-sub hero-anim" style={{ animationDelay: '0.65s' }}>
        {hero.subtitle}
      </p>

      <div className="hero-actions hero-anim" style={{ animationDelay: '0.8s' }}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => scrollTo('contact')}
        >
          Contactar
        </button>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => scrollTo('projects')}
        >
          Ver proyectos
        </button>
      </div>

      <div className="hero-stats hero-anim" style={{ animationDelay: '0.95s' }}>
        {hero.stats.map((stat) => (
          <div key={stat.label} className="hero-stat">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
