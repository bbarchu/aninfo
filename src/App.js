import React, { Component } from 'react';
import logo from './logoninja.jpg';
import './App.css';
import { Texto, Boton } from './read-section';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hola Mundo</h2>
        </div>
        <p className="App-intro">
          
        </p>
        
        
      </div>
      
    );
  }
}

export default App;
