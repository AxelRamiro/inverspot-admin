import React, { Component } from 'react'

class Adminresult extends Component {
  render() {
    return (
      <div>
        <li className="media">
          <div className="media-left">
          </div>
          <div className="media-body">
            <h6 className="media-heading"><a href="#">{this.props.name}</a></h6>
              <ul className="list-inline list-inline-separate text-muted">
                <li><span className="label bg-danger"> Administrador</span></li>
                <li>Miembro desde: 14 marzo 2016</li>
              </ul>
              <p><i className="icon-mail5"></i> contact@hotmail.com <br/>
              <i className="icon-phone2"></i> (770)-734-35</p>
          </div>
          <div className="media-right media-top">
            <ul className="icons-list text-nowrap">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                  <i className="icon-menu9"></i>
                </a>

                <ul className="dropdown-menu dropdown-menu-right">
                  <li><a href="#"><i className="icon-cog pull-left"></i> Editar Perfil</a></li>
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

export default Adminresult;