function ProjectSkills({ skills }) {
  if (!skills || skills.length === 0) {
    return null;
  }

  return (
    <div className="project-skills">
      {skills.map((skill) => (
        <span className="project-skills__item" key={skill}>
          {skill}
        </span>
      ))}
    </div>
  );
}

export default ProjectSkills;