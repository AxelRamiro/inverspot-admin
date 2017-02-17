import React, { Component } from 'react'

class NewProperty extends Component {
  render() {
    return (
      <div className="content">

        <div className="panel panel-flat">
          <div className="panel-heading">
            <h5 className="panel-title">Información de Propiedad</h5>
          </div>

          <div className="panel-body">
            <form className="form-horizontal form-validate-jquery" action="#">
              <fieldset className="content-group">

                <legend className="text-bold">Información Básica</legend>
                <div className="form-group">
                  <label className="control-label col-lg-3">Título <span className="text-danger">*</span></label>
                  <div className="col-lg-9">
                    <input type="text" name="basic" className="form-control" required="required" placeholder=""/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-lg-3">Descripción del Proyecto <span className="text-danger">*</span></label>
                  <div className="col-lg-9">
                    <textarea rows="5" cols="5" name="textarea" className="form-control" required="required" placeholder="" aria-required="true"></textarea>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-lg-3">Imagen Principal del Proyecto <span className="text-danger">*</span></label>
                  <div className="col-lg-9">
                    <input type="file" name="styled_file" className="file-styled"  multiple="multiple" required="required"/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-lg-3">Calle <span className="text-danger">*</span></label>
                  <div className="col-lg-9">
                    <input type="text" name="basic" className="form-control" required="required" placeholder=""/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-lg-3">Número <span className="text-danger">*</span></label>
                  <div className="col-lg-9">
                    <input type="text" name="basic" className="form-control" required="required" placeholder=""/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-lg-3">Colonia <span className="text-danger">*</span></label>
                  <div className="col-lg-9">
                    <input type="text" name="basic" className="form-control" required="required" placeholder=""/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-lg-3">Ciudad <span className="text-danger">*</span></label>
                  <div className="col-lg-9">
                    <input type="text" name="basic" className="form-control" required="required" placeholder=""/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-lg-3">Código Postal <span className="text-danger">*</span></label>
                  <div className="col-lg-9">
                    <input type="text" name="basic" className="form-control" required="required" placeholder=""/>
                  </div>
                </div>
                <div className="form-group has-feedback">
                  <label className="control-label col-lg-3">Coordenadas en el Mapa <span className="text-danger">*</span></label>
                  <div className="col-lg-9">
                    <input type="text" name="with_icon" className="form-control" required="required" placeholder="ejemplo: 19.4236788,-99.1741247"/>
                    <div className="form-control-feedback">
                      <i className="icon-pin"></i>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-lg-3">Elegir el Desarrollador <span className="text-danger">*</span></label>
                  <div className="col-lg-9">
                    <select className="selectpicker" data-show-subtext="true" data-live-search="true" required="required">
                      <option data-subtext="Rep California">Tom Foolery</option>
                      <option data-subtext="Sen California">Bill Gordon</option>
                      <option data-subtext="Sen Massacusetts">Elizabeth Warren</option>
                      <option data-subtext="Rep Alabama">Mario Flores</option>
                      <option data-subtext="Rep Alaska">Don Young</option>
                      <option data-subtext="Rep California" disabled="disabled">Marvin Martinez</option>
                     </select>
                  </div>
                </div>


                <legend className="text-bold">Información Fichas Técnicas</legend>

                <div className="form-group">
                  <label className="control-label col-lg-3">Monto a Invertir <span className="text-danger">*</span></label>
                  <div className="col-lg-9">
                    <input type="text" name="digits" className="form-control" required="required" placeholder=""/>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-lg-3">Plazo Estimado <span className="text-danger">*</span></label>
                  <div className="col-lg-9">
                    <div className="input-group">
                      <div className="input-group-addon">Meses</div>
                      <input type="text" name="digits" className="form-control" required="required" placeholder="" aria-required="true"/>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-lg-3">Total de Participaciones <span className="text-danger">*</span></label>
                  <div className="col-lg-9">
                    <input type="text" name="digits" className="form-control" required="required" placeholder=""/>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-lg-3">Participaciones Vendidas <span className="text-danger">*</span></label>
                  <div className="col-lg-9">
                    <input type="text" name="digits" className="form-control" required="required" placeholder="0"/>
                  </div>
                </div>


                <legend className="text-bold">Estudio de Mercado</legend>
                <div className="form-group">
                  <label className="control-label col-lg-3">Costo Total <span className="text-danger">*</span></label>
                  <div className="col-lg-9">
                    <input type="text" name="digits" className="form-control" required="required" placeholder=""/>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-lg-3">Precio Estimado de Venta <span className="text-danger">*</span></label>
                  <div className="col-lg-9">
                    <input type="text" name="digits" className="form-control" required="required" placeholder=""/>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-lg-3">Comisión por Venta <span className="text-danger">*</span></label>
                  <div className="col-lg-9">
                    <div className="input-group">
                      <input type="text" name="touchspin" required="required" className="touchspin-postfix" placeholder="Not valid if empty"/>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-lg-3">Utilidad <span className="text-danger">*</span></label>
                  <div className="col-lg-9">
                    <div className="input-group">
                      <input type="text" name="touchspin" required="required" className="touchspin-postfix" placeholder="Not valid if empty"/>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-lg-3">Tiempo Estimado <span className="text-danger">*</span></label>
                  <div className="col-lg-9">
                    <div className="input-group">
                      <div className="input-group-addon">Meses</div>
                      <input type="text" name="digits" className="form-control" required="required" placeholder="" aria-required="true"/>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-lg-3">Rendimiento en Tiempo Estimado <span className="text-danger">*</span></label>
                  <div className="col-lg-9">
                    <div className="input-group">
                      <input type="text" name="touchspin" required="required" className="touchspin-postfix" placeholder="Not valid if empty"/>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-lg-3">Rendimiento Anualizado <span className="text-danger">*</span></label>
                  <div className="col-lg-9">
                    <div className="input-group">
                      <input type="text" name="touchspin" required="required" className="touchspin-postfix" placeholder="Not valid if empty"/>
                    </div>
                  </div>
                </div>

                <legend className="text-bold">Datos Fijos</legend>
                <div className="form-group">
                  <label className="control-label col-lg-3">Objetivo de Captación <span className="text-danger">*</span></label>
                  <div className="col-lg-9">
                    <input type="text" name="digits" className="form-control" required="required" placeholder=""/>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-lg-3">Rendimiento Anual Estimado <span className="text-danger">*</span></label>
                  <div className="col-lg-9">
                    <div className="input-group">
                      <input type="text" name="touchspin" required="required" className="touchspin-postfix" placeholder="Not valid if empty"/>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label col-lg-3">Utilidad Esperada <span className="text-danger">*</span></label>
                  <div className="col-lg-9">
                    <div className="input-group">
                      <input type="text" name="touchspin" required="required" className="touchspin-postfix" placeholder="Not valid if empty"/>
                    </div>
                  </div>
                </div>


                <legend className="text-bold">Corrida Financiera</legend>
                <div className="form-group">
                  <div className="col-lg-12">
                    <table id="table1" className="table table-bordered">
                      <tbody>
                        <tr>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>


                <legend className="text-bold">Datos Complementarios</legend>
                <div className="form-group">
                  <div className="col-lg-12">
                    <table id="table2" className="table table-bordered">
                      <tbody>
                        <tr>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>


              </fieldset>

              <div className="text-right">
                <button type="reset" className="btn btn-default" id="reset">Limpiar <i className="icon-reload-alt position-right"></i></button>
                <button type="submit" className="btn btn-primary">Crear Propiedad <i className="icon-arrow-right14 position-right"></i></button>
              </div>
            </form>
          </div>
        </div>

      </div>
    )
  }
}

export default NewProperty;
