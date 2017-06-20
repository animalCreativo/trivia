
app.get('/api/cuestionarios', function (req, res, next) {
  var resultado = 
    [
		{
			"id": 		    "0004",
			"Doctor": 		"J. Bartha",
			"Fecha": 	    "12-12-17",
			"Texto":  		"El Paciente ha respondido de una manera ....."
		},
		{
			"id": 		    "0003",
			"Doctor": 		"J. Bartha",
			"Fecha": 	    "10-12-17",
			"Texto":  		"El tratamiento presenta una mejora....."
		},
		{
			"id": 		    "0002",
			"Doctor": 		"J. Bartha",
			"Fecha": 	    "07-12-17",
			"Texto":  		"EL paciente evoluciona de una manera....."
		},
		{
			"id": 		    "0001",
			"Doctor": 		"J. Bartha",
			"Fecha": 	    "24-11-17",
			"Texto":  		"El Paciente presenta sintomas ....."
		}
		
	];
	//setTimeout(function () {
    res.send(resultado);  
    //}, 0000)
});