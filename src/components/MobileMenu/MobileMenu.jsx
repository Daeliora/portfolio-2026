import { useState } from 'react';
import { Link } from 'react-router';

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="mobile-menu">
      <button
        type="button"
        className="mobile-menu__button"
        aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {isOpen && (
        <nav className="mobile-menu__panel" aria-label="Navigation mobile">
          <Link to="/" onClick={closeMenu}>
            Accueil
          </Link>

          <a href="/#projets" onClick={closeMenu}>
            Projets
          </a>

          <a href="/#a-propos" onClick={closeMenu}>
            À propos
          </a>

          <a href="/#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      )}
    </div>
  );
}

export default MobileMenu;