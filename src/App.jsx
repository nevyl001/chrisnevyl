import { useEffect, useState } from 'react';
import styles from './App.module.css';
import SiteAtmosphere from './components/atmosphere/SiteAtmosphere';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('section') || window.location.hash.replace('#', '');
    if (!id) return undefined;
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'auto', block: 'start' });
    }, 300);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={styles.shell}>
      <SiteAtmosphere />
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className={styles.shellMain}>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
