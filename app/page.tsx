import styles from './page.module.scss';
import Navbar from '@/components/Navbar/Navbar';
import Container from '@/components/Container/Container';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';
import MobileNav from '@/components/MobileNav/MobileNav';

export default function Home() {
  return (
    <main className={styles.main}>
      <Container>
        <Navbar />
        <MobileNav />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Container>
    </main>
  );
}
