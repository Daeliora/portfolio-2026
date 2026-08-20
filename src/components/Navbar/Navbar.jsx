import { Link } from 'react-router';
import MobileMenu from '../MobileMenu/MobileMenu';

function Navbar() {
  return (
    <header className="navbar">
        
      <Link to="/" className="navbar__logo">
        CHANCEREL Elodie
      </Link>

      <nav className="navbar__nav" aria-label="Navigation principale">
        <Link to="/">Accueil</Link>
        <a href="/#projets">Projets</a>
        <a href="/#a-propos">À propos</a>
        <a href="/#contact">Contact</a>
      </nav>

      <MobileMenu />

    </header>
  );
}

export default Navbar;