type IconProps = {
  className?: string;
};

export function WhatsAppIcon({ className = 'button__icon' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="11" fill="#25D366" />
      <path
        fill="#fff"
        d="M12.04 4.2a7.78 7.78 0 0 0-6.66 11.8l-.2.34-.66 2.43 2.5-.66.32.19a7.78 7.78 0 1 0 4.7-14.1Zm4.57 11.08c-.2.57-1.2 1.09-1.66 1.13-.44.04-1 .06-1.62-.1-.37-.12-.85-.28-1.47-.55a11.5 11.5 0 0 1-4.34-3.83 5 5 0 0 1-1.04-2.64 2.86 2.86 0 0 1 .9-2.13.95.95 0 0 1 .7-.33h.5c.16 0 .38-.06.59.45.22.53.76 1.84.83 1.98.07.14.11.31.02.5-.09.18-.14.3-.28.46-.14.16-.3.36-.42.49-.14.14-.29.29-.12.56.16.28.72 1.18 1.54 1.92a7.03 7.03 0 0 0 2.23 1.37c.28.14.44.12.6-.07.16-.18.7-.82.88-1.1.18-.27.37-.23.62-.14.26.1 1.63.77 1.9.9.28.14.46.21.53.33.07.12.07.69-.14 1.26Z"
      />
    </svg>
  );
}

export function MailIcon({ className = 'button__icon' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="#fff" />
      <path fill="#EA4335" d="M5 5h14c1.1 0 2 .9 2 2v1.24L12 14 3 8.24V7c0-1.1.9-2 2-2Z" />
      <path fill="#FBBC04" d="M3 8.24 12 14l-2.04 1.3L3 10.85V8.24Z" />
      <path fill="#34A853" d="M3 10.85 9.96 15.3 3 19v-8.15Z" />
      <path fill="#4285F4" d="M21 10.85V17c0 1.1-.9 2-2 2H3l6.96-3.7L12 16.6l2.04-1.3L21 10.85Z" />
      <path fill="#C5221F" d="M21 8.24v2.61l-6.96 4.45L12 14l9-5.76Z" />
    </svg>
  );
}

export function LinkedInIcon({ className = 'button__icon' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <path
        fill="#fff"
        d="M6.52 7.8a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM4.8 9.28h3.42v9.47H4.8V9.28Zm5.48 0h3.28v1.3h.05c.46-.86 1.57-1.61 3.23-1.61 3.45 0 4.1 2.27 4.1 5.23v4.55h-3.43v-4.03c0-.96-.01-2.2-1.34-2.2-1.35 0-1.55 1.05-1.55 2.14v4.09h-3.43V9.28Z"
      />
    </svg>
  );
}
