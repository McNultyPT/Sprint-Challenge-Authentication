import React, { Component } from 'react';
import axios from 'axios';

export default class SignIn extends Component {
    state = {
        username: '',
        password: ''
    };
  
    render() {
        return (
            <div>
                <h2>Sign In</h2>
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
                     <button type='submit'>Sign In</button>
                </form>
            </div>
        );
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();

        const endpoint = 'http://localhost:3300/api/login';

        axios
            .post(endpoint, this.state)
            .then(res => {
                localStorage.setItem('jwt', res.data.token);
                this.props.history.push('/jokes');
            })
            .catch(err => console.log(err));
    }
}
