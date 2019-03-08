import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';

import './App.css';
import SignUp from './signUp/SignUp';
import SignIn from './signIn/SignIn';
import Jokes from './jokes/Jokes';

class App extends Component {
  render() {
    const token = localStorage.getItem('jwt');

    return (
      <div className="App">
        <header>
          <nav>
            { !token ? <NavLink to='/signup'>Sign Up</NavLink> : null }
            { !token ? <NavLink to='/signin'>Sign In</NavLink> : null }
            { token ? <NavLink to='/jokes'>Jokes</NavLink> : null }
            { token ? <button onClick={this.signOut}>Sign Out</button> : null }
          </nav>
        </header>
        <main>
          <Route path='/signup' component={SignUp} />
          <Route path='/signin' component={SignIn} />
          <Route path='/jokes' component={Jokes} />
        </main>
      </div>
    );
  }

  signOut = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/signin')
  };
}

export default withRouter(App);
