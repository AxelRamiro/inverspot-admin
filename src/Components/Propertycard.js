import React, { Component } from 'react'

class Propertycard extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="thumbnail">
          <div className="panel-heading">
            <h6 className="panel-title">
            { this.props.name || 'default' }
            <div className="media-annotation mt-5">Departamentos</div>
            <a className="heading-elements-toggle"><i className="icon-more"></i></a></h6>
            <div className="heading-elements">
                <ul className="heading-text list-inline pull-right">
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle text-default" data-toggle="dropdown" aria-expanded="false"><i className="icon-cog5"></i><span className="caret"></span></a>
                        <ul className="dropdown-menu dropdown-menu-right">
                            <li><a href="#">Ver Desarrollador</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
          </div>
          <div className="thumb">
            <img src="assets/images/placeholder.jpg" alt=""/>
            <div className="caption-overflow">
              <span>
                <a href="editar_propiedad.html" className="btn btn-info btn-sm">Editar</a>
                <a href="#" className="btn btn-info btn-sm">Remove</a>
              </span>
            </div>
          </div>
                          <div className="caption">
            <div className="media-annotation mt-5">Fecha de alta: 14 marzo 2017</div>
            <p>Costo Total​: $ 3,000,000</p>
            <div className="media-annotation mt-5"><i className="icon-pin-alt position-left"></i> Phuket, Thailand</div>
          </div>

          <div className="panel-footer"><a className="heading-elements-toggle"><i className="icon-more"></i></a>
            <div className="heading-elements">
              <ul className="list-inline list-inline-condensed heading-text">
                <li><span className="position-left">Acciones:</span></li>
                <li><span className="label bg-success-400 position-left">15</span></li>
                <li><span className="label bg-danger-400 position-left">30</span></li>
              </ul>
              <div className="pull-right">
                <button type="button" className="btn bg-indigo-400 btn-xs heading-btn">Ver Ficha</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Propertycard;