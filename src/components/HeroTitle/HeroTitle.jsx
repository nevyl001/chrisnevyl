import styles from './HeroTitle.module.css';

export default function HeroTitle() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.eyebrow}>
        <span className={styles.eyebrowLine} aria-hidden="true" />
        <span>SITIO EN</span>
      </div>
      <h2 id="hero-title" className={styles.title}>
        CONSTRUCCIÓN
      </h2>
      <div className={styles.gradientLine} aria-hidden="true" />
    </section>
  );
}
