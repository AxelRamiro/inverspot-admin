import React, { Component } from 'react'

class Resultuser extends Component {
  render() {
    return (
      <div>
        <li className="media">
          <div className="media-body">
            <h6 className="media-heading"><a href="#">{this.props.name}</a></h6>
              <ul className="list-inline list-inline-separate text-muted">
                <li><span className="label bg-info">Usuario</span><span className="label bg-success">Activo</span></li>
                <li>Miembro desde: 14 marzo 2016</li>
                <li><i className="icon-pin position-left"></i>Hidalgo</li>
                <li><i className="icon-paper position-left"></i>Medio: Facebook</li>
                <li><i className="icon-paper position-left"></i>Asesor: <a href="#">Juan Ortega Garcia</a></li>
              </ul>
              <p><i className="icon-mail5"></i> contact@hotmail.com <br/>
              <i className="icon-phone2"></i> (770)-734-35</p>            
          </div>
          <div className="media-right media-top">
            <ul className="icons-list text-nowrap">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="icon-menu9"></i></a>

                <ul className="dropdown-menu dropdown-menu-right">
                  <li><a href="editar_usuario.html"><i className="icon-profile pull-left"></i> Editar Perfil</a></li>
                  <li className="divider"></li>
                  <li><a href="#"><i className="icon-cross2 text-danger" id="sweet_combine"></i> Eliminar</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </li>    
        <hr/>     
      </div>                
    )
  }
}

export default Resultuser;