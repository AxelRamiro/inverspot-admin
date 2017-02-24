import React, { Component } from 'react'
import { Link, withRouter } from "react-router"
import { logout } from '../Services/auth'

class ToolBar extends Component {

  constructor(props) {
    super(props)
    this.closeSession = this.closeSession.bind(this)
  }

  closeSession() {
    logout( success => {
      this.props.router.push('/login')
    })
  }

  render() {
    return (
      <div className="navbar navbar-inverse bg-purple-600">
        <div className="navbar-header">
          <Link to="/properties/list" className="navbar-brand">
            <img src="assets/images/logo_light.png" alt=""/>
          </Link>

          <ul className="nav navbar-nav visible-xs-block">
            <li>
              <a data-toggle="collapse" data-target="#navbar-mobile"><i className="icon-tree5"></i></a>
            </li>
            <li>
              <a className="sidebar-mobile-main-toggle"><i className="icon-paragraph-justify3"></i></a>
            </li>
          </ul>
        </div>

        <div className="navbar-collapse collapse" id="navbar-mobile">
          <ul className="nav navbar-nav">
            <li><a className="sidebar-control sidebar-main-toggle hidden-xs"><i className="icon-paragraph-justify3"></i></a></li>
          </ul>

          <p className="navbar-text"><span className="label bg-success">DEVELOPMENT</span></p>

          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown dropdown-user">
              <a className="dropdown-toggle" data-toggle="dropdown">
                <img src="assets/images/placeholder.jpg" alt=""/>
                <span>{ this.props.user.name }</span>
                <i className="caret"></i>
              </a>

              <ul className="dropdown-menu dropdown-menu-right">
                <li><Link to={`/power-users/${this.props.user._id}/edit`}><i className="icon-user-plus"></i> Mi Perfil</Link></li>
                <li className="divider"></li>
                <li><a href="#"><i className="icon-cog5"></i> Configuración</a></li>
                <li><a href="#" onClick={ this.closeSession }><i className="icon-switch2"></i> Salir</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(ToolBar);
