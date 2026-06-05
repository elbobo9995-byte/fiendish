import { Link } from 'react-router-dom';
import './Footer.css';

const FOOTER_LINKS = {
  Product: ['Browse Profiles', 'How It Works', 'Fiendish Premium', 'Safety Center'],
  Company: ['Our Story', 'Careers', 'Press', 'Investor Relations'],
  Support: ['Help Center', 'Community Guidelines', 'Contact Us', 'Report a Match'],
  Legal: ['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'All Matches Final'],
};

const FOOTER_HREFS = {
  'Our Story': '/#our-story',
  'How It Works': '/#how-it-works',
  'Report a Match': '/404',
  'Safety Center': '/404',
  'All Matches Final': '/all-matches-final',
  'Terms of Service': '/terms',
  'Privacy Policy': '/privacy',
  'Contact Us': '/404',
  'Fiendish Premium': '/premium',
  'Careers': '/careers',
  'Press': '/press',
  'Investor Relations': '/investor-relations',
  'Community Guidelines': '/community-guidelines',
  'Help Center': '/404',
  'Cookie Policy': '/cookie-policy',
  'Accessibility': '/accessibility',
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        {/* Top row */}
        <div className="footer__top">
          <div className="footer__brand">
            <a href="/" className="footer__wordmark">
              <span className="footer__wordmark-f">F</span>iendish
            </a>
            <p className="footer__tagline">
              Connecting extraordinary individuals since 2023.
              <br />
              Available wherever love, fear, and curiosity intersect.
            </p>
            <div className="footer__app-badges">
              <div className="footer__badge">App Store</div>
              <div className="footer__badge">Google Play</div>
            </div>
          </div>

          <nav className="footer__nav">
            {Object.entries(FOOTER_LINKS).map(([group, links]) => (
              <div className="footer__nav-group" key={group}>
                <h3 className="footer__nav-heading">{group}</h3>
                <ul className="footer__nav-list">
                  {links.map((link) => {
                    const href = FOOTER_HREFS[link] ?? '#';
                    const isRouterLink = href.startsWith('/');
                    return (
                      <li key={link}>
                        {isRouterLink
                          ? <Link to={href} className="footer__nav-link">{link}</Link>
                          : <a href={href} className="footer__nav-link">{link}</a>}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © 2025 Fiendish Inc. All rights reserved. All matches final.
          </p>
          <div className="footer__bottom-links">
            <Link to="/privacy" className="footer__bottom-link">Privacy</Link>
            <Link to="/terms" className="footer__bottom-link">Terms</Link>
            <Link to="/cookie-policy" className="footer__bottom-link">Cookies</Link>
            <Link to="/accessibility" className="footer__bottom-link">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
