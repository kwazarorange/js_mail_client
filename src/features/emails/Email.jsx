import React from "react";
import { Row, Col, Card, Accordion } from "react-bootstrap";
import uuid from 'react-uuid'

const useDate = stringDate => {
  const date = new Date(stringDate);
  const today = new Date();

  if (
    today.getDate() == date.getDate() &&
    today.getMonth() == date.getMonth() &&
    today.getFullYear() == date.getFullYear()
  ) {
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "numeric",
      minute: "numeric"
    });
  }
  return date.toLocaleDateString();
};

const Email = ({ email }) => {
  const { to, from, subject } = email;
  const date = useDate(email.date);
  const key = uuid();
  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey={key}>
        <Row>
          <Col>{date}</Col>
          <Col>{from}</Col>
          <Col>{to}</Col>
          <Col xs={6}>{subject}</Col>
        </Row>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={key}>
        <Card.Body>Message</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default Email;
