import React, { Component } from 'react'

class Filterbar extends Component {

  constructor(props) {
    super(props)
    this.onFilterChange = this.onFilterChange.bind(this)
    this.state = {
      filterText: '',
      filterTag: ''
    }
  }

  // componentDidUpdate() {
  //
  // }

  onFilterChange(e) {
    e.preventDefault()
    let name = e.target.name
    let newState = Object.assign( this.state )
    newState[name] = e.target.value
    this.setState(newState, () => {
      this.props.onFilterChange && this.props.onFilterChange(this.state)
    })
  }

  render() {
    return (
      <div className="panel panel-flat">
        <div className="panel-heading">
          <h5 className="panel-title">
            { this.props.nameFilter }
          </h5>
          <div className="heading-elements">
            <ul className="icons-list">
              <li><a data-action="collapse"></a></li>
              <li><a data-action="close"></a></li>
            </ul>
          </div>
        </div>

        <div className="panel-body">
          <form action="#" className="main-search">
            <div className="input-group content-group">
              <div className="has-feedback has-feedback-left">
                <input type="text" name="filterText" value={ this.state.filterText }
                  onChange={ this.onFilterChange } className="form-control input-xlg"/>
                <div className="form-control-feedback">
                  <i className="icon-search4 text-muted text-size-base"></i>
                </div>
              </div>

              {/* <div className="input-group-btn">
                <button type="submit" className="btn btn-primary btn-xlg">Buscar</button>
              </div> */}
            </div>

            <div className="row search-option-buttons">
              {this.props.children}
            </div>

            { this.props.filters &&
              <label htmlFor="filter"> FILTRAR:
                <select id="filter" name="filterTag" value={ this.state.filterTag }
                onChange={ this.onFilterChange }>
                  <option value="">Ninguno</option>
                  { this.props.filters.map( e => <option key={ e.value } value={ e.value }>{ e.name }</option>) }
                </select>
              </label> }

          </form>
        </div>
      </div>
    )
  }
}

export default Filterbar;
