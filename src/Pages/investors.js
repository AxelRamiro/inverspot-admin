import React, { Component } from 'react'
import Layout from '../Pages/Layout'
import Headernav from '../Components/Headernav'
import Filterbar from '../Components/Filterbar'
import Filterdate from '../Components/Filterdate'
import FilterByProperty from '../Components/filterByProperty'
import InvestmentRows from '../Components/investmentRows'

class investors extends Component {
  render() {
    const stylep ={
      marginBottom: '-10px'
    }
    const stylep2={
      padding: '5px 0'
    }
    return (
      <div>
        <Layout>
          <Headernav headerNav={'Todos los Inversores'} />
            <div className="content">
              <Filterbar nameFilter='Busqueda de Inversores'>
                <Filterdate />
                <FilterByProperty />
              </Filterbar>

              <div className="panel panel-body">                                       
                <div className="panel panel-success panel-bordered" style={stylep}>
                  <div className="panel-heading" style={stylep2}>
                    <h5 className="panel-title"> Inversores</h5>
                    <div className="heading-elements">
                        <ul className="icons-list">
                          <li><a data-action="reload"></a></li>
                        </ul>
                    </div>
                  </div>

                  <table className="table datatable-basic">
                    <thead>
                      <tr>
                        <th>Nombre de Usuario</th>
                        <th>Acciones</th>
                        <th>Monto</th>
                        <th>Nombre de la Propiedad</th>
                        <th>Fecha</th>
                        <th className="text-center">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      { ['Pedro', 'Juan', 'Jose'].map(( e, i ) => <InvestmentRows key={e} name={e} /> ) }
                  
                    </tbody>
                  </table>
                </div>                    
              </div>

            </div>
        </Layout>
      </div>
    )
  }
}

export default investors;
