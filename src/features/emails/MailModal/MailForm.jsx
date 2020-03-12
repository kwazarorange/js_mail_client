import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Form } from "react-bootstrap";
import BootstrapButton from "react-bootstrap/Button";
import { connect } from "react-redux";
import Button from "../../../containers/Button";
import { updateMailModal } from "../../../store/appSlice";
import sendMail from "./sendMail";

const MailSchema = yup.object({
  email: yup
    .string()
    .email()
    .required(),
  subject: yup.string().required(),
  message: yup.string().required()
});
const MailForm = ({ updateMailModal }) => {
  return (
    <Formik
      validationSchema={MailSchema}
      initialValues={{ email: "", subject: "", message: "" }}
      onSubmit={(values, { setSubmitting }) => {
        sendMail(values).then(() => {
          setSubmitting(false);
          updateMailModal();
        });
      }}
    >
      {({ handleSubmit, handleChange, values, errors, isSubmitting }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicToEmail">
            <Form.Label>Receiver email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
              placeholder="Enter email"
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              name="subject"
              value={values.subject}
              onChange={handleChange}
              isInvalid={!!errors.subject}
              placeholder="Enter subject"
            />
            <Form.Control.Feedback type="invalid">
              {errors.subject}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              name="message"
              value={values.message}
              onChange={handleChange}
              isInvalid={!!errors.message}
              placeholder="Enter message"
            />
            <Form.Control.Feedback type="invalid">
              {errors.message}
            </Form.Control.Feedback>
          </Form.Group>
          <BootstrapButton type="submit" disabled={isSubmitting}>
            Send
          </BootstrapButton>
          <Button text="Close" clickAction={updateMailModal} />
        </Form>
      )}
    </Formik>
  );
};

const mapDispatchToProps = {
  updateMailModal
};

export default connect(null, mapDispatchToProps)(MailForm);
