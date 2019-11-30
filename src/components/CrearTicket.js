import React, { Component } from 'react';
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, LinearProgress, TextField }from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class CrearTicket extends Component {
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.agregarNuevaTarea = this.agregarNuevoTicket.bind(this);
    this.state = {
        tickets: [
          {
          titulo: "Falla por cantidad de usuarios",
          tipo: "Incidente",
          severidad: "S1",
          producto: "Green App",
          descripcion: "La app deja de responder si hay más de 127 usuarios registrados",
          alta: "24/11/2019"
          },
          {
          titulo: "Compatibilidad con MSDOS",
          tipo: "Consulta",
          severidad: "S5",
          producto: "Gestión App",
          descripcion: "Cliente desea saber si la app será compatible con MSDOS",
          alta: "25/11/2019"
          },
          {
          titulo: "Incorrecta conversión de monedas",
          tipo: "Incidente",
          severidad: "S0",
          producto: "Gestión App",
          descripcion: "La conversión de monedas arroja resultados erróneos",
          alta: "25/11/2019"
          }
        ],
        titulo: "",
        tipo: "Consulta",
        severidad: "S0",
        producto: "",
        descripcion: "",
        alta:"02/12/19",
        mostrarMensaje: false,
        mostrarError: false        
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

    setTimeout(function() {
      this.setState({...this.state,  mostrarMensaje: false, mostrarError: false});
    }.bind(this), 5000)

    if(this.state.titulo === "" || this.state.producto === "" ){
      this.setState({...this.state,  mostrarMensaje: false, mostrarError: true});

      console.log(this.state.mostrarError)
      console.log(this.state.mostrarMensaje)
      return;
    }
    this.setState({...this.state,  mostrarMensaje: true, mostrarError: false});

    var ticket = {
      titulo: this.state.titulo,
      tipo: this.state.tipo,
      severidad: this.state.severidad,
      producto: this.state.producto,
      descripcion: this.state.descripcion,
      alta:this.state.alta
    }

    this.agregarNuevoTicket(ticket);
    
    
  }

  render() {
    return (
      <div>
      <div class="card bg-light mb-3" >
        <div class="card-header">Generar ticket</div>
        <div class="card-body">

        <div className="form-group" style={{display: "inline-block"}}>
        
        <form onSubmit={this.handleSubmit} style={{width: '100%'}}>
            <label>
              <div className="field">
                Clasificacion:
                <select name="severidad"  className="form-control" 
                onChange={event => this.setState({ severidad: event.target.value })}>
                <option value="S0" name="s0">S0</option>
                <option value="S1" name="s1">S1</option>
                <option value="S2" name="s2">S2</option>
                <option value="S3" name="s3">S3</option>
                <option value="S4" name="s4">S4</option>
                </select>
               </div>
            </label>&nbsp;
            <label>
            <div className="field">
                Tipo:
                <select name="tipo"  className="form-control" 
                onChange={event => this.setState({ tipo: event.target.value })}>
                <option value="Consulta">Consulta</option>
                <option value="Incidente">Incidente</option>
                
                </select>
            </div>
            </label>&nbsp;
            <label>
            <div className="field">
                Titulo:
                <input class="form-control" type="text" name="titulo"  
                onChange={event => this.setState({ titulo: event.target.value })}/>
            </div>
            </label>&nbsp;
            <label>
            <div className="field">
                Producto:
                <input type="text" name="producto"  className="form-control"
                onChange={event => this.setState({ producto: event.target.value })}/>
            </div>
            </label><br></br>
            <label style={{width: '100%'}}>
            <div className="field">
                Descripcion:
                <textarea rows="5" name="descripcion"  className="form-control"
                onChange={event => this.setState({ descripcion: event.target.value })}/>
            </div>
            </label><br></br>
            <input type="submit" value="Crear ticket" name="submit" className="btn btn-primary"/>
          </form>
          </div>

          {this.state.mostrarMensaje  &&
            <div className="cointainer-fluid">
              <h4 class="card-title">
                Se creo el ticket exitosamente
              </h4>
            </div>}

          {this.state.mostrarError  &&
            <h4 class="card-title">
              Faltan campos por rellenar!
            </h4>}

          </div>
        </div>

      <div style={{paddingLeft: "10%", paddingRight: "10%",marginTop:"2%"}}>
                    <ExpansionPanel square expanded={false}>
                        <ExpansionPanelSummary>
                            <div className="column" style={{flexBasis: '24%'}}>
                                <Typography className="heading" onClick={this.sorttitulo} style={{textAlign:"left"}}><b>Título</b>
                                    {this.state.titulosort ? <i className="arrow circle down icon"></i> :
                                        <i className="arrow circle up icon"></i>}</Typography>
                            </div>

                            <div className="column" style={{flexBasis: '24.0%'}}>
                                <Typography className="heading" onClick={this.sorttipo} style={{textAlign:"left"}}><b>Tipo</b>
                                    {this.state.tiposort ? <i className="arrow circle down icon"></i> :
                                        <i className="arrow circle up icon"></i>}</Typography>
                            </div>

                            <div className="column" style={{flexBasis: '24.0%'}}>
                                <Typography className="heading" onClick={this.sortseveridad} style={{textAlign:"left"}}><b>Severidad</b>
                                    {this.state.severidadsort ? <i className="arrow circle down icon"></i> :
                                        <i className="arrow circle up icon"></i>}</Typography>
                            </div>


                            <div className="column" style={{flexBasis: '24.0%'}}>
                                <Typography className="heading" onClick={this.sortproducto} style={{textAlign:"left"}}><b>Producto</b>
                                    {this.state.productosort ? <i className="arrow circle down icon"></i> :
                                        <i className="arrow circle up icon"></i>}</Typography>
                            </div>

                        </ExpansionPanelSummary>
                    </ExpansionPanel>
            </div>

           {this.state.tickets.map ((ticket, i) => {
                if (this.state.searchTerm)
                    if (!ticket.titulo.toLowerCase().startsWith(this.state.searchTerm.toLowerCase())
                && !ticket.tipo.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()) 
                && !ticket.severidad.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()) 
                && !ticket.producto.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()))
                        return null;
                   return<div id="ticket" key={i}  style={{position:"static",paddingLeft: "10%", paddingRight: "10%"}}>
                                <ExpansionPanel square>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>} aria-label="Expand" aria-controls="additional-actions3-content" id="additional-actions3-header">
                                        <div className="column" style={{flexBasis: '25%'}}>
                                            <Typography className="heading" style={{textAlign:"left",}}>{ticket.titulo}</Typography>
                                        </div>
                                        <div className="column" style={{flexBasis: '25.0%'}}>
                                            <Typography className="heading" style={{textAlign:"left"}}>{ticket.tipo}</Typography>
                                        </div>
                                        <div className="column" style={{flexBasis: '25.0%'}}>
                                            <Typography className="heading" style={{textAlign:"left"}}>{ticket.severidad}</Typography>
                                        </div>
                                        <div className="column" style={{flexBasis: '25.0%'}}>
                                            <Typography className="heading" style={{textAlign:"left"}}>{ticket.producto}</Typography>
                                        </div>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails style={{background: "rgb(245,245,245)"}}>
                                        <div className="column" style={{textAlign:"left"}}>
                                            <Typography className="heading" style={{marginTop:"10px"}}><b>Alta:</b> {ticket.alta}</Typography>
                                            <Typography className="heading" style={{marginTop:"10px"}}><b>Descripción:</b> {ticket.descripcion}</Typography>
                                        </div>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                   </div>
            })}

        </div>     
      
    );
  }
}

export default CrearTicket;
