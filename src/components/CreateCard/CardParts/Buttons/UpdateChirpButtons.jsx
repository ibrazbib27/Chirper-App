import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const UpdateChirpButtons = (props) => {
  return (
    <Row className="w-100  justify-content-between p-0">
      <Col xs={12} md={5} className="order-2 order-md-0 p-0">
        <Button
          className="w-100 px-2 px-md-0"
          variant="danger"
          onClick={() => {
            props.func(false);
            alert(
              "Your chirper has now been successfully deleted from your timeline."
            );
            props.close();
          }}
        >
          Delete Chirp
        </Button>
      </Col>
      <Col xs={12} md={5} className="order-1 order-md-0  mb-2 mb-md-0 p-0">
        <Button
          className="w-100 px-2 px-md-0"
          variant="success"
          onClick={() => {
            props.func(true);
            alert(
              "Your chriper information has been successfully been updated."
            );
            props.close();
          }}
        >
          Save Changes
        </Button>
      </Col>
    </Row>
  );
};

export default UpdateChirpButtons;
