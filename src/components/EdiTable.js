import React, {Component} from 'react'

function EdiCell({value, onChange, coords, controlId}) {
  return (
    <td><input
      value={ value }
      onChange={ e => {
        e.preventDefault()
        onChange( controlId, coords, e.target.value )
      } }
      style={{border: 0, width: '100%'}} />
    </td>
  )
}

function EdiRow({data, x, onChange, onDelete, controlId}) {
  let cols = data.map( (d, i) => <EdiCell controlId={controlId} key={`${x}-${i}`} value={d} onChange={ onChange } coords={ [ x, i ] } /> )
  return (
    <tr>
      { cols }
      <td style={{maxWidth: "40px", padding: 0, textAlign: 'center'}}>
        <button tabIndex="-1"
          className="btn btn-danger"
          type="button"
          onClick={() => onDelete(controlId, x) }>X</button>
      </td>
    </tr>
  )
}

export default class EdiTable extends Component {

  constructor(props) {
    super(props)
    this._addRow = this._addRow.bind(this)
    this._addColumn = this._addColumn.bind(this)
    this._deleteTable = this._deleteTable.bind(this)
  }

  _addRow(e) {
    e.preventDefault()
    this.props.onAddRow(this.props.controlId)
  }

  _addColumn(e) {
    e.preventDefault()
    this.props.onAddColumn(this.props.controlId)
  }

  _deleteTable(e) {
    e.preventDefault()
    this.props.onDeleteTable(this.props.controlId)
  }

  render() {
    let rows = this.props.rows.map( (r, i) => <EdiRow controlId={this.props.controlId} onDelete={this.props.onDeleteRow} onChange={this.props.onChange} key={ `R${i}` } x={i} data={r} />)
    let deletes = undefined
    if (this.props.rows.length > 0) {
      deletes = this.props.rows[0].map( (c, i) => <th style={{padding: 0}} key={`D${i}`}><button className="btn btn-danger" onClick={(e) => {
        e.preventDefault()
        this.props.onDeleteColumn(this.props.controlId, i)
      }}>X</button></th> )
    }

    return (
      <fieldset className="content-group">
        <legend className="text-bold">{this.props.title}</legend>
        <div style={{marginBottom: '20px'}}>
          <button className="btn btn-success" style={{marginRight: '10px'}} onClick={this._addRow}>AñadirFila</button>
          <button className="btn btn-success" style={{marginRight: '10px'}} onClick={this._addColumn}>Añadir Columna</button>
          <button className="btn btn-danger" onClick={this._deleteTable}>Eliminar Tabla</button>
        </div>
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
