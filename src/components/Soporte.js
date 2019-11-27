import React, { Component } from 'react';


class Soporte extends Component {
  render() {
    return (
      <div className="App">
        <form>
            <h2>Generar ticket</h2>
            <label>
                
                Clasificacion:
                <select name="clasificacion">
                <option value="s0">S1</option>
                <option value="s1">S2</option>
                <option value="s2">S3</option>
                <option value="s3">S4</option>
                <option value="s4">S5</option>
                </select>
                
            </label><br></br>
            
            <label>
                Tipo:
                <select name="clasificacion">
                <option value="consulta">Consulta</option>
                <option value="incidente">Incidente</option>
                
                </select>
            </label><br></br>
            <label>
                Proyecto:
                <input type="text" name="proyecto" />
            </label><br></br>
            <label>
                Descripcion:
                <input type="text" name="descripcion" />
            </label><br></br>
            <label>
                Titulo:
                <input type="text" name="titulo" />
            </label><br></br>
            <input type="submit" value="Submit" />
        </form>        
      </div>
      
    );
  }
}

export default Soporte;
