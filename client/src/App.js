import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import SignUp from './signup/SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route path='/signup' component={SignUp} />
        </main>
      </div>
    );
  }
}

export default App;
