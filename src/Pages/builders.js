import React, { Component } from 'react'
import Filterbar from '../Components/Filterbar'
import Filterdate from '../Components/Filterdate'
import FilterByProperty from '../Components/filterByProperty'
import BuilderCard from '../Components/builderCard'

class Builders extends Component {
  render() {
    return (
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
    )
  }
}

export default Builders;
