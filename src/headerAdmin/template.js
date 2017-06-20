var yo = require('yo-yo');    

module.exports = function headerTitle(label){
 return yo`
    <nav> 
      <div class="nav-wrapper">

        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li>
            <a id="menu" data-activates="slide-out" class="button"><i class="material-icons">menu</i></a>
          </li>
          <li><a>HABITACIONES</a></li>
          <li><a>PAVELLONES</a></li>
        </ul>
        <a  class="brand-logo center">${label}</a>
        <ul class="right hide-on-med-and-down">
          <li><a class="dropdown-button"  data-activates="dropdown1">HISTORY<i class="material-icons right">arrow_drop_down</i></a></li>
          <li><a class="dropdown-button"  data-activates="dropdown2">MONITORING<i class="material-icons right">arrow_drop_down</i></a></li>
        </ul>
      </div>
      <ul id="dropdown1" class="dropdown-content">
        <li><a>Planta</a></li>
        <li><a>IQ</a></li>
      </ul> 
      <ul id="dropdown2" class="dropdown-content">
        <li><a>Plantas</a></li>
        <li><a>Layouts</a></li>
        <li><a>Rooms</a></li>
      </ul>
    </nav> 



    `;
}



