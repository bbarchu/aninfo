import React, { Component } from 'react';


class Soporte extends Component {
  constructor(props) {
    super(props);
    this.handleSubmitCreate = this.handleSubmitCreate.bind(this);
    this.handleSubmitAnswer = this.handleSubmitAnswer.bind(this);
    this.state = {
    }
  }

  
  handleSubmitCreate(event) {
    event.preventDefault();
    this.props.history.push(`/Soporte/CrearTicket`)
  }

  handleSubmitAnswer(event) {
    event.preventDefault();
    this.props.history.push(`/Soporte/AtenderLlamada`)
  }

  render() {
    return (
      <div className="form-group">
        <form onSubmit={this.handleSubmitCreate}>
            <input type="submit" value="Crear ticket" name="submit" className="btn btn-primary" />
            <input type="submit" value="Atender llamada" name="submit" className="btn btn-primary" onClick={this.handleSubmitAnswer.bind(this)}/>
        </form>
      </div>
      
    );
  }
}

export default Soporte;
