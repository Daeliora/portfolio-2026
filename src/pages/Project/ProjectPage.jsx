import { useParams } from 'react-router';
import projects from '../../data/projects';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

function ProjectPage() {
  const { slug } = useParams();

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return (
      <main>
        <h1>Projet introuvable</h1>
      </main>
    );
  }

  return (
  <main>
    <h1>{project.title}</h1>

    <p>{project.shortDescription}</p>

    <ul>
      {project.technologies.map((technology) => (
        <li key={technology}>{technology}</li>
      ))}
    </ul>

    <a href={project.links.github}>
      Voir le code sur GitHub
    </a>

    <section>
      <SectionTitle>Contexte</SectionTitle>
      <p>{project.context}</p>
    </section>

    <section>
      <SectionTitle>Objectifs</SectionTitle>

      <ul>
        {project.objectives.map((objective) => (
          <li key={objective}>{objective}</li>
        ))}
      </ul>
    </section>
  </main>
);
}

export default ProjectPage;