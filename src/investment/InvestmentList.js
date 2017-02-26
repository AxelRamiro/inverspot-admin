import React, { Component } from 'react'
import Filterbar from '../components/Filterbar'
import Swal from 'react-swal'
import Investment from './Investment'
import { list, remove } from '../Services/crud'
import { Link } from 'react-router'

function InvestmentList(props) {

    let filtered = props.investments.filter(investment => {
      const filter = props.filterText
      let name = investment.investor ? investment.investor.name : ''
      let title = investment.property ? investment.property.title : ''
      let matchName = name.toLowerCase().indexOf(filter.toLowerCase()) > -1
      let matchTitle = title.toLowerCase().indexOf(filter.toLowerCase()) > -1
      return matchName || matchTitle
    })

    return (
      <tbody>
        {filtered.map(investment => (<Investment key={investment._id} investment={investment} onRemove={ props.onRemoveItem } />) )}
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
      this.setState({
        showConfirm: true,
        callback: confirm => {
          if(!confirm) return
          remove('investment', investment._id).then( _ => {
            let copy = this.state.investments.slice()
            let index = copy.findIndex( e => e._id === investment._id )
            copy.splice(index, 1)
            this.setState({
              showConfirm: false,
              investments: copy
            })
          } )
        }
      })
    }

    componentDidMount() {
      list('investment', {}, {sort:'name', populate:{path: 'investor property'}}, 'investor sharesNumber amount property createdAt')
        .then( investments => this.setState({investments}) )
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

        <Swal
          title="Eliminar inversión"
          text={ `¿Está seguro que desea eliminar la inversión?` }
          confirmButtonText="Sí, eliminar"
          confirmButtonColor="#f44336"
          cancelButtonText="Cancelar"
          type="error"
          isOpen={ this.state.showConfirm || false }
          callback={ this.state.callback || null } />

        <Filterbar nameFilter='Búsqueda de Inversores'  onFilterChange={ this.filter } >
        </Filterbar>

        <div className="panel panel-body">
          { this.state.investments.length > 0 && <div className="panel panel-success panel-bordered" style={stylep}>
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

            </table>
          </div> }
          { this.state.investments.length === 0 &&
            <h3>No hay inversiones. <Link to="/investments/new">Crear nueva.</Link></h3> }
        </div>

      </div>
    )
  }
}

export default investors;
