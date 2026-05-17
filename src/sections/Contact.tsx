import { Button } from '../components/Button';

const whatsappUrl =
  'https://wa.me/5511997648414?text=Ola%2C%20Tiago.%20Quero%20conversar%20sobre%20mentoria%20em%20AWS%2C%20FinOps%20e%20IA.';

export function Contact() {
  return (
    <section className="section contact" id="contato">
      <p className="section-label">Contato</p>
      <h2>Quer clareza para seu próximo passo técnico?</h2>
      <p>
        Me chame no WhatsApp e conte em que ponto você está: carreira, AWS,
        FinOps, IA aplicada ou arquitetura.
      </p>
      <div className="contact__actions">
        <Button href={whatsappUrl} target="_blank" rel="noreferrer">
          Chamar no WhatsApp
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
