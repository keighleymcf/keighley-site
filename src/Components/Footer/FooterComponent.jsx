import React from 'react';
import { Link } from 'react-router-dom';
import github from '../../assets/icons8-github-30.png';
import linkedin from '../../assets/icons8-linkedin-30.png';

import './styles.scss';

const Footer = () => (
  <footer className="footer">
    <span>© Keighley McFarland 2020</span>
    <Link to="/impressum" className="impressum-footer">Impressum</Link>
    <div className="socials-footer">
      <Link to="/contact" className="contact-footer">Contact</Link>
      <a href="https://github.com/keighleymcf">
        <img className="social-icon-footer" src={github} alt="github icon from icons8 https://icons8.com/icons/set/github" />
      </a>
      <a href="https://www.linkedin.com/in/keighleymcfarland/">
        <img className="social-icon-footer" src={linkedin} alt="linkedin icon from icons8 https://icons8.com/icons/set/linkedin" />
      </a>
    </div>
  </footer>
);

export default Footer;
