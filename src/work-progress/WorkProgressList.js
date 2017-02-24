import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { remove } from '../Services/crud'
import Swal from 'react-swal'

class WPR extends Component {

  constructor(props) {
    super(props)
    this.deleteProgress = this.deleteProgress.bind(this)
    this.state = {
      showConfirm: false,
      callback: () => null
    }
  }

  deleteProgress() {
    this.setState({
      showConfirm: true,
      callback: confirm => {
        confirm && remove('work-progress', this.props.progress._id)
          .then(removedProgress => this.props.onRemove( removedProgress ))
          .catch(alert)
      }
    })
  }

  render() {
    let progress = this.props.progress
    return (
    <tr>
      <Swal
        title="Eliminar usuario"
        text={ `¿Está seguro que desea eliminar el avance?` }
        confirmButtonText="Sí, eliminar"
        confirmButtonColor="#f44336"
        cancelButtonText="Cancelar"
        type="error"
        isOpen={ this.state.showConfirm || false }
        callback={ this.state.callback || null } />
      <td>
        <a href={`http://192.169.174.96/static/${progress.photo}`} data-popup="lightbox">
          <img src={ `http://192.169.174.96/static/${progress.photo}` } alt="" className="img-rounded img-preview" />
        </a>
      </td>
      <td>
        <p>{progress.description}</p>
      </td>
      <td>
        <p>{progress.month}</p>
      </td>
      <td>
        <p>{progress.year}</p>
      </td>
      <td className="text-center">
        <ul className="icons-list">
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              <i className="icon-menu9"></i>
            </a>

            <ul className="dropdown-menu dropdown-menu-right">
              {/* <li><a href="#"><i className="icon-pencil7"></i> Editar</a></li>
              <li className="divider"></li> */}
              <li onClick={ this.deleteProgress }><i className="icon-bin"></i> Eliminar</li>
            </ul>
          </li>
        </ul>
      </td>
    </tr>
  )
  }
}

class WorkProgressList extends Component {

  render() {
    return (
      <div className="panel panel-white">
        <div className="panel-heading">
          <h6 className="panel-title text-semibold">Avances de Obra</h6>
        </div>

        <table className="table table-striped media-library table-lg">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Descripción</th>
              <th>Mes</th>
              <th>Año</th>
              <th className="text-center">Opciones</th>
            </tr>
          </thead>
          <tbody>
            { this.props.progress.map( e => <WPR key={e._id} onRemove={ this.props.onRemoveItem } progress={e} /> ) }
          </tbody>
        </table>
      </div>
    )
  }
}

export default withRouter(WorkProgressList)
