
//Clase Cliente

class Cliente {
    constructor(id, nombre, apellido, telefono, direccion,) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.direccion = direccion;
    }

    //Metodo para obtener el nombre completo del cliente
    getNombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
}

module.exports = Cliente;