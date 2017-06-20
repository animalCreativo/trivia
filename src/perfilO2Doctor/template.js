var yo = require('yo-yo');    

var login= yo`
  <div id = "containerHomeContent" class="valign-wrapper">
    <div  class="row">
        <div id="colPerfilesO2" class=" col s12">
            <div id = "containerPerfilesO2" class="col s12 container z-depth-4"> 
              <div id = "filtros" class="row">
                  <div class="col s12">
                    <h5 class= "titulo">Perfiles de O2</h5>
                  </div>  
                  <div id = "perfilNombreCol" class="input-field col s12 m6 ">
                     <i class="material-icons prefix">assignment</i>
                     <input value="" id="perfilNombre" type="text" class="validate z-depth-2">
                     <label for="icon_prefix">Nombre Perfil</label>
                  </div> 
                  <div id = "perfilDescripcionCol" class="input-field col s12 m6 ">
                     <i class="material-icons prefix">comment</i>
                     <input value="" id="perfilDescripcion" type="text" class="validate z-depth-2">
                     <label for="icon_prefix">Descripción</label>
                  </div> 
              </div>
              
              <div id = "filtros" class="row"> 
                 <div id = "perfilO2FechaBtnDiv" class="input-field col s12 m6">
    
                      <i class="material-icons prefix">today</i>
                      <input type="date" class="datepicker validate z-depth-2" id="perfilO2FechaPicker" >
                      <label class="left-align" for="icon_prefix">Fecha</label>
                    
                 </div>  
                 <div id = "perfilO2RelojBtnDiv" class="input-field col s12  m6">
                  
                      <i class="material-icons prefix">schedule</i>
                      <input  id="timepicker" data-default="14:20:00" class="timepicker validate z-depth-2" type="time">
                      <label class="left-align" for="timepicker"> Hora</label>

                 </div>  
              </div>

              <div id = "filtros" class="row"> 
                 <div id = "perfilO2CrearBtn" class="input-field col s12 center-align">
                      <a id="btnCrearPerfilO2" class="waves-effect waves-light btn-large col s12 m6 offset-m3 z-depth-4">Crear</a>
                 </div>   
              </div>
            </div>
        </div> 
    </div>
  </div> 
`;

module.exports = login;


