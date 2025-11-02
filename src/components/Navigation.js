import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={`${process.env.PUBLIC_URL}/images/ja_logo.png`} alt="Joshua Agyekum" className="logo-img" />
        </Link>
        <ul className="nav-links">
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>About Me</Link></li>
          <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
          <li><Link to="/experience" className={location.pathname === '/experience' ? 'active' : ''}>Experience</Link></li>
          <li><Link to="/toolkit" className={location.pathname === '/toolkit' ? 'active' : ''}>Toolkit</Link></li>
          <li><Link to="/certifications" className={location.pathname === '/certifications' ? 'active' : ''}>Certifications</Link></li>
          <li><Link to="/education" className={location.pathname === '/education' ? 'active' : ''}>Education</Link></li>
          <li><Link to="/recommendations" className={location.pathname === '/recommendations' ? 'active' : ''}>Recommendations</Link></li>
          <li><Link to="/articles" className={location.pathname === '/articles' ? 'active' : ''}>Articles</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
