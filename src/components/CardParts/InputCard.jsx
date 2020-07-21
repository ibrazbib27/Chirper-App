import React from 'react';
import HeaderInput from './Header/HeaderInput';
import HeaderOutput from './Header/HeaderOutput';
import MsgInput from './Message/MsgInput';
import MsgOutput from './Message/MsgOutput';
import ImageSection from './Image/ImageSection';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





const InputCard = (props) => {



return(
 <Col xs={10} md={8} className="justify-content-center mx-auto">
    <Card id="newChirpForm" className="text-center mt-5 shadow mx-auto">
 <HeaderInput /> 
  <Card.Body>
  <ImageSection link={props.link} input={true} modal={false}/>
      
 <MsgInput change={false}/> 

  </Card.Body>
  <Card.Footer className="text-muted w-100"><Button onClick={props.func}id="created" className="w-100  px-2" variant="success">Create Chirper</Button></Card.Footer>
</Card>
    </Col>
  
      
);
}

export default InputCard;