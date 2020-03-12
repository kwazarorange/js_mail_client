import React from "react";
import Button from "../../containers/Button";
import { connect } from 'react-redux';
import { auth } from '../auth/AuthSlice';

const AuthButton = ({authStatus, auth, gapiLoaded}) => {
  return (
    <Button
      text={authStatus ? "Logout" : "Login"}
      clickAction={auth}
      active={gapiLoaded}
    />
  );
};

const mapStateToProps = state => ({
  authStatus: state.auth.authStatus,
  gapiLoaded: state.auth.gapiLoaded
});

const mapDispatchToProps = {
  auth
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
