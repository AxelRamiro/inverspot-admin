import React, { Component } from 'react'
import Layout from '../Pages/Layout'
import Headernav from '../Components/Headernav'
import Filterbar from '../Components/Filterbar'
import Filterdate from '../Components/Filterdate'
import FilterByProperty from '../Components/filterByProperty'
import BuilderCard from '../Components/builderCard'

class builders extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Headernav headerNav={'Todos los Desarrolladores'} />
            <div className="content">
              <Filterbar nameFilter='Busqueda de Desarrolladores'>
                <Filterdate />
                <FilterByProperty />
              </Filterbar>

              <div className="row">
                <div className="col-lg-12">
                  <div className="panel panel-body">
                    <ul className="media-list search-results-list content-group">
                      { ['Pedro', 'Juan', 'Jose'].map(( e, i ) => <BuilderCard key={e} name={e} /> ) }
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

export default builders;
