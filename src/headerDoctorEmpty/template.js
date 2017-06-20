var yo = require('yo-yo');    

module.exports = function headerTitle(label){
 return yo`
    <nav> 
      <div class="nav-wrapper">
        <a class="brand-logo center">${label}</a>
      </div>
    </nav> 

    `;
}

