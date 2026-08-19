function TechnicalStack({ stack }) {
  if (!stack || stack.length === 0) {
    return null;
  }

  return (
    <div className="technical-stack">
      {stack.map((technology) => (
        <article className="technical-stack__item" key={technology.name}>
          <h3>{technology.name}</h3>
          <p>{technology.description}</p>
        </article>
      ))}
    </div>
  );
}

export default TechnicalStack;