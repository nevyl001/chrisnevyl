import styles from './Description.module.css';

export default function Description() {
  return (
    <div className={styles.description}>
      <div className={styles.iconCircle} aria-hidden="true">
        <span className={styles.codeIcon}>&lt;/&gt;</span>
      </div>
      <div className={styles.text}>
        <p>Estoy trabajando en algo increíble.</p>
        <p>Muy pronto estaré de vuelta.</p>
      </div>
    </div>
  );
}
