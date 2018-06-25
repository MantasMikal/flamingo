import React, { Component } from 'react'
import './Body.css'
import Fact from './fact/Fact'

export default class Body extends Component {
  render() {
    return (
      <div className="main grid">
        <div className="mainSeperator"> </div>
        <Fact className="fact"/>
      </div>
    )
  }
}



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