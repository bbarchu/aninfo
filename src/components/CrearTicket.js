import React, { Component } from 'react';


class CrearTicket extends Component {
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.agregarNuevaTarea = this.agregarNuevoTicket.bind(this);
    this.state = {
        tickets: [
          {
          titulo: "Problema en base de datos",
          tipo: "Incidente",
          clasificacion: "S0",
          producto: "Green app",
          descripcion: "Se borraron archivos",
          fechaAlta:"10/11/19",
          },
          {
            titulo: "La app deja de responder",
            tipo: "Incidente",
            clasificacion: "S0",
            producto: "Gestion app",
            descripcion: "La app deja de responder si hay mas de 127 usuarios en linea",
            fechaAlta:"02/12/19",
            }
            
        ],
        titulo: "",
        tipo: "Consulta",
        clasificacion: "S0",
        producto: "",
        descripcion: "",
        fechaAlta:"02/12/19",
        mostrarMensaje: false,        
    }
  }

  componentWillUnmount() {
    document.tickets = this.state.tickets;
  }

  componentDidMount() {
    if (document.tickets) {
      this.setState({tickets:  document.tickets});
    }
  }

  agregarNuevoTicket(ticket) {
    this.setState({
      tickets: [...this.state.tickets, ticket],
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.setState({...this.state,  mostrarMensaje: true});

    var ticket = {
      titulo: this.state.titulo,
      tipo: this.state.tipo,
      clasificacion: this.state.clasificacion,
      producto: this.state.producto,
      descripcion: this.state.descripcion,
      fechaAlta:this.state.fechaAlta
    }

    this.agregarNuevoTicket(ticket);
  }

  render() {
    return (
      <div className="form-group">
        <form onSubmit={this.handleSubmit}>
            <h2>Generar ticket</h2>
            <label>
              <div className="field">
                Clasificacion:
                <select name="clasificacion"  className="form-control" 
                onChange={event => this.setState({ clasificacion: event.target.value })}>
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
                <select name="tipo"  className="form-control" 
                onChange={event => this.setState({ tipo: event.target.value })}>
                <option value="consulta">Consulta</option>
                <option value="incidente">Incidente</option>
                
                </select>
            </div>
            </label><br></br>
            <label>
            <div className="field">
                Titulo:
                <input type="text" name="titulo"  className="form-control" 
                onChange={event => this.setState({ titulo: event.target.value })}/>
            </div>
            </label><br></br>
            <label>
            <div className="field">
                Producto:
                <input type="text" name="producto"  className="form-control"
                onChange={event => this.setState({ producto: event.target.value })}/>
            </div>
            </label><br></br>
            <label>
            <div className="field">
                Descripcion:
                <textarea rows="5" name="descripcion"  className="form-control" 
                onChange={event => this.setState({ descripcion: event.target.value })}/>
            </div>
            </label><br></br>
            <input type="submit" value="Crear ticket" name="submit" className="btn btn-primary" 
            />
        </form>

        {this.state.mostrarMensaje  &&
          <div className="cointainer-fluid">
            <br/>
            <h4 className="card-title">
              Se creo el ticket exitosamente
            </h4>
          </div>
        }
        <br></br>
        <h2> Tickets abiertos</h2>
        <table>          
          <tr>
            <th>Titulo</th>
            <th>Producto</th>
            <th>Tipo</th>
            <th>Clasificacion</th>
            <th>Descripcion</th>
            <th>Fecha de alta</th>
          </tr>
        
          <tbody>
          {this.state.tickets.map ( ticket => {
                return ( 
                  <tr key={ticket.titulo}>
                  <td> {ticket.titulo} </td>
                  <td> {ticket.producto} </td>
                  <td>{ticket.tipo}</td>
                  <td>{ticket.clasificacion}</td>
                  <td>{ticket.descripcion}</td>
                  <td>{ticket.fechaAlta}</td>
                  </tr>
                  );
          })}
          </tbody>
        </table>
        </div>       
      
    );
  }
}

export default CrearTicket;
