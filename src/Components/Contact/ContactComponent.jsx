import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ContactTYP from './ContactTYP';

import './styles.scss';

const renderErrorMessage = () => (
  <span className="error">This field is required</span>
);

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register, handleSubmit, watch, errors,
  } = useForm();

  const onSubmit = () => {
    setFormSubmitted(true);
  };

  return (
    <div className="contact">
      <h3>Contact</h3>
      {!formSubmitted ? (
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
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
