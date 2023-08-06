const Producto = require('./Producto');

//Clase Producto Simple hereda de Producto Composite

class ProductoSimple extends Producto {
    constructor(id, nombre, precio, marca,codigo) {
        super(id, nombre, precio);
        this.marca = marca;
        this.codigo = codigo;
    }
    //Metodo para obtener el precio del producto
    getPrecio() {
        return this.precio;
    }
    //Metodo para obtener la descripcion del producto
    getDescripcion() {
        return `${this.nombre} ${this.marca} ${this.codigo} $${this.precio}`;
    }
}

module.exports = ProductoSimple;