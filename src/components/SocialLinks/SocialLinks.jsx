import styles from './SocialLinks.module.css';

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function BehanceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 2.391-2.608 4.004-5.22 4.004H0V4h12.12c3.01 0 5.097 1.614 5.097 4.221 0 1.891-.947 3.109-2.168 3.667C17.412 12.9 18.5 14.2 18.5 16.2c0 1.2-.3 2.1-.774 2.8zM7.12 10.4H4.48v3.2h2.64c1.28 0 2.08-.64 2.08-1.6 0-.96-.8-1.6-2.08-1.6zm8.38 5.6c1.44 0 2.24-.8 2.24-2.08 0-1.28-.8-2.08-2.24-2.08h-2.56v4.16h2.56zM4.48 6.8h2.24c1.12 0 1.76-.56 1.76-1.36 0-.8-.64-1.36-1.76-1.36H4.48v2.72z" />
    </svg>
  );
}

export default function SocialLinks() {
  return (
    <div className={styles.social}>
      <a
        href="https://linkedin.com/in/chrisnevyl"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.iconLink}
        aria-label="LinkedIn"
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://behance.net/chrisnevyl"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.iconLink}
        aria-label="Behance"
      >
        <BehanceIcon />
      </a>
      <span className={styles.separator} aria-hidden="true">
        |
      </span>
      <span className={styles.handle}>@CHRISNEVYL</span>
    </div>
  );
}
