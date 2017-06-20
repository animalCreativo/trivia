var yo = require('yo-yo');    

var login= yo`
  <div id = "containerHomeContent">
    <div  class="row">
        <a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>
    <ul id="slide-out" class="side-nav">     
      <li>
        <div class="userView">
          <div class="background">
            <img src="header.png">
          </div>
          <a><img href="#!" id= "btnExit" src="btnExit.png"></a>
          <a><img class="circle" src="adminIcon.png"></a>
          <a><span class="white-text name">Admin</span></a> 
          <a><span class="white-text email">admin@gmail.com</span></a>
        </div>
      </li>
      <li id="itemMenuTitulo">
        <a id="itemMenuTituloLabel" href="#!">MENU</a>
      </li>
      <li id="itemMenuList">
        <a>PLANTAS</a>
      </li>
      <li id="itemMenuList">
        <a>FAENAS</a>
      </li>
      <li id="itemMenuList">
        <a>PLANTA PLANTS</a>
      </li>
      <li id="itemMenuList">
        <a>PABELLON LAYOUTS</a>
      </li>
      <li id="itemMenuList">
        <a>CONFIGURAR PLANTA</a>
      </li>
      <li id="itemMenuList">
        <a>SUB-SISTEMA GENERACIÓN</a>
      </li>
      <li id="itemMenuList">
        <a>IQ</a>
      </li>
      <li id="itemMenuList">
        <a>QUIZ REQUEST</a>
      </li>
      <li id="itemMenuList">
        <a>RESULTADO CUESTIONARIO</a>
      </li>
    </ul>  


        <div id="colBusqueda" class=" col s12">
          <div id = "containerBusqueda" class="container ">
            <div id = "busqueda" class="row">
                 <div id = "usernameCol2" class="col s12  m4 offset-m4">
                   <div id = "usernameCol" class="input-field ">
                     <input value="Buscar Personas" id="buscarInput" type="text" class="validate z-depth-2">
                   </div>
                 </div> 
                 <div  class="col s6 m2 center-align">
                    <a id = "buscarBtnHome" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">search</i></a>
                 </div> 
                 <div class="col s6 m2 center-align">
                    <a id = "homeAdminAdd" class="btn-floating btn-large waves-effect waves-light red" ><i class="material-icons">add</i></a>
                 </div>  
                 <div class="col s6 m3 offset-m4 center-align">
                   
                      <p class="radioButonItems" >
                        <input name="group1" type="radio" id="test1" />
                        <label for="test1">Personas</label>
                      </p>
                 </div>  
                 <div class="col s6 m3 center-align">

                      <p class="radioButonItems" >
                        <input name="group1" type="radio" id="test2" />
                        <label for="test2">Cliente</label>
                      </p>
                 
                 </div> 

            </div>
          </div>
        </div>
        <div id="colFiltros" class=" col s12">
            <div id = "containerFiltros" class="container z-depth-4"> 
              <div id = "filtros" class="row">
                  <div class="col s12">
                    <h5 class="titulo">Filtros</h5>
                  </div>
                  <div class="input-field col s6 m4">
                    <select id="itemPabellón" >
                      <option value="0" disabled selected>Pabellón</option>
                      <option value="1">Pabellón 1</option>
                      <option value="2">Pabellón 2</option>
                      <option value="3">Pabellón 3</option>
                    </select>
                   
                  </div>
                  <div  class="input-field col s6 m4">
                    <select id="itemTurno">
                      <option value="" disabled selected>Turno</option>
                      <option value="1">Turno 1 </option>
                      <option value="2">Turno 2 </option>
                      <option value="3">Turno 3 </option>
                    </select>
                   
                  </div>
                  <div  class="col s10 m3 offset-s1 offset-m1">
                    <a id= "filtrarBtnHome" class="waves-effect waves-light btn-large  z-depth-4">Filtar</a>    
                  </div>  
              </div> 
            </div>
        </div>
        <div id="colResultados" class=" col s12">
            <div id = "containerResultados" class="container z-depth-4">
              <div id = "resultadosFormato" class="row">
                <div class="col s12">
                  <h5 class="titulo">Resultados</h5>
                </div>
                <div class="col s12 ">
                  <h6>Asignar:</h6>
                </div>
                <div  class="input-field col s12 m6 l4 offset-l4">
                  <select id="itemPerfil">
                    <option value="" disabled selected>Perfil</option>
                    <option value="1">Perfil 1</option>
                    <option value="2">Perfil 2</option>
                    <option value="3">Perfil 3</option>
                  </select>
                 
                </div>
                <div  class="input-field col s12 m6 l4">
                  <select id="itemCuestionario">
                    <option value="" disabled selected>Cuestionario</option>
                    <option value="1">Cuestionario 1</option>
                    <option value="2">Cuestionario 2</option>
                    <option value="3">Cuestionario 3</option>
                  </select>
                 
                </div>
                <div id= "tableCol" class="col s12">
                  <table class = "striped responsive-table"  id ="tableResultados">
                  <thead>
                    <tr>
                        <th>
                          <p>
                            <input type="checkbox" id="checkboxAll" />
                            <label for="checkboxAll"></label>
                          </p>
                        </th>
                        <th>Nombre</th>
                        <th>Rut</th>
                        <th>Turno</th>
                        <th>Oxigenación</th>
                        <th>Pabellón</th>
                        <th>Room</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                    <td> 
                        <p>
                          <input type="checkbox" id="checkbox1" />
                          <label for="checkbox1"></label>
                        </p>
                    </td>
                      <td>Jose Manuel Berrios</td>
                      <td>16.105.158-6</td>
                      <td>Turno A</td>
                      <td>Perfil A</td>
                      <td>Pabellon C</td>
                      <td>233-2</td>
                    </tr>
                    <tr>
                      <td> 
                        <p>
                          <input type="checkbox" id="checkbox2" />
                          <label for="checkbox2"></label>
                        </p>
                     </td>
                      <td>Alan Barrios</td>
                      <td>14.125.158-6</td>
                      <td>Turno A</td>
                      <td>Perfil A</td>
                      <td>Pabellon B</td>
                      <td>231-4</td>
                    </tr>
                    <tr>
                      <td> 
                        <p>
                          <input type="checkbox" id="checkbox3" />
                          <label for="checkbox3"></label>
                        </p>
                     </td>
                      <td>Rene Rios</td>
                      <td>24.625.858-6</td>
                      <td>Turno B</td>
                      <td>Perfil B</td>
                      <td>Pabellon C</td>
                      <td>653-9</td>
                    </tr>
                  </tbody>
                </table> 
                </div>
                 <div class="col s12">
                  <ul class="pagination">
                    <li class="waves-effect"><a href="#!">1-10 of 100</a></li>
                    <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                    <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                  </ul>
                </div> 
            </div> 
        </div> 
   </div>



</div>
`;

module.exports = login;


