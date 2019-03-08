import React, { Component } from 'react';

export default class SignUp extends Component {
    state = {
        username: '',
        password: ''
    };
  
    render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form>
            <label htmlFor='username' />
                <input
                    name='username'
                    id='username'
                    type='text'
                    placeholder='Username'
                    value={this.state.username}
                />
            <label htmlFor='password' />
                <input
                    name='password'
                    id='password'
                    type='text'
                    placeholder='Password'
                    value={this.state.password}
                />
            <button type='submit'>Sign Up</button>
        </form>
      </div>
    );
  }

  
}
