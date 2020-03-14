import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";
import getEmailBody from "../functions/getEmailBody";
import "./EmailBody.css";

const EmailBody = ({ id, message, isOpen }) => {
  const [body, setBody] = useState("");
  useEffect(() => {
    if (isOpen) {
      getEmailBody(message).then(results => setBody(results));
    } else {
      setBody("");
    }
  }, [isOpen]);

  const loadingScreen = <Spinner className="emailContent" animation="border" />;
  return (
    <div className="emailBody">
      {body ? <iframe className="emailContent" srcDoc={body} /> : loadingScreen}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  isOpen: state.emails[ownProps.id].isOpen
});
export default connect(mapStateToProps, null)(EmailBody);
