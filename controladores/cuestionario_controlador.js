var modelos = require('../modelos/modelos.js');

// GET /cuestionarios/pregunta
exports.pregunta = function(req, res) {

    modelos.Cuestionario.findAll().then(function(cuestionario){
	//modelos.Cuestionario.findAll().success(function(cuestionario){
		res.render('cuestionarios/pregunta', {pregunta: cuestionario[0].pregunta})
	});
    //res.render('cuestionarios/pregunta', {pregunta: 'Capital de Italia'});
};

// GET /cuestionarios/respuesta
exports.respuesta = function(req, res) {
	
	modelos.Cuestionario.findAll().then(function(cuestionario){
		if (req.query.respuesta === cuestionario[0].respuesta){
		// if (req.query.respuesta === 'Roma'){
	        res.render('cuestionarios/respuesta', {respuesta: 'Correcto'});
	    } else {
	        res.render('cuestionarios/respuesta', {respuesta: 'Incorrecto'});
	    };
	});

    

};

