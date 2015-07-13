var express = require('express');
var router = express.Router();

var cuestionarioControlador = require('../controladores/cuestionario_controlador');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Cuestionario' });
});

router.get('/author', function(req, res) {
  res.render('author', { title: 'Pantera Rosa' });
});

router.get('/cuestionarios/pregunta', cuestionarioControlador.pregunta);
router.get('/cuestionarios/respuesta', cuestionarioControlador.respuesta);

module.exports = router;