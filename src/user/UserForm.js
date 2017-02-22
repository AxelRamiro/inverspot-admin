import React, {Component} from 'react'
import { create, edit, list } from '../Services/user'
import { withRouter } from 'react-router'

class UserEdit extends Component{

	constructor(props) {
		super(props)
		this.handleInput = this.handleInput.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.state = {
			advisers: [],
			user: {
				name: '',
				email: '',
				state: '',
				telephone: '',
				status: '',
				password: '',
				asesor: '',
				contactFrom: ''
			}
		}

	}

	componentDidMount() {

		list({level:'asesor'},{}, 'name')
			.then( advisers => this.setState({advisers}))

		if(this.props.params.id) {
			list({_id: this.props.params.id},{}, 'name email state telephone status asesor contactFrom')
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

      <div className="tab-pane fade in active" id="one">

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
                      <option value="Aguascalientes">Aguascalientes</option>
                      <option value="Baja California">Baja California</option>
                      <option value="Baja California Sur">Baja California Sur</option>
                      <option value="Campeche">Campeche</option>
                      <option value="Chiapas">Chiapas</option>
                      <option value="Chihuahua">Chihuahua</option>
                      <option value="Ciudad de México">Ciudad de México</option>
                      <option value="Coahuila">Coahuila</option>
                      <option value="Colima">Colima</option>
                      <option value="Durango">Durango</option>
                      <option value="Estado de México">Estado de México</option>
                      <option value="Guanajuato">Guanajuato</option>
                      <option value="Guerrero">Guerrero</option>
                      <option value="Hidalgo">Hidalgo</option>
                      <option value="Jalisco">Jalisco</option>
                      <option value="Michoacán">Michoacán</option>
                      <option value="Morelos">Morelos</option>
                      <option value="Nayarit">Nayarit</option>
                      <option value="Nuevo León">Nuevo León</option>
                      <option value="Oaxaca">Oaxaca</option>
                      <option value="Puebla">Puebla</option>
                      <option value="Querétaro">Querétaro</option>
                      <option value="Quintana Roo">Quintana Roo</option>
                      <option value="San Luis Potosí">San Luis Potosí</option>
                      <option value="Sinaloa">Sinaloa</option>
                      <option value="Sonora">Sonora</option>
                      <option value="Tabasco">Tabasco</option>
                      <option value="Tamaulipas">Tamaulipas</option>
                      <option value="Tlaxcala">Tlaxcala</option>
                      <option value="Veracruz">Veracruz</option>
                      <option value="Yucatán">Yucatán</option>
                      <option value="Zacatecas">Zacatecas</option>
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
                    <span className="help-block">9999999999</span>
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
                    <label>Asesor</label>
										<select name="asesor" className="form-control" required
											value={ this.state.user.asesor } onChange={ this.handleInput }>
												<option value="">Elige</option>
												{ this.state.advisers.map(a => <option key={a._id} value={a._id}>{a.name}</option>) }
										</select>
                  </div>
                  <div className="col-md-6">
                      <label>Medio</label>
                      <select name="contactFrom" className="form-control" required
												value={ this.state.user.contactFrom } onChange={ this.handleInput }>
                          <option value="">Elige</option>
                          <option value="Facebook">Facebook</option>
                          <option value="Twitter">Twitter</option>
													<option value="Google">Google</option>
                          <option value="Asesor">Asesor</option>
                          <option value="Otro">Otro</option>
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

export default withRouter(UserEdit);
