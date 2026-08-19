function LighthouseResults({ results }) {
  const labels = {
    performance: 'Performance',
    accessibility: 'Accessibilité',
    seo: 'SEO',
    bestPractices: 'Bonnes pratiques',
  };

  return (
    <div className="lighthouse-results">
      {Object.entries(results).map(([key, result]) => (
        <article className="lighthouse-results__item" key={key}>
          <h3>{labels[key] ?? key}</h3>

          <div className="lighthouse-results__scores">
            <span>{result.before}</span>
            <span>→</span>
            <strong>{result.after}</strong>
          </div>
        </article>
      ))}
    </div>
  );
}

export default LighthouseResults;