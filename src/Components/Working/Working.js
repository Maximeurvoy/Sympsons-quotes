import React from 'react'
import './Working.css'
import logo from '../../logo.svg';


class Working extends React.Component {
  constructor(props){
    super()
    this.state = {
        working : true
    };
  }

hisWorking =()=>{

  this.setState({working : false})

}
hisNotWorking =()=>{

  this.setState({working : true})

}

render(){
let workOrNot = this.state.working ? 'App-logo' : 'dontWork'

  return(
    <div className='flex'>
      <img src={logo} className={workOrNot} alt="logo" />
      <div>
      <button onClick={this.hisWorking}>Homer au travail ?</button>
      <button onClick={this.hisNotWorking}>Homer au repos ?</button>
      </div>
    </div>
  )}
}


export default Working;