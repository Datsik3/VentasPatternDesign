const Producto = require('./Producto');

//Clase Producto Paquete hereda de Producto Composite
class ProductoPaquete extends Producto {
    constructor(id, nombre, productos) {
        super(id,nombre,0);
        this.productos = productos;
    }
    //Metodo para obtener el precio del paquete
    getPrecio() {
        const total = this.productos.reduce((total, item) => total + item.getPrecio(), 0);
        this.precio = total;
        return total;
    }
    //Metodo para obtener la descripcion del paquete
    getDescripcion() {
        return this.productos.map(item => item.getDescripcion()).join(', ');
    }

    //Metodo para agregar un producto al paquete
    agregar(item) {
        this.productos.push(item);
    }
    //Metodo para eliminar un producto del paquete
    eliminar(item) {
        const index = this.productos.indexOf(item);
        if (index !== -1) {
            this.productos.splice(index, 1);
        }
    }
}

module.exports = ProductoPaquete;