import React, { Component } from 'react'
import Filterbar from '../components/Filterbar'
import Swal from 'react-swal'
import Investment from './Investment'
import { list, remove } from '../Services/crud'
import { Link } from 'react-router'
import currency from '../Services/currency'
import moment from 'moment'

function InvestmentList(props) {

    let filtered = props.investments.filter(investment => {
      const filter = props.filterText
      let name = investment.investor ? investment.investor.name : ''
      let title = investment.property ? investment.property.title : ''
      let matchName = name.toLowerCase().indexOf(filter.toLowerCase()) > -1
      let matchTitle = title.toLowerCase().indexOf(filter.toLowerCase()) > -1
      return matchName || matchTitle
    })

    // console.log(filtered);
    if(filtered.length === 0) return null;
    let csvHeader = [['Usuario', 'Inmueble', 'Acciones', 'Monto', 'Fecha']]
    let csvRows = filtered.map((inv) => {
      return `${inv.investor.name},${inv.property.title},${inv.sharesNumber},"${currency(inv.amount)}",${moment(inv.createdAt).format('DD/MM/YYYY')}`
    })
    const csvString = csvHeader.concat(csvRows).join(String.fromCharCode(13))
    let csvFile = encodeURIComponent(csvString)

    return (
      <div className="panel panel-body">
        <div className="panel panel-success panel-bordered" style={{marginBottom: '-10px'}}>
          <div className="panel-heading" style={{padding: '5px 0'}}>
            <h5 className="panel-title"> Inversores</h5>
            <div className="heading-elements">
              <ul className="icons-list">
                <li><a href={'data:attachment/csv;charset=utf-8,' + csvFile } target="_blank" download="export.csv">EXPORTAR CSV</a></li>
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
              {filtered.map(investment => (<Investment key={investment._id} investment={investment} onRemove={ props.onRemoveItem } />) )}
            </tbody>

          </table>
        </div>
      </div>
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

        <InvestmentList investments={ this.state.investments } onRemoveItem={ this.onRemoveItem }
          filterText={ this.state.filterText } filterTag={ this.state.filterTag } />

        { this.state.investments.length === 0 &&
          <h3>No hay inversiones. <Link to="/investments/new">Crear nueva.</Link></h3> }

      </div>
    )
  }
}

export default investors;
