import React from 'react';
import './QuoteCard.css'

// const QuoteCard =(props) =>{
//   return(
//   <figure className="QuoteCard">
//     <img
//       src={props.image}
//       alt={props.character}/>
//     <figcaption>
//       <blockquote>
//         {props.quote}
//       </blockquote>
//       <cite>{props.character}</cite>
//     </figcaption>
//   </figure>
  
//   )
// }

class QuoteCard extends React.Component {
  constructor(){
  super()
 
  this.state = {
    favorite:false,

  }
}

 event = () =>{
   const newfavorite = !this.state.favorite
  this.setState({favorite:newfavorite})
}


render(){
  return(
  <figure className="QuoteCard">
    <img
      src={this.props.image}
      alt={this.props.character}/>
    <figcaption>
      <blockquote>
        {this.props.quote}
      </blockquote>
      {/* <cite>{this.props.character}</cite> */}
    <p>
      <cite>{this.props.character}</cite>
      <span onClick={this.event} className= {this.state.favorite ? "":"is-favorite"}>&#9733;</span>
    </p>
    </figcaption>
  </figure>
 )
}
}

export default QuoteCard;