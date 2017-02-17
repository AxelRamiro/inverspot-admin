import React, { Component } from 'react'

class BuilderNew extends Component {
  render() {
    return (
      <div className="content">

        <div className="panel panel-flat">
          <div className="panel-heading">
            <h5 className="panel-title">Información de Desarrollador</h5>
          </div>

          <div className="panel-body">
            <form action="#">
              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <label>Nombre</label>
                    <input type="text" className="form-control" required="required" />
                  </div>
                  <div className="col-md-6">
                    <label>Años Operando</label>
                    <input type="text" name="digits" className="form-control" required="required" placeholder="ejemplo: 4" />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <label>Obras Concluidas</label>
                    <input type="text" name="digits" className="form-control" required="required" placeholder="ejemplo: 4" />
                  </div>
                  
                  <div className="col-md-6">
                    <label>Sitio Web</label>
                    <input type="text" className="form-control" required="required"/>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <button type="submit" className="btn btn-primary">Crear Desarrollador <i className="icon-arrow-right14 position-right"></i></button>
              </div>
            </form>
          </div>
        </div>
      </div>

    )
  }
}

export default BuilderNew;
