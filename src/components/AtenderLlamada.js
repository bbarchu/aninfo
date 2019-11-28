import React, { Component } from 'react';

class Soporte extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

render() {
    return (
    <table>
    <tr>
      <th>Fecha</th>
      <th>Clasificación</th>
      <th>Tipo</th>
      <th>Proyecto</th>
      <th>Descripción</th>
    </tr>
    <tr>
      <td>24/11/2019</td>
      <td>S1</td>
      <td>Incidente</td>
      <td>Green App</td>
      <td>La app deja de responder si hay más de 127 usuarios registrados.</td>
    </tr>
    <tr>
      <td>25/11/2019</td>
      <td>S5</td>
      <td>Consulta</td>
      <td>Gestión App</td>
      <td>Cliente desea saber si la app será compatible con MSDOS.</td>
    </tr>
    <tr>
      <td>25/11/2019</td>
      <td>S0</td>
      <td>Consulta</td>
      <td>Gestión App</td>
      <td>La conversión de monedas se realiza de errónea.</td>
    </tr>
  </table>
    );
}
}

export default Soporte;
