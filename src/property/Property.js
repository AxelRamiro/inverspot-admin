import React, { Component } from 'react'
import { Link } from 'react-router'
import { remove } from '../Services/property'
import Swal from 'react-swal'
import Date from '../components/molecules/formated-date'
import currency from '../Services/currency'

class Property extends Component {

  constructor(props) {
    super(props)
    this.deleteProperty = this.deleteProperty.bind(this)
    this.confirmDeleteCallback = this.confirmDeleteCallback.bind(this)
    this.state = {
      showConfirm: false,
      callback: () => null
    }
  }

  confirmDeleteCallback(confirm) {
    confirm && remove(this.props.property._id)
      .then(removedProp => this.props.onRemove( removedProp ))
      .catch(alert)
  }

  deleteProperty() {
    this.setState({
      showConfirm: true
    })
  }

  render() {
    let property = this.props.property
    return (
      <div className="col-md-4">
        <Swal
          title="Eliminar propiedad"
          text={ `¿Está seguro que desea eliminar la propiedad ${ property.title }?` }
          confirmButtonText="Sí, eliminar"
          confirmButtonColor="#f44336"
          cancelButtonText="Cancelar"
          type="error"
          isOpen={ this.state.showConfirm || false }
          callback={ this.confirmDeleteCallback } />
        <div className="thumbnail">
          <div className="panel-heading">
            <h6 className="panel-title">
            { property.title || 'default' }
            <div className="media-annotation mt-5">{ property.description }</div>
            <a className="heading-elements-toggle"><i className="icon-more"></i></a></h6>
            <div className="heading-elements">
                <ul className="heading-text list-inline pull-right">
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle text-default" data-toggle="dropdown" aria-expanded="false"><i className="icon-cog5"></i><span className="caret"></span></a>
                        <ul className="dropdown-menu dropdown-menu-right">
                            <li><Link to={ `/builders/${ property.builder }/edit` }>Ver Desarrollador</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
          </div>
          <div className="thumb">
            <img src="assets/images/placeholder.jpg" alt=""/>
            <div className="caption-overflow">
              <span>
                <Link className="btn btn-info btn-sm" to={`/properties/${ property._id }/edit`}>Editar</Link>
                <a onClick={ this.deleteProperty } className="btn btn-info btn-sm">Eliminar</a>
              </span>
            </div>
          </div>
                          <div className="caption">
            <div className="media-annotation mt-5">
              <Date label="Fecha de Alta:" date={ property.createdAt } />
            </div>
            <p>Costo Total​: { currency(property.marketResearch.totalCost || 0) }</p>
            <div className="media-annotation mt-5">
              <i className="icon-pin-alt position-left"></i>
              { `${property.address.suburb}, ${property.address.city}` }
            </div>
          </div>

          <div className="panel-footer"><a className="heading-elements-toggle"><i className="icon-more"></i></a>
            <div className="heading-elements">
              <ul className="list-inline list-inline-condensed heading-text">
                <li><span className="position-left">Acciones:</span></li>
                <li><span className="label bg-danger-400 position-left">{ property.dataSheet.sharesSold }</span></li>
                {/* <li>de</li> */}
                <li><span className="label bg-success-400 position-left">{ property.dataSheet.totalShares }</span></li>
              </ul>
              <div className="pull-right">
                <Link to={ `/properties/${ property._id }/edit` } className="btn bg-indigo-400 btn-xs heading-btn">Ver Ficha</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Property;
