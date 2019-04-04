import React, { Component } from 'react';
class User extends Component {
    render() {
  return (
        <div>
        <h4>child component</h4>
        <button onClick = {this.props.handler}>Make me 1 year elder</button>
    </div>)
}
}

export default User;