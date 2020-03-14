import React from "react";
import { connect } from "react-redux";
import { Row, Col, Card, Accordion } from "react-bootstrap";
import EmailBody from "./EmailBody";
import { toggleOpenEmail } from "../emailsSlice";
import useDate from "../functions/useDate";

const Email = ({ isOpen, id, toggleOpenEmail, email }) => {
  const { to, from, subject } = email;
  const date = useDate(email.date);
  const key = id;

  return (
    <Card>
      <Accordion.Toggle
        as={Card.Header}
        eventKey={key}
        onClick={() => toggleOpenEmail(id)}
      >
        <Row>
          <Col>{date}</Col>
          <Col>{from}</Col>
          <Col>{to}</Col>
          <Col xs={6}>{subject}</Col>
        </Row>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={key}>
        <Card.Body>
          <EmailBody id={id} message={email.body} />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

const mapDispatchToProps = {
  toggleOpenEmail
};

const mapStateToProps = (state, ownProps) => ({
  isOpen: state.emails[ownProps.id].isOpen
});

export default connect(mapStateToProps, mapDispatchToProps)(Email);
