import React, { Component } from 'react'
import './Header.css'
import flamingo from './flamingutis4.png'
import beach from './beach-01.svg'

export default class Header extends Component {
  render() {
    return (
      <div className="header gridFlamingo">
        <div className="sun">
        </div>
        <div className="flamingo">
          <img src={flamingo} className="flamingoImg" />
        </div>
        <div className="beach">
          <img src={beach} className="beachImg" />
        </div>
      </div>
    )
  }
}
