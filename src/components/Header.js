import { useState, useEffect } from "react";

const Header = () => {
  const [email, setEmail] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    fetch('https://the-portfolyo-iota.vercel.app/api/userData')
      .then(response => response.json())
      .then(data => {
        setEmail(data.email);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleSetActive = (section) => {
    setActiveSection(section);
  }

  return (
    <header>
      {/* Desktop Menu Starts */}
      <div className="header-inner hide-mobile">
        {/* MENU STARTS */}
        <div className="menu">
          <nav>
            <ul>
              <li>
                <span className={activeSection === 'home' ? 'active' : ''} id="home-link">
                  Home
                </span>
              </li>
              <li>
                <span className={activeSection === 'about' ? 'active' : ''} id="about-link" onClick={() => handleSetActive('about')}>
                  About
                </span>
              </li>
              <li>
                <span className={activeSection === 'portfolio' ? 'active' : ''} id="portfolio-link" onClick={() => handleSetActive('portfolio')}>
                  Portfolio
                </span>
              </li>
              <li>
                <span className={activeSection === 'contact' ? 'active' : ''} id="contact-link" onClick={() => handleSetActive('contact')}>
                  Contact
                </span>
              </li>
              <li>
                <span className={activeSection === 'blog' ? 'active' : ''} id="blog-link" onClick={() => handleSetActive('blog')}>
                  Blog
                </span>
              </li>
            </ul>
          </nav>
        </div>
        {/* MENU ENDS */}
        {/* FREELANCE STARTS */}
        <div className="mail">
          <p>
            Email :<span>  {email}</span>
          </p>
        </div>
        {/* FREELANCE ENDS */}
      </div>
      {/* Desktop Menu Ends */}
      {/* Mobile Menu Starts */}
      <nav className="mobile-menu">
        <div id="menuToggle">
          <input type="checkbox" id="checkboxmenu" />
          <span />
          <span />
          <span />
          <ul className="list-unstyled" id="menu">
            <li>
              <a href="#home">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#my-photo">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <span>Contact</span>
              </a>
            </li>
            <li>
              <a href="#blog">
                <span>Blog</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Mobile Menu Ends */}
    </header>
  );
};

export default Header;
