import React from 'react'

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

export default function EdiTable(props) {

  let rows = props.rows.map( (r, i) => <EdiRow onDelete={props.onDeleteRow} onChange={props.onChange} key={ `R${i}` } x={i} data={r} />)
  let deletes = undefined
  if (props.rows.length > 0) {
    deletes = props.rows[0].map( (c, i) => <th style={{padding: 0}} key={`D${i}`}><button className="btn btn-danger" onClick={(e) => {
      e.preventDefault()
      props.onDeleteColumn(i)
    }}>X</button></th> )
  }

  return (
    <fieldset className="content-group">
      <legend className="text-bold">{props.title}</legend>
      <button className="btn btn-success" onClick={props.onAddRow}>AñadirFila</button>
      <button className="btn btn-success" onClick={props.onAddColumn}>Añadir Columna</button>
      <button className="btn btn-danger" onClick={props.onDeleteTable}>Eliminar Tabla</button>
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
