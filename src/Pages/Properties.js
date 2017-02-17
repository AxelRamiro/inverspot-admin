import React, { Component } from 'react'
import Filterbar from '../Components/Filterbar'
import Propertycard from '../Components/Propertycard'
import Pagination from '../Components/Pagination'
import Filterby from '../Components/Filterby'


class Properties extends Component {
  render() {
    return (
      <div className="content">
        <Filterbar nameFilter='Busqueda de Propiedades'>
          <Filterby>
            <li><a href="#"><i className="icon-file-check"></i> Disponible</a></li>
            <li><a href="#"><i className="icon-file-stats"></i> Fondeada</a></li>
          </Filterby>
        </Filterbar>
        <div className="row">
        { ['1', '2', '3'].map(( e, i ) => <Propertycard key={e} name={e} /> ) }
          <Propertycard />
          <Propertycard />
          <Propertycard />
        </div>
        <Pagination />
      </div>
    )
  }
}

export default Properties;
