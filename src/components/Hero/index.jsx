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
          {/* Desenvolvedor Front-End focado em React, com experiência na criação de interfaces modernas,
          responsivas e integradas a APIs, sempre priorizando performance e experiência do usuário. */}

          {/* "Olá! Sou Ricardo Cardoso, desenvolvedor formado em ADS e focado em React.
          Unindo base técnica e paixão por games, crio interfaces modernas, funcionais e de alta performance para produtos digitais." */}

          {/* "Ricardo Cardoso | Desenvolvedor Front-End (ADS)
          Especialista em React e apaixonado por tecnologia. Construo interfaces modernas com foco em performance.
          Nas horas vagas, troco o código pelos games para recarregar a criatividade." */}

          "Olá, sou formado em ADS e focado em React, crio interfaces modernas e integradas a APIs com foco em performance.
          Unindo minha base técnica à paixão por tecnologia e games, transformo desafios lógicos em experiências de usuário excepcionais."
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