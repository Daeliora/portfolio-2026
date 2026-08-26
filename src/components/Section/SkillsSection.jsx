function SkillsSection() {
  return (
    <section className="skills-section" id="competences">
      <div className="skills-section__title">
        <h2>Compétences</h2>
      </div>

      <div className="skills-section__grid">
        <article className="skills-section__card">
          <h3>Front-end</h3>
          <span className="skills-section__line" />

          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </article>

        <article className="skills-section__card">
          <h3>Qualité web</h3>
          <span className="skills-section__line" />

          <ul>
            <li>Responsive</li>
            <li>Accessibilité</li>
            <li>SEO</li>
            <li>Performance</li>
          </ul>
        </article>

        <article className="skills-section__card">
          <h3>Back-end</h3>
          <span className="skills-section__line" />

          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
        </article>

        <article className="skills-section__card">
          <h3>Outils</h3>
          <span className="skills-section__line" />

          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Figma</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default SkillsSection;