import React, { Component } from 'react'
import Filterbar from '../Components/Filterbar'
import Adminresult from '../Components/Adminresult'
// import Filterby from '../Components/Filterby'
import { list } from '../Services/user'

function PowerUserList(props) {

    let filtered = props.powerUsers.filter(user => {
      return !(user.name.indexOf(props.filterText) === -1 || (props.filterTag && props.filterTag !== user.level))
    })

    return (
      <ul className="media-list search-results-list content-group">
        {filtered.map(user => (<Adminresult key={user._id} user={user} onRemove={ props.onRemoveItem } />) )}
      </ul>
    )

}

class Admins extends Component {

  constructor(props) {
    super(props)
    this.filter = this.filter.bind(this)
    this.onRemoveItem = this.onRemoveItem.bind(this)
    this.state = {
      powerUsers: [],
      filterText: '',
      filterTag:''
    }
  }

  onRemoveItem( user ) {
    let copy = this.state.powerUsers.slice()
    let index = copy.findIndex( e => e._id === user._id )
    copy.splice(index, 1)
    this.setState({
      powerUsers: copy
    })
  }

  componentDidMount() {
    list({level:{ $in: ['admin', 'asesor'] }}, {sort:'name'}, 'name email telephone level createdAt')
      .then( powerUsers => this.setState({powerUsers, filtered: powerUsers}) )
      .catch( e => alert(e) )
  }

  filter(filters) {
    this.setState(filters)
  }

  render() {
    return (
      <div className="content">

        <Filterbar nameFilter='Busqueda de Administradores' onFilterChange={ this.filter }>
        </Filterbar>
        {/* <Filterby>
          <li><a href="#"><i className="icon-calendar"></i> Fecha de Afiliación</a></li>
          <li><a href="#"><i className="icon-user-tie"></i> Administrador</a></li>
          <li><a href="#"><i className="icon-reading"></i> Asesor</a></li>
        </Filterby> */}
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-body">
              <PowerUserList powerUsers={ this.state.powerUsers } filterText={ this.state.filterText } filterTag={ this.state.filterTag } />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Admins;
