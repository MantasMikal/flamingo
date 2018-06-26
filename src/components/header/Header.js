import React, { Component } from 'react'
import './Header.css'
import Beach from './beach/Beach';
import Flamingo from './flamingo/Flamingo';

import cloud1 from '../../assets/img/cloud1.svg';
import cloud2 from '../../assets/img/cloud2.svg';
import cloud3 from '../../assets/img/cloud3.svg';
import Nav from './nav/Nav';


//TODO:
// Move clouds to seperate component

export default class Header extends Component {
  constructor(props){
    super(props);

    this.state = {
      isNavOpen: false,
  }
  this.toggleNav = this.toggleNav.bind(this);
}

toggleNav() {
    this.setState({
        isNavOpen: !this.state.isNavOpen
    })

}
  render() {
    return (
      <div className="header">
        <div className="sun">
        </div>
        <Nav className="nav" isOpen={this.state.isNavOpen} handleNav={this.toggleNav}/>
        <div className="cloud1 cloud">
          <img src={cloud1} alt="Cloud"/>
        </div>
        <div className="cloud2 cloud">
          <img src={cloud2} alt="Cloud"/>
        </div>
        <div className="cloud3 cloud">
          <img src={cloud3} alt="Cloud"/>
        </div>
        <div className="cloud4 cloud">
          <img src={cloud2} className="cloudFlipped" style={{transform: "scaleX(-1)"} } alt="Cloud"/>
        </div>
        <div className="gridElements">
          <div className="intro animated slideInLeft">
            <h1>Meet Flamingo!</h1>
            <p>The Famous Pink Birdy...</p>
          </div>
        </div>

            <Flamingo className="flamingo"/>
            <Beach className="beach"/>
        </div>
    )
  }
}
