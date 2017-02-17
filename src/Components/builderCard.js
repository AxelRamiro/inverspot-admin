import React, { Component } from 'react'

class Rows extends Component {
  render() {
    return (
      <tr>
        <td>Departamento Col. Doctores</td>
        <td><span className="label label-success">Disponible</span></td>
      </tr>
    )
  }
}

class builderCard extends Component {
  render() {
    return (
      <div>
        <li className="media">
          <div className="media-body">
            <h5 className="media-heading"><a href="#">{this.props.name}</a></h5>
              <ul className="list-inline list-inline-separate text-muted">
                <li><span className="label bg-violet"> Desarrollador</span></li>
                <li>Años Operando: 10 años</li>
                <li><span className="label bg-success"> 5 Obras concluidas </span></li>
              </ul>
              <p><i className="icon-hyperlink"></i><a href="#"> www.desarrolladorweb.com</a><br/></p>            
          </div>
          <div className="media-right media-top">
            <ul className="icons-list text-nowrap">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="icon-menu9"></i></a>

                <ul className="dropdown-menu dropdown-menu-right">
                  <li><a href="#"><i className="icon-cog pull-left"></i> Editar Perfil</a></li>
                  <li><a href="#"><i className="icon-cross2 text-danger" id="sweet_combine"></i> Eliminar</a></li>
                </ul>
              </li>
            </ul>
          </div>
                             
          <div className="panel border-purple-400">
            <div className="panel-heading bg-purple-400">
              <h5 className="panel-title">Proyectos en Inverspot</h5>
              <div className="heading-elements">
                <ul className="icons-list">
                  <li><a data-action="collapse" className="rotate-180"></a></li>
                  <li><a data-action="reload"></a></li>
                </ul>
              </div>
            </div>

            <table className="table datatable-basic">
              <thead>
                <tr>
                  <th>Propiedad</th>
                  <th>Estatus</th>
                </tr>
              </thead>
              <tbody>
                
                <Rows />
                <Rows/>
               
              </tbody>
            </table>
          </div>                 
        </li>                                                                                                                           
        <hr/>
      </div>
    )
  }
}

export default builderCard;