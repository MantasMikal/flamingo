import React, { Component } from 'react'
import flamingo from './flamingutis4.png'

export default class Flamingo extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          showFlamingo: false
        }
    
      }
  componentWillMount() {
    this.timeoutId = setTimeout(function() {
      this.setState({showFlamingo: true});
    }.bind(this), 1000);
  }

  componentWillUnmount() {
    if (this.timeoutId){
      clearTimeout(this.timeoutId);
    }
  }
  render() {
    return (
        this.state.showFlamingo ? 
        <div className="flamingo">
          <img src={flamingo} className='flamingoImg animated bounceInRight '/>
        </div> : null
    )
  }
}
