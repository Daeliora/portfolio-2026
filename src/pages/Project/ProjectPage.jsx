import { useParams } from 'react-router';
import projects from '../../data/projects';
import ProjectHero from '../../components/ProjectHero/ProjectHero';
import ProjectGallery from '../../components/ProjectGallery/ProjectGallery';
import ProjectSection from '../../components/ProjectSection/ProjectSection';

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
    <ProjectHero project={project} />

    <ProjectGallery project={project} />

    <ProjectSection title="Contexte">
      <p>{project.context}</p>
    </ProjectSection>

    <ProjectSection title="Objectifs">
      <ul>
        {project.objectives.map((objective) => (
          <li key={objective}>{objective}</li>
        ))}
      </ul>
    </ProjectSection>

    {project.features && (
      <ProjectSection title="Fonctionnalités">
        <ul>
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </ProjectSection>
    )}

    {project.optimizations && (
      <ProjectSection title="Optimisations">
        ...
      </ProjectSection>
    )}

  </main>
);
}

export default ProjectPage;