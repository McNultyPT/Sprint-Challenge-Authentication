import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import SignUp from './signUp/SignUp';
import SignIn from './signIn/SignIn';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route path='/signup' component={SignUp} />
          <Route path='/signin' component={SignIn} />
        </main>
      </div>
    );
  }
}

export default App;
