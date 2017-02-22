import React, { Component } from 'react'
import Tabs from '../components/Tabs'
import PropertyForm from './PropertyForm'
import WorkProgress from './WorkProgress'

class PropertyEdit extends Component {
  render() {
    return (
      <div>
        { this.props.route.path === ':id/edit' &&
        <Tabs first="Editar Propiedad" second="Avances de Obra"/>}
        <div className="content">
          <div className="row">
            <div className="col-lg-12">
              <div className="tabbable">
                <div className="tab-content">
                  <PropertyForm path={this.props.route}/>
                  { this.props.route.path === ':id/edit' && <WorkProgress /> }
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default PropertyEdit;
