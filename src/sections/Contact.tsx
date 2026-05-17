import { Button } from '../components/Button';

const mentorshipUrl =
  'https://wa.me/5511997648414?text=Ola%2C%20Tiago.%20Quero%20conversar%20sobre%20mentoria%20em%20AWS%2C%20FinOps%20e%20IA.';

const projectUrl =
  'https://wa.me/5511997648414?text=Ola%2C%20Tiago.%20Tenho%20um%20projeto%20ou%20demanda%20pontual%20em%20AWS%2C%20FinOps%2C%20IA%20ou%20arquitetura.';

export function Contact() {
  return (
    <section className="section contact" id="contato">
      <p className="section-label">Contato</p>
      <h2>Quer mentoria ou ajuda em uma demanda técnica?</h2>
      <p>
        Me chame no WhatsApp e conte se você busca evolução profissional ou apoio
        em um projeto pontual de AWS, FinOps, IA, automação ou arquitetura.
      </p>
      <div className="contact__actions">
        <Button href={mentorshipUrl} target="_blank" rel="noreferrer">
          Quero mentoria
        </Button>
        <Button href={projectUrl} target="_blank" rel="noreferrer" variant="secondary">
          Tenho um projeto
        </Button>
        <Button href="mailto:meneguimhp@hotmail.com" variant="secondary">
          Email
        </Button>
      </div>
    </section>
  );
}
