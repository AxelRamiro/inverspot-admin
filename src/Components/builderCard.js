import React, { Component } from 'react'
import { Link } from 'react-router'
import { remove } from '../Services/builder'
import Swal from 'react-swal'

class Rows extends Component {
  render() {
    return (
      <tr>
        <td>Departamento Col. Doctores</td>
        <td><span className="label label-success">Disponible</span></td>
      </tr>
    )
  }
}

class builderCard extends Component {

  constructor(props) {
    super(props)
    this.deleteBuilder = this.deleteBuilder.bind(this)
    this.state = {
      showConfirm: false,
      callback: () => null
    }
  }

  deleteBuilder() {
    this.setState({
      showConfirm: true,
      callback: confirm => {
        confirm && remove(this.props.builder._id)
          .then(removedBuilder => this.props.onRemove( removedBuilder ))
          .catch(alert)
      }
    })
  }

  render() {
    return (
      <div>
        <Swal
          title="Eliminar desarrollador"
          text={ `¿Está seguro que desea eliminar al desarrollador ${ this.props.builder.name }?` }
          confirmButtonText="Sí, eliminar"
          confirmButtonColor="#f44336"
          cancelButtonText="Cancelar"
          type="error"
          isOpen={ this.state.showConfirm || false }
          callback={ this.state.callback || null } />
        <li className="media">
          <div className="media-body">
            <h5 className="media-heading"><a href="#">{this.props.builder.name}</a></h5>
              <ul className="list-inline list-inline-separate text-muted">
                <li><span className="label bg-violet"> Desarrollador</span></li>
                <li>Años Operando: {this.props.builder.yearsWork}</li>
                <li><span className="label bg-success"> {this.props.builder.completedWorks} Obras concluidas </span></li>
              </ul>
              <p><i className="icon-hyperlink"></i><a href={this.props.builder.website}> {this.props.builder.website}</a><br/></p>
          </div>
          <div className="media-right media-top">
            <ul className="icons-list text-nowrap">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="icon-menu9"></i></a>

                <ul className="dropdown-menu dropdown-menu-right">
                  <li>
                    <Link to={`builders/${this.props.builder._id}/edit`}>
                      <i className="icon-cog pull-left"></i> Editar Perfil
                    </Link>
                  </li>
                  <li onClick={ this.deleteBuilder }><a><i className="icon-cross2 text-danger" id="sweet_combine"></i> Eliminar</a></li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="panel border-purple-400">
            <div className="panel-heading bg-purple-400">
              <h5 className="panel-title">Proyectos en Inverspot</h5>
              <div className="heading-elements">
                <ul className="icons-list">
                  <li><a data-action="collapse" className="rotate-180"></a></li>
                  <li><a data-action="reload"></a></li>
                </ul>
              </div>
            </div>

            <table className="table datatable-basic">
              <thead>
                <tr>
                  <th>Propiedad</th>
                  <th>Estatus</th>
                </tr>
              </thead>
              <tbody>

                <Rows />
                <Rows/>

              </tbody>
            </table>
          </div>
        </li>
        <hr/>
      </div>
    )
  }
}

export default builderCard;
