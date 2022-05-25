import React, { useState } from "react";
import { Formik, Form } from "formik";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import styled from "styled-components";

import { ContactSubmissionMessage } from "./ContactSubmissionMessage";
import { TextField, TextareaField } from "../../ui/FormInputs";
import { Button } from "../../ui/Button";
import { Text } from "../../ui/Text";
import { InternalLink } from "../../ui/Link";
import { ReactComponent as Arrow } from "../../../assets/arrow.svg";

enum SubmissionStatus {
  ERROR = "error",
  SUCCESS = "success",
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().email().required().label("E-mail"),
  message: Yup.string().required().label("Message"),
});

const StyledArrow = styled(Arrow)`
  width: 36px;
  margin-right: 8px;
`;

const TermsLink = styled(InternalLink)`
  width: auto;
  display: flex;
  flex-direction: row;
  :hover,
  :focus {
    ${StyledArrow} {
      filter: invert(66%) sepia(17%) saturate(1412%) hue-rotate(201deg)
        brightness(112%) contrast(101%);
    }
  }
`;

const Contact: React.FC = () => {
  const [submissionStatus, setSubmissionStatus] = useState<
    SubmissionStatus | undefined
  >(undefined);
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
          setSubmissionStatus(SubmissionStatus.SUCCESS);
        }
      })
      .catch(() => {
        setLoading(false);
        setSubmissionStatus(SubmissionStatus.ERROR);
      });
  };

  const onSubmit = () => {
    setLoading(true);
    sendEmail();
  };

  return (
    <section className="contact">
      <Text variant="h3">Contact</Text>
      {submissionStatus ? (
        <ContactSubmissionMessage
          error={submissionStatus === SubmissionStatus.ERROR}
        />
      ) : (
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ errors, dirty, values }) => {
            return (
              <Form className="contact-form" id="contactForm">
                <TextField
                  name="name"
                  label="Your name"
                  type="text"
                  error={errors.name}
                  disabled={loading}
                />
                <TextField
                  name="email"
                  label="Your e-mail"
                  type="email"
                  error={errors.email}
                  disabled={loading}
                />
                <TextareaField
                  name="message"
                  label="Your message"
                  rows={4}
                  error={errors.message}
                  disabled={loading}
                />

                <Button
                  type="submit"
                  loading={loading}
                  disabled={!Object.keys(errors).length || !dirty}
                >
                  Submit
                </Button>
                <Text variant="pFinePrint">
                  By clicking "Submit", you confirm that you have read and agree
                  to the
                </Text>
                <TermsLink to="/impressum#terms" hideUnderline>
                  <StyledArrow />{" "}
                  <Text variant="pFinePrint">
                    information and terms in the impressum and privacy policy
                    (Datenschutzerklärung)
                  </Text>
                </TermsLink>
              </Form>
            );
          }}
        </Formik>
      )}
    </section>
  );
};

export default Contact;
