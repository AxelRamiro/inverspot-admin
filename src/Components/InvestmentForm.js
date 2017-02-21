import React, {Component} from 'react'
import { edit, list } from '../Services/user'
import { withRouter } from 'react-router'

function InputForm (props){
  return(
    <div className="form-group">
      <label className="col-md-4 control-label">{props.name}</label>
      <div className="col-md-4">
        {props.children}
      </div>
    </div>
  )
}

class InvestmentForm extends Component{

  constructor(props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      user: {
        investmentData:{
          name: '',
          address: {},
          investmentForm:{},
          bankData:{},
          beneficiaries:[{},{}]
        }
      }
    }
  }

  componentDidMount() {
    if(this.props.params.id) {
      list({_id: this.props.params.id},{}, 'investmentData')
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

    edit( this.state.user )
      let newState = Object.assign( this.state )
      newState.user['level'] = 'investor'
      this.setState(newState)
      .then( success => success && this.props.router.push('/users/list') )
  }
	render() {
		return(

      <div className="tab-pane fade" id="inversor">

        <div className="panel panel-flat">
          <div className="panel-heading">
            <h6 className="panel-title">Información de Inversor</h6>
          </div>

          <div className="panel-body">
            <form className="form-horizontal" >
              <fieldset>
                <legend>1. Datos generales del inversionista</legend>

                <InputForm name='Nombre'>
                  <input name="name" placeholder="Nombre" className="form-control input-md" type="text"
                    onChange={ this.handleInput } value={ this.state.user.investmentData.name }/>
                </InputForm>

                <InputForm name='Apellido materno'>
                  <input name="firstName" placeholder="Apellido materno" className="form-control input-md" type="text"
                    onChange={ this.handleInput } value={ this.state.user.investmentData.firstName }/>
                </InputForm>

                <InputForm name='Apellido paterno'>
                  <input name="lastName" placeholder="Apellido paterno" className="form-control input-md" type="text"
                  onChange={ this.handleInput } value={ this.state.user.investmentData.lastName }/>
                </InputForm>

                <div className="form-group">
                  <label className="col-md-4 control-label">Sexo</label>
                  <div className="col-md-4">
                    <select name="sex" className="form-control"
                        onChange={ this.handleInput } value={ this.state.user.investmentData.sex }>
                      <option  disabled>Seleccione...</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Femenino">Femenino</option>
                    </select>
                  </div>
                </div>

                <InputForm name='Nacionalidad'>
                  <input name="nationality" placeholder="Nacionalidad" className="form-control input-md" type="text"
                  onChange={ this.handleInput } value={ this.state.user.investmentData.nationality }/>
                </InputForm>

                <InputForm name='Ciudad de Nacimiento'>
                  <input  name="birthPlace" placeholder="Lugar de nacimiento" className="form-control input-md" type="text"
                  onChange={ this.handleInput } value={ this.state.user.investmentData.birthPlace }/>
                </InputForm>

                <InputForm name='Número de Identificación'>
                  <input name="idNumber" placeholder="Número de identificación" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ this.state.user.investmentData.idNumber }/>
                </InputForm>


                <div className="form-group">
                  <label className="col-md-4 control-label" >Tipo de identificación</label>
                  <div className="col-md-4">
                    <select id="selectbasic" name="typeid" className="form-control"
                      onChange={ this.handleInput } value={ this.state.user.investmentData.typeid }>
                      <option value="None">Seleccione...</option>
                      <option value="Credencial de Elector">Credencial de Elector</option>
                      <option value="Pasaporte">Pasaporte</option>
                      <option value="Cartilla Militar">Cartilla Militar</option>
                      <option value="Licencia de Conducir">Licencia de Conducir</option>
                    </select>
                  </div>
                </div>

                <InputForm name="Clave Única de Registro de Población (CURP)">
                  <input name="curp" placeholder="CURP" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ this.state.user.investmentData.curp }/>
                </InputForm>

                <InputForm name="RFC">
                  <input name="rfc" placeholder="RFC" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ this.state.user.investmentData.rfc }/>
                </InputForm>

                <InputForm name="Domicilio">
                  <input name="street" placeholder="Calle y Número" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ this.state.user.investmentData.address.street }/>
                </InputForm>

                <InputForm name="Colonia">
                  <input name="suburb" placeholder="Colonia" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ this.state.user.investmentData.address.suburb }/>
                </InputForm>

                <InputForm name="Delegación o Municipio">
                  <input name="town" placeholder="Delegación o Municipio" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ this.state.user.investmentData.address.town }/>
                </InputForm>

                <InputForm name="Ciudad o Población">
                  <input name="city" placeholder="Ciudad o Población" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ this.state.user.investmentData.address.city }/>
                </InputForm>

                <InputForm name="País">
                  <input name="country" placeholder="País" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ this.state.user.investmentData.address.country }/>
                </InputForm>

                <InputForm name="Código Postal">
                  <input name="zipCode" placeholder="Código Postal" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ this.state.user.investmentData.address.zipCode }/>
                </InputForm>

                <div className="form-group">
                  <label className="col-md-4 control-label">Estado Civíl</label>
                  <div className="col-md-4">
                    <select name="maritalStatus" className="form-control"
                      onChange={ this.handleInput } value={ this.state.user.investmentData.maritalStatus }>
                      <option disabled >Seleccione...</option>
                      <option value="Soltero">Soltero/a</option>
                      <option value="Comprometido">Comprometido/a</option>
                      <option value="Casado">Casado/a</option>
                      <option value="Divorciado">Divorciado/a</option>
                      <option value="Viudo">Viudo/a</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-md-4 control-label" >En caso de ser casado/a (Bajo que régimen):</label>
                  <div className="col-md-4">
                    <select name="regime" className="form-control"
                      onChange={ this.handleInput } value={ this.state.user.investmentData.regime }>
                      <option disabled >Seleccione...</option>
                      <option value="Ninguno"> Ninguno</option>
                      <option value="Separación de Bienes">Separación de Bienes</option>
                      <option value="Bienes Mancomunados">Bienes Mancomunados</option>
                    </select>
                  </div>
                </div>


                <InputForm name="Nombre Completo del/la Conyugue:">
                  <input name="spouse" placeholder="Nombre Completo" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ this.state.user.investmentData.spouse }/>
                </InputForm>

                <InputForm name="Correo Electrónico">
                  <input name="email" placeholder="ejemplo@correo.com" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ this.state.user.investmentData.email }/>
                </InputForm>

                <InputForm name="Teléfono Fijo">
                  <input name="telephone" placeholder="(xxx) xxx-xxxx" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ this.state.user.investmentData.email }/>
                </InputForm>

                <legend>2. Forma de inversión</legend>

                <div className="form-group">
                  <label className="col-md-4 control-label">Forma de Pago</label>
                  <div className="col-md-4">
                    <select name="methodPayment" className="form-control"
                      onChange={ this.handleInput } value={ this.state.user.investmentData.investmentForm.methodPayment}>
                      <option value="None">Seleccione...</option>
                      <option value="Efectivo">Efectivo</option>
                      <option value="Cheque">Cheque</option>
                      <option value="Transferencia">Transferencia</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-md-4 control-label">Forma de Anticipo</label>
                  <div className="col-md-4">
                    <select name="anticipationForm" className="form-control"
                        onChange={ this.handleInput } value={ this.state.user.investmentData.investmentForm.anticipationForm}>
                      <option value="None">Seleccione...</option>
                      <option value="Financiado">Financiado</option>
                      <option value="Contado">Contado</option>
                    </select>
                  </div>
                </div>

                <legend>3. Datos bancarios del inversionista</legend>

                <InputForm name="Número de Cuenta de Depósito">
                  <input name="acoountNumber" placeholder="Número de Cuenta" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ this.state.user.investmentData.bankData.acoountNumber }/>
                </InputForm>

                <InputForm name="Clave">
                  <input name="standardizedBankKey" placeholder="Clave" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ this.state.user.investmentData.bankData.standardizedBankKey }/>
                </InputForm>

                <InputForm name="Banco">
                  <input name="bank" placeholder="Nombre del Banco" className="form-control input-md" required="true" type="text"
                    onChange={ this.handleInput } value={ this.state.user.investmentData.bankData.bank }/>
                </InputForm>

                <InputForm name="Titular de la cuenta">
                  <input name="acountHolder" placeholder="Nombre Completo" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ this.state.user.investmentData.bankData.acountHolder }/>
                </InputForm>


                <legend>4. Designación de beneficiarios</legend>
                <h3 className="text-center">Beneficiario I</h3>

                <InputForm name="Nombre*">
                  <input name="name" placeholder="Nombre" className="form-control input-md" required="true" type="text"
                    onChange={ this.handleInput } value={ this.state.user.investmentData.beneficiaries[0].name }/>
                </InputForm>

                <InputForm name="Apellido Paterno*">
                  <input name="firstName" placeholder="Apellido Paterno" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ this.state.user.investmentData.beneficiaries[0].firstName }/>
                </InputForm>

                <InputForm name="Apellido Materno*">
                  <input name="lastName" placeholder="Apellido Materno" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ this.state.user.investmentData.beneficiaries[0].lastName }/>
                </InputForm>

                <InputForm name="Teléfono Fijo">
                  <input name="telephone" placeholder="(xxx) xxx-xxxx" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ this.state.user.investmentData.beneficiaries[0].telephone }/>
                </InputForm>

                <InputForm name="Teléfono Celular">
                  <input name="cellphone" placeholder="(xxx) xxx-xxxx" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ this.state.user.investmentData.beneficiaries[0].cellphone }/>
                </InputForm>

                <InputForm name="% del Beneficiario">
                  <input name="percentage" placeholder="Cantidad de Porcentaje" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ this.state.user.investmentData.beneficiaries[0].percentage }/>
                </InputForm>

                <h3 className="text-center">Beneficiario II</h3>

                <InputForm name="Nombre*">
                  <input name="name" placeholder="Nombre" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ this.state.user.investmentData.beneficiaries[1].name }/>
                </InputForm>

                <InputForm name="Apellido Paterno*">
                  <input name="firstName" placeholder="Apellido Paterno" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ this.state.user.investmentData.beneficiaries[1].firstName }/>
                </InputForm>

                <InputForm name="Apellido Materno*">
                  <input name="lastName" placeholder="Apellido Materno" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ this.state.user.investmentData.beneficiaries[1].lastName }/>
                </InputForm>

                <InputForm name="Teléfono Fijo">
                  <input name="telephone" placeholder="(xxx) xxx-xxxx" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ this.state.user.investmentData.beneficiaries[1].telephone }/>
                </InputForm>

                <InputForm name="Teléfono Celular">
                  <input name="cellphone" placeholder="(xxx) xxx-xxxx" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ this.state.user.investmentData.beneficiaries[1].cellphone }/>
                </InputForm>

                <InputForm name="% del Beneficiario">
                  <input name="percentage" placeholder="Cantidad de Porcentaje" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ this.state.user.investmentData.beneficiaries[1].percentage }/>
                </InputForm>

                <br/><br/>
                <InputForm name="Comentarios Adicionales">
                  <textarea className="form-control" id="textarea" name="comments"
                      onChange={ this.handleInput } value={ this.state.user.investmentData.comments }></textarea>
                </InputForm>

                <div className="text-right">
                    <button type="submit" className="btn btn-primary">Editar Usuario <i className="icon-arrow-right14 position-right"></i></button>
                </div>
              </fieldset>
            </form>
          </div>

        </div>
      </div>
		)
	}
}

export default withRouter( InvestmentForm);
