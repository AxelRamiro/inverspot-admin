import React, {Component} from 'react'
import { edit, list } from '../Services/user'
import { withRouter } from 'react-router'

function SelectControl(props) {
  let { hint, value, handleInput, options, ...other } = props
  return (
    <select { ...other } className="form-control"
        onChange={ handleInput } value={ value }>
      <option disabled>{ hint }</option>
      { options.map(e => <option key={ e.value } value={ e.value }>{ e.name }</option> ) }
    </select>
  )
}

function FormControl(props) {
  let { kind, ...other } = props
  return (
    <div className="form-group">
      <label className="col-md-4 control-label">{props.hint}</label>
      <div className="col-md-4">
        { kind && kind === 'select' ? <SelectControl { ...other } /> : <InputControl { ...other } /> }
      </div>
    </div>
  )
}

function FormFieldset(props) {
  let { legend, controls, source, handleInput } = props
  return (
    <fieldset>
      <legend>{ legend }</legend>
      { controls.map( e => <FormControl key={e.name} value={source[e.name]} { ...e } handleInput={ handleInput } /> ) }
    </fieldset>
  )
}

function InputControl(props) {
  let { hint, value, handleInput, ...other } = props
  return(
    <input { ...other } placeholder={hint} className="form-control input-md" type="text"
      onChange={ handleInput } value={ value } />
  )
}

class InvestorForm extends Component {

