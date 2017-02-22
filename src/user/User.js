import React, { Component } from 'react'
import { Link } from "react-router"
import Swal from 'react-swal'
import moment from 'moment'
import { remove } from '../Services/user'

class User extends Component {

  constructor(props) {
    super(props)
    this.deleteUser = this.deleteUser.bind(this)
    this.state = {
      showConfirm: false,
      callback: () => null
    }
  }

  deleteUser() {
    this.setState({
      showConfirm: true,
      callback: confirm => {
        confirm && remove(this.props.user._id)
          .then(removedUser => this.props.onRemove( removedUser ))
          .catch(alert)
      }
    })
  }

  render() {
    let statustag
    if (this.props.user.status === 'active')
      statustag =(<span className="label bg-success">Activo</span>)
    else
      statustag =(<span className="label bg-danger">Inactivo</span>)
    return (
      <div>
        <Swal
          title="Eliminar usuario"
          text={ `¿Está seguro que desea eliminar al usuario ${ this.props.user.name }?` }
          confirmButtonText="Sí, eliminar"
          confirmButtonColor="#f44336"
          cancelButtonText="Cancelar"
          type="error"
          isOpen={ this.state.showConfirm || false }
          callback={ this.state.callback || null } />
        <li className="media">
          <div className="media-body">
            <h6 className="media-heading">
              <Link to={`users/${this.props.user._id}/edit`}>
                {this.props.user.name}
              </Link>
            </h6>
              <ul className="list-inline list-inline-separate text-muted">
                <li>
                  <span className="label bg-info">Usuario</span>
                  {statustag}
                </li>
                <li>Miembro desde: { moment(this.props.user.createdAt).format('LL') }</li>
                <li><i className="icon-pin position-left"></i>{ this.props.user.state }</li>
                <li><i className="icon-paper position-left"></i>Medio: { this.props.user.contactFrom }</li>
                <li><i className="icon-paper position-left"></i>Asesor: <Link to={`/power-users/${this.props.user.asesor._id}/edit`}>{ this.props.user.asesor.name }</Link></li>
              </ul>
              <p><i className="icon-mail5"></i> { this.props.user.email }<br/>
              <i className="icon-phone2"></i> { this.props.user.telephone }</p>
          </div>
          <div className="media-right media-top">
            <ul className="icons-list text-nowrap">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="icon-menu9"></i></a>

                <ul className="dropdown-menu dropdown-menu-right">
                  <li>
                  <Link to={`users/${this.props.user._id}/edit`}>
                    <i className="icon-profile pull-left"></i> Editar Perfil
                  </Link>
                  </li>
                  <li className="divider"></li>
                  <li onClick={ this.deleteUser }>
                    <a><i className="icon-cross2 text-danger" id="sweet_combine"></i> Eliminar</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </li>
        <hr/>
      </div>
    )
  }
}

export default User;
