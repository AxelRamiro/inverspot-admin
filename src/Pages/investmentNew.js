import React, { Component } from 'react'
import { create, list, edit } from '../Services/investment'
import { list as userList} from '../Services/user'
import { list as propertyList} from '../Services/property'
import { withRouter } from 'react-router'

class InvestmentNew extends Component {

  constructor(props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      investment: {
        investor: '',
        property: '',
        sharesNumber: '',
        amount: ''
      },
      users: [],
      properties: []
    }
  }

  componentDidMount() {
    userList({level:{ $in: ['user', 'investor'] }}, {sort:'name'},'name')
      .then( users => this.setState({ users }) )
    propertyList({}, {sort:'title'},'title dataSheet')
      .then( properties => this.setState({ properties }) )
    if(this.props.params.id) {
      list({_id: this.props.params.id},{}, 'investor property sharesNumber')
        .then( investment => this.setState({investment: investment[0]}) )
        .catch(alert)
    }
  }

  handleInput(e) {
    e.preventDefault()
    let name = e.target.name
    let value = e.target.value
    let newState = Object.assign( this.state )
    switch(name) {
      case 'property':
        newState['multiplier'] = this.state.properties.find( e => e._id === value ).dataSheet.investAmount
        break;
      case 'sharesNumber':
        newState.investment['amount'] = value * this.state.multiplier
        break;
    }
    newState.investment[name] = value
    this.setState(newState)
  }

  handleSubmit(e) {
    e.preventDefault()

    if(this.props.route.path === "new") {
      return create( this.state.investment )
      .then( success => success && this.props.router.push('/investments/list') )
    }
    edit( this.state.investment )
      .then( success => success && this.props.router.push('/investments/list') )
  }


  render() {
    let investment = this.state.investment
    return (
      <div className="content">

        <div className="row">
          <div className="col-lg-12">
            <div className="tabbable">
              <div className="tab-content">
                <div className="tab-pane fade in active" id="settings">

                  <div className="panel panel-flat">
                    <div className="panel-heading">
                      <h6 className="panel-title">Información de Inversión</h6>
                    </div>

                    <div className="panel-body">
                      <form onSubmit={ this.handleSubmit }>

                        <div className="form-group">
                          <div className="row">
                            <div className="col-md-6">
                              <label>Nombre de Usuario: <span className="text-danger">*</span></label><br/>
                              <select name="investor" className="form-control" required="required"
                                onChange={ this.handleInput } value={ investment.investor }>
                                <option value="" disabled>Usuario</option>
                                { this.state.users.map( e => <option key={ e._id } value={ e._id }>{ e.name }</option> ) }
                              </select>
                            </div>
                            <div className="col-md-6">
                              <label>Nombre de Propiedad: <span className="text-danger">*</span></label><br/>
                              <select name="property" className="form-control"  required="required"
                                onChange={ this.handleInput } value={ investment.property }>
                                <option value="" disabled>Propiedad</option>
                                { this.state.properties.map( e => <option key={ e._id } value={ e._id }>{ e.title }</option> ) }
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="row">
                            <div className="col-md-6">
                              <label>Número de Acciones Adquiridas: <span className="text-danger">*</span></label>
                              <input disabled={ !this.state.multiplier } type="number" name="sharesNumber" className="form-control" required="required"
                                onChange={ this.handleInput } value={ investment.sharesNumber }/>
                            </div>
                            <span>{ this.state.investment.amount }</span>
                          </div>
                        </div>

                        <div className="text-right">
                          <button type="submit" className="btn btn-primary">
                            { this.props.route.path === 'new' ? 'Crear Inversión' : 'Actualizar Inversión' }
                            <i className="icon-arrow-right14 position-right"></i></button>
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

export default withRouter (InvestmentNew);
