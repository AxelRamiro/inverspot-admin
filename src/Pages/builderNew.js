import React, { Component } from 'react'
import { create, list, edit } from '../Services/builder'
import { withRouter } from 'react-router'

class BuilderNew extends Component {
  constructor(props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      builder: {}
    }
  }

  componentDidMount() {
    if(this.props.params.id) {
      list({_id: this.props.params.id},{}, 'name yearsWork completedWorks website')
        .then( builder => this.setState({builder: builder[0]}) )
        .catch(alert)
    }
  }

  handleInput(e) {
    e.preventDefault()
    let name = e.target.name
    let newState = Object.assign( this.state )
    newState.builder[name] = e.target.value
    this.setState(newState)
  }

  handleSubmit(e) {
    e.preventDefault()
    if(this.props.route.path === "new") {
      create( this.state.builder )
      .then( success => success && this.props.router.push('/builders/list') )
    }
    edit( this.state.builder )
      .then( success => success && this.props.router.push('/builders/list') )
  }

  render() {
    return (
      <div className="content">

        <div className="panel panel-flat">
          <div className="panel-heading">
            <h5 className="panel-title">Información de Desarrollador</h5>
          </div>

          <div className="panel-body">
            <form onSubmit={ this.handleSubmit }>
              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <label>Nombre</label>
                    <input name="name" type="text" className="form-control" required="required"
                    value={ this.state.builder.name } onChange={ this.handleInput }/>
                  </div>
                  <div className="col-md-6">
                    <label>Años Operando</label>
                    <input name="yearsWork" type="text" className="form-control" required="required" placeholder="ejemplo: 4"
                    value={ this.state.builder.yearsWork } onChange={ this.handleInput }/>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <label>Obras Concluidas</label>
                    <input type="text" name="completedWorks" className="form-control" required="required" placeholder="ejemplo: 4"
                    value={ this.state.builder.completedWorks } onChange={ this.handleInput } />
                  </div>

                  <div className="col-md-6">
                    <label>Sitio Web</label>
                    <input name="website" type="text" className="form-control" required="required"
                    value={ this.state.builder.website } onChange={ this.handleInput }/>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <button type="submit" className="btn btn-primary">
                  { this.props.route.path === 'new' ? 'Crear Desarrollador' : 'Actualizar Desarrollador' } 
                  <i className="icon-arrow-right14 position-right"></i></button>
              </div>
            </form>
          </div>
        </div>
      </div>

    )
  }
}

export default withRouter( BuilderNew );
