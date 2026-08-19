function ProjectSection({ title, children }) {
  return (
    <section className="project-section">
      <div className="project-section__title">
        <h2>{title}</h2>
      </div>

      <div className="project-section__content">
        {children}
      </div>
    </section>
  );
}

export default ProjectSection;