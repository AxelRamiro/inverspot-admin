import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { create } from '../Services/crud'

class WorkProgressForm extends Component {

  constructor(props) {
    super(props)
    this.addWorkProgress = this.addWorkProgress.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
    this.state = {
      month: '',
      year: '',
      description: '',
      photo: ''
    }
  }

  handleInput(e) {
		e.preventDefault()
		let name = e.target.name
		let newState = Object.assign( this.state )
		newState[name] = e.target.value
		this.setState(newState)
	}

  handleImageChange(e) {
    e.preventDefault()
    let file = e.target.files[0]
    this.setState({
      photo: file,
    })
  }

  addWorkProgress(e) {
    e.preventDefault()
    let formData = new FormData()
    let data = Object.assign(this.state)
    for(let k in data) {
      if(data.hasOwnProperty(k)) {
        formData.append(k, data[k])
      }
    }
    formData.append('property', this.props.params.id)
    create('work-progress', formData, true)
      .then( saved => {
        console.log(saved);
        if(saved) {
          this.props.onNewProgress(saved)
          let resetState = {
            month: '',
            year: '',
            description: '',
            photo: ''
          }
          this.setState(resetState)
        }
      } )
  }

  render() {
    return (
      <form onSubmit={ this.addWorkProgress }>
        <div className="form-group">
          <div className="row">
            <div className="col-md-6">
              <label className="control-label">Descripción del Avance <span className="text-danger">*</span></label>
              <textarea value={ this.state.description } onChange={ this.handleInput } rows="5" cols="5" name="description" className="form-control" required ></textarea>
            </div>

            <div className="col-md-6">
              <label className="display-block">Subir Imagen de Avance <span className="text-danger">*</span></label>
              <input type="file" className="file-styled" name="photo" required onChange={ this.handleImageChange } />
              <span className="help-block">Formatos aceptados: gif, png, jpg. Tamaño Max: 2Mb</span>
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <div className="col-md-6">
              <label className="control-label col-lg-3">Mes <span className="text-danger">*</span></label>
              <div className="form-group col-md-6">
                <select value={ this.state.month } onChange={ this.handleInput } className="form-control" name="month" required>
                  <option>Elige</option>
                  <option>Enero</option>
                  <option>Febrero</option>
                  <option>Marzo</option>
                  <option>Abril</option>
                  <option>Mayo</option>
                  <option>Junio</option>
                  <option>Julio</option>
                  <option>Agosto</option>
                  <option>Septiembre</option>
                  <option>Octubre</option>
                  <option>Noviembre</option>
                  <option>Diciembre</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <label className="control-label col-lg-3">Año <span className="text-danger">*</span></label>
              <div className="form-group col-md-6">
                <select value={ this.state.year } onChange={ this.handleInput } className="form-control" name="year" required>
                  <option>Elige</option>
                  <option>2015</option>
                  <option>2016</option>
                  <option>2017</option>
                  <option>2018</option>
                  <option>2019</option>
                  <option>2020</option>
                  <option>2021</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="text-right">
          <button type="submit" className="btn btn-primary">Guardar <i className="icon-arrow-right14 position-right"></i></button>
        </div>
      </form>
    )
  }
}

export default withRouter(WorkProgressForm)
