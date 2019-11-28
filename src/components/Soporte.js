import React, { Component } from 'react';


class Soporte extends Component {
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      mostrarMensaje: false
    }
  }

  
  handleSubmit(event) {
    event.preventDefault();
    //return <h1>Se agrego el ticket</h1>;

    this.setState({...this.state,  mostrarMensaje: true});
  }

  render() {
    return (
      <div className="form-group">
        <form onSubmit={this.handleSubmit}>
            <h2>Generar ticket</h2>
            <label>
              <div className="field">
                Clasificacion:
                <select name="clasificacion"  className="form-control">
                <option value="s0" name="s0">S0</option>
                <option value="s1" name="s1">S1</option>
                <option value="s2" name="s2">S2</option>
                <option value="s3" name="s3">S3</option>
                <option value="s4" name="s4">S4</option>
                </select>
               </div>
            </label>
            
            <label>
            <div className="field">
                Tipo:
                <select name="clasificacion"  className="form-control">
                <option value="consulta">Consulta</option>
                <option value="incidente">Incidente</option>
                
                </select>
            </div>
            </label><br></br>
            <label>
            <div className="field">
                Producto:
                <input type="text" name="producto"  className="form-control"/>
            </div>
            </label><br></br>
            <label>
            <div className="field">
                Descripcion:
                <input type="text" name="descripcion"  className="form-control" />
            </div>
            </label><br></br>
            <label>
            <div className="field">
                Titulo:
                <input type="text" name="titulo"  className="form-control"/>
            </div>
            </label><br></br>
            <input type="submit" value="Crear ticket" name="submit" className="btn btn-primary" />
        </form>

        {this.state.mostrarMensaje  &&
        <div className="cointainer-fluid">
          <h4 className="card-title">
            Se creo el ticket exitosamente
          </h4>
            
        </div>
        }       
      </div>
      
    );
  }
}

export default Soporte;
