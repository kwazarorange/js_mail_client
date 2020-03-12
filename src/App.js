import React, { useEffect } from "react";
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container'
import handleClientLoad from "./features/auth";
import NavBar from "./features/NavBar/NavBar";
import EmailsList from "./features/emails/EmailsList";
import MailModal from "./features/emails/MailModal/";

const App = ({ gapiLoaded, handleClientLoad }) => {
  useEffect(() => {
    handleClientLoad();
  }, []);

  return (
    <Container flush>
      <MailModal />
      <NavBar />
      <EmailsList />
    </Container>
  );
};

const mapDispatchToProps = {
  handleClientLoad
};
const mapStateToProps = state => ({ gapiLoaded: state.auth.gapiLoaded });

export default connect(mapStateToProps, mapDispatchToProps)(App);
