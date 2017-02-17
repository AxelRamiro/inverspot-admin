import React, { Component } from 'react'

class InvestmentNew extends Component {
  render() {
    return (
      <div className="content">

        <div className="row">
          <div className="col-lg-12">
            <div className="tabbable">
              <div className="tab-content">
                <div className="tab-pane fade in active" id="settings">

                  <div className="panel panel-flat">
                    <div className="panel-heading">
                      <h6 className="panel-title">Información de Inversión</h6>
                    </div>

                    <div className="panel-body">
                      <form action="#">
                      
                        <div className="form-group">
                          <div className="row">
                            <div className="col-md-6">
                              <label>Nombre de Usuario: <span className="text-danger">*</span></label><br/>
                              <select className="selectpicker" data-show-subtext="true" data-live-search="true"  required="required">
                                <option data-subtext="Rep California">Tom Foolery</option>
                                <option data-subtext="Sen California">Bill Gordon</option>
                                <option data-subtext="Sen Massacusetts">Elizabeth Warren</option>
                                <option data-subtext="Rep Alabama">Mario Flores</option>
                                <option data-subtext="Rep Alaska">Don Young</option>
                                <option data-subtext="Rep California" disabled="disabled">Marvin Martinez</option>
                              </select>
                            </div>
                            <div className="col-md-6">
                              <label>Nombre de Propiedad: <span className="text-danger">*</span></label><br/>
                              <select className="selectpicker" data-show-subtext="true" data-live-search="true"  required="required">
                                <option data-subtext="Rep California">Tom Foolery</option>
                                <option data-subtext="Sen California">Bill Gordon</option>
                                <option data-subtext="Sen Massacusetts">Elizabeth Warren</option>
                                <option data-subtext="Rep Alabama">Mario Flores</option>
                                <option data-subtext="Rep Alaska">Don Young</option>
                                <option data-subtext="Rep California" disabled="disabled">Marvin Martinez</option>
                              </select>
                            </div>
                          </div>
                        </div>
                                            
                        <div className="form-group">
                          <div className="row">
                            <div className="col-md-6">
                              <label>Número de Acciones Adquiridas: <span className="text-danger">*</span></label>
                              <input type="text" name="digits" className="form-control" required="required" placeholder=""/>
                            </div>
                          </div>
                        </div>
                                              
                        <div className="text-right">
                          <button type="submit" className="btn btn-primary">Crear Inversión <i className="icon-arrow-right14 position-right"></i></button>
                        </div>
                      </form>
                    </div>
                  </div>
             
                </div>
              </div>
            </div>
          </div>
          
        </div>

      </div>

    )
  }
}

export default InvestmentNew;
