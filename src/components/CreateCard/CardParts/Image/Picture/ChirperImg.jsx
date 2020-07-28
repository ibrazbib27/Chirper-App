import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";

class ChirperImg extends Component {
  constructor() {
    super();
    this.state = {
      img: false,
      srcImg: "",
    };
  }
  newSrc = (mySrc) => {
    this.setState({ img: true, srcImg: mySrc });
  };

  render() {
    return (
      <Col xs={12}>
        <Figure className="border border-dark">
          <Figure.Image
            width={300}
            height={300}
            id="IMG"
            src={this.state.img ? this.state.srcImg : this.props.link}
            onLoad={(e) => {
              this.newSrc(e.target.src);
            }}
          />
        </Figure>
      </Col>
    );
  }
}

export default ChirperImg;
