import React from "react";
import monkeyTyping from "../../../../assets/monkey-typing.gif";

import { Text } from "../../../ui/Text";

const ContactTYPComponent: React.FC = () => (
  <div className="contact-typ-container">
    <img
      src={monkeyTyping}
      alt="Monkey with a headset phone typing at a computer - source Giphy"
    />
    <Text variant="h3">Thanks for contacting me!</Text>
    <Text variant="p">I'll respond as soon as I can</Text>
  </div>
);

export default ContactTYPComponent;
