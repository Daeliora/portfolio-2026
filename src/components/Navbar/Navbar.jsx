import { Link } from 'react-router';
import MobileMenu from '../MobileMenu/MobileMenu';

function Navbar() {
  const handleHomeClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className="navbar">
        
      <Link to="/" className="navbar__logo" onClick={handleHomeClick}>
        CHANCEREL Elodie
      </Link>

      <nav className="navbar__nav" aria-label="Navigation principale">
        <Link to="/" onClick={handleHomeClick}>
          Accueil
        </Link>
        <a href="/#projets">Projets</a>
        <a href="/#a-propos">À propos</a>
        <a href="/#contact">Contact</a>
      </nav>

      <MobileMenu />

    </header>
  );
}

export default Navbar;