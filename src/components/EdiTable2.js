import React, {Component} from 'react'

function EdiCell(props) {
  return (
    <td><input
      value={ props.value }
      onChange={ e => {
        e.preventDefault()
        props.onChange( props.coords, e.target.value )
      } }
      style={{border: 0, width: '100%'}} />
    </td>
  )
}

function EdiRow(props) {
  let cols = props.data.map( (d, i) => <EdiCell key={`${props.x}-${i}`} value={d} onChange={ props.onChange } coords={ [ props.x, i ] } /> )
  return (
    <tr>
      { cols }
      <td style={{maxWidth: "40px", padding: 0, textAlign: 'center'}}>
        <button tabIndex="-1"
          className="btn btn-danger"
          type="button"
          onClick={() => props.onDelete(props.x) }>X</button>
      </td>
    </tr>
  )
}

export default class EdiTable extends Component {

  constructor(props) {
    super(props)
    this._onDataChange = this._onDataChange.bind(this)
    this._onAddRow = this._onAddRow.bind(this)
    this._onAddColumn = this._onAddColumn.bind(this)
    this._onDeleteRow = this._onDeleteRow.bind(this)
    this._onDeleteColumn = this._onDeleteColumn.bind(this)
    this._onDeleteTable = this._onDeleteTable.bind(this)
    console.log(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const data = this.props.data
    data && this.setState({data})
  }

  _onDataChange( coords, value ) {
    let copy = this.state.data.slice()
    copy[coords[0]][coords[1]] = value
    this.props.onDataChange(this.props.controlId, copy)
    this.setState({data: copy})
  }

  _onAddRow(e) {
    e.preventDefault()
    let copy = this.state.data.slice()
    let base = copy.length > 0 ? copy[0].map(a => "") : [""]
    copy.push(base)
    this.props.onDataChange(this.props.controlId, copy)
    this.setState({data: copy})
  }

  _onAddColumn(e) {
    e.preventDefault()
    let copy = this.state.data.slice()
    // let newTable = [""]
    if(copy.length > 0) {
      copy.forEach(r => r.push(""))
    }
    else {
      copy.push([""])
    }
    this.props.onDataChange(this.props.controlId, copy)
    this.setState({data: copy})
  }

  _onDeleteRow(index) {
    let copy = this.state.data.slice()
    copy.splice(index, 1)
    this.props.onDataChange(this.props.controlId, copy)
    this.setState({data: copy})
  }

  _onDeleteColumn(index) {
    let copy = this.state.data.slice()
    let table = copy.map( r => {
      r.splice(index, 1)
      return r
    } )
    let filtered = table.filter( c => c.length > 0 )
    this.props.onDataChange(this.props.controlId, filtered)
    this.setState({data: filtered})
  }

  _onDeleteTable(e) {
    e.preventDefault()
    this.props.onDataChange(this.props.controlId, [])
    this.setState({data: []})
  }

  render() {
    let data = this.state.data
    let rows = data.map( (r, i) => <EdiRow onDelete={this._onDeleteRow} onChange={this._onDataChange} key={ `R${i}` } x={i} data={r} />)
    let deletes = undefined
    if (data.length > 0) {
      deletes = data[0].map( (c, i) => <th style={{padding: 0}} key={`D${i}`}><button className="btn btn-danger" onClick={(e) => {
        e.preventDefault()
        this._onDeleteColumn(i)
      }}>X</button></th> )
    }

    return (
      <fieldset className="content-group">
        <legend className="text-bold">{this.props.title}</legend>
        <button className="btn btn-success" onClick={this._onAddRow}>AñadirFila</button>
        <button className="btn btn-success" onClick={this._onAddColumn}>Añadir Columna</button>
        <button className="btn btn-danger" onClick={this._onDeleteTable}>Eliminar Tabla</button>
        <table className="table table-bordered" style={{ overflowX:'auto' }} >
          { deletes && (<thead>
            <tr>
              {deletes}
            </tr>
          </thead>) }
          <tbody>
            {rows}
          </tbody>
        </table>
      </fieldset>
    )
  }

}
