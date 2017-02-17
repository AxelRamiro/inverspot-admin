import React, {Component} from 'react'

class NewUserForm extends Component{
	render() {
		return(
    
      <div className="tab-pane fade in active" id="user">

        <div className="panel panel-flat">
          <div className="panel-heading">
            <h6 className="panel-title">Información de Perfil</h6>
          </div>

          <div className="panel-body">
            <form action="#">

              <div className="form-group">
                <div className="row">
                  <div className="col-md-12">
                    <label>Nombre Completo</label>
                    <input type="text" className="form-control" required="required"/>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <label>Correo electrónico (obligatorio) </label>
                    <input type="email"  className="form-control" required="required"/>
                  </div>
                  <div className="col-md-6">
                    <label>Estado</label>
                    <select className="select" required="required">
                      <option value="na" selected="">Elige</option>
                      <option value="Agu">Aguascalientes</option>
                      <option value="Bc">Baja California</option>
                      <option value="Bcs">Baja California Sur</option>
                      <option value="Cam">Campeche</option>
                      <option value="Chis">Chiapas</option>
                      <option value="Chi">Chihuahua</option>
                      <option value="Cdm">Ciudad de México</option>
                      <option value="Coa">Coahuila</option>
                      <option value="Col">Colima</option>
                      <option value="Dur">Durango</option>
                      <option value="Edm">Estado de México</option>
                      <option value="Gua">Guanajuato</option>
                      <option value="Gue">Guerrero</option>
                      <option value="Hid">Hidalgo</option>
                      <option value="Jal">Jalisco</option>
                      <option value="Mic">Michoacán</option>
                      <option value="Mor">Morelos</option>
                      <option value="Nay">Nayarit</option>
                      <option value="Nle">Nuevo León</option>
                      <option value="Oax">Oaxaca</option>
                      <option value="Pue">Puebla</option>
                      <option value="Qro">Querétaro</option>
                      <option value="Qur">Quintana Roo</option>
                      <option value="Snl">San Luis Potosí</option>
                      <option value="Sin">Sinaloa</option>
                      <option value="Son">Sonora</option>
                      <option value="Tab">Tabasco</option>
                      <option value="Tam">Tamaulipas</option>
                      <option value="Tla">Tlaxcala</option>
                      <option value="Ver">Veracruz</option>
                      <option value="Yuc">Yucatán</option>
                      <option value="Zac">Zacatecas</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <label>Teléfono #</label>
                    <input type="text" className="form-control" required="required"/>
                    <span className="help-block">999-999-99-99</span>
                  </div>
                  <div className="col-md-6">
                      <label>Estatus</label>
                      <select name="select" className="form-control" required="required">
                          <option value="">Elige</option>
                          <option value="active">Activo</option>
                          <option value="inactive">Inactivo</option>
                      </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <label>Contraseña</label>
                    <input type="password" placeholder="" className="form-control" required="required"/>
                  </div>

                  <div className="col-md-6">
                    <label>Repetir Contraseña</label>
                    <input type="password" placeholder="" className="form-control" required="required"/>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <button type="submit" className="btn btn-primary">Crear Usuario <i className="icon-arrow-right14 position-right"></i></button>
              </div>
            </form>
          </div>
        </div>
      </div>

		)
	}
} 

export default NewUserForm;