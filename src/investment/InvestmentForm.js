import React, { Component } from 'react'
import { create, list, edit } from '../Services/investment'
import { list as userList} from '../Services/user'
import { list as propertyList} from '../Services/property'
import currency from '../Services/currency'
import { withRouter } from 'react-router'

class InvestmentNew extends Component {

  constructor(props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      max: 1,
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
    let query = {status: "available"}
    userList({level:{ $in: ['user', 'investor'] }}, {sort:'name'},'name')
      .then( users => this.setState({ users }) )
    if(this.props.params.id) {
      list({_id: this.props.params.id}, {populate: 'property'}, 'investor property sharesNumber amount')
        .then( investment => {
          investment = investment[0]
          query = { $or: [ query , { _id: investment.property._id } ] }
          this.setState({ investment, multiplier: (investment.amount / investment.sharesNumber), max: (investment.property.dataSheet.totalShares - investment.property.dataSheet.sharesSold + investment.sharesNumber) })
        } )
        .then( () => {
          return propertyList(query, {sort:'title'},'title dataSheet')
            .then( properties => this.setState({ properties }) )
        } )
        .catch(alert)
    }
    propertyList(query, {sort:'title'},'title dataSheet')
      .then( properties => this.setState({ properties }) )

  }

  handleInput(e) {
    e.preventDefault()
    let name = e.target.name
    let value = e.target.value
    let newState = Object.assign( this.state )
    switch(name) {
      case 'property':
        let selectedProperty = this.state.properties.find( e => e._id === value )
        newState['multiplier'] = selectedProperty.dataSheet.investAmount
        newState['max'] = this.props.route.path === 'new' ? (selectedProperty.dataSheet.totalShares - selectedProperty.dataSheet.sharesSold) : this.state.max
        break;
      case 'sharesNumber':
        newState.investment['amount'] = value * this.state.multiplier
        break;
      default:
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
                              <select disabled={this.props.route.path !== 'new'} name="investor" className="form-control" required="required"
                                onChange={ this.handleInput } value={ investment.investor }>
                                <option value="" disabled>Usuario</option>
                                { this.state.users.map( e => <option key={ e._id } value={ e._id }>{ e.name }</option> ) }
                              </select>
                            </div>
                            <div className="col-md-6">
                              <label>Nombre de Propiedad: <span className="text-danger">*</span></label><br/>
                              <select disabled={this.props.route.path !== 'new'} name="property" className="form-control"  required="required"
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
                              <input disabled={ !this.state.multiplier } type="number" min={1}
                                max={ this.state.max }
                                name="sharesNumber" className="form-control" required="required"
                                onChange={ this.handleInput } value={ investment.sharesNumber } />
                            </div>
                            <span>{ currency((this.state.investment.sharesNumber * this.state.multiplier) || 0) }</span>
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
