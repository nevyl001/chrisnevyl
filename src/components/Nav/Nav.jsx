import { useEffect } from 'react';
import { Menu, X, MessageCircle, ArrowUpRight } from 'lucide-react';
import { personal, navLinks } from '../../data/info';
import { useActiveSection, useScrolled } from '../../lib/hooks';
import styles from './Nav.module.css';

const sectionIds = ['hero', ...navLinks.map((l) => l.id)];

export default function Nav({ menuOpen, setMenuOpen }) {
  const scrolled = useScrolled(20);
  const active = useActiveSection(sectionIds);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a
          href="#hero"
          className={styles.logo}
          onClick={(e) => {
            e.preventDefault();
            scrollTo('hero');
          }}
        >
          Chris <span>{personal.nameAccent}</span>
        </a>

        <nav className={styles.desktop} aria-label="Principal">
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  className={`${styles.link} ${active === link.id ? styles.active : ''}`}
                  onClick={() => scrollTo(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <a
            className={styles.cta}
            href={personal.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            Hablemos
            <MessageCircle size={14} aria-hidden="true" />
          </a>
        </nav>

        <button
          type="button"
          className={styles.toggle}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`${styles.mobile} ${menuOpen ? styles.mobileOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              className={styles.mobileCta}
              href={personal.whatsapp}
              target="_blank"
              rel="noreferrer"
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
            >
              Hablemos
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
