var yo = require('yo-yo');    

module.exports = function headerTitle(label){
 return yo`
      <nav>
	    <div class="nav-wrapper">
	       <a class="brand-logo center">${label}</a>
	      <ul class="left">
	        <li><a><i id = "btnBack" class="material-icons">trending_flat</i></a></li>
	      </ul>
	    </div>
	  </nav>
    `;
}

