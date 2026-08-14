import { useParams } from 'react-router';
import projects from '../../data/projects';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ProjectHero from '../../components/ProjectHero/ProjectHero';
import ProjectGallery from '../../components/ProjectGallery/ProjectGallery';

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

    <section>
      <SectionTitle>Contexte</SectionTitle>
      <p>{project.context}</p>
    </section>

    <section>
      <SectionTitle>Objectifs</SectionTitle>

      <ul>
        {project.objectives.map((objective) => (<li key={objective}>{objective}</li>))}
      </ul>
    </section>
  </main>
);
}

export default ProjectPage;