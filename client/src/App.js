import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';

import './App.css';
import SignUp from './signUp/SignUp';
import SignIn from './signIn/SignIn';
import Jokes from './jokes/Jokes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink to='/signup'>Sign Up</NavLink>
            <> | </>
            <NavLink to='/signin'>Sign In</NavLink>
            <> | </>
            <NavLink to='/jokes'>Jokes</NavLink>
            <> | </>
            <button onClick={this.signOut}>Sign Out</button>
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
