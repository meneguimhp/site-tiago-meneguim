const services = [
  {
    title: 'Diagnóstico FinOps',
    description:
      'Análise de custos cloud, desperdícios, governança, previsibilidade e plano de otimização para AWS.',
  },
  {
    title: 'Arquitetura AWS',
    description:
      'Revisão de soluções, decisões arquiteturais, escalabilidade, resiliência, segurança e boas práticas.',
  },
  {
    title: 'IA aplicada',
    description:
      'Mapeamento de casos de uso, automações, PoCs e aplicação prática de IA em processos reais de negócio.',
  },
  {
    title: 'Mentoria tech',
    description:
      'Sessões para evolução em carreira técnica, arquitetura, cloud, FinOps, IA e tomada de decisão.',
  },
];

export function Services() {
  return (
    <section className="section" id="servicos">
      <div className="section-heading">
        <p className="section-label">Como posso ajudar</p>
        <h2>Ofertas claras para problemas que custam dinheiro.</h2>
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
