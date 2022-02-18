import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

import ContactTYP from "./ContactTYP";
import LoadingIndicator from "../../ui/LoadingIndicator";
import { TextField, TextareaField } from "../../ui/FormInputs";
import { Button } from "../../ui/Button";
import { FieldError } from "../../ui/FieldError";

const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [showSubmissionError, setShowSubmissionError] =
    useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

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
      {!showSubmissionError ? (
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
            {errors.name && <FieldError />}
          </label>
          <TextField type="text" {...register("name", { required: true })} />

          <label htmlFor="email">
            Your e-mail
            {errors.email && <FieldError />}
          </label>
          <TextField type="email" {...register("email", { required: true })} />

          <label htmlFor="message">
            Your message
            {errors.message && <FieldError />}
          </label>
          <TextareaField
            rows={4}
            {...register("message", { required: true })}
          />

          <Button type="submit" disabled={loading}>
            Submit
          </Button>
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
