import React, { Component } from 'react'
import './Header.css'
import Beach from './beach/Beach';
import Flamingo from './flamingo/Flamingo';

export default class Header extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="header gridFlamingo">
        <div className="sun">
        </div>
            <Flamingo />
            <Beach />
        </div>
    )
  }
}
