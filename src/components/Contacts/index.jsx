import "./styles.css";
import { track } from '@vercel/analytics';

export default function Contacts() {
  const trackDownload = () => {
    track('Download CV', { format: 'PDF' });
  };

  return (
    <section className="contacts">
      <span className='contacts-title'>[Contatos]</span>

      <div className="contacts-container">
        <a
          href="./curriculo.pdf"
          className="contacts-info"
          download="currículo.pdf"
          onClick={trackDownload}
        >
          Download CV (.pdf)
        </a>

        <a
          href="https://wa.me/5562998418721"
          className="contacts-info"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track('Click WhatsApp')}
        >
          WhatsApp: (62) 99841-8721
        </a>

        <a
          href="mailto:ricardocardoso.dev.br@gmail.com"
          className="contacts-info"
        >
          E-mail: ricardocardoso.dev.br@gmail.com
        </a>

        <a
          href="https://github.com/ricardocardoso90"
          className="contacts-info"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub: https://github.com/ricardocardoso90
        </a>

        <a
          href="https://www.linkedin.com/in/ricardocardoso90/"
          className="contacts-info"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn: https://www.linkedin.com/in/ricardocardoso90/
        </a>
      </div>
    </section>
  );
}