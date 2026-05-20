import styles from './DecorativePanel.module.css';
import LaptopMockup from '../LaptopMockup/LaptopMockup';

export default function DecorativePanel() {
  return (
    <div className={styles.panel}>
      <div className={styles.glowCircle} aria-hidden="true" />
      <div className={styles.laptopWrap}>
        <LaptopMockup />
      </div>
      <div className={styles.plant} aria-hidden="true">
        🪴
      </div>
      <div className={styles.sign}>
        <span className={styles.signIcon}>&lt;/&gt;</span>
        <p className={styles.signTitle}>En Construcción</p>
        <p className={styles.signSubtitle}>Gracias por tu paciencia</p>
      </div>
    </div>
  );
}
