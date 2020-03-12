import React from "react";
import { connect } from "react-redux";
import {Row, Image, Col} from 'react-bootstrap';
import AuthButton from "./AuthButton";

const AuthInfo = ({ authStatus, user }) => {
  return(
    <>
      {authStatus ? (
        <>
          <Col xs={1}>
            <Image src={user.picture} height={30} roundedCircle />
          </Col>
          <Col xs={6}>
            {user.email} <br /> {user.name}
          </Col>
        </>
      ) : (
        <Col xs={7} />
      )}
      <AuthButton />
    </>
  );
}

const mapStateToProps = state => ({
  user: state.auth.user,
  authStatus: state.auth.authStatus
});

export default connect(mapStateToProps, null)(AuthInfo);
