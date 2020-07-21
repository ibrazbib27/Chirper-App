import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import CardCreate from './CardParts/CardCreate.jsx';
import Footer from './Footer/Footer';



class Chirper extends Component{
    constructor(){
        super();
        this.state = {
           addNewChirper : false,
           
        }
   
    }
 addNewChriperPg = () => {
      this.setState({ addNewChirper: true  });
     let activeElement = document.getElementsByClassName("active");
    
    
 }
 renderChriperPg = () => {
      this.setState({ addNewChirper: false  });
          let activeElement = document.getElementsByClassName("active");
     
 }
  componentDidMount() {
    window.addEventListener('load', (e) => {
      let myClass = "HomeCl";
     let classElement = document.getElementsByClassName(myClass)[1];
      let mainElement = document.getElementsByClassName(myClass)[0];
      classElement.click();
     mainElement.click();
});
 }
    
render(){
    

    let newChirp = false;
    let countNew = 0;
     let count = 0;
    let myRealArr = [];
    let colors = [];
    this.props.color.forEach((color, i) => {
        colors[i] = color;
    })
    let move = false;
    //handles MouseEnter and MouseOut feature for the small screen menu 

    
    
  //adds close icon to minified navbar 
 let addClose = (mainelement, span, x )  =>{
              
                mainelement.style.marginLeft= "auto";
     mainelement.style.border = "transparent";
               mainelement.removeChild(mainelement.firstElementChild);
                span.appendChild(x);
                span.classList.add("text-white", "close");
                mainelement.appendChild(span);
                return mainelement;
 } ;
 
//Synchronizes nav link highlighting between corresponsing links in the small and larger menus 
let handleMainNavClickEvent = (mainElement, classElement) => {
   
     let activeElement = document.getElementsByClassName("active");
  
   

console.log(activeElement[0]);
for(let m = 0; m < activeElement.length; m++){
    activeElement[0].classList.remove("active");
}

       
 
    mainElement.classList.add("active");
    classElement.classList.add("active");

    
}
    

    
     //Handles Mouse Down Events 
let handleMouseDownEvent = (mainElement, classElement, myClass) => {
   
     let activeElement = document.getElementsByClassName("active");
   console.log(activeElement[0]);

for(let m = 0; m < activeElement.length; m++){
    activeElement[0].classList.remove("active");
}
   
    
  mainElement.classList.add("active");
    classElement.classList.add("active");
 

}
    
return (
<React.Fragment>
<Navbar   collapseOnSelect  expand="md" bg="dark" variant="dark" fixed="top">
    <Navbar.Brand >{this.props.name} <Image src="https://image.flaticon.com/icons/svg/2849/2849829.svg" className=" bg-white ml-2 border border-white rounded" width={"25"} fluid /></Navbar.Brand>
    <Navbar.Toggle   onClick={(e) => {
                let elem = document.getElementsByClassName("navbar-toggler")[1];
                let x = document.createTextNode("×");
                let span = document.createElement("span");
                addClose(elem, span, x);
                }
                           }aria-controls="responsive-navbar-nav" />
    
     <Navbar.Collapse id="responsive-navbar-nav">
        <Nav id="mainnav" className="ml-auto w-50 d-none d-md-flex justify-content-md-between" >
            <Nav.Link  className="HomeCl" onClick={(e)=>{e.preventDefault(); document.getElementsByClassName("HomeCl")[1].click();}} onMouseUp={this.renderChriperPg} 
                href="Home">Home</Nav.Link>
            
            <Nav.Link className="AboutCl" onClick={(e)=>{e.preventDefault(); document.getElementsByClassName("AboutCl")[1].click();}} 
                href="About">About</Nav.Link>
            
            <Nav.Link className="AddCl" onClick={(e)=>{e.preventDefault(); document.getElementsByClassName("AddCl")[1].click();}} onMouseUp={this.addNewChriperPg} 
                href="Add">Add New Chirper</Nav.Link>
        </Nav>
  
        <Nav id="nav" className="mx-auto w-100 d-md-none text-center mx-5 my-3  border border-white rounded mb-2" >
        <Navbar.Toggle />
            <Nav.Link className=" mb-2 mt-auto HomeCl  border border-white mx-3" href="Home"  onClick={(e)=>{e.preventDefault(); document.getElementsByClassName("HomeCl")[0].click();}} onMouseUp={this.renderChriperPg} 
              
                >Home</Nav.Link>
            
            
            
            <Nav.Link className=" mb-2 AboutCl border border-white mx-3" href="About"  
            onClick={(e)=>{e.preventDefault(); document.getElementsByClassName("AboutCl")[0].click();}} 
                >About</Nav.Link>
            
            
             <Nav.Link className="mb-2 AddCl border border-white mx-3 mb-4" href="Add" onClick={(e)=>{e.preventDefault(); document.getElementsByClassName("AddCl")[0].click();}}   onMouseUp={this.addNewChriperPg} 
              
               >Add New Chirper</Nav.Link>
            </Nav>
    </Navbar.Collapse>
</Navbar> 
<Container fluid>
 <Row className = "row p-3 my-5">
     
      {this.state.addNewChirper ?  <CardCreate newCard={true}/>  : <CardCreate newCard={false}/>} 
  
    </Row>
    <Footer />
    </Container>
    
    </React.Fragment>
    );
    
}
}





export default Chirper;