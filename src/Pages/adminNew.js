import React, { Component } from 'react'
import Layout from '../Pages/Layout'
import Headernav from '../Components/Headernav'

class adminNew extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Headernav headerNav={'Agregar Nuevo Administrador'} />
            <div className="content">

              <div className="row">
                <div className="col-lg-12">
                  <div className="tabbable">
                    <div className="tab-content">
                      <div className="tab-pane fade in active" id="settings">

                        <div className="panel panel-flat">
                          <div className="panel-heading">
                            <h6 className="panel-title">Información de Perfil</h6>
                          </div>

                          <div className="panel-body">
                            <form action="#">
                              <div className="form-group">
                                <div className="row">
                                  <div className="col-md-6">
                                    <label>Nombre Completo <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" required="required"/>
                                  </div>
                                  <div className="col-md-6">
                                     <label className="control-label col-lg-3">Tipo de Usuario <span className="text-danger">*</span></label>
                                      <select name="default_select" className="form-control" required="required">
                                          <option value="">Elige</option> 
                                          <option value="admin">Administrador</option>
                                          <option value="asesor">Asesor</option>
                                      </select>
                                  </div>
                                </div>
                              </div>
                                                    
                              <div className="form-group">
                                <div className="row">
                                  <div className="col-md-6">
                                    <label>Correo electrónico <span className="text-danger">*</span></label>
                                    <input type="email" name="email" className="form-control" id="email" required="required"  aria-required="true"/>
                                  </div>
                                              <div className="col-md-6">
                                    <label>Teléfono #  <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" required="required"/>
                                    <span className="help-block">999-999-99-99</span>
                                              </div>
                                </div>
                              </div>

                              <div className="form-group">
                                <div className="row">
                                  <div className="col-md-6">
                                    <label>Contraseña  <span className="text-danger">*</span></label>
                                    <input type="password" placeholder="" className="form-control" required="required"/>
                                  </div>

                                  <div className="col-md-6">
                                    <label>Repetir Contraseña  <span className="text-danger">*</span></label>
                                    <input type="password" placeholder="" className="form-control" required="required"/>
                                  </div>
                                </div>
                              </div>
                                                    
                              <div className="text-right">
                                <button type="submit" className="btn btn-primary">Crear Administrador <i className="icon-arrow-right14 position-right"></i></button>
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
        </Layout>
      </div>
    )
  }
}

export default adminNew;
