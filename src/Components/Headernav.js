import React, { Component } from 'react'
import { Link } from "react-router"

class Headernav extends Component {
  render() {
    return (
      <div className="page-header page-header-default">
        <div className="breadcrumb-line">
          <ul className="breadcrumb">
            <li>
            <Link to='/properties' >
              <i className="icon-home2 position-left"></i> Panel Principal
            </Link>
            </li>
            <li className="active">
              {this.props.headerNav}
            </li>
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

export default Headernav;