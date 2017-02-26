import React, { Component } from 'react'
import { login } from '../Services/auth'
import { Link, withRouter } from 'react-router'

class Login extends Component {

  constructor(props) {
    super(props)
    this.authenticate = this.authenticate.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleInput(e) {
    e.preventDefault()
    let name = e.target.name
    let newState = {}
    newState[name] = e.target.value
    this.setState(newState)
  }

  authenticate(e) {
    e.preventDefault()
    if ( this.state.email !== "" && this.state.password !== "" ) {
      login(this.state.email, this.state.password)
      .then( success => success && this.props.router.push('/'), e => alert(e) )
    }
    else {
      alert("Completa los campos")
    }
  }

  render() {
    return (
      <div className="login-container login-cover">
        <div className="page-container">
          <div className="page-content">
            <div className="content-wrapper">
              <div className="content pb-20">

                <form className="form-validate" onSubmit={ this.authenticate }>
                  <div className="panel panel-body login-form">
                    <div className="text-center">
                      <div className="icon-object border-slate-300 text-slate-300">
                        <i className="icon-reading"></i>
                      </div>
                      <h5 className="content-group">Ingresa a tu cuenta
                        <small className="display-block">Tus datos</small>
                      </h5>
                    </div>

                    <div className="form-group has-feedback has-feedback-left">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Correo electrónico"
                        name="email"
                        required="required"
                        value={ this.state.email }
                        onChange={ this.handleInput } />
                      <div className="form-control-feedback">
                        <i className="icon-user text-muted"></i>
                      </div>
                    </div>

                    <div className="form-group has-feedback has-feedback-left">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Contraseña"
                        name="password"
                        required="required"
                        value={ this.state.password }
                        onChange={ this.handleInput } />
                      <div className="form-control-feedback">
                        <i className="icon-lock2 text-muted"></i>
                      </div>
                    </div>

                    <div className="form-group login-options">
                      <div className="row">
                        <div className="col-sm-6 col-sm-push-6 text-right">
                          <Link to="recovery">Olvide mi contraseña</Link>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <button type="submit" className="btn bg-blue btn-block">Ingresar
                        <i className="icon-arrow-right14 position-right"></i>
                      </button>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Login);
