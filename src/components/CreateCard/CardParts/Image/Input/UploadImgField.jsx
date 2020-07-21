import React from 'react';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';

function renderPicTooltip(props) {
  return (
    <Tooltip id="button-tooltip" {...props}>
     The image url the that you enter must end with one of the following: .gif, .jpg, .jpeg, and .png.
     Entry of a url that does not meet the following requirements will be disregarded.
     If you wish to revert back to the default question mark image enter "default" with no extra characters. Lastly, 
     if you wish to keep the image the way it is, just leave the 'Image url' field blank.
    </Tooltip>
  );
}

const UploadImgField = (props) => {
let handleUpload = () => {
    let img = document.getElementsByTagName("img")[0];
    let imgUrl = document.getElementById("url").value;
    if(imgUrl.includes(" ")){
       imgUrl = imgUrl.replace(/ /g, "");
    }
    if(imgUrl.toUpperCase() === "DEFAULT"){
         img.src = "https://www.evolvefish.com/assets/images/Decals/EF-VDC-00035(Black).jpg";
    }
    else{
    if(imgUrl.endsWith(".gif") || imgUrl.endsWith(".jpg") || imgUrl.endsWith(".jpeg") || imgUrl.endsWith(".png")){
      
    img.src = imgUrl;
   
        if(props.modal === true)
    (document.getElementById("modal")).getElementsByTagName("img")[0].src =  img.src +"?" + new Date().getTime();
       
    }
    else{
        alert("Error: The url you entered is not a valid Image url.");
    }
    }
}
 
return(

 
       
         <Col xs={12} className="mt-3"  >
             <InputGroup >
     <OverlayTrigger
    placement="top"
    delay={{ show: 250, hide: 400 }}
    overlay={renderPicTooltip}
  >
    <FormControl
    id="url"
      placeholder="Image Url"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
        /></OverlayTrigger>
    <InputGroup.Append>
      <Button id="changeIMG" variant="primary" size="sm"  onClick={(e) => { handleUpload() }}>Upload Image</Button>
    </InputGroup.Append>
  </InputGroup>
         
        </Col>
          
  
  
      
);
}

export default UploadImgField;