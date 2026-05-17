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
  const params = new URLSearchParams(window.location.search);
  const isEnglish =
    window.location.pathname.startsWith('/en') || params.get('lang') === 'en';
  const lang = isEnglish ? 'en' : 'pt';

  return (
    <>
      <Header lang={lang} />
      <main>
        <Hero lang={lang} />
        <Mentorship lang={lang} />
        <Services lang={lang} />
        <About lang={lang} />
        <Experience lang={lang} />
        <Content lang={lang} />
        <Projects lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
