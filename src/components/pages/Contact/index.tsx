import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

import RonSign from "../../../assets/ron-poop-sign.gif";
import ContactTYP from "./ContactTYP";
import LoadingIndicator from "../../ui/LoadingIndicator";
import { TextField, TextareaField } from "../../ui/FormInputs";
import { Button } from "../../ui/Button";
import { Text } from "../../ui/Text";

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
      <Text variant="h3">Contact</Text>
      {showSubmissionError ? (
        <div className="submission-error">
          <Text variant="h4">Oh no!</Text>
          <img
            src={RonSign}
            alt="Ron Swanson holding up a light sign that says 'poop' - source Giphy"
          />
          <Text variant="p">Something went wrong</Text>
          <Text variant="p">Please try again later</Text>
          <Text variant="p">or send an email the regular way to</Text>
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
          <TextField
            label="Your name"
            type="text"
            name="name"
            error={errors.name}
            {...register("name", { required: true })}
          />
          <TextField
            label="Your e-mail"
            type="email"
            name="email"
            error={errors.email}
            {...register("email", { required: true })}
          />
          <TextareaField
            label="Your message"
            rows={4}
            name="message"
            error={errors.message}
            {...register("message", { required: true })}
          />

          <Button type="submit" disabled={loading}>
            Submit
          </Button>
          <Text variant="pFinePrint">
            {`By clicking "Submit", you confirm that you have read and agree to
            the `}
            <Link to="/impressum#terms">
              information and terms in the impressum and privacy policy
              (Datenschutzerklärung)
            </Link>
          </Text>
        </form>
      ) : (
        <ContactTYP />
      )}
    </div>
  );
};

export default Contact;
