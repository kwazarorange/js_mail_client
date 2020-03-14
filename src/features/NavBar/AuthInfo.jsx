import React from "react";
import { connect } from "react-redux";
import { Row, Image, Col } from "react-bootstrap";
import "./AuthInfo.css";

const AuthInfo = ({ authStatus, user }) => {
  return(
    <Row className="auth">
      {authStatus ? (
        <>
          <Col xs="auto" className="auth-image">
            <Image src={user.picture} height={38} roundedCircle />
          </Col>
          <Col xs="auto" className="auth-info">
            {user.email} <br /> {user.name}
          </Col>
        </>
      ) : (
        <Col xs={12} />
      )}
    </Row>
  );
}

const mapStateToProps = state => ({
  user: state.auth.user,
  authStatus: state.auth.authStatus
});

export default connect(mapStateToProps, null)(AuthInfo);
