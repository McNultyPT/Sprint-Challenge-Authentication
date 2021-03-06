import React, { Component } from 'react';
import axios from 'axios';

import './SignUp.css';

export default class SignUp extends Component {
    state = {
        username: '',
        password: ''
    };
  
    render() {
        return (
            <div className='signUp'>
                <h2>Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username' />
                        <input
                            name='username'
                            id='username'
                            type='text'
                            placeholder='Username'
                            value={this.state.username}
                            onChange={this.handleChanges}
                        />
                    <label htmlFor='password' />
                        <input
                            name='password'
                            id='password'
                            type='text'
                            placeholder='Password'
                            value={this.state.password}
                            onChange={this.handleChanges}
                        />
                     <button type='submit'>Sign Up</button>
                </form>
            </div>
        );
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();

        const endpoint = 'http://localhost:3300/api/register';

        axios
            .post(endpoint, this.state)
            .then(res => {
                localStorage.setItem('username', this.state.username);
                localStorage.setItem('password', this.state.password)
                this.props.history.push('/signin');
            })
            .catch(err => console.log(err));
    }
}
