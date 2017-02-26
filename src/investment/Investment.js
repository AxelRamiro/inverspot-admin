import React, { Component } from 'react'
import { Link } from 'react-router'
import currency from '../Services/currency'
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
    this.props.onRemove( this.props.investment )
  }

  render() {
    let investment = this.props.investment
    return (
      <tr>
        <td>
          <h6 className="media-heading">
            <Link to={`investments/${investment._id}/edit`}>
              {investment.investor && investment.investor.name}
            </Link>
          </h6>
        </td>
        <td>{investment.sharesNumber}</td>
        <td>{currency(investment.amount)}</td>
        <td>{investment.property && investment.property.title}</td>
        <td>{ moment(investment.createdAt).format('LL') }</td>
        <td className="text-center">
            <ul className="icons-list">
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        <i className="icon-menu9"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right">
                      <li>
                      <Link to={`investments/${investment._id}/edit`}>
                        <i className="icon-cog pull-left"></i> Editar Inversion
                      </Link>
                      </li>
                      <li className="divider">
                      </li>
                      <li onClick={ this.deleteInvestment }>
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
