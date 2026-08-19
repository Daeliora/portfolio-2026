function ProjectOptimizations({ optimizations }) {
  if (!optimizations?.length) {
    return null;
  }

  return (
    <ul className="project-optimizations">
      {optimizations.map((optimization) => (
        <li key={optimization}>{optimization}</li>
      ))}
    </ul>
  );
}

export default ProjectOptimizations;