import React, { Component } from 'react'
import './Flamingo.css';

import flamingo from '../../../assets/img/flamingo.svg'

export default class Flamingo extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          showFlamingo: true
        }
    
      }    
  

      //Use hiiden class
  //Change Plain SVG to a file
  render() {
    let flamingoClass = this.state.showFlamingo;
    return ( 
        <div className={flamingoClass? "flamingo animated bounceInRight" : "flamingo hidden"} onClick={() => this.setState({showFlamingo: !this.state.showFlamingo})}>
          <img src={flamingo} className="flamingoImg" />
        </div>
    )
  }
}
