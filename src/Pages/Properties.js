import React, { Component } from 'react'
import Filterbar from '../Components/Filterbar'
import Propertycard from '../Components/Propertycard'
import { list } from '../Services/property'

class Properties extends Component {

  constructor(props) {
    super(props)
    this.onRemoveItem = this.onRemoveItem.bind(this)
    this.state = {
      properties: []
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

  render() {
    let filters = [
      {
        name: 'Disponible',
        value: 'no'
      },
      {
        name: 'Fondeada',
        value: 'funded'
      },
    ]
    return (
      <div className="content">
        <Filterbar nameFilter='Busqueda de Propiedades' filters={ filters } />
        <div className="row">
        { this.state.properties.map(( e, i ) => <Propertycard onRemove={ this.onRemoveItem } key={e._id} property={e} /> ) }
        </div>
      </div>
    )
  }
}

export default Properties;
