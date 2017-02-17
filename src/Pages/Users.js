import React, { Component } from 'react'
import Filterbar from '../Components/Filterbar'
import Filterby from '../Components/Filterby'
import Filterdate from '../Components/Filterdate'
import Resultuser from '../Components/Resultuser'
import { Link } from 'react-router'

const USERS = [
  {
    name: 'Pedro',
    _id: 123
  },{
    name: 'Juan',
    _id: 456
  },{
    name: 'José',
    _id: 789
  },
]

class Users extends Component {

  constructor(props) {
    super(props)
    this.deleteUser = this.deleteUser.bind(this)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    // TODO: Cambiar por fetch de usuarios
    this.setState({
      users: USERS
    })
  }

  deleteUser( id ) {
    let oldUsers = this.state.users.slice()
    let index = oldUsers.findIndex( e => e._id === id )
    oldUsers.splice( index, 1 )
    this.setState({
      users: oldUsers
    })
  }

  render() {
    const style = {
      float: 'right'
    }
    return (
      <div className="content">

        <Filterbar nameFilter='Busqueda de Usuarios'>
          <Filterdate />
          <Filterby style={style}>
            <li><a href="#"><i className="icon-accessibility"></i> Nombre</a></li>
            <li><a href="#"><i className="icon-reading"></i> Apellido</a></li>
          </Filterby>
        </Filterbar>
         <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-body">
              <ul className="media-list search-results-list content-group">
                { this.state.users.map(( e, i ) => <Resultuser key={e._id} user={e} onDelete={ this.deleteUser } /> ) }
              </ul>
              { this.state.users.length === 0 && <h3>No hay usuarios. <Link to="/users/new">Crear nuevo usuario</Link></h3> }
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Users;
