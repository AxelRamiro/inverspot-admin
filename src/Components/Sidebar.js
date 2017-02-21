import React, { Component } from 'react'
import { Link } from "react-router"

function NavLink( props ) {
  return (
    <li>
      <Link to={ `/${props.root}/list` } activeStyle={{ backgroundColor: '#26a69a' }}>
        <i className={ props.icon }></i> <span>{ props.name }</span>
      </Link>
      <ul>
        <li>
          <Link to={ `/${props.root}/list` } activeClassName="active">
            Todos los { props.name }
          </Link>
        </li>
        <li>
          <Link to={ `/${props.root}/new` } activeClassName="active">
            Añadir { props.name }
          </Link>
        </li>
      </ul>
    </li>
  )
}

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
                  <span className="media-heading text-semibold">{ this.props.user.name }</span>
                  <div className="text-size-mini text-muted">
                    <i className="icon-user text-size-small"></i> &nbsp;{ this.props.user.level }
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
                <NavLink root="admin-users" name="Administradores" icon="icon-stack2" />
                <NavLink root="properties" name="Propiedades" icon="icon-copy" />
                <NavLink root="users" name="Usuarios" icon="icon-droplet2" />
                <NavLink root="investments" name="Inversiones" icon="icon-stack" />
                <NavLink root="builders" name="Desarrolladores" icon="icon-file-css" />
              </ul>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Sidebar;
