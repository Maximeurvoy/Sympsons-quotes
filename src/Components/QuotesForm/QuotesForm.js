import React from 'react';

class QuoteForm extends React.Component {
    constructor(props){
        super(props)
    
    this.state={
        character:'Homer Simpson'

    }
    }
    
    handleChange=(event)=>{
        this.setState({character:event.target.value})
    }

    countArray (){
        let arraytest = this.state.character.split('')
        return( arraytest.length)
    }
    
    render() {
      return (
        <form className="QuoteForm">
          <label htmlFor="character">Character: </label>
          <input
            id="name"
            name="character"
            type="text"
            value={this.state.character}
            onChange={this.handleChange}
          />
          <p>{this.countArray()}</p>
        </form>

      );
    }
  }


  export default QuoteForm;