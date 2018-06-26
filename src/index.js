
import ReactDOM from 'react-dom';
import Header from './components/header/Header'
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

import registerServiceWorker from './registerServiceWorker';

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
