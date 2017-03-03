import React, {Component} from 'react'
import { edit, list } from '../Services/user'
import { withRouter } from 'react-router'
import data from './data'

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
      { controls.map( e => <FormControl key={e.name} value={e.name.indexOf('.') > -1 ? source[ [e.name.split('.')[0]] ][ [e.name.split('.')[1]] ] : source[e.name] } { ...e } handleInput={ handleInput } /> ) }
        {props.children}
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
          beneficiary1: {
            name: '',
            firstName: '',
            lastName: '',
            telephone: 0,
            cellphone: 0,
            percentage: 0
          },
          beneficiary2: {
            name: '',
            firstName: '',
            lastName: '',
            telephone: 0,
            cellphone: 0,
            percentage: 0
          },
          comments: ''
        }
      }
    }
  }

  componentDidMount() {
    if(this.props.params.id) {
      list({_id: this.props.params.id},{}, 'invesmentData')
        .then( user => this.setState( (prev, props) => {
          return {
            user: Object.assign( {}, user[0], prev.user)
          }
        } ) )
        .catch(e => alert('Error aquí' + e))
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
    let newState = Object.assign( this.state )
    newState.user['level'] = 'investor'
    this.setState(newState)
    edit( this.state.user )
      .then( success => success && this.props.router.push('/users/list') )
  }

  render() {
    let u = this.state.user.invesmentData,
    general = data.general,
    invest = data.invest,
    bankData = data.bankData,
    beneficiary1 = data.beneficiary1,
    beneficiary2 = data.beneficiary2

		return(
      <div className="tab-pane fade in" id="two">
        <div className="panel-body">
          <form className="form-horizontal" onSubmit={ this.handleSubmit } >
            <FormFieldset legend='1. Datos generales del inversionista'
              controls={ general } source={ u } handleInput={ this.handleInput } />
            <FormFieldset legend='2. Forma de inversión'
              controls={ invest } source={ u } handleInput={ this.handleInput } />
            <FormFieldset legend='3. Datos bancarios del inversionista'
              controls={ bankData } source={ u } handleInput={ this.handleInput } />
            <FormFieldset legend='4. Designación de beneficiario 1'
              controls={ beneficiary1 } source={ u } handleInput={ this.handleInput } />
            <FormFieldset legend='4. Designación de beneficiario 2'
              controls={ beneficiary2 } source={ u } handleInput={ this.handleInput }>
              <div className="text-right">
                <button type="submit" className="btn btn-primary">Editar Usuario <i className="icon-arrow-right14 position-right"></i></button>
              </div>
            </FormFieldset>
          </form>
        </div>
      </div>

		)

	}
}

export default withRouter(InvestorForm);
