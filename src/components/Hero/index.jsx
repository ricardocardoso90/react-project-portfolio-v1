import "./styles.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="avatar">
        <img src="https://github.com/ricardocardoso90.png" alt="" />
        <p>ONLINE</p>
      </div>

      <div className="description">
        <span>Ricardo Cardoso</span>
        <h1>Desenvolvedor Front-End</h1>
        <p>
          Desenvolvedor Front-End, 36 anos de idade,
          com foco em arquitetura escalável e desenvolvimento de soluções com propósito.
        </p>
        <span>Goiânia, Goiás</span>
      </div>
    </section>
  );
}