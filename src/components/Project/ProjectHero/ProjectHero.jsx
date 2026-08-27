function ProjectHero({ project }) {
  return (
    <header className="project-hero">
      <h1>{project.title}</h1>

      <p className="project-hero__technologies">
        {project.technologies.join(' · ')}
      </p>

      <p className="project-hero__description">
        {project.shortDescription}
      </p>

      {project.links.github && (
        <a
          href={project.links.github}
          target="_blank"
          rel="noreferrer"
        >
          Voir sur GitHub ↗
        </a>
      )}
    </header>
  );
}

export default ProjectHero;