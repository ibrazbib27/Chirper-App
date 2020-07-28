import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = (props) => {
  return (
    <Row className="w-100   justify-content-around bg-dark mt-auto">
      <Col xs={12} className="mx-auto mt-2">
        <Row className="w-25  mx-auto justify-content-between">
          <i className="fab fa-facebook-square fa-2x text-primary"></i>
          <i className="fab fa-twitter-square fa-2x text-white"></i>
          <i className="fab fa-instagram-square fa-2x text-danger"></i>
        </Row>
      </Col>

      <Col xs={12} className="text-center smaller font-italic text-white mt-1">
        © 2020 Copyright: ChirperApp.com
      </Col>
    </Row>
  );
};

export default Footer;
