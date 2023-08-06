//Singleton para la conexión a la base de datos

var mongoose = require('mongoose');

var database = (function () {

    // Instancia única de la clase
    var instance;

    // Inicialización de la instancia
    function createInstance() {
        // Conexión a la base de datos
        var mongoDB = mongoose.
        connect('mongodb://0.0.0.0:27017/orden', { useNewUrlParser: true, useUnifiedTopology: true });
        return mongoDB;
    }

    // Retornar una instancia única de la clase
    return {
        getInstance: function () {
            // Si la instancia no existe la creamos
            if (!instance) {
                // Llamamos al constructor privado
                instance = createInstance();
            }
            // Si la instancia ya existe retornamos la que ya fue creada
            return instance;
        }
    };
}
)();
module.exports = database;




