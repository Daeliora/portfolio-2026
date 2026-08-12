function ProjectHero({ project }) {
  return (
    <header className="project-hero">
      <p className="project-hero__technologies">
        {project.technologies.join(' · ')}
      </p>

      <h1>{project.title}</h1>

      <p className="project-hero__description">
        {project.shortDescription}
      </p>

      {project.links.github && (
        <a
          href={project.links.github}
          target="_blank"
          rel="noreferrer"
        >
          Voir le code sur GitHub ↗
        </a>
      )}
    </header>
  );
}

export default ProjectHero;