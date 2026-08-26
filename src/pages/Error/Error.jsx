function Error() {
  return (
    <main className="error-page">
      <section className="error-page__content">
        <p className="error-page__code">404</p>

        <h1>Page introuvable</h1>

        <p className="error-page__message">
          Cette page n’existe pas ou n’est plus disponible.
        </p>

        <a href="/" className="error-page__link">
          Retour à l’accueil →
        </a>
      </section>
    </main>
  );
}

export default Error;