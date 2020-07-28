import React from "react";
import HeaderOutput from "./Header/HeaderOutput";
import EditTimeline from "./../../Modal/EditTimeline";
import MsgOutput from "./Message/MsgOutput";
import ImageSection from "./Image/ImageSection";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const OutputCard = (props) => {
  const card = props.cards.map((card) => (
    <Card
      key={card.id}
      id={card.id}
      className="text-center mt-5 shadow mx-auto"
    >
      <HeaderOutput title={card.header} />
      <Card.Body>
        <ImageSection input={false} modal={false} link={card.img} />
        <MsgOutput text={card.message} />
      </Card.Body>
      <Card.Footer className="text-muted w-100">
        <EditTimeline myId={card} func={props.func} />
      </Card.Footer>
    </Card>
  ));
  return (
    <Col xs={10} md={8} className="justify-content-center mx-auto">
      {card}
    </Col>
  );
};

export default OutputCard;
