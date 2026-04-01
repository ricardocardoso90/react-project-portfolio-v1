import "./styles.css";

const projects = [
  { title: "Projeto 1", category: "Site" },
  { title: "Projeto 2", category: "Branding" },
  { title: "Projeto 3", category: "App" },
  { title: "Projeto 4", category: "Site" },
];

export default function Projects() {
  return (
    <section className="projects">
      <h2 className="projects-title">Projetos</h2>

      <div className="projects-filters">
        <button className="filter-btn">Todos</button>
        <button className="filter-btn">Site</button>
        <button className="filter-btn">App</button>
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <div className="project-card" key={i}>
            <div>
              <p className="project-category">{project.category}</p>
              <h3 className="project-title">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}