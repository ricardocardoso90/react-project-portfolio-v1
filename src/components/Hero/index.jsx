import "./styles.css";
import { MapPin, Circle } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="avatar">
        <img className="avatar-image" src="https://github.com/ricardocardoso90.png" alt="" />
        <span className="avatar-title"> <Circle size={14} fill="#10b981" stroke="none" className="hero-circle"/> ONLINE</span>
      </div>

      <div className="description">
        <span>{"</>"} DESENVOLVEDOR FRONT-END</span>
        <h1>
          {"< "}
          <span className="hero-title">Ricardo Cardoso</span>
          <span className="cursor">_</span>
          {" />"}
        </h1>
        <p>
          Desenvolvedor Front-End, 36 anos de idade,
          com foco em arquitetura escalável e desenvolvimento de soluções com propósito.
        </p>
        <span><MapPin size={14} strokeWidth={1.5} /> Goiânia, Goiás</span>
      </div>
    </section>
  );
}