  constructor(props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      user: {
        invesmentData: {
          name: '',
          firstName : '',
          lastName : '',
          sex : '',
          nationality: '',
          birthPlace: '',
          idNumber: 0,
          typeid: '',
          curp: '',
          rfc: '',
          address: {
            street: '',
            suburb: '',
            town: '',
            city: '',
            contry: '',
            zipCode: '',
          },
          maritalStatus: '',
          regime: '',
          spouse: '',
          email: '',
          telephone: '',
          cellphone: '',
          investmentForm: {
            methodPayment: '',
            anticipationForm: '',
          },
          bankData: {
            acoountNumber: 0,
            standardizedBankKey: 0,
            bank: '',
            acountHolder: '',
          },
          // beneficiaries:[ {
          //   name: '',
          //   firstName: '',
          //   lastName: '',
          //   telephone: 0,
          //   cellphone: 0,
          //   percentage: 0
          // }],
          comments: ''
        }
      }
    }
  }

  componentDidMount() {
    if(this.props.params.id) {
      list({_id: this.props.params.id},{}, 'invesmentData')
        .then( user => this.setState({user: Object.assign( user[0], this.state.user ) }) )
        .catch(alert)
    }
  }

  handleInput(e) {
    e.preventDefault()
    let name = e.target.name
    let newState = Object.assign( this.state )
    console.log(name);
    if (name.indexOf('.') > -1) {
      console.log('in');
      let path = name.split('.')
      newState.user.invesmentData[path[0]][path[1]] = e.target.value
    }
    else
      newState.user.invesmentData[name] = e.target.value
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

    let u = this.state.user.invesmentData,
      general = [
        {
          name: 'name',
          hint: 'Nombre'
        },
        {
          name: 'firstName',
          hint: 'Apellido paterno'
        },
        {
          name: 'sex',
          hint: 'Sexo',
          kind: 'select',
          options: [
            {
              name: 'Masculino',
              value: 'Masculino'
            },
            {
              name: 'Femenino',
              value: 'Femenino'
            },
          ]
        },
        {
          name: 'lastName',
          hint: 'Apellido materno'
        },
        {
          name: 'nationality',
          hint: 'Nacionalidad'
        },
        {
          name: 'birthPlace',
          hint: 'Lugar de nacimiento'
        },
        {
          name: 'idNumber',
          hint: 'Número de identificación'
        }
      ]

		return(

      <div className="tab-pane fade" id="two">

        <div className="panel panel-flat">
          <div className="panel-heading">
            <h6 className="panel-title">Información de Inversor</h6>
          </div>

          <div className="panel-body">
            <form className="form-horizontal" >
              <FormFieldset legend='1. Datos generales del inversionista'
                controls={ general } source={ u } handleInput={ this.handleInput } />
              <fieldset>
                <legend>1. Datos generales del inversionista</legend>

                <div className="form-group">
                  <label className="col-md-4 control-label">Sexo</label>
                  <div className="col-md-4">
                    <select name="sex" className="form-control"
                        onChange={ this.handleInput } value={ u.sex }>
                      <option  disabled>Seleccione...</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Femenino">Femenino</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-md-4 control-label" >Tipo de identificación</label>
                  <div className="col-md-4">
                    <select id="selectbasic" name="typeid" className="form-control"
                      onChange={ this.handleInput } value={ u.typeid }>
                      <option value="None">Seleccione...</option>
                      <option value="Credencial de Elector">Credencial de Elector</option>
                      <option value="Pasaporte">Pasaporte</option>
                      <option value="Cartilla Militar">Cartilla Militar</option>
                      <option value="Licencia de Conducir">Licencia de Conducir</option>
                    </select>
                  </div>
                </div>

                {/* <InputControl name="Clave Única de Registro de Población (CURP)">
                  <input name="curp" placeholder="CURP" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ u.curp }/>
                </InputControl>

                <InputControl name="RFC">
                  <input name="rfc" placeholder="RFC" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ u.rfc }/>
                </InputControl>

                <InputControl name="Domicilio">
                  <input name="address.street" placeholder="Calle y Número" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ u.address.street }/>
                </InputControl>

                <InputControl name="Colonia">
                  <input name="address.suburb" placeholder="Colonia" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ u.address.suburb }/>
                </InputControl>

                <InputControl name="Delegación o Municipio">
                  <input name="address.town" placeholder="Delegación o Municipio" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ u.address.town }/>
                </InputControl>

                <InputControl name="Ciudad o Población">
                  <input name="address.city" placeholder="Ciudad o Población" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ u.address.city }/>
                </InputControl>

                <InputControl name="País">
                  <input name="address.contry" placeholder="País" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ u.address.contry }/>
                </InputControl>

                <InputControl name="Código Postal">
                  <input name="address.zipCode" placeholder="Código Postal" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ u.address.zipCode }/>
                </InputControl> */}

                <div className="form-group">
                  <label className="col-md-4 control-label">Estado Civíl</label>
                  <div className="col-md-4">
                    <select name="maritalStatus" className="form-control"
                      onChange={ this.handleInput } value={ u.maritalStatus }>
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
                      onChange={ this.handleInput } value={ u.regime }>
                      <option disabled >Seleccione...</option>
                      <option value="Ninguno"> Ninguno</option>
                      <option value="Separación de Bienes">Separación de Bienes</option>
                      <option value="Bienes Mancomunados">Bienes Mancomunados</option>
                    </select>
                  </div>
                </div>


                {/* <InputControl name="Nombre Completo del/la Conyugue:">
                  <input name="spouse" placeholder="Nombre Completo" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ u.spouse }/>
                </InputControl>

                <InputControl name="Correo Electrónico">
                  <input name="email" placeholder="ejemplo@correo.com" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ u.email }/>
                </InputControl>

                <InputControl name="Teléfono Fijo">
                  <input name="telephone" placeholder="(xxx) xxx-xxxx" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ u.email }/>
                </InputControl> */}

                <legend>2. Forma de inversión</legend>

                <div className="form-group">
                  <label className="col-md-4 control-label">Forma de Pago</label>
                  <div className="col-md-4">
                    <select name="methodPayment" className="form-control"
                      onChange={ this.handleInput } value={ u.investmentForm.methodPayment}>
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
                        onChange={ this.handleInput } value={ u.investmentForm.anticipationForm}>
                      <option value="None">Seleccione...</option>
                      <option value="Financiado">Financiado</option>
                      <option value="Contado">Contado</option>
                    </select>
                  </div>
                </div>

                <legend>3. Datos bancarios del inversionista</legend>

                {/* <InputControl name="Número de Cuenta de Depósito">
                  <input name="acoountNumber" placeholder="Número de Cuenta" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ u.bankData.acoountNumber }/>
                </InputControl>

                <InputControl name="Clave">
                  <input name="standardizedBankKey" placeholder="Clave" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ u.bankData.standardizedBankKey }/>
                </InputControl>

                <InputControl name="Banco">
                  <input name="bank" placeholder="Nombre del Banco" className="form-control input-md" required="true" type="text"
                    onChange={ this.handleInput } value={ u.bankData.bank }/>
                </InputControl>

                <InputControl name="Titular de la cuenta">
                  <input name="acountHolder" placeholder="Nombre Completo" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ u.bankData.acountHolder }/>
                </InputControl> */}


                {/* <legend>4. Designación de beneficiarios</legend>
                <h3 className="text-center">Beneficiario I</h3>

                <InputControl name="Nombre*">
                  <input name="name" placeholder="Nombre" className="form-control input-md" required="true" type="text"
                    onChange={ this.handleInput } value={ u.beneficiaries[0].name }/>
                </InputControl>

                <InputControl name="Apellido Paterno*">
                  <input name="firstName" placeholder="Apellido Paterno" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ u.beneficiaries[0].firstName }/>
                </InputControl>

                <InputControl name="Apellido Materno*">
                  <input name="lastName" placeholder="Apellido Materno" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ u.beneficiaries[0].lastName }/>
                </InputControl>

                <InputControl name="Teléfono Fijo">
                  <input name="telephone" placeholder="(xxx) xxx-xxxx" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ u.beneficiaries[0].telephone }/>
                </InputControl>

                <InputControl name="Teléfono Celular">
                  <input name="cellphone" placeholder="(xxx) xxx-xxxx" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ u.beneficiaries[0].cellphone }/>
                </InputControl>

                <InputControl name="% del Beneficiario">
                  <input name="percentage" placeholder="Cantidad de Porcentaje" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ u.beneficiaries[0].percentage }/>
                </InputControl>

                <h3 className="text-center">Beneficiario II</h3>

                <InputControl name="Nombre*">
                  <input name="name" placeholder="Nombre" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ u.beneficiaries[1].name }/>
                </InputControl>

                <InputControl name="Apellido Paterno*">
                  <input name="firstName" placeholder="Apellido Paterno" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ u.beneficiaries[1].firstName }/>
                </InputControl>

                <InputControl name="Apellido Materno*">
                  <input name="lastName" placeholder="Apellido Materno" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ u.beneficiaries[1].lastName }/>
                </InputControl>

                <InputControl name="Teléfono Fijo">
                  <input name="telephone" placeholder="(xxx) xxx-xxxx" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ u.beneficiaries[1].telephone }/>
                </InputControl>

                <InputControl name="Teléfono Celular">
                  <input name="cellphone" placeholder="(xxx) xxx-xxxx" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ u.beneficiaries[1].cellphone }/>
                </InputControl>

                <InputControl name="% del Beneficiario">
                  <input name="percentage" placeholder="Cantidad de Porcentaje" className="form-control input-md" required="true" type="text"
                  onChange={ this.handleInput } value={ u.beneficiaries[1].percentage }/>
                </InputControl> */}

                <br/><br/>
                {/* <InputControl name="Comentarios Adicionales">
                  <textarea className="form-control" id="textarea" name="comments"
                      onChange={ this.handleInput } value={ u.comments }></textarea>
                </InputControl> */}

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

export default withRouter(InvestorForm);
