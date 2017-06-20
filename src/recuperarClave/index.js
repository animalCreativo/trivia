
var yo = require('yo-yo')
var empty = require('empty-element')
var template = require('./template')
var templateHeader = require('../headerDoctor/template');
window.$.velocity = require('velocity-animate/velocity.js')

var main = document.getElementById('main-container');
var header = document.getElementById('header-container');
var el = templateHeader('Recuperar Contraseña');
empty(header).appendChild(el);
empty(main).appendChild(template);
console.log("Recuperar Clave:");

$('#recuperPassword').focus(
    function(){
        $(this).val('');
});



$(document).ready(function(){
	    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	    $('.modal').modal();

	});

	$('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        alert("Ready");
        console.log(modal, trigger);
      },
      complete: function() { alert('Closed'); } // Callback for Modal close
    }
  );

	



