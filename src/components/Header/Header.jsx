import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <h1 className={styles.logo}>
          <span className={styles.chris}>CHRIS</span>{' '}
          <span className={styles.nevyl}>NEVYL</span>
        </h1>
        <span className={styles.arrows} aria-hidden="true">
          <span className={styles.chevrons}>&gt;&gt;</span>
          <span className={styles.arrow}>→</span>
        </span>
      </div>
      <hr className={styles.divider} />
    </header>
  );
}
