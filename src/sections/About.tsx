type SectionProps = {
  lang: 'pt' | 'en';
};

const copy = {
  pt: {
    label: 'Sobre',
    title: 'Experiência técnica com didática para acelerar outras pessoas.',
    paragraphs: [
      'Sou Solutions Architect com mais de 20 anos em tecnologia, atuando em ambientes corporativos de larga escala com arquitetura cloud, FinOps, automação, governança de APIs, sistemas distribuídos e IA aplicada.',
      'Minha mentoria combina repertório técnico, leitura de mercado e orientação prática para você decidir melhor onde estudar, como se posicionar e como transformar conhecimento em resultado.',
    ],
  },
  en: {
    label: 'About',
    title: 'Technical experience with the ability to help others move faster.',
    paragraphs: [
      'I am a Solutions Architect with more than 20 years in technology, working in large-scale corporate environments with cloud architecture, FinOps, automation, API governance, distributed systems and applied AI.',
      'My mentorship combines technical experience, market perspective and practical guidance so you can decide what to study, how to position yourself and how to turn knowledge into outcomes.',
    ],
  },
};

export function About({ lang }: SectionProps) {
  const text = copy[lang];

  return (
    <section className="section section--narrow about-panel" id="sobre">
      <p className="section-label">{text.label}</p>
      <h2>{text.title}</h2>
      {text.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  );
}
