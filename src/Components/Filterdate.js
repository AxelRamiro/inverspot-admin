import React, { Component } from 'react'

class Filterdate extends Component {
  render() {

    return (
      <div className="col-sm-3">
        <ul className="list-inline list-inline-condensed no-margin-bottom">
          <li className="dropdown">
            <div className="form-group">
              <label>Filtrar por Rango de Fecha: </label>
              <div className="input-group">
                <span className="input-group-addon"><i className="icon-calendar22"></i></span>
                <input type="text" className="form-control daterange-weeknumbers" /> 
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Filterdate;