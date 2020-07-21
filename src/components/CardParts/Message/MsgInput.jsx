import React from 'react';
import Card from 'react-bootstrap/Card';
import Tooltip from 'react-bootstrap/Tooltip';
import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function renderDescTooltip(props) {
  return (
    <Tooltip id="button-tooltip" {...props}>
     Enter a description of your Chirper here!
    </Tooltip>
  );
}


const MsgInput = (props) => {

 
return(
   
      
       <Row className={props.change ? "mb-3" : "my-5"}>
            <Col xs={12}  >
           <OverlayTrigger
    placement="bottom"
    delay={{ show: 250, hide: 400 }}
    overlay={renderDescTooltip}
>
            <textarea className="form-control" id="textarea" defaultValue={props.change ? props.myInput : ""} rows="3" placeholder="Chirper Description"></textarea>
           </OverlayTrigger>
             </Col>
      </Row>
 
);
}

export default MsgInput;