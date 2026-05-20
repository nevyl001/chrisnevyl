import styles from './App.module.css';
import Header from './components/Header/Header';
import HeroTitle from './components/HeroTitle/HeroTitle';
import Description from './components/Description/Description';
import Signature from './components/Signature/Signature';
import SocialLinks from './components/SocialLinks/SocialLinks';
import DecorativePanel from './components/DecorativePanel/DecorativePanel';

export default function App() {
  return (
    <div className={styles.page}>
      <main className={styles.left}>
        <Header />
        <HeroTitle />
        <Description />
        <Signature />
        <SocialLinks />
      </main>
      <aside className={styles.right} aria-hidden="false">
        <DecorativePanel />
      </aside>
    </div>
  );
}
