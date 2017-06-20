var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');
var template = require('./template');
var templateHeader = require('../../headerDoctor/template');
var request = require('superagent');

var nombre, fecha, nota, preguntas;


page('/verCuestionarioDoctor',load,function(ctx,next){
	var main = document.getElementById('main-container');
	var header = document.getElementById('header-container');
	var el = templateHeader('Ver Cuestionario');
	empty(header).appendChild(el);
	empty(main).appendChild(template);
	console.log("nombre:"+nombre);
	console.log("fecha:"+fecha);
	console.log("nota:"+nota);
	var aux = nombre + " ("+fecha+")" ;

    $('#verCuestionarioTitulo').text(aux);
    $('#verCuestionarioNota').text("Nota: "+ nota);

    $("#dataCuestionario").empty();

	$('#btnBack').click(function(){  
		console.log("btnBack ");
		page('/cuestionariosDoctor');  
	}); 

    function loadDataCuestionario(){
   	  for (var i = 0 ; i <= preguntas.length-1 ; i++) {
		var newRowContent ;
		if (i === 0) {
			newRowContent = " <div class=\"collapsible-header active pregCuestionario\">"+(i+1)+") "+ preguntas[i].pregunta +"</div>"
	   
		}else {
			newRowContent = " <div class=\"collapsible-header  pregCuestionario\">"+(i+1)+") "+ preguntas[i].pregunta +"</div>"
		}
		newRowContent+= "<div class=\"collapsible-body\">";
	    newRowContent+= " <span>" ;
	    newRowContent+= "<h6 class=\"altCuestionario\">Alternativas:</h6>";
	    for (var j = 0 ; j <= preguntas[i].alternativas.length-1 ; j++) {
	    	newRowContent+= "<h6 class=\"altCuestionario\">"+(j+1)+") "+preguntas[i].alternativas[j].Alternativa+"</h6>";
		}
		newRowContent+= "<h4 class=\"respCuestionario\">Respuesta: "+preguntas[i].respuesta.respuesta+"</h4>";
		newRowContent+= " <span>" ;
		newRowContent+= " </div>" ;
        newRowContent= "<li>"+ newRowContent +"</li>"; 
	   
	    $("#dataCuestionario").append(newRowContent);

     }
     $('.collapsible').collapsible();
   }


	$(document).ready(function (){
		loadDataCuestionario();
		
	});

	
       

})

function load (ctx, next) {
    request
    .get('/api/verCuestionario')
    .end(function (err, res) {
      if (err) return console.log(err);
      var json = JSON.stringify(res.body);
      var jsonObj = jQuery.parseJSON(json);
      console.log("datos server2:"+ json );
      nombre = jsonObj[0].nombre;
      fecha = jsonObj[0].fecha;
      nota = jsonObj[0].nota;
      preguntas = jsonObj[0].preguntas;
      next();
    })
}


