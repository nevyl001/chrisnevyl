import { personal } from '../data/info';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-logo">
        Chris <span>{personal.nameAccent}</span>
      </p>
      <p className="footer-copy">
        © {year} {personal.name}. Todos los derechos reservados.
      </p>
    </footer>
  );
}
