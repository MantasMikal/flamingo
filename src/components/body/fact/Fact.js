import React, { Component } from 'react'
import './Fact.css'

import { Icon } from 'react-icons-kit'
import {ic_chevron_right} from 'react-icons-kit/md/ic_chevron_right'
import {ic_chevron_left} from 'react-icons-kit/md/ic_chevron_left'

import shrimp from '../../../assets/img/shrimp.svg'
import babyFlamingo from '../../../assets/img/babyFlamigo.svg'
import fire from '../../../assets/img/fire.svg'
import flyingFlamingo from '../../../assets/img/flyingFlamingo.svg'
import legs from '../../../assets/img/legs.svg'
import greaterFlamingo from '../../../assets/img/greaterFlamingo.svg'
import life from '../../../assets/img/life.svg'
import neverAlone from '../../../assets/img/neverAlone.svg'
import egg from '../../../assets/img/egg.svg'
import bossFlamingo from '../../../assets/img/bossFlamingo.svg'
import beachy from '../../../assets/img/beachy.svg'

export default class Fact extends Component {
    constructor(props){
        super(props)
        this.state = {
            isFactImageAnimating: false,
        }
    }


  render() {
      let factId = this.props.factId
      let displayFact = (
        <React.Fragment key={factId}>
        <h1 className="factHeading animated bounceInRight">{facts[factId].name}</h1>
        <p className="factParagraph animated bounceInRight">
        {facts[factId].fact}
        </p>
        </React.Fragment>
      )

      let displayImage = (
            <img src={facts[factId].image} className="animated rotateIn" key={factId + "img"}/>
      )

      let factImageClass = this.state.isFactImageAnimating;

    return (
      <div className="fact">
        <div className={factImageClass ? 'factImg animated tada' : 'factImg'} onClick={() => this.setState({isFactImageAnimating: true})} onAnimationEnd={() => this.setState({isFactImageAnimating: false})}>
            {displayImage}
        </div>
        <div className="factWrapper">
            <div className="factText">
                {displayFact}
            </div>
            <div className="buttonWrapper">
                <div className="factCounter">{`${this.props.factId}/${facts.length - 1}`}</div>
               <Icon size={'30%'} icon={ic_chevron_left} onClick={this.props.handlePreviousFact} className="iconL"/>
               <Icon size={'30%'} icon={ic_chevron_right} onClick={this.props.handleNextFact} className="iconR"/>
            </div>

        </div>        
      </div>
    )
  }
}

let facts = [{
    id: 0,
    name: 'Pink and Proud of it!',
    fact: 'Flamingos love to munch on foods like shrimp, snails, and algae. All these foods have a chemical that turns a flamingo’s feathers pink. The more of this chemical they eat, the stronger the colour of their feathers. That’s why flamingos in some parts of the world are brighter than others. And if a flamingo stops eating foods with this chemical, they lose their colour and can turn white. Flamingos really are what they eat!',
    image: shrimp
}, {
    id: 1,
    name: 'Flamingo chicks!',
    fact: 'Flamingo chicks are born with grey and white feathers. They do not turn pink for a year or two. Their beaks are straight, and begin to curve as they grow and mature.',
    image: babyFlamingo
}, {
    id: 2,
    name: 'The Name of Flamingo!',
    fact: 'The word "flamingo" comes from the Spanish and Latin word "flamenco" which means fire, and refers to the bright color of the birds feathers.',
    image: fire
}, {
    id: 3,
    name: 'The Speed of Flamingo!',
    fact: 'When flying in a flock, the top speed of a flamingo can be as high as 35 miles per hour (56 kilometers per hour).',
    image: flyingFlamingo
}, {
id: 4,
    name: 'The Greater Flamingo!',
    fact: 'The greater flamingo is the largest flamingo species and can measure up to five feet tall when standing erect with its head raised, but only weighs a maximum of eight pounds. The lesser flamingo is the smallest flamingo and can reach three feet tall and typically weighs 3-6 pounds.',
    image: greaterFlamingo
}, {
id: 5,
    name: 'Long Legs!',
    fact: 'A adult flamingo"s legs can be 30-50 inches long, which is longer than its entire body. Flamingos often stand on one leg to preserve body heat, tucking the other leg into their plumage so it is kept warm. They will alternate legs to regulate their body temperature..',
    image: legs
}, {
id: 6,
    name: 'A long Life Time!',
    fact: 'Flamingos have a wild lifespan of 20-30 years, but in captivity have been recorded as living up to 50 years or longer. Captive flamingos typically live longer because they are not subject to predators, poachers or other threats, and they receive excellent veterinary care and abundant food..',
    image: life
}, {
id: 7,
    name: 'Who is the boss?',
    fact: 'The pinkest birds have the highest status in the colony as the bright colour shows that a particular individual is strong and good at finding food resources.',
    image: bossFlamingo
}, {
id: 8,
    name: 'We are never alone!',
    fact: ' Groups of flamingos are called colonies or flocks.',
    image: neverAlone
}, {
id: 9,
    name: 'Lets go to the Beach!',
    fact: 'The flamingo is the national bird of The Bahamas.',
    image: beachy
}, {
id: 10,
    name: 'More Flamingos!',
    fact: 'Flamingos are monogamous by nature, and only lay around one egg per year.',
    image: egg
}]