import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputField from "./../CreateCard/CardParts/Header/InputField/InputField";
import MsgInput from "./../CreateCard/CardParts/Message/MsgInput";
import ImageSection from "./../CreateCard/CardParts/Image/ImageSection";
import UpdateChirpButtons from "./../CreateCard/CardParts/Buttons/UpdateChirpButtons";

const EditTimeline = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const chirpModification = (status) => {
    let title = document.querySelector("#chirperHeader");
    let modal = document.querySelector(".modal");
    let imgSrc = modal.querySelector("#IMG");
    let message = document.querySelector("#textarea");
    props.func(props.myId.id, title, imgSrc, message, status);
  };

  return (
    <>
      <Button className="w-100  px-2" variant="primary" onClick={handleShow}>
        Edit Chirper
      </Button>

      <Modal
        id="modal"
        className="text-center mx-auto"
        size="lg"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header className="w-100" closeButton>
          <Modal.Title className="w-100 mx-auto">Edit Chirp</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="justify-content-center">
            <Col xs={12}>
              <label className="font-weight-bold">Title:</label>
              <InputField change={true} myInput={props.myId.header} />
            </Col>
            <Col className="mt-5" xs={12}>
              <label className="font-weight-bold">Image:</label>
              <ImageSection link={props.myId.img} input={true} modal={true} />
            </Col>
            <Col xs={12}>
              <label className="font-weight-bold">Message:</label>
              <MsgInput change={true} myInput={props.myId.message} />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <UpdateChirpButtons close={handleClose} func={chirpModification} />
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default EditTimeline;
