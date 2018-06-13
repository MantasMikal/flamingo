
import ReactDOM from 'react-dom';
import Header from './components/header/Header'
import registerServiceWorker from './registerServiceWorker';

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
