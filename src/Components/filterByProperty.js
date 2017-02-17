import React, { Component } from 'react'

class filterByProperty extends Component {
  render() {
    return (
      <div className="col-sm-3">
        <ul className="list-inline list-inline-condensed no-margin-bottom">
          <li className="dropdown">
             <div className="form-group">
                <label>Filtrar por Nombre de Propiedad: </label>
                <select className="selectpicker" data-show-subtext="true" data-live-search="true">
                  <option data-subtext="Rep California">Tom Foolery</option>
                  <option data-subtext="Sen California">Bill Gordon</option>
                  <option data-subtext="Sen Massacusetts">Elizabeth Warren</option>
                  <option data-subtext="Rep Alabama">Mario Flores</option>
                  <option data-subtext="Rep Alaska">Don Young</option>
                  <option data-subtext="Rep California" disabled="disabled">Marvin Martinez</option>
                </select>
              </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default filterByProperty;