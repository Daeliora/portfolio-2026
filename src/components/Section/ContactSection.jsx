function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-section__title">
        <h2>Contact</h2>
      </div>

      <div className="contact-section__content">
        <p>
          UNE IDÉE,
          <br />
          UN PROJET,
          <br />
          UNE OPPORTUNITÉ ?
        </p>

        <a href="mailto:ton-email@example.com">
          Parlons-en. ↗
        </a>

        <a href="mailto:ton-email@example.com">
          elodie.chancerel.44@gmail.com
        </a>
      </div>

      <div className="contact-section__image">
        <img
          src="/images/profile/portrait-contact.webp"
          alt="illustration portrait de la développeuse web"
        />
      </div>
    </section>
  );
}

export default ContactSection;