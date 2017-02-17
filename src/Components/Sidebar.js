import React, { Component } from 'react'
import { Link } from "react-router"

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar sidebar-main">
        <div className="sidebar-content">

          <div className="sidebar-user">
            <div className="category-content">
              <div className="media">
                <a href="#" className="media-left"><img src="assets/images/placeholder.jpg" className="img-circle img-sm" alt=""/></a>
                <div className="media-body">
                  <span className="media-heading text-semibold">Victoria Baker</span>
                  <div className="text-size-mini text-muted">
                    <i className="icon-user text-size-small"></i> &nbsp;Admin
                  </div>
                </div>

                <div className="media-right media-middle">
                  <ul className="icons-list">
                    <li>
                      <a href="#"><i className="icon-cog3"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar-category sidebar-category-visible">
            <div className="category-content no-padding">
              <ul className="navigation navigation-main navigation-accordion">

                <li className="navigation-header"><span>Panel Principal</span> <i className="icon-menu" title="Main pages"></i></li>
                <li>
                  <Link to="/admins" activeStyle={{ backgroundColor: '#26a69a' }}>
                    <i className="icon-stack2"></i> <span>Administradores</span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/admins" activeClassName="active">
                        Todos los Administradores
                      </Link>
                    </li>
                    <li>
                      <Link to="/admins/new" activeClassName="active">
                        Añadir un Administrador
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/properties" activeStyle={{ backgroundColor: '#26a69a' }}>
                    <i className="icon-copy"></i>
                    <span>Propiedades</span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/properties" activeClassName="active">
                        Todas las Propiedades
                      </Link>
                    </li>
                    <li>
                      <Link to="/properties/new" activeClassName="active">
                        Añadir Nueva Propiedad
                        <span className="label bg-warning-400">13</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/users" activeStyle={{ backgroundColor: '#26a69a' }}>
                    <i className="icon-droplet2"></i> <span>Usuarios</span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/users" activeClassName="active">
                        Todos los Usuarios
                      </Link>
                    </li>
                    <li>
                      <Link to="/users/new" activeClassName="active">
                        Añadir Nuevo Usuario
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/investors" activeStyle={{ backgroundColor: '#26a69a' }}>
                    <i className="icon-stack"></i> <span>Inversores</span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/investors" activeClassName="active">
                        Todos los Inversores
                      </Link>
                    </li>
                    <li><a href="agregar_inversor.html">Añadir Nueva Inversion</a></li>
                  </ul>
                </li>
                <li>
                  <Link to="/builders" activeStyle={{ backgroundColor: '#26a69a' }}>
                    <i className="icon-file-css"></i> <span>Desarrolladores</span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/builders" activeClassName="active">
                        Todos los Desarrolladores
                      </Link>
                    </li>
                    <li>
                    <Link to="/builders/new" activeClassName="active">
                      Añadir Nuevo Desarrollador
                    </Link>
                    </li>
                  </ul>
                </li>

              </ul>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Sidebar;