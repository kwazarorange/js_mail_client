import React from "react";
import Row from "react-bootstrap/Row";
import {Navbar, Col, Form, FormControl } from "react-bootstrap";
import BootstrapButton from "react-bootstrap/Button";
import SendMailButton from "./SendMailButton";
import AuthInfo from "./AuthInfo";

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Col xs="auto">
        <SendMailButton />
      </Col>
      <AuthInfo />
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
