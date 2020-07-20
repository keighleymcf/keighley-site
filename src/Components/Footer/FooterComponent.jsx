import React from 'react'
import "./styles.scss"

const Footer = () => {
  return (
    <footer className="footer">
        <span>(c) Keighley McFarland</span>
        <span className="social">Contact</span>
        <div>
        <span className="social">Github</span>
        <span className="social">LinkedIn</span>
        </div>
    </footer>
  );
}

export default Footer;
