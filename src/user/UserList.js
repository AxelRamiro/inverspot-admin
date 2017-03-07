import React, { Component } from 'react'
import Filterbar from '../components/Filterbar'
import moment from 'moment'
import User from './User'
import { Link } from 'react-router'
import { list } from '../Services/user'

function UserList(props) {

    let filtered = props.users.filter(user => {
      return !(user.name.toLowerCase().indexOf(props.filterText.toLowerCase()) === -1 || (props.filterTag && props.filterTag !== user.level))
    })

    if(filtered.length === 0) return null;

    let csvHeader = [['Fecha', 'Nombre', 'Correo', 'Teléfono', 'Asesor', 'Forma de Contacto']]
    let csvRows = filtered.map((usr) => {
      return `${moment(usr.createdAt).format('DD/MM/YYYY')},${usr.name},${usr.email},${usr.telephone},${usr.asesor && usr.asesor.name},${usr.contactFrom}`
    })
    const csvString = csvHeader.concat(csvRows).join(String.fromCharCode(13))
    let csvFile = encodeURIComponent(csvString)

    return (
      <div className="row">
        <div className="col-lg-12">
          <a href={'data:attachment/csv;charset=utf-8,' + csvFile } target="_blank" download="export.csv">EXPORTAR CSV</a>
          <div className="panel panel-body">
            <ul className="media-list search-results-list content-group">
              {filtered.map(user => (<User key={user._id} user={user} onRemove={ props.onRemoveItem } />) )}
            </ul>
          </div>
        </div>
      </div>
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
    list({level:{ $in: ['user', 'investor'] }}, {sort:'name', populate:{path:'asesor'}}, '')
      .then( users => this.setState({ users }) )
      .catch( e => alert(e) )
  }

  filter(filters) {
    this.setState(filters)
  }

  render() {
    return (
      <div className="content">

        <Filterbar
          nameFilter='Búsqueda de Usuarios'
          onFilterChange={ this.filter }>
          {/*<Filterdate />*/}
        </Filterbar>

        <UserList
          users={ this.state.users }
          onRemoveItem={ this.onRemoveItem }
          filterText={ this.state.filterText }
          filterTag={ this.state.filterTag } />
        { this.state.users.length === 0 && <h3>No hay usuarios. <Link to="/users/new">Crear nuevo usuario</Link></h3> }

      </div>
    )
  }
}

export default Users;
