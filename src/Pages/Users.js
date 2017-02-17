import React, { Component } from 'react'
import Filterbar from '../Components/Filterbar'
import Filterby from '../Components/Filterby'
import Filterdate from '../Components/Filterdate'
import Resultuser from '../Components/Resultuser'

class Users extends Component {
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
                { ['Pedro', 'Juan', 'Jose'].map(( e, i ) => <Resultuser key={e} name={e} /> ) }
              </ul>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Users;
