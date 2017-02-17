import React, { Component } from 'react'
import Layout from '../Pages/Layout'
import Headernav from '../Components/Headernav'
import Filterbar from '../Components/Filterbar'
import Adminresult from '../Components/Adminresult'
import Filterby from '../Components/Filterby'

class Admins extends Component {
  render() {
    return (
      <div>
        <Layout>
        	<Headernav headerNav={'Todos los Administradores'}/>
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
                      { ['Pedro', 'Juan', 'Jose'].map(( e, i ) => <Adminresult key={e} name={e} /> ) }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </Layout>
      </div>
    )
  }
}

export default Admins;
