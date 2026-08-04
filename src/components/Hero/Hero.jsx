import { motion, useMotionValue, useSpring } from 'motion/react';
import { ArrowDownRight, ArrowUpRight, MessageCircle } from 'lucide-react';
import { hero, personal } from '../../data/info';
import {
  fadeIn,
  fadeUpSoft,
  getVariants,
  lineChild,
  staggerContainer,
} from '../../lib/motion';
import { useMediaQuery, usePrefersReducedMotion } from '../../lib/hooks';
import styles from './Hero.module.css';

function AbstractComposition({ reduced }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.4 });

  const onMove = (e) => {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    mx.set(x);
    my.set(y);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      className={styles.board}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={reduced ? undefined : { x: sx, y: sy }}
      aria-hidden="true"
    >
      <div className={styles.boardGrid} />
      <span className={styles.frameA} />
      <span className={styles.frameB} />
      <span className={styles.colorBlock} />
      <span className={styles.hairlineH} />
      <span className={styles.hairlineV} />
      <p className={styles.coord}>19.43° N · 99.13° W</p>
      <p className={styles.kinetic}>FORM</p>
      <p className={styles.kineticSoft}>CODE</p>
      <p className={styles.mark}>CN</p>
      <span className={styles.dotA} />
      <span className={styles.dotB} />
    </motion.div>
  );
}

export default function Hero() {
  const reduced = usePrefersReducedMotion();
  const isMobile = useMediaQuery('(max-width: 720px)');
  const titleLines = isMobile ? hero.titleLinesMobile : hero.titleLines;

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.layout}`}>
        <div className={styles.copy}>
          <motion.div
            className={styles.badge}
            variants={getVariants(reduced, fadeIn)}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.12, duration: 0.45 }}
          >
            <span className={styles.dot} aria-hidden="true" />
            {hero.badge}
          </motion.div>

          <motion.h1
            id="hero-title"
            className={`display ${styles.title}`}
            variants={getVariants(reduced, staggerContainer(0.09, 0.22))}
            initial="hidden"
            animate="visible"
          >
            {titleLines.map((line, i) => (
              <span key={line} className={styles.lineMask}>
                <motion.span
                  className={`${styles.line} ${
                    (isMobile ? i === 2 || i === 3 : i === 1) ? styles.mutedLine : ''
                  }`}
                  variants={lineChild}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            className={styles.sub}
            variants={getVariants(reduced, fadeUpSoft)}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7 }}
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            className={styles.actions}
            variants={getVariants(reduced, staggerContainer(0.08, 0.85))}
            initial="hidden"
            animate="visible"
          >
            <motion.button
              type="button"
              className="btn btn-primary"
              variants={fadeUpSoft}
              onClick={() => scrollTo('projects')}
            >
              Ver proyectos
              <ArrowUpRight size={16} aria-hidden="true" />
            </motion.button>
            <motion.a
              className="btn btn-ghost"
              variants={fadeUpSoft}
              href={personal.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={16} aria-hidden="true" />
              WhatsApp
            </motion.a>
          </motion.div>

          <motion.div
            className={styles.social}
            variants={getVariants(reduced, fadeIn)}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.05 }}
          >
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-link"
            >
              LinkedIn
            </a>
            <span aria-hidden="true">/</span>
            <a
              href={personal.social.behance}
              target="_blank"
              rel="noreferrer"
              className="btn-link"
            >
              Behance
            </a>
          </motion.div>

          <motion.dl
            className={styles.stats}
            variants={getVariants(reduced, staggerContainer(0.08, 1.1))}
            initial="hidden"
            animate="visible"
          >
            {hero.stats.map((stat) => (
              <motion.div key={stat.label} className={styles.stat} variants={fadeUpSoft}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>

        <motion.aside
          className={styles.visual}
          variants={getVariants(reduced, fadeUpSoft)}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.45, duration: 0.9 }}
        >
          <AbstractComposition reduced={reduced} />
        </motion.aside>
      </div>

      <motion.button
        type="button"
        className={styles.scroll}
        onClick={() => scrollTo('about')}
        aria-label="Ir a Sobre mí"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        <span>Scroll</span>
        <span className={`${styles.scrollDot} scrollDot`} />
        <ArrowDownRight size={14} aria-hidden="true" />
      </motion.button>
    </section>
  );
}
