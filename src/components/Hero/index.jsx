import "./styles.css";
import { MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="avatar">
        <img src="https://github.com/ricardocardoso90.png" alt="" />
        <p>ONLINE</p>
      </div>

      <div className="description">
        <span>{"</>"} Desenvolvedor Front-End</span>
        <h1>{"<"} Ricardo Cardoso _ {"/>"}</h1>
        <p>
          Desenvolvedor Front-End, 36 anos de idade,
          com foco em arquitetura escalável e desenvolvimento de soluções com propósito.
        </p>
        <span><MapPin size={14} strokeWidth={1.5} /> Goiânia, Goiás</span>
      </div>
    </section>
  );
}