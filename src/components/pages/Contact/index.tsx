import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import RonSign from "../../../assets/ron-poop-sign.gif";
import ContactTYP from "./ContactTYP";
import { TextField, TextareaField } from "../../ui/FormInputs";
import { Button } from "../../ui/Button";
import { Text } from "../../ui/Text";
import { InternalLink, ExternalLink } from "../../ui/Link";

const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [showSubmissionError, setShowSubmissionError] =
    useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { name: "", email: "", message: "" },
  });

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
    setLoading(true);

    sendEmail();
  };

  return (
    <section className="contact">
      <Text variant="h3">Contact</Text>
      {showSubmissionError ? (
        <section id="submission-error">
          <Text variant="h4">Oh no!</Text>
          <img
            src={RonSign}
            alt="Ron Swanson holding up a light sign that says 'poop' - source Giphy"
          />
          <Text variant="p">Something went wrong</Text>
          <Text variant="p">Please try again later</Text>
          <Text variant="p">or send an email the regular way to</Text>
          <ExternalLink href="mailto:contact@keighleymcfarland.me">
            contact@keighleymcfarland.me
          </ExternalLink>
        </section>
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
            error={errors.name}
            {...register("name", { required: true })}
          />
          <TextField
            label="Your e-mail"
            type="email"
            error={errors.email}
            {...register("email", { required: true })}
          />
          <TextareaField
            label="Your message"
            rows={4}
            error={errors.message}
            {...register("message", { required: true })}
          />

          <Button type="submit" loading={loading}>
            Submit
          </Button>
          <Text variant="pFinePrint">
            {`By clicking "Submit", you confirm that you have read and agree to
            the `}
            <InternalLink to="/impressum#terms" hideUnderline>
              <Text variant="pFinePrint">
                information and terms in the impressum and privacy policy
                (Datenschutzerklärung)
              </Text>
            </InternalLink>
          </Text>
        </form>
      ) : (
        <ContactTYP />
      )}
    </section>
  );
};

export default Contact;
