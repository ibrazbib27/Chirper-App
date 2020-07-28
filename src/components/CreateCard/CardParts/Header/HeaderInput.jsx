import React from "react";
import Card from "react-bootstrap/Card";
import InputField from "./InputField/InputField";

const HeaderInput = (props) => {
  return (
    <Card.Header>
      <InputField change={false} />
    </Card.Header>
  );
};

export default HeaderInput;
