
import ReactDOM from 'react-dom';
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav'
import Routes from './components/routes/Routes';
import './Index.css';
import {BrowserRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import React, { Component } from 'react'


export default class App extends Component {
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
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <React.Fragment>
            <Nav className="nav" isOpen={this.state.isNavOpen} handleNav={this.toggleNav}/>
            <Header />
            <Routes />
            <Footer/>
          </React.Fragment>
        </BrowserRouter>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
