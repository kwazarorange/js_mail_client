import React from "react";
import Row from "react-bootstrap/Row";
import {Navbar, Col, Form, FormControl } from "react-bootstrap";
import BootstrapButton from "react-bootstrap/Button";
import SendMailButton from "./SendMailButton";
import AuthInfo from "./AuthInfo";
import AuthButton from "./AuthButton";

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Col xs="auto">
        <SendMailButton />
      </Col>
      <Col xs="auto">
        <AuthButton />
      </Col>
      <Col xs={5}>
        <AuthInfo />
      </Col>
      <Col xs="auto">
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <BootstrapButton variant="outline-primary">Search</BootstrapButton>
        </Form>
      </Col>
    </Navbar>
  );
};

export default NavBar;
