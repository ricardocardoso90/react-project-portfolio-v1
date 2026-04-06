import "./styles.css";
import { MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="avatar">
        <img
          className="avatar-image"
          src="https://github.com/ricardocardoso90.png"
          alt="Imagem do perfil"
        />
        <span className="avatar-title">
          Hello World!
        </span>
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
          Desenvolvedor Front-End focado em React, com experiência na criação de interfaces modernas,
          responsivas e integradas a APIs, sempre priorizando performance e experiência do usuário.
        </p>
        <span>
          <MapPin
            size={14}
            strokeWidth={1.5}
          />
          Goiânia, Goiás
        </span>
      </div>
    </section>
  );
};