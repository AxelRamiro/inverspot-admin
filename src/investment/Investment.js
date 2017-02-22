import React, { Component } from 'react'
import { Link } from 'react-router'
import { remove } from '../Services/user'
import Swal from 'react-swal'
import moment from 'moment'

class Investment extends Component {

  constructor(props) {
    super(props)
    this.deleteInvestment = this.deleteInvestment.bind(this)
    this.state = {
      showConfirm: false,
      callback: () => null
    }
  }

  deleteInvestment() {
    this.setState({
      showConfirm: true,
      callback: confirm => {
        confirm && remove(this.props.investment._id)
          .then(removedInvestment => this.props.onRemove( removedInvestment ))
          .catch(alert)
      }
    })
  }

  render() {
    return (
      <tr>
        <td>
          <h6 className="media-heading">
            <Link to={`investments/${this.props.investment._id}/edit`}>
              {this.props.investment.investor.name}
            </Link>
          </h6>
        </td>
        <td>{this.props.investment.sharesNumber}</td>
        <td>{this.props.investment.amount}</td>
        <td>{this.props.investment.property.title}</td>
        <td>{ moment(this.props.investment.createdAt).format('LL') }</td>
        <td className="text-center">
            <ul className="icons-list">
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        <i className="icon-menu9"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right">
                      <li>
                      <Link to={`investments/${this.props.investment._id}/edit`}>
                        <i className="icon-cog pull-left"></i> Editar Inversion
                      </Link>
                      </li>
                      <li className="divider">
                      </li>
                      <li onClick={ this.deleteUser }>
                        <a>
                          <i className="icon-cross2 text-danger" id="sweet_combine"></i>
                           Eliminar
                         </a>
                       </li>
                    </ul>
                </li>
            </ul>
        </td>
      </tr>
    )
  }
}

export default Investment;
