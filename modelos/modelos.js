var path = require('path');

// Postgres DATABASE_URL = postgres://user:passwd@host:port/database
// SQLite   DATABASE_URL = sqlite://:@:/
var url = process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
var DB_name = (url[6]||null);
var user = (url[2]||null);
var pwd = (url[3]||null);
var protocol = (url[1]||null);
var dialect = (url[1]||null);
var port = (url[5]||null);
var host = (url[4]||null);
var storage = process.env.DATABASE_STORAGE;

// carga modelo ORM
var Sequelize = require('sequelize');

// usar BBDD SQLite
var sequelize = new Sequelize(DB_name, user, pwd,
  { dialect: protocol,
  	protocol: protocol,
  	port: port,
  	host : host,
  	storage: storage,
  	omitNull: true
  }
					);

// importar la definicion de la tabla Quiz en cuestionario.js
var Cuestionario = sequelize.import(path.join(__dirname, 'cuestionario'));

exports.Cuestionario = Cuestionario; // exportar definicion de tabla Quiz

// sequelize.sync() crea e inicializa tabla de preguntas en DB
sequelize.sync().then(function(){
	//success(..) ejecuta el manejador una vez creada la tabla
	Cuestionario.count().then(function (count) {
		console.log('COUNT: ' + count)
		if(count === 0) { // la tabla se inicializa solo si esta vacía
			Cuestionario.create({pregunta:'Capital de Italia',
						 respuesta: 'Roma'
						})
			.then(function(){console.log('Base de Datos inicializada')});
		};
	});
});