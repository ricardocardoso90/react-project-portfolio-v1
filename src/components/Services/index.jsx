import "./styles.css";

export default function Services() {
  return (
    <section className="services">
      <h2 className="services-title">Serviços</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <span className="service-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="service-name">{service}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}