import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Content } from './sections/Content';
import { Experience } from './sections/Experience';
import { Hero } from './sections/Hero';
import { Mentorship } from './sections/Mentorship';
import { Projects } from './sections/Projects';
import { Services } from './sections/Services';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mentorship />
        <Services />
        <About />
        <Experience />
        <Content />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
