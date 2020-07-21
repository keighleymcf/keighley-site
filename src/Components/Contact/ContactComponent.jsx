import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import icecream from '../../assets/icons8-fallen-ice-cream-cone-64.png';

import ContactTYP from './ContactTYP';

import './styles.scss';

const renderErrorMessage = () => (
  <span className="error">This field is required</span>
);

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showSubmissionError, setShowSubmissionError] = useState(true);

  const {
    register, handleSubmit, watch, errors,
  } = useForm();

  const sendEmail = () => {
    emailjs.sendForm('default_service', 'template_8dZbJEFv', '#contact-form', process.env.REACT_APP_EMAILJS_USERID)
      .then((result) => {
        if (result.status === 200) setFormSubmitted(true);
      }).catch((err) => {
        setShowSubmissionError(true);
      });
  };

  const onSubmit = () => {
    sendEmail();
  };

  return (
    <div className="contact">
      <h3>Contact</h3>
      {showSubmissionError ? (
        <div className="submission-error">
          <h4>Oh no!</h4>
          <img className="icecream" src={icecream} alt="Fallen Ice Cream Cone icon by icons8 https://icons8.com/icons/set/fallen-ice-cream-cone" />
          <p>Something went wrong</p>
          <p>Please try again later</p>
          <p>
            or send an email the regular way to
          </p>
          <a href="mailto:contact@keighleymcfarland.me">contact@keighleymcfarland.me</a>
        </div>
      ) : null}
      {!formSubmitted ? (
        <form className="contact-form" id="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Your name</label>
          {errors.name && renderErrorMessage()}
          <input name="name" type="text" ref={register({ required: true })} />

          <label htmlFor="email">Your e-mail</label>
          {errors.email && renderErrorMessage()}
          <input name="email" type="email" ref={register({ required: true })} />

          <label htmlFor="message">Your message</label>
          {errors.message && renderErrorMessage()}
          <input name="message" type="textarea" rows="4" ref={register({ required: true })} />

          <button type="submit">Submit</button>
        </form>
      ) : (<ContactTYP />)}
    </div>
  );
};

export default Contact;
