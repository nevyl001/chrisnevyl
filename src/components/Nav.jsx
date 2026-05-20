import { useState } from 'react';
import { personal, navLinks } from '../data/info';

export default function Nav() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className="nav">
      <a
        href="#hero"
        className="nav-logo"
        onClick={(e) => {
          e.preventDefault();
          scrollTo('hero');
        }}
      >
        Chris <span>{personal.nameAccent}</span>
      </a>

      <button
        type="button"
        className="nav-toggle"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav-links ${open ? 'nav-links--open' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.id}>
            <button type="button" onClick={() => scrollTo(link.id)}>
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
