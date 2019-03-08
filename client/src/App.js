import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import SignUp from './signUp/SignUp';
import SignIn from './signIn/SignIn';
import Jokes from './jokes/Jokes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route path='/signup' component={SignUp} />
          <Route path='/signin' component={SignIn} />
          <Route path='/jokes' component={Jokes} />
        </main>
      </div>
    );
  }
}

export default App;
