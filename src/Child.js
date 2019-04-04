import React, { Component } from 'react';

//Grand child component
const Child = (props) => {
  return <h3>{props.message}!Welcome to {props.name}</h3>
}
export default Child;