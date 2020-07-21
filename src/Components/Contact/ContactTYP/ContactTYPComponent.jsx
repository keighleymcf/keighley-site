import React from 'react';
import bottle from '../../../assets/icons8-message-in-green-bottle-64.png';

import './styles.scss';

const ContactTYPComponent = () => (
  <div className="contact-typ-container">
    <img className="message-bottle-icon" src={bottle} alt="message in a bottle icon by icons8 ttps://icons8.com/icon/58973/message-in-green-bottle" />
    <h3>Thanks for contacting me!</h3>
    <p>I'll respond as soon as I can</p>
  </div>
);

export default ContactTYPComponent;
