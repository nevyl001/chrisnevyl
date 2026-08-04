import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '../../lib/hooks';
import styles from './SiteAtmosphere.module.css';

export default function SiteAtmosphere() {
  const reduced = usePrefersReducedMotion();
  const glowRef = useRef(null);
  const target = useRef({ x: 0.5, y: 0.35 });
  const current = useRef({ x: 0.5, y: 0.35 });
  const raf = useRef(0);

  useEffect(() => {
    if (reduced) return undefined;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (!finePointer) return undefined;

    const onMove = (e) => {
      target.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.06;
      current.current.y += (target.current.y - current.current.y) * 0.06;
      if (glowRef.current) {
        glowRef.current.style.setProperty('--gx', `${current.current.x * 100}%`);
        glowRef.current.style.setProperty('--gy', `${current.current.y * 100}%`);
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf.current);
    };
  }, [reduced]);

  return (
    <div className={styles.root} aria-hidden="true">
      <div className={styles.base} />
      <div className={`${styles.aurora} ${reduced ? styles.static : ''}`}>
        <span className={`${styles.blob} ${styles.a}`} />
        <span className={`${styles.blob} ${styles.b}`} />
        <span className={`${styles.blob} ${styles.c}`} />
        <span className={`${styles.blob} ${styles.d}`} />
      </div>
      <div className={styles.grid} />
      <div
        ref={glowRef}
        className={`${styles.pointerGlow} ${reduced ? styles.hideGlow : ''}`}
      />
      <div className={styles.noise} />
      <div className={styles.heroVeil} />
      <div className={styles.projectsVeil} />
      <div className={styles.contactVeil} />
    </div>
  );
}
