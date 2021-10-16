import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import emailjs from "emailjs-com";
import iceCream from "../../assets/icons8-fallen-ice-cream-cone-64.png";

import ContactTYP from "./ContactTYP";

import "./styles.scss";

const renderErrorMessage = () => (
  <span className="error">This field is required</span>
);

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showSubmissionError, setShowSubmissionError] = useState(false);

  const { register, handleSubmit, errors } = useForm();

  const sendEmail = () => {
    emailjs
      .sendForm(
        "default_service",
        "template_8dZbJEFv",
        "#contact-form",
        process.env.REACT_APP_EMAILJS_USERID
      )
      .then((result) => {
        if (result.status === 200) setFormSubmitted(true);
      })
      .catch(() => {
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
          <img
            className="icecream"
            src={iceCream}
            alt="Fallen Ice Cream Cone icon by icons8 https://icons8.com/icons/set/fallen-ice-cream-cone"
          />
          <p>Something went wrong</p>
          <p>Please try again later</p>
          <p>or send an email the regular way to</p>
          <a href="mailto:contact@keighleymcfarland.me">
            contact@keighleymcfarland.me
          </a>
        </div>
      ) : null}
      {!formSubmitted ? (
        <form
          className="contact-form"
          id="contact-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="name">
            Your name
            {errors.name && renderErrorMessage()}
          </label>
          <input name="name" type="text" ref={register({ required: true })} />

          <label htmlFor="email">
            Your e-mail
            {errors.email && renderErrorMessage()}
          </label>
          <input name="email" type="email" ref={register({ required: true })} />

          <label htmlFor="message">
            Your message
            {errors.message && renderErrorMessage()}
          </label>
          <textarea
            name="message"
            rows="4"
            ref={register({ required: true })}
          />

          <button type="submit">Submit</button>
          <p className="consent">
            {`By clicking "Submit", you confirm that you have read and agree to
            the`}
            <Link to="/impressum#terms">
              information and terms in the impressum and privacy policy
              (Datenschutzerklärung)
            </Link>
          </p>
        </form>
      ) : (
        <ContactTYP />
      )}
    </div>
  );
};

export default Contact;
