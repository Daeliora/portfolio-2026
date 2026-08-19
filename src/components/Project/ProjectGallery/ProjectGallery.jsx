import { useState } from 'react';

function ProjectGallery({ project }) {
  const images = project.images?.gallery ?? [];

  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) {
    return null;
  }

  const currentImage = images[currentIndex];

  return (
    <section
      className="project-gallery"
      aria-label={`Galerie du projet ${project.title}`}
    >
      <figure className="project-gallery__main">
        <img
          src={currentImage}
          alt={`${project.title} — vue ${currentIndex + 1}`}
        />
      </figure>

      {images.length > 1 && (
        <div className="project-gallery__controls">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              className={`project-gallery__dot ${
                index === currentIndex
                  ? 'project-gallery__dot--active'
                  : ''
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Afficher la vue ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : undefined}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProjectGallery;