import { NavLink, Link, useLocation } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  const { pathname } = useLocation();
  const isLanding = pathname === '/';
  const isFixed = isLanding;

  return (
    <header className={`nav ${isFixed ? '' : 'nav--static'}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__wordmark">
          <span className="nav__wordmark-f">F</span>iendish
        </Link>

        <nav className="nav__links">
          {isLanding ? (
            <>
              <a href="#how-it-works" className="nav__link">How It Works</a>
              <a href="#success-stories" className="nav__link">Success Stories</a>
              <a href="#our-story" className="nav__link">Our Story</a>
            </>
          ) : (
            <>
              <Link to="/#how-it-works" className="nav__link">How It Works</Link>
              <Link to="/#success-stories" className="nav__link">Success Stories</Link>
              <Link to="/#our-story" className="nav__link">Our Story</Link>
            </>
          )}
        </nav>

        <div className="nav__actions">
          <a href="#" className="btn btn-outline nav__signin">Sign In</a>
          <Link to="/browse" className="btn btn-primary">Get Started</Link>
        </div>
      </div>
    </header>
  );
}
