import React, { Component } from 'react'
import './Header.css'
import Beach from './beach/Beach';
import Flamingo from './flamingo/Flamingo';

import cloud1 from '../../assets/img/cloud1.svg';
import cloud2 from '../../assets/img/cloud2.svg';
import cloud3 from '../../assets/img/cloud3.svg';


//TODO:
// Move clouds to seperate component

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="sun">
        </div>
        
        <div className="cloud1 clouds">
          <img src={cloud1} alt="Cloud"/>
        </div>
        <div className="cloud2 clouds">
          <img src={cloud2} alt="Cloud"/>
        </div>
        <div className="cloud3 clouds">
          <img src={cloud3} alt="Cloud"/>
        </div>
        <div className="cloud4 clouds">
          <img src={cloud2} className="cloudFlipped" style={{transform: "scaleX(-1)"} } alt="Cloud"/>
        </div>
        <div className="gridElements">
          <div className="intro animated slideInLeft">
            <h1>Meet Flamingo!</h1>
            <p>The Famous Pink Birdy...</p>
          </div>
        </div>
            <Flamingo className="flamingo"/>
            <Beach className="beach" />
        </div>
    )
  }
}
