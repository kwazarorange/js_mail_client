import React from "react";
import { connect } from "react-redux";
import Button from "../../containers/Button";
import { updateMailModal } from "../../store/appSlice";

const SendMailButton = ({ authStatus, updateMailModal, gapiLoaded }) => {
  return (
    <Button
      text="Send mail"
      clickAction={() => {
        if (authStatus) updateMailModal();
      }}
      active={authStatus}
    />
  );
};

const mapStateToProps = state => ({
  authStatus: state.auth.authStatus,
  gapiLoaded: state.auth.gapiLoaded
});

const mapDispatchToProps = {
  updateMailModal
};

export default connect(mapStateToProps, mapDispatchToProps)(SendMailButton);
