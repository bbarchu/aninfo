import React, { Component } from 'react';

class AtencionDeLlamada extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

render() {
    return (
      <div>

      <div class="card bg-light mb-3" >
        <div class="card-header">Atender llamado</div>
        <div class="card-body">
          <h5 class="card-title">Llamada entrante de...</h5>
          <p class="card-text">Empresa: Motorola</p>
          <p class="card-text">Producto: Green app</p>
          <p class="card-text">Version: 1.1</p>
          <p class="card-text">Historial del cliente:</p>

        </div>
      </div>
      
    
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
      <td>Incidente</td>
      <td>Gestión App</td>
      <td>La conversión de monedas se realiza de errónea.</td>
    </tr>
  </table>
  </div>
    );
}
}

export default AtencionDeLlamada;

