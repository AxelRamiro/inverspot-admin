import React, { Component } from 'react'
import { create, list, edit } from '../Services/user'
import { withRouter } from 'react-router'

function AdminInput(props) {
  return(
    <div className="col-md-6">
      <label>{ props.label } { props.required && <span className="text-danger">*</span>}</label>
      <input
        { ...props }
        type="text"
        className="form-control" />
    </div>
  )
}

class PowerUserForm extends Component {

  constructor(props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      user: {
        name: '',
        level: '',
        email: '',
        telephone: '',
        password: '',
        status: ''
      }
    }
  }

  componentDidMount() {
    if(this.props.params.id) {
      list({_id: this.props.params.id},{}, 'name email level telephone status')
        .then( user => this.setState({user: user[0]}) )
        .catch(alert)
    }
  }

  handleInput(e) {
    e.preventDefault()
    let name = e.target.name
    let newState = Object.assign( this.state )
    newState.user[name] = e.target.value
    this.setState(newState)
  }

  handleSubmit(e) {
    e.preventDefault()
    if(this.props.route.path === "new") {
      return create( this.state.user )
      .then( success => success && this.props.router.push('/power-users/list') )
    }
    edit( this.state.user )
      .then( success => success && this.props.router.push('/power-users/list') )
  }

  render() {
    return (
      <div className="content">

        <div className="row">
          <div className="col-lg-12">
            <div className="tabbable">
              <div className="tab-content">
                <div className="tab-pane fade in active" id="settings">

                  <div className="panel panel-flat">
                    <div className="panel-heading">
                      <h6 className="panel-title">Información de Perfil</h6>
                    </div>

                    <div className="panel-body">
                      <form onSubmit={ this.handleSubmit }>
                        <div className="form-group">
                          <div className="row">
                            <AdminInput
                              label="Nombre Completo" name="name" required
                              value={ this.state.user.name } onChange={ this.handleInput }  />
                            <div className="col-md-6">
                               <label className="control-label col-lg-3">Tipo de Usuario <span className="text-danger">*</span></label>
                                <select name="level"
                                  className="form-control" required="required"
                                  onChange={ this.handleInput } value={ this.state.user.level } >
                                    <option value="">Elige</option>
                                    <option value="admin">Administrador</option>
                                    <option value="asesor">Asesor</option>
                                </select>
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="row">
                            <div className="col-md-6">
                              <label>Correo electrónico <span className="text-danger">*</span></label>
                              <input type="email"
                                name="email"
                                className="form-control"
                                id="email"
                                onChange={ this.handleInput }
                                value={ this.state.user.email }
                                required="required"  aria-required="true"/>
                            </div>
                            <div className="col-md-6">
                              <label>Teléfono #  <span className="text-danger">*</span></label>
                              <input type="tel" name="telephone"
                                onChange={ this.handleInput } className="form-control"
                                value={ this.state.user.telephone }required="required"/>
                              <span className="help-block">9999999999</span>
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="row">
                            <div className="col-md-6">
                              <label>Contraseña  <span className="text-danger">*</span></label>
                              <input type="text" name="password"
                                className="form-control" required={ this.props.route.path !== ":id/edit" }
                                value={ this.state.user.password } onChange={ this.handleInput } />
                            </div>

                            <div className="col-md-6">
                               <label className="control-label col-lg-3">Estatus <span className="text-danger">*</span></label>
                                <select name="status"
                                  className="form-control" required="required"
                                  onChange={ this.handleInput } value={ this.state.user.status } >
                                    <option value="">Elige</option>
                                    <option value="active">Activo</option>
                                    <option value="inactive">Inactivo</option>
                                </select>
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <button
                            type="submit"
                            className="btn btn-primary">{ this.props.route.path === 'new' ? 'Crear Administrador' : 'Actualizar Administrador' }<i className="icon-arrow-right14 position-right"></i></button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default withRouter(PowerUserForm);
