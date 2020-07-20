import React, {useState} from 'react'
import ContactTYP from "./ContactTYP"

import "./styles.scss"

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  return (
    <div className="Contact">
    <h3>Contact</h3>
        {!formSubmitted ? (<form action="">
          insert contact form here
          <button type="submit">Submit</button>
        </form>) : (<ContactTYP/>)}
    </div>
  );
}

export default Contact;
