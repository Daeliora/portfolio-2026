import { Link } from 'react-router';

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Link to={`/projets/${project.slug}`} className="project-card__link">
        <div className="project-card__image-wrapper">
          <img
            src={project.images.cover}
            alt={`Aperçu du projet ${project.title}`}
            className="project-card__image"
          />
        </div>

        <div className="project-card__content">
          <h3>{project.title}</h3>
          <p>{project.shortDescription}</p>
        </div>
      </Link>
    </article>
  );
}

export default ProjectCard;