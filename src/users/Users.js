import React, { Component } from 'react';
import User from './User';

class Users extends Component {
  // Setting Initial State
  state = {
    users: [
      {name:"John", age:20},
      {name:"Jill", age:30},
      {name:"Peter", age:40}
    ],
    title:"Users List"
  }

  // Handle to modify state
  makeMeElder = () => {
    const newState = this.state.users.map((user)=>{
      const tempUser = user;
      tempUser.age +=1;
      return tempUser;
    });
    this.setState({
      newState
    });
  }

  render(){
    return (<div>
      <button onClick={this.makeMeElder}>Make Us 1 year elder</button>
      <br/>
      <h1>{this.state.title}</h1>
      <h3>child Component</h3>
      {
        this.state.users.map((user)=>{
          return <User age={user.age}>{user.name}</User>
        })
      }
      </div>)
  }
}

export default Users;