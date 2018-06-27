import React, { Component } from 'react'
import './Facts.css'
import Fact from './fact/Fact'


export default class Facts extends Component {
  constructor(props){
    super(props)

    this.state = {
      factId: 0,
    }
    this.handleNextFact = this.handleNextFact.bind(this);
    this.handlePreviousFact = this.handlePreviousFact.bind(this);
  }

  handleNextFact() {
    let nextFactId = this.state.factId + 1;
    //TODO: MOVE FACTS HERE (PARENT) TO GET HOW MUCH FACTS THERE CURRENTLY ARE?
    nextFactId > 10 ? nextFactId = 0 : nextFactId;
    this.setState({
      factId: nextFactId
    })
  }

  handlePreviousFact() {
    let prevFactId = this.state.factId - 1;
    //TODO: MOVE FACTS HERE (PARENT) TO GET HOW MUCH FACTS THERE CURRENTLY ARE?
    console.log("PREVIOUS FACT: ", prevFactId);
    prevFactId <= 0 ? prevFactId = 10 : prevFactId;
    this.setState({
      factId: prevFactId
    })
  }

  render() {
    return (
      <div className="mainGrid">
        <div className="mainSeperator"><h1>Interesting Facts</h1></div>
        <Fact className="fact" factId={this.state.factId} handleNextFact={this.handleNextFact} handlePreviousFact={this.handlePreviousFact}/>
      </div>
    )
  }
}

Facts.defaultProps = {
  factId: 0
};

//Utils
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}