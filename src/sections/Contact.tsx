import { Button } from '../components/Button';

export function Contact() {
  return (
    <section className="section contact" id="contato">
      <p className="section-label">Contato</p>
      <h2>Vamos conversar sobre tecnologia, arquitetura ou mentoria.</h2>
      <div className="contact__actions">
        <Button href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          LinkedIn
        </Button>
        <Button href="mailto:meneguimhp@hotmail.com" variant="secondary">
          Email
        </Button>
      </div>
    </section>
  );
}
