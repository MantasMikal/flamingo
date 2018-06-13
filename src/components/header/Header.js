import React, { Component } from 'react'
import './Header.css'
import flamingo from './flamingo.png'


export default class Header extends Component {
  render() {
    return (
      <div className="header">
            <div className="circle"> </div>
            <div className="flamingo"><img className="flamingoImg" src={flamingo}></img></div>
      </div>
    )
  }
}
