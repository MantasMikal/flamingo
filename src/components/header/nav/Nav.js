import React, { Component } from 'react';
import { Icon } from 'react-icons-kit'
import {navicon} from 'react-icons-kit/fa/navicon'
import './Nav.css';

export default class Nav extends Component {
    constructor(props){
        super(props);
    }

  render() {
      let sidebarClass = this.props.isOpen ? 'navigation open fast animated slideInLeft' : 'navigation';
    return (
      <nav>
        <a><Icon className="toggleNavBtn" size={32} icon={navicon} onClick={this.props.handleNav} /></a>
        <div className={sidebarClass}>
            <a href="#">About</a>
            <a href="#">News</a>
            <a href="#">Blog</a>
        </div>
    </nav>
    )
  }
}
