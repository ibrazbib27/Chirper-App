import React from 'react';
import Row from 'react-bootstrap/Row';
import ChirperImg from './Picture/ChirperImg';
import UploadImgField from './Input/UploadImgField';




const ImageSection = (props) => {

 
return(

    <Row className="mb-5">
 <ChirperImg  cards={props.cards}update={props.input} link={props.link}/>
 {props.input ? <UploadImgField  modal={props.modal} /> : null}
          </Row>    
);
}

export default ImageSection;