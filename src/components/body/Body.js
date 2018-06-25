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

let facts = [{
    id: 0,
    fact: 'lorem ipsum',
    image: 'food'
}, {
    id: 1, 
    fact: 'lorem ipsum 2',
    image: 'location'
}]


const oldArticle = `
<div className="main grid">
<div className="textBlock">
  <h1>Pink and proud of it</h1>
  <p>Flamingos love to munch on foods like shrimp, snails, and 
      algae. All these foods have a chemical that turns a 
      flamingo’s feathers pink. The more of this chemical they 
      eat, the stronger the colour of their feathers. That’s why 
      flamingos in some parts of the world are brighter than 
      others. And if a flamingo stops eating foods with this 
      chemical, they lose their colour and can turn white.
      Flamingos really are what they eat!
  </p>
</div>
</div>
`
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}