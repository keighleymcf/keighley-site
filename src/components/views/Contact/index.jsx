import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

import ContactTYP from "./ContactTYP";
import LoadingIndicator from "../LoadingIndicator";

import "./styles.scss";

const renderErrorMessage = () => (
  <span className="error">This field is required</span>
);

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showSubmissionError, setShowSubmissionError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, errors } = useForm();

  const sendEmail = () => {
    setLoading(true);
    emailjs
      .sendForm(
        "default_service",
        "template_8dZbJEFv",
        "#contactForm",
        process.env.REACT_APP_EMAILJS_USERID
      )
      .then((result) => {
        if (result.status === 200) {
          setLoading(false);
          setFormSubmitted(true);
        }
      })
      .catch(() => {
        setLoading(false);
        setShowSubmissionError(true);
      });
  };

  const onSubmit = () => {
    sendEmail();
  };

  return (
    <div className="contact">
      {loading && <LoadingIndicator />}
      <h3>Contact</h3>
      {showSubmissionError ? (
        <div className="submission-error">
          <h4>Oh no!</h4>
          <img
            src="../../../assets/ron-poop-sign.gif"
            alt="Ron Swanson holding up a light sign that says 'poop' - source Giphy"
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
          id="contactForm"
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

          <button type="submit" disabled={loading}>
            Submit
          </button>
          <p className="consent">
            {`By clicking "Submit", you confirm that you have read and agree to
            the `}
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
