import { Routes, Route } from 'react-router';
import projects from './data/projects';
import ProjectPage from './pages/Project/ProjectPage';

function Home() {
  return (
    <main>
      <h1>Portfolio</h1>

      {projects.map((project) => (
        <article key={project.slug}>
          <h2>{project.title}</h2>
          <p>{project.shortDescription}</p>
        </article>
      ))}
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projets/:slug" element={<ProjectPage />} />
    </Routes>
  );
}

export default App;