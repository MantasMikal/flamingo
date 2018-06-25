import React, { Component } from 'react'
import './Fact.css'
import { Icon } from 'react-icons-kit'
import {ic_explore} from 'react-icons-kit/md/ic_explore'

import food from './shrimp.svg'

export default class Fact extends Component {
  render() {
    return (
      <div className="fact">
        <div className="factImg"> <img src={food}/> </div>
        <Icon size={'80%'} icon={ic_explore} className="generateFactBtn"/>
        <div className="factText">
            <h1 className="factHeading">Food</h1>
            <p className="factParagraph">
            When a flamingo chick hatches, both parents take turns feeding it: first with a special liquid baby food they produce in their throats called crop milk, then with regurgitated regular flamingo food as the chick ages. 
            </p>
        </div>        
      </div>
    )
  }
}
