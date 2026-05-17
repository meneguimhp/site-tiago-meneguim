import { Button } from '../components/Button';

type SectionProps = {
  lang: 'pt' | 'en';
};

const links = {
  mentorship:
    'https://wa.me/5511997648414?text=Ola%2C%20Tiago.%20Quero%20conversar%20sobre%20mentoria%20em%20AWS%2C%20FinOps%20e%20IA.',
  project:
    'https://wa.me/5511997648414?text=Ola%2C%20Tiago.%20Tenho%20um%20projeto%20ou%20demanda%20pontual%20em%20AWS%2C%20FinOps%2C%20IA%20ou%20arquitetura.',
};

const copy = {
  pt: {
    label: 'Contato',
    title: 'Quer mentoria ou ajuda em uma demanda técnica?',
    intro:
      'Me chame no WhatsApp e conte se você busca evolução profissional ou apoio em um projeto pontual de AWS, FinOps, IA, automação ou arquitetura.',
    mentorship: 'Quero mentoria',
    project: 'Tenho um projeto',
    email: 'Email',
  },
  en: {
    label: 'Contact',
    title: 'Looking for mentorship or help with a technical demand?',
    intro:
      'Message me on WhatsApp and tell me whether you are looking for professional growth or support on a project involving AWS, FinOps, AI, automation or architecture.',
    mentorship: 'I want mentorship',
    project: 'I have a project',
    email: 'Email',
  },
};

export function Contact({ lang }: SectionProps) {
  const text = copy[lang];

  return (
    <section className="section contact" id="contato">
      <p className="section-label">{text.label}</p>
      <h2>{text.title}</h2>
      <p>{text.intro}</p>
      <div className="contact__actions">
        <Button href={links.mentorship} target="_blank" rel="noreferrer">
          {text.mentorship}
        </Button>
        <Button href={links.project} target="_blank" rel="noreferrer" variant="secondary">
          {text.project}
        </Button>
        <Button href="mailto:meneguimhp@hotmail.com" variant="secondary">
          {text.email}
        </Button>
      </div>
    </section>
  );
}
