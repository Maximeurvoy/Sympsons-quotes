import React from 'react';
import axios from 'axios';



class ButtonCitation extends React.Component{
  constructor(){
    super()
    this.state={
      picture : 'https://sun9-10.userapi.com/c9552/u147537609/a_ad2cc55d.jpg?ava=1d',
      quote : 'nothing to say',
      character : ''
    }
  }

  componentDidMount=()=>{
    this.citation()
  } 

  citation=()=>{
    axios('https://quests.wilders.dev/simpsons-quotes/quotes')
    
    .then((result)=>{
      console.log(result)
      this.setState({
        quote:result.data[0].quote,
        picture:result.data[0].image,
        character:result.data[0].character
        });
    });
  }

  render(){
    return(
      <div>
      <img src={this.state.picture} alt='sympson'></img>
      <blockquote>
        <p>{this.state.quote}</p>
        <footer>{this.state.character}</footer>
      </blockquote>
      
      <button onClick={this.citation} >ButtonCitation</button>
      </div>
    )
  }
}

export default ButtonCitation;


