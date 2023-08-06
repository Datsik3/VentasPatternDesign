const ProductoSimple = require('./productoSimple');
const ProductoPaquete = require('./productoPaquete');
//Class Orden

class Orden {
    constructor(id, cliente, fecha, estado) {
        this.id = id;
        this.cliente = cliente;
        this.fecha = fecha;
        this.estado = estado;
        this.items = [];
    }

    //Metodo para obtener el total de la orden
    calcularTotal() {
        return this.items.reduce((total, item) => total + item.getPrecio(), 0);
    }

    //Metodo para agregar un item a la orden
    agregarItem(item) {
        this.items.push(item);
    }

    //Metodo para obtener la descripcion de la orden
    getDescripcion() {
        console.log(`Orden Nro: ${this.id} - Fecha: ${this.fecha} - Cliente: ${this.cliente.getNombreCompleto()} - Estado: ${this.estado}`);
        console.log('Detalle:');
        console.log('----------------------------------');
        console.log('Productos:');
        console.log(this.getProductos());
        console.log('Paquetes:');
        console.log(this.getPaquetes());
        console.log(this.getItems())
        console.log(`Total: ${this.calcularTotal()}`);
       
    }
    //Metodo para eliminar un item de la orden
    eliminarItem(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
    //Metodo para obtener los items de la orden
    getItems() {
        return this.items.map(item => item.getDescripcion());
    }
    //Metodo para obtener los productos de la orden
    getProductos() {
        return this.items.filter(item => item instanceof ProductoSimple);
    }
    //Metodo para obtener los paquetes de la orden
    getPaquetes() {
        return this.items.filter(item => item instanceof ProductoPaquete);
    }

}

module.exports = Orden;