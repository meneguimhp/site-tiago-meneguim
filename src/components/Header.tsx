import { useState } from 'react';

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

function BrazilFlag() {
  return (
    <svg className="flag-icon" viewBox="0 0 24 16" aria-hidden="true">
      <rect width="24" height="16" rx="2" fill="#229E45" />
      <path d="M12 2.2 21 8l-9 5.8L3 8z" fill="#F8D43A" />
      <circle cx="12" cy="8" r="3.1" fill="#1D4ED8" />
      <path d="M8.9 7.3c2.1-.5 4.2-.3 6.2.7" fill="none" stroke="#fff" strokeWidth=".55" />
    </svg>
  );
}

function UnitedStatesFlag() {
  return (
    <svg className="flag-icon" viewBox="0 0 24 16" aria-hidden="true">
      <rect width="24" height="16" rx="2" fill="#fff" />
      {Array.from({ length: 7 }).map((_, index) => (
        <rect key={index} y={index * 2.285} width="24" height="1.14" fill="#B22234" />
      ))}
      <rect width="10.4" height="8.6" fill="#3C3B6E" />
      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 5 }).map((__, col) => (
          <circle
            key={`${row}-${col}`}
            cx={1.2 + col * 1.8}
            cy={1.2 + row * 1.7}
            r=".28"
            fill="#fff"
          />
        )),
      )}
    </svg>
  );
}

export function Header({ lang }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const text = labels[lang];
  const links = [
    { href: '#mentoria', label: text.mentorship },
    { href: '#servicos', label: text.services },
    { href: '#sobre', label: text.about },
    { href: '#conteudos', label: text.content },
    { href: '#contato', label: text.contact },
  ];

  return (
    <header className={`site-header ${isMenuOpen ? 'is-menu-open' : ''}`}>
      <a className="brand" href="#inicio" aria-label="Ir para o início">
        TM
      </a>
      <nav id="main-navigation" aria-label="Navegação principal">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="language-switch" aria-label="Selecionar idioma">
        <a className={lang === 'pt' ? 'is-active' : ''} href="/">
          <BrazilFlag />
          PT
        </a>
        <a className={lang === 'en' ? 'is-active' : ''} href="/en?lang=en">
          <UnitedStatesFlag />
          EN
        </a>
      </div>
      <button
        className="menu-toggle"
        type="button"
        aria-controls="main-navigation"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </header>
  );
}
