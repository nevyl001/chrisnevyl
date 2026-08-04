import { motion } from 'motion/react';
import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react';
import { contact, personal } from '../../data/info';
import { fadeUpSoft, getVariants, staggerContainer } from '../../lib/motion';
import { usePrefersReducedMotion } from '../../lib/hooks';
import styles from './Contact.module.css';

export default function Contact() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <motion.div
          className={styles.inner}
          variants={getVariants(reduced, staggerContainer(0.1))}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p className="eyebrow" variants={fadeUpSoft}>
            Contacto
          </motion.p>
          <motion.h2 className={`display ${styles.title}`} variants={fadeUpSoft}>
            {contact.title}
          </motion.h2>
          <motion.p className={styles.text} variants={fadeUpSoft}>
            {contact.text}
          </motion.p>

          <motion.div className={styles.channels} variants={fadeUpSoft}>
            <a
              href={personal.whatsapp}
              target="_blank"
              rel="noreferrer"
              className={styles.whatsapp}
            >
              <MessageCircle size={18} aria-hidden="true" />
              <span>
                <strong>WhatsApp</strong>
                <em>{personal.phoneDisplay}</em>
              </span>
            </a>
            <a href={`mailto:${personal.email}`} className={styles.email}>
              <Mail size={16} aria-hidden="true" />
              {personal.email}
            </a>
          </motion.div>

          <motion.div className={styles.actions} variants={fadeUpSoft}>
            <a
              className="btn btn-primary"
              href={personal.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Escribir por WhatsApp
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a className="btn btn-ghost" href={`mailto:${personal.email}`}>
              Email
            </a>
            <a
              className="btn btn-ghost"
              href={personal.social.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="btn btn-ghost"
              href={personal.social.behance}
              target="_blank"
              rel="noreferrer"
            >
              Behance
            </a>
          </motion.div>

          <motion.p className={styles.handle} variants={fadeUpSoft}>
            {personal.handle}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
