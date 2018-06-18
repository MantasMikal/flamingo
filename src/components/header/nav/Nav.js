import React, { Component } from 'react';
import './Nav.css';

export default class Nav extends Component {
    constructor(props){
        super(props);
    }


  render() {
      let sidebarClass = this.props.isOpen ? 'navigation open fast animated slideInLeft' : 'navigation';
    return (
      <nav>  
      <div className={sidebarClass}>
                <a href="#">About</a>
                <a href="#">News</a>
                <a href="#">Blog</a>
                {/* <button onClick={this.props.handleNav}>Toggle!</button> --Togles sidebar */}
            </div>
       </nav>
    )
  }
}
