import React, { Component } from 'react'
import { Link } from 'react-router'


class Login extends Component {
  render() {
    return (
      <div className="login-container login-cover">
        <div className="page-container">
          <div className="page-content">
            <div className="content-wrapper">
              <div className="content pb-20">

                <form action="index.html" className="form-validate">
                  <div className="panel panel-body login-form">
                    <div className="text-center">
                      <div className="icon-object border-slate-300 text-slate-300">
                        <i className="icon-reading"></i>
                      </div>
                      <h5 className="content-group">Ingresa a tu cuenta
                        <small className="display-block">Tus datos</small>
                      </h5>
                    </div>

                    <div className="form-group has-feedback has-feedback-left">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Correo electrónico"
                        name="email"
                        required="required"/>
                      <div className="form-control-feedback">
                        <i className="icon-user text-muted"></i>
                      </div>
                    </div>

                    <div className="form-group has-feedback has-feedback-left">
                      <input type="text" className="form-control" placeholder="Contraseña" name="password" required="required"/>
                      <div className="form-control-feedback">
                        <i className="icon-lock2 text-muted"></i>
                      </div>
                    </div>

                    <div className="form-group login-options">
                      <div className="row">
                        <div className="col-sm-6 col-sm-push-6 text-right">
                          <a href="login_recuperar_pass.html">Olvide mi contraseña</a>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <Link to="/properties">
                        <button type="submit" className="btn bg-blue btn-block">Ingresar
                          <i className="icon-arrow-right14 position-right"></i>
                        </button>
                      </Link>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
