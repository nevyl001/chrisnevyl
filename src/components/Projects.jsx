import { projects, projectsSection } from '../data/info';

export default function Projects() {
  return (
    <section id="projects" className="section projects reveal">
      <span className="section-tag">{projectsSection.tag}</span>
      <h2 className="section-title">{projectsSection.title}</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <a
            key={project.num}
            href={project.url}
            className="project-card"
            target={project.url !== '#' ? '_blank' : undefined}
            rel={project.url !== '#' ? 'noopener noreferrer' : undefined}
            onClick={(e) => project.url === '#' && e.preventDefault()}
          >
            <span className="project-arrow" aria-hidden="true">
              ↗
            </span>
            <span className="project-num">{project.num}</span>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <ul className="project-tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
}
