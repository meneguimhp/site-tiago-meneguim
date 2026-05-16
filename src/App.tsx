import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Experience } from './sections/Experience';
import { Hero } from './sections/Hero';
import { Mentorship } from './sections/Mentorship';
import { Projects } from './sections/Projects';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Mentorship />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
