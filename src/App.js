import React, { Component } from 'react';
import './App.css';
import Soporte from './components/Soporte';
import NavigationBar from './components/Navigation';


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <p className="App-intro">
        <NavigationBar/>
        <Soporte/>
        
        </p>
        
        
      </div>
      
    );
  }
}

export default App;
