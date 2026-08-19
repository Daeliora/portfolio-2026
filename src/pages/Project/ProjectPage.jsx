import { useParams } from 'react-router';
import projects from '../../data/projects';
import ProjectHero from '../../components/Project/ProjectHero/ProjectHero';
import ProjectGallery from '../../components/Project/ProjectGallery/ProjectGallery';
import ProjectSection from '../../components/Project/ProjectSection/ProjectSection';
import TechnicalStack from '../../components/Project/TechnicalStack/TechnicalStack';
import ProjectOptimizations from '../../components/Project/ProjectOptimizations/ProjectOptimizations';
import ProjectSkills from '../../components/Project/ProjectSkills/ProjectSkills';
import ProjectChallenges from '../../components/Project/ProjectChallenges/ProjectChallenges';
import ProjectResults from '../../components/Project/ProjectResults/ProjectResults';

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

    <ProjectSection title="Stack technique">
      <TechnicalStack stack={project.technicalStack} />
    </ProjectSection>

    {project.optimizations && (
      <ProjectSection title="Optimisations">
        <ProjectOptimizations
          optimizations={project.optimizations}
        />
      </ProjectSection>
    )}

    <ProjectSection title="Compétences">
      <ProjectSkills skills={project.skills} />
    </ProjectSection>

    <ProjectSection title="Défis">
      <ProjectChallenges challenges={project.challenges} />
    </ProjectSection>

    <ProjectSection title="Résultats">
      <ProjectResults results={project.results} />
    </ProjectSection>

  </main>
);
}

export default ProjectPage;