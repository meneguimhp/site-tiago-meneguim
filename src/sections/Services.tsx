const services = [
  {
    title: 'Mentoria AWS',
    description:
      'Arquitetura, boas práticas, segurança, resiliência, desenho de soluções e preparação para conversas técnicas.',
  },
  {
    title: 'Mentoria FinOps',
    description:
      'Custos cloud, desperdícios, governança, previsibilidade e como transformar economia em argumento de negócio.',
  },
  {
    title: 'Mentoria em IA aplicada',
    description:
      'Casos de uso reais, automações, GenAI, produtividade e como sair do hype para aplicação prática.',
  },
  {
    title: 'Projetos pontuais',
    description:
      'Consultoria sob demanda para revisar arquitetura, otimizar custos cloud, automatizar processos ou validar oportunidades com IA.',
  },
];

export function Services() {
  return (
    <section className="section" id="servicos">
      <div className="section-heading">
        <p className="section-label">Mentoria, consultoria e frelas</p>
        <h2>Você pode me chamar para evoluir sua carreira ou resolver uma demanda técnica.</h2>
        <p>
          A mentoria é a porta principal. Mas também atuo em projetos pontuais,
          diagnósticos técnicos e consultorias sob demanda para empresas, times
          e profissionais independentes.
        </p>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
