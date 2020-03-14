import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Accordion } from "react-bootstrap";
import { fetchEmails } from "./emailsSlice";
import Email from "./Email";

const EmailsList = ({ emails, authStatus, fetchEmails }) => {
  useEffect(() => {
    if (authStatus) {
      fetchEmails();
    }
  }, [authStatus]);

  return (
    <Accordion>
      {Object.entries(emails).map(([id, email]) => (
        <Email
          key={id}
          id={id}
          email={email}
        />
      ))}
    </Accordion>
  );
};

EmailsList.defaultProps = {
  emails: []
};

const mapStateToProps = state => ({
  emails: state.emails,
  authStatus: state.auth.authStatus
});

const mapDispatchToProps = {
  fetchEmails
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailsList);
