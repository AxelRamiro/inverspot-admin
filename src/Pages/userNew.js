import React, { Component } from 'react'
import Tabs from '../Components/Tabs'
import NewUserForm from '../Components/NewUserForm'
import InvestmentForm from '../Components/InvestmentForm'

class NewUser extends Component {
  render() {
    return (
      <div>
        { this.props.route.path === ':id/edit' && <Tabs first="Información de Perfil" second="Información de Inversor"/>}
        <div className="content">
          <div className="row">
            <div className="col-lg-12">
              <div className="tabbable">
                <div className="tab-content">
                  <NewUserForm />
                  { this.props.route.path === ':id/edit' && <InvestmentForm /> }
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default NewUser;

