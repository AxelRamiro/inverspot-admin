import React, { Component } from 'react'
import { Link } from 'react-router'
import { remove } from '../Services/builder'
import Swal from 'react-swal'
import { list } from '../Services/property'

function Row(props) {
  return (
    <tr>
      <td>{ props.title }</td>
      <td><span className="label label-success">{ props.status }</span></td>
    </tr>
  )
}

function PropertyTable(props) {
  return (
    <table className="table datatable-basic">
      <thead>
        <tr>
          <th>Propiedad</th>
          <th>Estatus</th>
        </tr>
      </thead>
      <tbody>
        { props.items.map( e => <Row key={e._id} title={e.title} status={e.status}/> ) }
      </tbody>
    </table>
  )
}

class Builder extends Component {

  constructor(props) {
    super(props)
    this.deleteBuilder = this.deleteBuilder.bind(this)
    this.state = {
      showConfirm: false,
      callback: () => null,
      properties: []
    }
  }

  componentDidMount() {
    list({builder: this.props.builder._id},{},'title status')
      .then( properties => this.setState({ properties }) )
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
    let builder = this.props.builder
    return (
      <div>
        <Swal
          title="Eliminar desarrollador"
          text={ `¿Está seguro que desea eliminar al desarrollador ${ builder.name }?` }
          confirmButtonText="Sí, eliminar"
          confirmButtonColor="#f44336"
          cancelButtonText="Cancelar"
          type="error"
          isOpen={ this.state.showConfirm || false }
          callback={ this.state.callback || null } />
        <li className="media">
          <div className="media-body">
            <h5 className="media-heading"><Link to={ `/builders/${builder._id}/edit` }>{builder.name}</Link></h5>
              <ul className="list-inline list-inline-separate text-muted">
                <li><span className="label bg-violet"> Desarrollador</span></li>
                <li>Años Operando: {builder.yearsWork}</li>
                <li><span className="label bg-success"> {builder.completedWorks} Obras concluidas </span></li>
              </ul>
              <p><i className="icon-hyperlink"></i><a href={ `http://${builder.website}` } target="_blank"> {builder.website}</a><br/></p>
          </div>
          <div className="media-right media-top">
            <ul className="icons-list text-nowrap">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="icon-menu9"></i></a>

                <ul className="dropdown-menu dropdown-menu-right">
                  <li>
                    <Link to={`builders/${builder._id}/edit`}>
                      <i className="icon-cog pull-left"></i> Editar Perfil
                    </Link>
                  </li>
                  <li onClick={ this.deleteBuilder }><a><i className="icon-cross2 text-danger" id="sweet_combine"></i> Eliminar</a></li>
                </ul>
              </li>
            </ul>
          </div>
          { this.state.properties.length > 0 &&
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
          </div> }
          { this.state.properties.length > 0 && <PropertyTable items={ this.state.properties } /> }
        </li>
        <hr/>
      </div>
    )
  }
}

export default Builder;
