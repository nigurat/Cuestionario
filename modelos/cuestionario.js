// Definicion del modelo Quiz

module.exports = function(sequelize, DataTypes){
	return sequelize.define('Cuestionario',
		{ pregunta: DataTypes.STRING,
		  respuesta: DataTypes.STRING
		});
}