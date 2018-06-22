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
        <div className="toggleNavBtn" onClick={this.props.handleNav}><Icon size={32} icon={navicon} /><a>Flamingoo</a></div>
        
        <div className={sidebarClass}>
            <a href="#">About</a>
            <a href="#">News</a>
            <a href="#">Blog</a>
        </div>
    </nav>
    )
  }
}
