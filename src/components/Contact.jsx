import { personal, contact } from '../data/info';

export default function Contact() {
  return (
    <section id="contact" className="section contact reveal">
      <div className="contact-box">
        <span className="section-tag">Contacto</span>
        <h2 className="section-title">{contact.title}</h2>
        <p className="contact-text">{contact.text}</p>

        <a href={`mailto:${personal.email}`} className="contact-email">
          {personal.email}
        </a>

        <div className="contact-socials">
          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm"
          >
            LinkedIn
          </a>
          <a
            href={personal.social.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm"
          >
            Behance
          </a>
          <span className="contact-handle">{personal.handle}</span>
        </div>
      </div>
    </section>
  );
}
