var yo = require('yo-yo');    
var login= yo`
    <div id = "containerPasswordContent" class="valign-wrapper">
      <div id = "containerPassword" class="container z-depth-4"">
        <div class="row">
          <p>Ingrese su nueva contraseña.</p>
          <form class="col s12">  
            <div class="row">
              <div id = "passwordCol" class="input-field col s10 m6 offset-s1 offset-m3">
                <input value="Nueva Clave"id="recuperPassword" type="password" class="validate z-depth-2">
              </div>
            </div>
          </form>
          <!-- Modal Trigger -->
          <a class="modal-trigger waves-effect waves-light btn" href="#modal1">Modal</a>

          <!-- Modal Structure -->
          <div id="modal1" class="modal modal-fixed-footer">
            <div class="modal-content">
              <h4>Modal Header</h4>
              <p>A bunch of text</p>
            </div>
            <div class="modal-footer">
              <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">Agree</a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
`;

module.exports = login;


