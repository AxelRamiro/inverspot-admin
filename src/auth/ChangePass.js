import React, { Component } from 'react'
import { changePass } from '../Services/auth'
import { Link, withRouter } from 'react-router'

class Recovery extends Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.state = {
      newPassword: ''
    }
  }

  handleInput(e) {
    e.preventDefault()
    let name = e.target.name
    let newState = {}
    newState[name] = e.target.value
    this.setState(newState)
  }

  handleSubmit(e) {
    e.preventDefault()
    if ( this.state.newPassword !== "" ) {
      changePass(this.props.params['token'] , this.state.newPassword)
      .then( success => {
        if(success) {
          console.log("Finish");
          this.props.router.push('/')
        }
        else {
          alert('Operación no completada')
        }
      }, e => alert(e) )
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

      					<form onSubmit={this.handleSubmit}>
      						<div className="panel panel-body login-form">
      							<div className="text-center">
      								<div className="icon-object border-warning text-warning"><i className="icon-spinner11"></i></div>
      								<h5 className="content-group">Cambio de contraseña <small className="display-block">Escribe tu nueva contraseña.</small></h5>
      							</div>

      							<div className="form-group has-feedback">
      								<input type="password" name="newPassword" className="form-control" placeholder="Contraseña" onChange={this.handleInput} />
      								<div className="form-control-feedback">
      									<i className="icon-mail5 text-muted"></i>
      								</div>
      							</div>

      							<button type="submit" className="btn bg-blue btn-block">Cambiar contraseña <i className="icon-arrow-right14 position-right"></i></button>
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
