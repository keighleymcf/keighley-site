import React from 'react'
import { Link } from 'react-router-dom';

import "./styles.scss"

const Footer = () => {
  return (
    <footer className="footer">
        <span>© Keighley McFarland 2020</span>
        <Link to="/contact" className="social">Contact</Link>
        <div>
        <a href="https://github.com/keighleymcf" className="social">Github</a>
        <a href="https://www.linkedin.com/in/keighleymcfarland/" className="social">LinkedIn</a>
        </div>
    </footer>
  );
}

export default Footer;
