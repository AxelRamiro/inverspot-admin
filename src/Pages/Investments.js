import React, { Component } from 'react'
import Filterbar from '../Components/Filterbar'
//import Filterdate from '../Components/Filterdate'
import InvestmentRow from '../Components/investmentRows'
import { list } from '../Services/investment'
import { Link } from 'react-router'

function InvestmentList(props) {

    let filtered = props.investments.filter(investment => {
      return !(investment.investor.name.toLowerCase().indexOf(props.filterText.toLowerCase()) === -1 || props.filterTag )
    })

    return (
      <tbody>
        {filtered.map(investment => (<InvestmentRow key={investment._id} investment={investment} onRemove={ props.onRemoveItem } />) )}
      </tbody>
    )

  }

class investors extends Component {

    constructor(props) {
      super(props)
      this.filter = this.filter.bind(this)
      this.onRemoveItem = this.onRemoveItem.bind(this)
      this.state = {
        investments: [],
        filterText: '',
        filterTag:''
      }
    }

    onRemoveItem( investment ) {
      let copy = this.state.investments.slice()
      let index = copy.findIndex( e => e._id === investment._id )
      copy.splice(index, 1)
      this.setState({
        investments: copy
      })
    }

    componentDidMount() {
      list({}, {sort:'name', populate:{path: 'investor property'}}, 'investor sharesNumber amount property createdAt')
        .then( investments => this.setState({investments, filtered: investments}) )
        .catch( e => alert(e) )
    }

    filter(filters) {
      this.setState(filters)
    }

  render() {
    const stylep ={
      marginBottom: '-10px'
    }
    const stylep2={
      padding: '5px 0'
    }

    return (
      <div className="content">
        <Filterbar nameFilter='Busqueda de Inversores'  onFilterChange={ this.filter } >
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

              <InvestmentList investments={ this.state.investments } onRemoveItem={ this.onRemoveItem }
                filterText={ this.state.filterText } filterTag={ this.state.filterTag } />
              { this.state.investments.length === 0 &&
                <tr><h3 >No hay inversiones. <Link to="/investments/new">Crear nueva.</Link></h3></tr> }

            </table>
          </div>
        </div>

      </div>
    )
  }
}

export default investors;
