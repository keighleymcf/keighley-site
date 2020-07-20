import React from 'react'
import { Link } from 'react-router-dom';
import './styles.scss';

const MainButtonsComponent = () => {
    return (
    <section className="buttons">
      <Link to="/contact"><button className="contact-btn">Contact</button></Link>
      <Link to="/references"><button className="references-btn">Reference projects</button></Link>
    </section>
    )
}

export default MainButtonsComponent
