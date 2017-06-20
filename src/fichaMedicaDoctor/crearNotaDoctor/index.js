var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');
var template = require('./template');
var templateHeader = require('../../headerDoctor/template');

page('/crearNotaDoctor',function(ctx,next){
	var main = document.getElementById('main-container');
	var header = document.getElementById('header-container');
	var el = templateHeader('Crear Nota');
	empty(header).appendChild(el);
	empty(main).appendChild(template);
	console.log("Crear nota page");

    $('#textarea1').trigger('autoresize');

    $('#btnBack').click(function(){  
        console.log("btnBack ");
        page('/fichaMedicaDoctor');  
  	}); 
  
	
	/*$('#textarea1').on('keypress', function() {
		var count = $('#textarea1').data("previous-length");
		var length = $('#textarea1').data("length");
	 	if (count >= length) {
	        console.log ('120')
	   	}
	});*/

	/*$('#textarea1').keyup(function(){ 
		var count = $('#textarea1').data("previous-length")+1;
		var length = $('#textarea1').data("length");           
        var text_Remain = length - count;       
		console.log ("largo"+length);	
		console.log ("count"+count);	
		console.log ("diferencia:"+text_Remain);	


        $('#textarea1').keypress(function(e){
        if (e.keyCode === 8) {
        	console.log ("backspace");
        }else
        //backspace
	        {
	        	$('#textarea1').keydown(function(e){
	        		if(text_Remain < 0){
	                	e.preventDefault();
	                  	console.log ('no se escribe')
	            	}
	        	});	
	        }         
            
        });
 
        
    });   */

    $('#textarea1').on('keyup', function(event) {
   		var count = $('#textarea1').data("previous-length")+1;
		var length = $('#textarea1').data("length"); 
		console.log ("largo"+length);	
		console.log ("count"+count);
	    if (count >= length) {
	      var data= $('#textarea1').val().substring(0, length-1);
	      $(this).val(data);
	      console.log ("data:"+ data );
	   }
	});
    
	

	
})


