import "./styles.css";

export default function Contacts() {
  return (
    <section className="contacts">
      <span className='contacts-title'>[Contatos]</span>

      <div className="contacts-container">
        <a
          href="https://wa.me/5562998418721"
          className="contacts-info"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp: (62) 99841-8721
        </a>
        <a
          href="mailto:ricardodevpro@gmail.com"
          className="contacts-info"
        >
          E-mail: ricardodevpro@gmail.com
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