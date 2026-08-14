function ProjectGallery({ project }) {
  const images = project.images?.gallery ?? [];

  if (images.length === 0) {
    return null;
  }

  return (
    <section className="project-gallery" aria-label={`Galerie du projet ${project.title}`}>
      <div className="project-gallery__grid">
        {images.map((image, index) => (
          <figure className="project-gallery__item" key={image}>
            <img
              src={image}
              alt={`${project.title} — capture ${index + 1}`}
              loading="lazy"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

export default ProjectGallery;