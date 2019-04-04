import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    // Setting Initial State
    state = {
        users: [
            { name: "John", age: 20 },
            { name: "Jill", age: 30 },
            { name: "Peter", age: 40 }
        ],
        title: "Users List"
    }

    // Handle to modify state
    makeMeElder = () => {
        const newState = this.state.users.map((user) => {
            const tempUser = user;
            tempUser.age += 1;
            return tempUser;
        });
        this.setState({
            newState
        });
    }

    render() {
        return (<div>
            <div>
                <h1>{this.state.title}</h1>
                {
                    this.state.users.map((user) => {
                        return <div>Name:{user.name} | Age:{user.age}</div>
                    })
                }
            </div>
            <User handler={this.makeMeElder}> </User>
            </div>
        )
    }
}

export default Users;