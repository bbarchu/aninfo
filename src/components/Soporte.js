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
      <div class="jumbotron">
        <form onSubmit={this.handleSubmitCreate}>
          <br></br>&nbsp;
            <input type="submit" value="Crear ticket" name="submitCreateTicket" class="btn btn-success btn-lg" /> 
             &nbsp;  <input type="submit" value="Atender llamada" name="submitAnswerCall" class="btn btn-warning btn-lg" onClick={this.handleSubmitAnswer.bind(this)}/>
        </form>
      </div>
      
    );
  }
}

export default Soporte;
