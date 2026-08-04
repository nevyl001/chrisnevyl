import { personal, navLinks, footer } from '../../data/info';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <p className={styles.logo}>
            Chris <span>{personal.nameAccent}</span>
          </p>
          <p className={styles.note}>{footer.note}</p>
        </div>

        <nav className={styles.nav} aria-label="Footer">
          {navLinks.map((link) => (
            <button key={link.id} type="button" onClick={() => scrollTo(link.id)}>
              {link.label}
            </button>
          ))}
          <button type="button" onClick={() => scrollTo('contact')}>
            Contacto
          </button>
        </nav>

        <div className={styles.social}>
          <a href={personal.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={personal.social.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={personal.social.behance} target="_blank" rel="noreferrer">
            Behance
          </a>
        </div>

        <p className={styles.copy}>
          © {year} {personal.name}
        </p>
      </div>
    </footer>
  );
}
