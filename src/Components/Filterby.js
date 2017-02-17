import React, { Component } from 'react'

class Filterby extends Component {
  render() {

    return (
      <div className="col-sm-6" style={this.props.style}>
        <ul className="list-inline list-inline-condensed no-margin-bottom">
          <li className="dropdown">
            <a className="btn btn-link dropdown-toggle" data-toggle="dropdown">
              <i className="icon-stack2 position-left"></i> Filtrar por: <span className="caret"></span>
            </a>
            <ul className="dropdown-menu">
              {this.props.children}
            </ul>
          </li>
        </ul>
      </div>      
    )
  }
}

export default Filterby;