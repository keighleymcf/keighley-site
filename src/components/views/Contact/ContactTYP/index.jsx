import React from "react";
import monkeyTyping from "../../../../assets/monkey-typing.gif";

import "./styles.scss";

const ContactTYPComponent = () => (
  <div className="contact-typ-container">
    <img
      src={monkeyTyping}
      alt="Monkey with a headset phone typing at a computer - source Giphy"
    />
    <h3>Thanks for contacting me!</h3>
    <p>I'll respond as soon as I can</p>
  </div>
);

export default ContactTYPComponent;
