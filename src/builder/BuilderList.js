import React, { Component } from 'react'
import Filterbar from '../components/Filterbar'
//import Filterdate from '../components/Filterdate'
import { Link } from 'react-router'
import Builder from './Builder'
import { list } from '../Services/builder'

function BuilderList(props) {

  let filtered = props.builders.filter(builder => {
    return !(builder.name.toLowerCase().indexOf(props.filterText.toLowerCase()) === -1 )
  })

  return (
    <ul className="media-list search-results-list content-group">
      {filtered.map(builder => (<Builder key={builder._id} builder={builder} onRemove={ props.onRemoveItem } />) )}
    </ul>
  )

}

class Builders extends Component {

  constructor(props) {
    super(props)
    this.filter = this.filter.bind(this)
    this.onRemoveItem = this.onRemoveItem.bind(this)
    this.state = {
      builders: [],
      filterText: '',
      filterTag:''
    }
  }

  onRemoveItem( builder ) {
    let copy = this.state.builders.slice()
    let index = copy.findIndex( e => e._id === builder._id )
    copy.splice(index, 1)
    this.setState({
      builders: copy
    })
  }

  componentDidMount() {
    list({ },{sort:'name'}, 'name yearsWork completedWorks website')
    .then( builders => this.setState({builders, filtered: builders}) )
    .catch( e => alert(e) )
  }

  filter(filters) {
    this.setState(filters)
  }

  render() {
    return (
      <div className="content">
        <Filterbar nameFilter='Búsqueda de Desarrolladores'  onFilterChange={ this.filter }>
        </Filterbar>

        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-body">
              <BuilderList
                builders={ this.state.builders }
                filterText={ this.state.filterText }
                filterTag={ this.state.filterTag }
                onRemoveItem={ this.onRemoveItem } />
                { this.state.builders.length === 0 &&
                  <h3>No hay desarrolladores. <Link to="/builders/new">Añadir nuevo.</Link></h3> }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Builders;
