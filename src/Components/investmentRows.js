import React, { Component } from 'react'

class investmentRows extends Component {
  render() {
    return (
      <tr>
        <td><h6 className="media-heading"><a href="#">{this.props.name}</a></h6></td>
        <td>12</td>
        <td>$100,000</td>
        <td>Departamento Col. Doctores</td>
        <td>14/02/2016</td>
        <td className="text-center">
            <ul className="icons-list">
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        <i className="icon-menu9"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right">
                        <li><a href="#"><i className="icon-cross2 text-danger" id="sweet_combine"></i> Eliminar</a></li>
                    </ul>
                </li>
            </ul>
        </td>
      </tr>
    )
  }
}

export default investmentRows;