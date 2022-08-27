import React, { useState } from "react";
import { Formik, Form } from "formik";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";

import { ContactSubmissionMessage } from "./ContactSubmissionMessage";
import { TextField, TextareaField } from "../../ui/FormInputs";
import { Button } from "../../ui/Button";
import { Text } from "../../ui/Text";
import { InternalLink } from "../../ui/Link";

enum SubmissionStatus {
  ERROR = "error",
  SUCCESS = "success",
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().email().required().label("E-mail"),
  message: Yup.string().required().label("Message"),
});

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const [submissionStatus, setSubmissionStatus] = useState<
    SubmissionStatus | undefined
  >(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const sendEmail = (values: FormValues) => {
    setLoading(true);
    emailjs
      .send(
        "default_service",
        "template_8dZbJEFv",
        values,
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

  return (
    <section className="contact">
      <Text variant="h2">Contact</Text>
      {submissionStatus ? (
        <ContactSubmissionMessage
          error={submissionStatus === SubmissionStatus.ERROR}
        />
      ) : (
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          onSubmit={sendEmail}
          validationSchema={validationSchema}
        >
          {({ errors, dirty, values }) => {
            return (
              <Form id="contactForm" data-testid="contact-form">
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
                  <>
                    By clicking "Submit", you confirm that you have read and
                    agree to the information and terms and the privacy policy in
                    the{" "}
                    <InternalLink to="/impressum#terms" variant="secondary">
                      <Text variant="pFinePrint">impressum</Text>
                    </InternalLink>{" "}
                    (Datenschutzerklärung)
                  </>
                </Text>
              </Form>
            );
          }}
        </Formik>
      )}
    </section>
  );
};

export default Contact;
