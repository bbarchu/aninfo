import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Soporte from './components/Soporte';
import CrearTicket from './components/CrearTicket';
import AtenderLlamada from './components/AtenderLlamada';
import Horas from './components/Horas';
import NavigationBar from './components/Navigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <p className="App-intro">
        <NavigationBar/>

        <Switch>
          <Route
            exact
            path="/Soporte"
            component={Soporte} />
          <Route
            exact
            path="/Soporte/CrearTicket"
            component={CrearTicket} />
          <Route
            exact
            path="/Soporte/AtenderLlamada"
            component={AtenderLlamada} />
          <Route
            exact
            path="/GestionDeHoras"
            component={Horas} />
          <Route component={Soporte} />
        </Switch>

        </p>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
