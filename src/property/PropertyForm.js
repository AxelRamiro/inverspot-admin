import React, { Component } from 'react'
import { list } from '../Services/builder'
import { list as pList } from '../Services/property'
import { upload } from '../Services/crud'
import { withRouter } from 'react-router'

function PropertyFieldset(props) {
  return (
    <fieldset className="content-group">
      <legend className="text-bold">{ props.title }</legend>
      { props.children }
    </fieldset>
  )
}

function PropertyInput(props) {
  let { children, group, ...allProps } = props;
  let input = (<input { ...allProps } className={ props.className || 'form-control' } />)
  return (
    <div className="form-group">
      <label className="control-label col-lg-3">
        { children } { props.required && <span className="text-danger">*</span> }
      </label>
      <div className="col-lg-9">
        { group ?
          <div className="input-group">
            <div className="input-group-addon">{ group }</div>
            { input }
          </div> : input }
      </div>
    </div>
  )
}

class PropertyForm extends Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
    this.state = {
      property: {
        title: "",
        description: "",
        image: "",
        address: {
            street: "",
            number: "",
            suburb: "",
            city: "",
            zipCode: 0,
            coordinates: ""
        },
        builder: "",
        dataSheet: {
            investAmount: 0,
            estimatedTerm: 0,
            totalShares: 0,
            sharesSold: 0
        },
        marketResearch: {
            totalCost: 0,
            salePrice: 0,
            salesCommission: 0,
            utility: 0,
            estimatedTime: 0,
            yieldInTime: 0,
            annualYield: 0
        },
        fixedData: {
            objectiveFundraising: "",
            expectedAnnualYield: 0,
            expectedUtility: 0
        }
      },
      builders: []
    }
  }

  componentDidMount() {
    list({},{},'name')
      .then( builders => this.setState({ builders }) )
    if(this.props.params && this.props.params.id) {
      pList({_id: this.props.params.id},{}, '')
        .then( property => this.setState({property: property[0]}) )
        .catch(alert)
    }
  }

  handleInput(e) {
    e.preventDefault()
    let name = e.target.name
    let newState = Object.assign( this.state )
    if (name.indexOf('.') > -1) {
      let path = name.split('.')
      newState.property[path[0]][path[1]] = e.target.value
    }
    else
      newState.property[name] = e.target.value
    this.setState(newState)
  }

  handleImageChange(e) {
    e.preventDefault()
    let file = e.target.files[0]
    this.setState( { image: file
    } )
  }

  handleSubmit(e) {
    e.preventDefault()
    let formData = new FormData()
    formData.append('image', this.state.image)
    formData.append('property', JSON.stringify(this.state.property))

    upload( 'property' , formData, this.props.path.path === ':id/edit' )
      .then( success => success && this.props.router.push('/properties/list') )
  }

  render() {
    let property = this.state.property
    return (
      <div className="tab-pane fade in active" id="one">

        <div className="panel panel-flat">
          <div className="panel-heading">
            <h5 className="panel-title">Información de Propiedad</h5>
          </div>

          <div className="panel-body">
            <form className="form-horizontal" onSubmit={ this.handleSubmit } >

              <PropertyFieldset title="Información Básica">
                <PropertyInput value={ property.title }
                  onChange={ this.handleInput } name="title" required>Título</PropertyInput>

                <div className="form-group">
                  <label className="control-label col-lg-3">Descripción del Proyecto <span className="text-danger">*</span></label>
                  <div className="col-lg-9">
                    <textarea value={ property.description }
                      onChange={ this.handleInput } rows="5" cols="5"
                      name="description" className="form-control" required="required" placeholder="" aria-required="true"></textarea>
                  </div>
                </div>

                <PropertyInput onChange={ this.handleImageChange } name="image" type="file" value={ property.file }
                  className="file-styled">Imagen Principal del Proyecto</PropertyInput>

                <PropertyInput
                  onChange={ this.handleInput }
                  name="address.street"
                  value={ property.address.street }
                  required>
                  Calle
                </PropertyInput>
                <PropertyInput onChange={ this.handleInput } name="address.number" value={ property.address.number } type="text" required>Número</PropertyInput>
                <PropertyInput onChange={ this.handleInput } name="address.suburb" value={ property.address.suburb } type="text" required>Colonia</PropertyInput>
                <PropertyInput onChange={ this.handleInput } name="address.city" value={ property.address.city } type="text" required>Ciudad</PropertyInput>
                <PropertyInput onChange={ this.handleInput } name="address.zipCode" value={ property.address.zipCode } type="number" required>Código Postal</PropertyInput>

                <div className="form-group has-feedback">
                  <label className="control-label col-lg-3">Coordenadas en el Mapa <span className="text-danger">*</span></label>
                  <div className="col-lg-9">
                    <input type="text" name="address.coordinates"
                      value={ property.address.coordinates }
                      onChange={ this.handleInput }
                      className="form-control" required
                      placeholder="ejemplo: 19.4236788,-99.1741247"/>
                    <div className="form-control-feedback">
                      <i className="icon-pin"></i>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-lg-3">Elegir el Desarrollador <span className="text-danger">*</span></label>
                  <div className="col-lg-9">
                    <select name="builder"
                      onChange={ this.handleInput } value={ property.builder }>
                      <option value="" disabled>Desarrollador</option>
                      { this.state.builders.map( e => <option key={ e._id } value={ e._id }>{ e.name }</option> ) }
                    </select>
                    {/* <select className="selectpicker" data-show-subtext="true" data-live-search="true" required="required">
                     </select> */}
                  </div>
                </div>
              </PropertyFieldset>

              <PropertyFieldset title="Información Fichas Técnicas">
                <PropertyInput onChange={ this.handleInput } type="number"
                  name="dataSheet.investAmount" value={ property.dataSheet.investAmount } required>Monto a Invertir</PropertyInput>
                <PropertyInput onChange={ this.handleInput } type="number"
                  name="dataSheet.estimatedTerm" value={ property.dataSheet.estimatedTerm } required
                  group="Meses">Plazo Estimado</PropertyInput>
                  <PropertyInput onChange={ this.handleInput } type="number"
                    name="dataSheet.totalShares" value={ property.dataSheet.totalShares } required>Total de Participaciones</PropertyInput>
                  <PropertyInput onChange={ this.handleInput } type="number" min="1" max={ property.dataSheet.totalShares }
                    name="dataSheet.sharesSold" value={ property.dataSheet.sharesSold }
                    required placeholder="0">Participaciones Vendidas</PropertyInput>
              </PropertyFieldset>

              <PropertyFieldset title="Estudio de Mercado">
                <PropertyInput onChange={ this.handleInput }
                  value={ property.marketResearch.totalCost } type="number" name="marketResearch.totalCost"
                  group="$" required>Costo Total</PropertyInput>
                <PropertyInput onChange={ this.handleInput }
                  value={ property.marketResearch.salePrice } type="number" name="marketResearch.salePrice"
                  group="$" required>Precio Estimado de Venta</PropertyInput>
                <PropertyInput onChange={ this.handleInput }
                  value={ property.marketResearch.salesCommission } type="number" name="marketResearch.salesCommission"
                  group="%" required>Comisión por Venta</PropertyInput>
                <PropertyInput onChange={ this.handleInput }
                  value={ property.marketResearch.utility } type="number" name="marketResearch.utility"
                  group="%" required>Utilidad</PropertyInput>
                <PropertyInput onChange={ this.handleInput }
                  value={ property.marketResearch.estimatedTime } type="number" name="marketResearch.estimatedTime"
                  group="Meses" required>Tiempo Estimado</PropertyInput>
                <PropertyInput onChange={ this.handleInput }
                  value={ property.marketResearch.yieldInTime } type="number" name="marketResearch.yieldInTime"
                  group="%" required>Rendimiento en Tiempo Estimado</PropertyInput>
                <PropertyInput onChange={ this.handleInput }
                  value={ property.marketResearch.annualYield } type="number" name="marketResearch.annualYield"
                  group="%" required>Rendimiento Anualizado</PropertyInput>
              </PropertyFieldset>

              <PropertyFieldset title="Datos Fijos">
                <PropertyInput value={ property.fixedData.objectiveFundraising } onChange={ this.handleInput } type="number" name="fixedData.objectiveFundraising"
                  group="$" required>Objetivo de Captación</PropertyInput>
                <PropertyInput value={ property.fixedData.expectedAnnualYield } onChange={ this.handleInput } type="number" name="fixedData.expectedAnnualYield"
                  group="%" required>Rendimiento Anual Estimado</PropertyInput>
                <PropertyInput value={ property.fixedData.expectedUtility } onChange={ this.handleInput } type="number" name="fixedData.expectedUtility"
                  group="%" required>Utilidad Esperada</PropertyInput>
              </PropertyFieldset>

              <fieldset className="content-group">

                <legend className="text-bold">Corrida Financiera</legend>
                <div className="form-group">
                  <div className="col-lg-12">
                    <table id="table1" className="table table-bordered">
                      <tbody>
                        <tr>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>


                <legend className="text-bold">Datos Complementarios</legend>
                <div className="form-group">
                  <div className="col-lg-12">
                    <table id="table2" className="table table-bordered">
                      <tbody>
                        <tr>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </fieldset>

              <div className="text-right">
                {/* <button type="reset" className="btn btn-default" id="reset">Limpiar <i className="icon-reload-alt position-right"></i></button> */}
                <button type="submit" className="btn btn-primary">{ this.props.path.path === "new" ? 'Crear Propiedad' : 'Actualizar Propiedad' }<i className="icon-arrow-right14 position-right"></i></button>
              </div>
            </form>
          </div>
        </div>

      </div>
    )
  }
}

export default withRouter(PropertyForm)
