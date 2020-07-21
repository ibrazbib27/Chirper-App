import React, {Component} from 'react';
import InputCard from './CardParts/InputCard';
import OutputCard from './CardParts/OutputCard';




let count = 2;
class CardCreate  extends Component{
    constructor(){
        super();
        this.state = {
            link:"https://www.evolvefish.com/assets/images/Decals/EF-VDC-00035(Black).jpg",
           cardDetails: [
          {id: 0, header:"Grasshopper", img:"https://www.clker.com/cliparts/4/1/f/8/1516193030290013696free-clipart-grasshopper.med.png" , message:"I am a grasshopper and I like to chirp really loud at night"},
          {id: 1, header:"Frog", img:"https://www.pngitem.com/pimgs/m/459-4591591_transparent-frogs-clipart-clipart-frog-hd-png-download.png" , message:"I am a Frog and I chirp louder than a Grasshopper"},
           {id: 2, header:"Kid", img:"https://www.pngitem.com/pimgs/m/406-4061238_png-pinterest-clip-kids-clipart-boy-transparent-png.png" , message:"I am a kid and I wish I can chirp"}
      ]
           
        }
   this.handleClick = this.handleClick.bind(this);
        this.updateCard = this.updateCard.bind(this);

    }
updateCard(id, header, img, msg, update){
   let arr = [...this.state.cardDetails];
    let place = 0;
    for(let num = 0; num < arr.length; num++){
        if(parseInt(arr[num].id) === parseInt(id)){
            place = num;
            break;
        }
    }
     for(let num = 0; num < arr.length; num++){
         document.getElementById(parseInt(arr[num].id)).getElementsByTagName("img")[0].src = arr[num].img;
    }
    if(update === true){
        arr[place].header = header.value;
        document.getElementById(id).getElementsByTagName("img")[0].src = img.src;
         arr[place].img = img.src;
        arr[place].message = msg.value;
         this.state.cardDetails = [...arr];
        this.setState({cardDetails: [...this.state.cardDetails] });
    }
    else{
        arr.splice(place, 1);
         this.state.cardDetails = [...arr];
        this.setState({cardDetails: [...this.state.cardDetails] });
    }
   
}
  handleClick() {
count++;

 
     let arr = [{id: count, header:"", img:"" , message:""}]
   arr[0].header =  document.getElementById("chirperHeader").value;
   arr[0].message = document.getElementById("textarea").value;
    arr[0].img = document.getElementsByTagName("img")[0].src;
  
 
   
      this.state.cardDetails =  this.state.cardDetails.concat(arr);
   this.setState({cardDetails: [...this.state.cardDetails] });
           document.body.style.cursor = "progress";
      setTimeout(()=>{
          alert("Success: Congratulations, you have updated a new chirp to your timeline! You can view your timeline by clicking the 'Home' button.")
     document.getElementById("chirperHeader").value = "";
document.getElementsByTagName("img")[0].src = this.state.link;
document.getElementById("textarea").value = "";
document.body.style.cursor = "default";

      }, 1000);


 }
render(){
  
 
return(  
   <React.Fragment>

        {this.props.newCard ? <InputCard func={this.handleClick} link={this.state.link} myId={this.state.cardDetails}/> : <OutputCard func={this.updateCard} cards={this.state.cardDetails} />} 
        
    </React.Fragment>
);
}
}

export default CardCreate;