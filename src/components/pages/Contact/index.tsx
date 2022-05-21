import React, { useState } from "react";
import { Formik, Form } from "formik";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";

import RonSign from "../../../assets/ron-poop-sign.gif";
import ContactTYP from "./ContactTYP";
import { TextField, TextareaField } from "../../ui/FormInputs";
import { Button } from "../../ui/Button";
import { Text } from "../../ui/Text";
import { InternalLink, ExternalLink } from "../../ui/Link";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().email().required().label("E-mail"),
  message: Yup.string().required().label("Message"),
});

const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [showSubmissionError, setShowSubmissionError] =
    useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

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
    console.log("submit");
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
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ errors, dirty, values }) => {
            console.log(values);
            return (
              <Form className="contact-form" id="contactForm">
                <TextField
                  name="name"
                  label="Your name"
                  type="text"
                  error={errors.name}
                />
                <TextField
                  name="email"
                  label="Your e-mail"
                  type="email"
                  error={errors.email}
                />
                <TextareaField
                  name="message"
                  label="Your message"
                  rows={4}
                  error={errors.message}
                />

                <Button
                  type="submit"
                  loading={loading}
                  disabled={!Object.keys(errors).length || !dirty}
                >
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
              </Form>
            );
          }}
        </Formik>
      ) : (
        <ContactTYP />
      )}
    </section>
  );
};

export default Contact;
