import React, { Component } from 'react'
import Tabs from '../components/Tabs'
import UserForm from './UserForm'
import InvestorForm from './InvestorForm'

class UserEdit extends Component {
  render() {
    return (
      <div>
        { this.props.route.path === ':id/edit' && <Tabs first="Información de Perfil" second="Información de Inversor"/>}
        <div className="content">
          <div className="row">
            <div className="col-lg-12">
              <div className="tabbable">
                <div className="tab-content">
                  <UserForm path={this.props.route}/>
                  <InvestorForm />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default UserEdit;
