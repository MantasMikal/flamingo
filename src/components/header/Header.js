import React, { Component } from 'react'
import './Header.css'
import flamingo from './flamingutis4.png'


export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="circle">
        </div>
          <div className="gridFlamingo">
            <div className="flamingo"><img className="flamingoImg" src={flamingo}></img></div>
            <div className="gridElements">
                <div className="textBox">
                  <h1>My name's Flamingooo!</h1>
                </div> 
            </div>
          </div>

        
      </div>
    )
  }
}
