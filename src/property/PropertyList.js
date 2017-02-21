import React, { Component } from 'react'
import Filterbar from '../components/Filterbar'
import Property from './Property'
import { list } from '../Services/property'

function PropertyList(props) {
  let filtered = props.properties.filter(property => {
    console.log(property.title);
    return !(property.title.toLowerCase().indexOf(props.filterText.toLowerCase()) === -1 || (props.filterTag && props.filterTag !== property.status))
  })
  return (
    <div className="row">
      { filtered.map(e => <Property onRemove={ props.onRemoveItem } key={e._id} property={e} /> ) }
    </div>
  )
}

class Properties extends Component {

  constructor(props) {
    super(props)
    this.onRemoveItem = this.onRemoveItem.bind(this)
    this.filter = this.filter.bind(this)
    this.state = {
      properties: [],
      filterText: '',
      filterTag:''
    }
  }

  componentDidMount() {
    list({},{},'')
      .then( properties => this.setState({ properties }) )
  }

  onRemoveItem( property ) {
    let copy = this.state.properties.slice()
    let index = copy.findIndex( e => e._id === property._id )
    copy.splice(index, 1)
    this.setState({
      properties: copy
    })
  }

  filter(filters) {
    this.setState(filters)
  }

  render() {
    let filters = [
      {
        name: 'Disponible',
        value: 'available'
      },
      {
        name: 'Fondeada',
        value: 'fund'
      },
    ]
    return (
      <div className="content">
        <Filterbar nameFilter='Búsqueda de Propiedades' onFilterChange={ this.filter } filters={ filters } />
        <PropertyList properties={ this.state.properties } onRemoveItem={ this.onRemoveItem }
          filterText={ this.state.filterText } filterTag={ this.state.filterTag } />
      </div>
    )
  }
}

export default Properties;
