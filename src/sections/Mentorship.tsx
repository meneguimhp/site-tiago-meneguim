import { Button } from '../components/Button';

const topics = ['Carreira tech', 'Arquitetura', 'AWS', 'FinOps', 'IA aplicada'];

const whatsappUrl =
  'https://wa.me/5511997648414?text=Ola%2C%20Tiago.%20Quero%20saber%20mais%20sobre%20a%20mentoria%20gratuita.';

export function Mentorship() {
  return (
    <section className="section mentorship" id="mentoria">
      <div>
        <p className="section-label">Mentoria</p>
        <h2>Mentoria para acelerar carreira técnica e tomada de decisão.</h2>
        <p>
          Sessões para profissionais que querem evoluir em arquitetura, cloud,
          FinOps, IA aplicada e comunicação técnica com mais clareza.
        </p>
      </div>
      <div className="mentorship__panel">
        <p className="offer">2 sessões gratuitas</p>
        <ul>
          {topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
        <Button href={whatsappUrl} target="_blank" rel="noreferrer">
          Quero minha mentoria
        </Button>
      </div>
    </section>
  );
}
