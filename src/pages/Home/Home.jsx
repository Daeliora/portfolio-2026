import projects from '../../data/projects';
import ProjectCard from '../../components/Project/ProjectCard/ProjectCard';

function Home() {
  return (
    <main className="home">
      <section className="home-hero">
        <h1>Développeuse web</h1>

        <p className="home-hero__statement">
          Je crée des expériences web qui ont du caractère.
        </p>

        <p className="home-hero__description">
          Développeuse front-end et back-end, je conçois des interfaces
          modernes, accessibles et fonctionnelles.
        </p>
      </section>

      <section className="home-projects" id="projets">
        <div className="home-projects__header">
          <h2>Projets</h2>
        </div>

        <div className="home-projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;