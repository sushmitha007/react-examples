import React, { Component } from 'react';
import './App.css';
import Child from './Child';

//child component
const App = (props) => {
  return <Child name={props.name} message = "HelloWorld!" />
}
export default App;
