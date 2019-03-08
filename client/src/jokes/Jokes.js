import React, { Component } from 'react'
import axios from 'axios';

import authorization from '../auth/authorization';

class Jokes extends React.Component {
    state = {
        jokes: []
    };

    render() {
        return (
            <div>
                <h2>Jokes</h2>
                {this.state.jokes.map(joke => {
                    return (
                        <h4>{joke.joke}</h4>
                    );
                })}
            </div>
        )
    }

    componentDidMount() {
        axios
            .get('http://localhost:3300/api/jokes')
            .then(res => {
                console.log(res.data)
                this.setState({ jokes: res.data })
            });
    }
}

export default authorization(Jokes);
