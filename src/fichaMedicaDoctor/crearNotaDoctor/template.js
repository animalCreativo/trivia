var yo = require('yo-yo');    

var login= yo`
    <div id = "containerPasswordContent" >
    <div id = "containerPassword" class="container z-depth-4"">
    
      <div id= "creaNota" class="row">
        <h5 id="tituloCrearNota" class="titulo">Agregar Nota</h5>
         <div class="row">
          <form class="col s12">
            <div class="row">
              <div id = "textTareaCol" class="input-field col s12">
                <textarea id="textarea1" class="materialize-textarea" data-length="80"></textarea>
              </div>
            </div>
          </form>
        </div>
       
        <!-- Modal Trigger -->
            <a id= "btnEnviar" class="waves-effect waves-light btn-large col s6 offset-s3 z-depth-4" href="#modal1">Agregar</a>

            <!-- Modal Structure -->
            <div id="modal1" class="modal">
                <div class="modal-content">
                  <h4 id="modalTitulo">Agregar Nota</h4>
                  <p id="modalParrafo">Su nota ha sido agregada con éxito.</p>
                </div>
                <div class="modal-footer">
                  <a id="modalAceptar" href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Aceptar</a>
                </div>
            </div>
      </div>
       </div>
    </div>

`;

module.exports = login;