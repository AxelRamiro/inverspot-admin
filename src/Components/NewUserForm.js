import React, {Component} from 'react'
import { create, edit, list } from '../Services/user'
import { withRouter } from 'react-router'

class NewUserForm extends Component{

	constructor(props) {
		super(props)
		this.handleInput = this.handleInput.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.state = {
			user: {
				name: '',
				email: '',
				state: '',
				telephone: '',
				status: '',
				password: ''
			}
		}

	}

	componentDidMount() {
		if(this.props.params.id) {
			list({_id: this.props.params.id},{}, 'name email state telephone status')
				.then(user => {
					user = user[0]
					user.password = ''
					this.setState({ user })
				})
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

    if(this.props.path.path === "new") {
			let newUser = Object.assign( this.state.user )
			newUser['level'] = 'user'
      create( newUser )
      .then( success => success && this.props.router.push('/users/list') )
    }
    edit( this.state.user )
      .then( success => success && this.props.router.push('/users/list') )
  }

	render() {
		return(

      <div className="tab-pane fade in active" id="user">

        <div className="panel panel-flat">
          <div className="panel-heading">
            <h6 className="panel-title">Información de Perfil</h6>
          </div>

          <div className="panel-body">
            <form onSubmit={ this.handleSubmit }>

              <div className="form-group">
                <div className="row">
                  <div className="col-md-12">
                    <label>Nombre Completo</label>
                    <input type="text" name="name" className="form-control" required="required"
											value={ this.state.user.name } onChange={ this.handleInput }/>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <label>Correo electrónico (obligatorio) </label>
                    <input type="email" name="email" className="form-control" required="required" onChange={ this.handleInput }
											value={ this.state.user.email }/>
                  </div>
                  <div className="col-md-6">
                    <label>Estado</label>
                    <select name="state" className="form-control" required="required"
											onChange={ this.handleInput } value={ this.state.user.state } >
                      <option value="na" disabled>Elige</option>
                      <option value="Agu">Aguascalientes</option>
                      <option value="Bc">Baja California</option>
                      <option value="Bcs">Baja California Sur</option>
                      <option value="Cam">Campeche</option>
                      <option value="Chis">Chiapas</option>
                      <option value="Chi">Chihuahua</option>
                      <option value="Cdm">Ciudad de México</option>
                      <option value="Coa">Coahuila</option>
                      <option value="Col">Colima</option>
                      <option value="Dur">Durango</option>
                      <option value="Edm">Estado de México</option>
                      <option value="Gua">Guanajuato</option>
                      <option value="Gue">Guerrero</option>
                      <option value="Hid">Hidalgo</option>
                      <option value="Jal">Jalisco</option>
                      <option value="Mic">Michoacán</option>
                      <option value="Mor">Morelos</option>
                      <option value="Nay">Nayarit</option>
                      <option value="Nle">Nuevo León</option>
                      <option value="Oax">Oaxaca</option>
                      <option value="Pue">Puebla</option>
                      <option value="Qro">Querétaro</option>
                      <option value="Qur">Quintana Roo</option>
                      <option value="Snl">San Luis Potosí</option>
                      <option value="Sin">Sinaloa</option>
                      <option value="Son">Sonora</option>
                      <option value="Tab">Tabasco</option>
                      <option value="Tam">Tamaulipas</option>
                      <option value="Tla">Tlaxcala</option>
                      <option value="Ver">Veracruz</option>
                      <option value="Yuc">Yucatán</option>
                      <option value="Zac">Zacatecas</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <label>Teléfono #</label>
                    <input type="number" className="form-control" required="required" name="telephone"
										value={ this.state.user.telephone } onChange={ this.handleInput }/>
                    <span className="help-block">999-999-99-99</span>
                  </div>
                  <div className="col-md-6">
                      <label>Estatus</label>
                      <select name="status" className="form-control" required="required"
												value={ this.state.user.status } onChange={ this.handleInput }>
                          <option value="">Elige</option>
                          <option value="active">Activo</option>
                          <option value="inactive">Inactivo</option>
                      </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <label>Contraseña</label>
                    <input
											name="password" type="text" className="form-control"
											required={ this.props.path.path !== ":id/edit" }
											value={ this.state.user.password } onChange={ this.handleInput }/>
                  </div>

                  {/*<div className="col-md-6">
                    <label>Repetir Contraseña</label>
                    <input type="password" placeholder="" className="form-control" required="required"/>
                  </div>*/}
                </div>
              </div>

              <div className="text-right">
                <button type="submit" className="btn btn-primary">
									{ this.props.path.path === 'new' ? 'Crear Usuario' : 'Actualizar Usuario' }
									<i className="icon-arrow-right14 position-right"></i>
								</button>
              </div>
            </form>
          </div>
        </div>
      </div>

		)
	}
}

export default withRouter(NewUserForm);
