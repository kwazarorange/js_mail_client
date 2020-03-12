import React from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import MailForm from "./MailForm";
import { updateMailModal } from "../../../store/appSlice";

const MailModal = ({ updateMailModal, showMailModal }) => {
  return (
    <Modal show={showMailModal} onHide={updateMailModal}>
      <Modal.Header closeButton>
        <Modal.Title>Create mail</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MailForm />
      </Modal.Body>
    </Modal>
  );
};

const mapStateToProps = state => ({
  showMailModal: state.app.showMailModal
});

const mapDispatchToProps = {
  updateMailModal
};

export default connect(mapStateToProps, mapDispatchToProps)(MailModal);
