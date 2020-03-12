import React from "react";
import BootstrapButton from "react-bootstrap/Button";

const Button = ({ clickAction, text, active=true }) => {
  return (
    <BootstrapButton disabled={!active} onClick={() => clickAction()}>{text}</BootstrapButton>
  );
};

export default Button;
