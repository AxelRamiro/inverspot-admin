import React, {Component} from 'react'

function InputForm (props){
  return(
    <div className="form-group">
      <label className="col-md-4 control-label">{props.name}</label>  
      <div className="col-md-4">
        {props.children}
      </div>
    </div>
  )
}

class InvestmentForm extends Component{
	render() {
		return(

      <div className="tab-pane fade" id="inversor">

        <div className="panel panel-flat">
          <div className="panel-heading">
            <h6 className="panel-title">Información de Inversor</h6>
          </div>

          <div className="panel-body">
            <form className="form-horizontal" >
              <fieldset>
                <legend>1. Datos generales del inversionista</legend>

                <div className="form-group">
                  <label className="col-md-4 control-label">Sexo</label>
                  <div className="col-md-4">
                    <select id="selectbasic" name="selectbasic" className="form-control">
                      <option value="None">Seleccione...</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Femenino">Femenino</option>
                    </select>
                  </div>
                </div>

                <InputForm name='Nacionalidad'>
                  <input id="your-nacionalidad" name="your-nacionalidad" placeholder="Nacionalidad" className="form-control input-md" required="" type="text"/>
                </InputForm>
                
                <InputForm name='Ciudad de Nacimiento'>
                  <input id="your-nacimiento" name="your-nacimiento" placeholder="Lugar de nacimiento" className="form-control input-md" required="" type="text"/>
                </InputForm>

                <InputForm name='Número de Identificación'>
                  <input id="your-id" name="your-id" placeholder="Número de identificación" className="form-control input-md" required="true" type="text"/>
                </InputForm>     


                <div className="form-group">
                  <label className="col-md-4 control-label" >Tipo de identificación</label>
                  <div className="col-md-4">
                    <select id="selectbasic" name="selectbasic" className="form-control">
                      <option value="None">Seleccione...</option>
                      <option value="Masculino">Credencial de Elector</option>
                      <option value="Femenino">Pasaporte</option>
                      <option value="Femenino">Cartilla Militar</option>
                      <option value="Femenino">Licencia de Conducir</option>
                    </select>
                  </div>
                </div>

                <InputForm name="Clave Única de Registro de Población (CURP)">
                  <input id="your-curp" name="your-curp" placeholder="CURP" className="form-control input-md" required="true" type="text"/>
                </InputForm>

                <InputForm name="RFC">
                  <input id="your-rfc" name="your-rfc" placeholder="RFC" className="form-control input-md" required="true" type="text"/>
                </InputForm>   

                <InputForm name="Domicilio">
                  <input id="your-domicilio" name="your-domicilio" placeholder="Calle y Número" className="form-control input-md" required="true" type="text"/>
                </InputForm>

                <InputForm name="Colonia">
                  <input id="your-colonia" name="your-colonia" placeholder="Colonia" className="form-control input-md" required="true" type="text"/>
                </InputForm>

                <InputForm name="Delegación o Municipio">
                  <input id="your-delomuni" name="your-delomuni" placeholder="Delegación o Municipio" className="form-control input-md" required="true" type="text"/>
                </InputForm>

                <InputForm name="Ciudad o Población">
                  <input id="your-cd" name="your-cd" placeholder="Ciudad o Población" className="form-control input-md" required="true" type="text"/>
                </InputForm>

                <InputForm name="País">
                  <input id="your-pais" name="your-pais" placeholder="País" className="form-control input-md" required="true" type="text"/>
                </InputForm>

                <InputForm name="Código Postal">
                  <input id="your-cp" name="your-cp" placeholder="Código Postal" className="form-control input-md" required="true" type="text"/>
                </InputForm>

                <div className="form-group">
                  <label className="col-md-4 control-label">Estado Civíl</label>
                  <div className="col-md-4">
                    <select id="selectbasic" name="selectbasic" className="form-control">
                      <option value="None">Seleccione...</option>
                      <option value="Masculino">Soltero/a</option>
                      <option value="Femenino">Comprometido/a</option>
                      <option value="Femenino">Casado/a</option>
                      <option value="Femenino">Divorciado/a</option>
                      <option value="Femenino">Viudo/a</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-md-4 control-label" >En caso de ser casado/a (Bajo que régimen):</label>
                  <div className="col-md-4">
                    <select id="selectbasic" name="selectbasic" className="form-control">
                      <option value="None">Seleccione...</option>
                      <option value="Masculino">Separación de Bienes</option>
                      <option value="Femenino">Bienes Mancomunados</option>
                    </select>
                  </div>
                </div>


                <InputForm name="Nombre Completo del/la Conyugue:">
                  <input id="your-conyugue" name="your-conyugue" placeholder="Nombre Completo" className="form-control input-md" required="true" type="text"/>
                </InputForm>

                <InputForm name="Correo Electrónico">
                  <input id="your-correo" name="your-correo" placeholder="ejemplo@correo.com" className="form-control input-md" required="true" type="text"/>
                </InputForm>

                <InputForm name="Teléfono Fijo">
                  <input id="contactofijo" name="contactofijo" placeholder="(xxx) xxx-xxxx" className="form-control input-md" required="true" type="text"/>
                </InputForm>

                <legend>2. Forma de inversión</legend>

                <div className="form-group">
                  <label className="col-md-4 control-label">Forma de Pago</label>
                  <div className="col-md-4">
                    <select id="selectbasic" name="selectbasic" className="form-control">
                      <option value="None">Seleccione...</option>
                      <option value="Masculino">Efectivo</option>
                      <option value="Femenino">Cheque</option>
                      <option value="Femenino">Transferencia</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-md-4 control-label" >Forma de Anticipo</label>
                  <div className="col-md-4">
                    <select id="selectbasic" name="selectbasic" className="form-control">
                      <option value="None">Seleccione...</option>
                      <option value="Masculino">Financiado</option>
                      <option value="Femenino">Contado</option>
                    </select>
                  </div>
                </div>


                <legend>3. Datos bancarios del inversionista</legend>

                <InputForm name="Número de Cuenta de Depósito">
                  <input id="your-deposito" name="your-deposito" placeholder="Número de Cuenta" className="form-control input-md" required="true" type="text"/>
                </InputForm>

                <InputForm name="Clave">
                  <input id="your-clave" name="your-clave" placeholder="Clave" className="form-control input-md" required="true" type="text"/>
                </InputForm>

                <InputForm name="Banco">
                  <input id="your-banco" name="your-banco" placeholder="Nombre del Banco" className="form-control input-md" required="true" type="text"/>
                </InputForm>

                <InputForm>
                  <input id="your-titnombre" name="your-titnombre" placeholder="Nombre Completo" className="form-control input-md" required="true" type="text"/>
                </InputForm>


                <legend>4. Designación de beneficiarios</legend>
                <h3 className="text-center">Beneficiario I</h3>

                <InputForm name="Nombre*">
                  <input id="your-biname" name="your-name" placeholder="Nombre" className="form-control input-md" required="true" type="text"/>
                </InputForm>

                <InputForm name="Apellido Paterno*">
                  <input id="your-bipaterno" name="your-bipaterno" placeholder="Apellido Paterno" className="form-control input-md" required="true" type="text"/>
                </InputForm>

                <InputForm name="Apellido Materno*">
                  <input id="your-bimaterno" name="your-bimaterno" placeholder="Apellido Materno" className="form-control input-md" required="true" type="text"/>
                </InputForm>

                <InputForm name="Teléfono Fijo">
                  <input id="contactofijo" name="contactofijo" placeholder="(xxx) xxx-xxxx" className="form-control input-md" required="true" type="text"/>
                </InputForm>

                <InputForm name="Teléfono Celular">
                  <input id="contactocel" name="contactocel" placeholder="(xxx) xxx-xxxx" className="form-control input-md" required="true" type="text"/>
                </InputForm>

                <InputForm name="% del Beneficiario">
                  <input id="your-biporcentaje" name="your-biporcentaje" placeholder="Cantidad de Porcentaje" className="form-control input-md" required="true" type="text"/>
                </InputForm>

                <h3 className="text-center">Beneficiario II</h3>

                <InputForm name="Nombre*">
                  <input id="your-biiname" name="your-biiname" placeholder="Nombre" className="form-control input-md" required="true" type="text"/>
                </InputForm>

                <InputForm name="Apellido Paterno*">
                  <input id="your-biipaterno" name="your-biipaterno" placeholder="Apellido Paterno" className="form-control input-md" required="true" type="text"/>
                </InputForm>

                <InputForm name="Apellido Materno*">
                  <input id="your-biimaterno" name="your-biimaterno" placeholder="Apellido Materno" className="form-control input-md" required="true" type="text"/>
                </InputForm>

                <InputForm name="Teléfono Fijo">
                  <input id="contactofijoii" name="contactofijoii" placeholder="(xxx) xxx-xxxx" className="form-control input-md" required="true" type="text"/>
                </InputForm>

                <InputForm name="Teléfono Celular">
                  <input id="contactocelii" name="contactocelii" placeholder="(xxx) xxx-xxxx" className="form-control input-md" required="true" type="text"/>
                </InputForm>

                <InputForm name="% del Beneficiario">
                  <input id="your-biiporcentaje" name="your-biiporcentaje" placeholder="Cantidad de Porcentaje" className="form-control input-md" required="true" type="text"/>
                </InputForm>

                <br/><br/>
                <InputForm name="Comentarios Adicionales">                    
                  <textarea className="form-control" id="textarea" name="textarea"></textarea>
                </InputForm>

                <div className="text-right">
                    <button type="submit" className="btn btn-primary">Editar Usuario <i className="icon-arrow-right14 position-right"></i></button>
                </div>
              </fieldset>
            </form>
          </div>
        
        </div>
      </div>
		)
	}
} 

export default InvestmentForm;