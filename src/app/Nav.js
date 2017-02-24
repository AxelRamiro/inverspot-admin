import React, { Component } from 'react'
import { Link } from "react-router"

class Nav extends Component {
  render() {
    let map = {
      'power-users': 'Administradores',
      'users': 'Usuarios',
      'properties': 'Propiedades',
      'list': 'Todos',
      'new': 'Nuevo',
      'edit': 'Editar',
      'investments': 'Inversiones',
      'builders': 'Desarrolladores'
    }
    let breadcrumbs = this.props.breadcrumbs.split('/').slice(1)
    breadcrumbs = [ breadcrumbs[0], breadcrumbs[breadcrumbs.length - 1] ]
    breadcrumbs = breadcrumbs.map( (e, i) => {
      return (<li key={`${e}${i}`}>{map[e]}</li>)
    } )
    return (
      <div className="page-header page-header-default">
        <div className="breadcrumb-line">
          <ul className="breadcrumb">
            <li>
            <Link to='/' >
              <i className="icon-home2 position-left"></i>
            </Link>
            </li>
            { breadcrumbs }
          </ul>

          <ul className="breadcrumb-elements">
            <li><a><i className="icon-comment-discussion position-left"></i> Ayuda</a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="icon-gear position-left"></i>
                Opciones
                <span className="caret"></span>
              </a>

              <ul className="dropdown-menu dropdown-menu-right">
                <li><a><i className="icon-user-lock"></i> Account security</a></li>
                <li><a><i className="icon-statistics"></i> Analytics</a></li>
                <li><a><i className="icon-accessibility"></i> Accessibility</a></li>
                <li className="divider"></li>
                <li><a><i className="icon-gear"></i> All settings</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav;
