type HeaderProps = {
  lang: 'pt' | 'en';
};

const labels = {
  pt: {
    mentorship: 'Mentoria',
    services: 'Serviços',
    about: 'Sobre',
    content: 'Conteúdos',
    contact: 'Contato',
  },
  en: {
    mentorship: 'Mentorship',
    services: 'Services',
    about: 'About',
    content: 'Content',
    contact: 'Contact',
  },
};

export function Header({ lang }: HeaderProps) {
  const text = labels[lang];
  const links = [
    { href: '#mentoria', label: text.mentorship },
    { href: '#servicos', label: text.services },
    { href: '#sobre', label: text.about },
    { href: '#conteudos', label: text.content },
    { href: '#contato', label: text.contact },
  ];

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Ir para o início">
        TM
      </a>
      <nav aria-label="Navegação principal">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
        <div className="language-switch" aria-label="Selecionar idioma">
          <a className={lang === 'pt' ? 'is-active' : ''} href="/">
            <span className="flag flag-br" aria-hidden="true" /> PT
          </a>
          <a className={lang === 'en' ? 'is-active' : ''} href="/en">
            <span className="flag flag-us" aria-hidden="true" /> EN
          </a>
        </div>
      </nav>
    </header>
  );
}
