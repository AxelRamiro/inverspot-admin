import React, { Component } from 'react'
import Filterbar from '../Components/Filterbar'
import Adminresult from '../Components/Adminresult'
import Filterby from '../Components/Filterby'
import { list } from '../Services/user'

class Admins extends Component {

  constructor(props) {
    super(props)
    this.onRemoveItem = this.onRemoveItem.bind(this)
    this.state = {
      powerUsers: []
    }
  }

  componentDidMount() {
    list({level:{ $in: ['admin', 'asesor'] }}, {sort:'name'}, 'name email telephone level createdAt')
      .then( powerUsers => this.setState({powerUsers}) )
      .catch( e => alert(e) )
  }

  onRemoveItem( user ) {
    let copy = this.state.powerUsers.slice()
    let index = copy.findIndex( e => e._id === user._id )
    copy.splice(index, 1)
    this.setState({
      powerUsers: copy
    })
  }

  render() {
    return (
      <div className="content">
        <Filterbar nameFilter='Busqueda de Administradores'>

          <Filterby>
            <li><a href="#"><i className="icon-calendar"></i> Fecha de Afiliación</a></li>
            <li><a href="#"><i className="icon-user-tie"></i> Administrador</a></li>
            <li><a href="#"><i className="icon-reading"></i> Asesor</a></li>
          </Filterby>
        </Filterbar>
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-body">
              <ul className="media-list search-results-list content-group">
                { this.state.powerUsers.map(( e, i ) => <Adminresult key={e._id}
                  user={e} onRemove={ this.onRemoveItem } /> ) }
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Admins;
