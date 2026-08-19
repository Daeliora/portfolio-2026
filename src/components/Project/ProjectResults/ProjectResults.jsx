import LighthouseResults from '../LighthouseResults/LighthouseResults';

function ProjectResults({ results }) {
  if (!results) {
    return null;
  }

  if (typeof results === 'object') {
    return <LighthouseResults results={results} />;
  }

  return (
    <div className="project-results">
      <p>{results}</p>
    </div>
  );
}

export default ProjectResults;