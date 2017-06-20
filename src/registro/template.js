var yo = require('yo-yo');    

var login= yo`
    <div id ="containerLogin" class="container">
      <div class="row">
        <h1>OXYPLUS</h1>
        <div class="row center-align">
          <form class="col s12">
            <div class="row">
              <div id = "usernameCol" class="input-field col s10  m8 l6 offset-s1 offset-m2 offset-l3">
               <input placeholder="Nombre Completo" id="user_nameFullRegistro" type="text" class="validate">
               <label for="first_name">Nombre</label>
              </div>
            </div>
            <div class="row">
              <div id = "usernameCol" class="input-field col s10  m8 l6 offset-s1 offset-m2 offset-l3">
               <input placeholder="example@gmail.com"  id="emailRegistro" type="email" class="validate">
               <label for="email">Email</label>
              </div>
            </div>
            <div class="row">
              <div id = "usernameCol" class="input-field col s10  m8 l6 offset-s1 offset-m2 offset-l3">
               <input placeholder="Nombre Usuario" id="user_nameRegistro" type="text" class="validate">
               <label for="first_name">Usuario</label>
              </div>
            </div>
            <div class="row">
              <div id = "passwordCol" class="input-field col s10  m8 l6  offset-s1 offset-m2 offset-l3">
                <input placeholder="*********" id="passwordRegistro" type="password" class="validate">
                <label for="password">Password</label>
              </div>
            </div>
          </form>
          <a id="btnRegistarseRegistro" class="waves-effect waves-light btn-large col s10  m8 l6  offset-s1 offset-m2 offset-l3 z-depth-4"  >Registarse</a>
          <!-- Modal Trigger -->
          <!-- Modal Structure -->
          <div id="registroModal" class="modal">
              <div class="modal-content">
                <h4 id="modalTitulo">Registro Exitoso</h4>
                <p id="modalParrafo">Se ha creado el usuario</p>
              </div>
              <div class="modal-footer">
                <a id="btnAceptarReestablecer"  class="modal-action modal-close waves-effect waves-green btn-flat modalAceptar">Aceptar</a>
              </div>
          </div>
      	</div>    
    </div>
`;

module.exports = login;




