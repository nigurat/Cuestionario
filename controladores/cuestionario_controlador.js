// GET /cuestionarios/pregunta
exports.pregunta = function(req, res) {
    res.render('cuestionarios/pregunta', {pregunta: 'Capital de Italia'});
};

// GET /cuestionarios/respuesta
exports.respuesta = function(req, res) {
    if (req.query.respuesta === 'Roma'){
        res.render('cuestionarios/respuesta', {respuesta: 'Correcto'});
    } else {
        res.render('cuestionarios/respuesta', {respuesta: 'Incorrecto'});
    };
};

