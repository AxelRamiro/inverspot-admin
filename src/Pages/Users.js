import React, { Component } from 'react'
import Filterbar from '../Components/Filterbar'
//import Filterdate from '../Components/Filterdate'
import Resultuser from '../Components/Resultuser'
import { Link } from 'react-router'
import { list } from '../Services/user'

function UsersList(props) {

    let filtered = props.users.filter(user => {
      return !(user.name.toLowerCase().indexOf(props.filterText.toLowerCase()) === -1 || (props.filterTag && props.filterTag !== user.level))
    })

    return (
      <ul className="media-list search-results-list content-group">
        {filtered.map(user => (<Resultuser key={user._id} user={user} onRemove={ props.onRemoveItem } />) )}
      </ul>
    )

}

class Users extends Component {

  constructor(props) {
    super(props)
    this.filter = this.filter.bind(this)
    this.onRemoveItem = this.onRemoveItem.bind(this)
    this.state = {
      users: [],
      filterText: '',
      filterTag:''
    }
  }

  onRemoveItem( user ) {
    let copy = this.state.users.slice()
    let index = copy.findIndex( e => e._id === user._id )
    copy.splice(index, 1)
    this.setState({
      users: copy
    })
  }

  componentDidMount() {
    list({level:{ $in: ['user', 'investor'] }}, {sort:'name'}, 'name email state status telephone level createdAt')
      .then( users => this.setState({users, filtered: users}) )
      .catch( e => alert(e) )
  }

  filter(filters) {
    this.setState(filters)
  }

  render() {
    return (
      <div className="content">

        <Filterbar
          nameFilter='Busqueda de Usuarios'
          onFilterChange={ this.filter }>
          {/*<Filterdate />*/}
        </Filterbar>
         <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-body">
              <UsersList
                users={ this.state.users }
                onRemoveItem={ this.onRemoveItem }
                filterText={ this.state.filterText }
                filterTag={ this.state.filterTag } />
              { this.state.users.length === 0 && <h3>No hay usuarios. <Link to="/users/new">Crear nuevo usuario</Link></h3> }
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Users;
