import React, { Component } from 'react'
import './Body.css'
import Fact from './fact/Fact'

export default class Body extends Component {
  constructor(props){
    super(props)

    this.state = {
      factId: 0,
    }
    this.handleFact = this.handleFact.bind(this);
  }

  handleFact() {
    let ranodomId = getRandomInt(7);
    this.setState({
      factId: ranodomId
    })
  }

  render() {
    return (
      <div className="main grid">
        <div className="mainSeperator"><h1>Random facts about flamingo</h1></div>
        <Fact className="fact" factId={this.state.factId} handleFact={this.handleFact}/>
      </div>
    )
  }
}

//Utils
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}