import React, { Component } from 'react'
import { recovery } from '../Services/auth'
import { Link, withRouter } from 'react-router'

class Recovery extends Component {

  constructor(props) {
    super(props)
    this.sendRecoveryRequest = this.sendRecoveryRequest.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.state = {
      email: ''
    }
  }

  handleInput(e) {
    e.preventDefault()
    let name = e.target.name
    let newState = {}
    newState[name] = e.target.value
    this.setState(newState)
  }

  sendRecoveryRequest(e) {
    e.preventDefault()
    if ( this.state.email !== "" ) {
      recovery(this.state.email)
      .then( res => res === 'ok' && alert('Se ha enviado un correo de recuperación'), e => alert('Error: Email no registrado') )
      .catch((e) => alert('Error al realizar petición', e))
    }
    else {
      alert("Completa los campos")
    }
  }

  render() {
    return (
      <div className="login-container">

      	<div className="navbar navbar-default">
      		<div className="navbar-header">
      			<Link className="navbar-brand" to="/"><img src="assets/images/logo_light.png" alt="" /></Link>

      			<ul className="nav navbar-nav pull-right visible-xs-block">
      				<li><a data-toggle="collapse" data-target="#navbar-mobile"><i className="icon-tree5"></i></a></li>
      			</ul>
      		</div>

      		<div className="navbar-collapse collapse" id="navbar-mobile">
      			<ul className="nav navbar-nav navbar-right">
      				<li>
      					<Link to="/">
      						<i className="icon-display4"></i> <span className="visible-xs-inline-block position-right"> Ir al sitio</span>
      					</Link>
      				</li>

      				<li>
      					<a href="#">
      						<i className="icon-user-tie"></i> <span className="visible-xs-inline-block position-right"> Ayuda</span>
      					</a>
      				</li>

      			</ul>
      		</div>
      	</div>


      	<div className="page-container">

      		<div className="page-content">

      			<div className="content-wrapper">

      				<div className="content">

      					<form onSubmit={this.sendRecoveryRequest}>
      						<div className="panel panel-body login-form">
      							<div className="text-center">
      								<div className="icon-object border-warning text-warning"><i className="icon-spinner11"></i></div>
      								<h5 className="content-group">Recuperar contraseña <small className="display-block">Te enviaremos un correo electrónico para ayudarte a recuperar tu contraseña.</small></h5>
      							</div>

      							<div className="form-group has-feedback">
      								<input type="email" name="email" className="form-control" placeholder="Correo Electrónico" onChange={this.handleInput} />
      								<div className="form-control-feedback">
      									<i className="icon-mail5 text-muted"></i>
      								</div>
      							</div>

      							<button type="submit" className="btn bg-blue btn-block">Recuperar contraseña <i className="icon-arrow-right14 position-right"></i></button>
      						</div>
      					</form>

      					<div className="footer text-muted text-center">
      						&copy; 2017. <a href="#">Inverspot.</a> Powered by <a href="#" target="_blank">BSTT</a>
      					</div>

      				</div>

      			</div>

      		</div>

      	</div>

      </div>
    )
  }
}

export default withRouter(Recovery);
