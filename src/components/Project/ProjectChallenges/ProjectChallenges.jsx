function ProjectChallenges({ challenges }) {
  if (!challenges?.length) {
    return null;
  }

  return (
    <div className="project-challenges">
      {challenges.map((challenge, index) => (
        <article className="project-challenges__item" key={challenge}>
          <span className="project-challenges__number">
            {String(index + 1).padStart(2, "0")}
          </span>

          <p>{challenge}</p>
        </article>
      ))}
    </div>
  );
}

export default ProjectChallenges;