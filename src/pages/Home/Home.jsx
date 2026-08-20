import projects from '../../data/projects';
import ProjectCard from '../../components/Project/ProjectCard/ProjectCard';
import AboutSection from '../../components/Section/AboutSection';
import ContactSection from '../../components/Section/ContactSection';

function Home() {
  return (
    <main className="home">
      <section className="home-hero">
        <h1>Développeuse web</h1>

        <p className="home-hero__statement">
          Je conçois des expériences web modernes, accessibles et fonctionnelles avec JavaScript & React.
        </p>

        <a className="home-hero__cta" href="#projets">
          [ DÉCOUVRIR MES PROJETS ↘ ]
        </a>
      </section>

      <AboutSection />

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

      <ContactSection />
    </main>
  );
}

export default Home;