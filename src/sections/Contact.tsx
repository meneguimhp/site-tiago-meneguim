import { Button } from '../components/Button';

const whatsappUrl =
  'https://wa.me/5511997648414?text=Ola%2C%20Tiago.%20Vi%20seu%20site%20e%20quero%20conversar%20sobre%20FinOps%2C%20AWS%20ou%20IA%20aplicada.';

export function Contact() {
  return (
    <section className="section contact" id="contato">
      <p className="section-label">Contato</p>
      <h2>Vamos conversar sobre FinOps, AWS, IA ou mentoria.</h2>
      <p>
        Se você quer reduzir custos cloud, revisar arquitetura ou explorar IA
        com pragmatismo, me chame pelo WhatsApp.
      </p>
      <div className="contact__actions">
        <Button href={whatsappUrl} target="_blank" rel="noreferrer">
          WhatsApp
        </Button>
        <Button
          href="https://www.linkedin.com/in/tiago-meneguim/"
          target="_blank"
          rel="noreferrer"
          variant="secondary"
        >
          LinkedIn
        </Button>
        <Button href="mailto:meneguimhp@hotmail.com" variant="secondary">
          Email
        </Button>
      </div>
    </section>
  );
}
