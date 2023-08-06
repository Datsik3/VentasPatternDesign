
//Variables
const Cliente = require('./src/Models/Cliente');
const ProductoSimple = require('./src/Models/productoSimple');
const ProductoPaquete = require('./src/Models/productoPaquete');
const Orden = require('./src/Models/orden');

//Express
const express = require('express')
const path = require('path')
var bodyParser = require('body-parser');
const database = require('./src/Models/database');
const instance = database.getInstance();
const app = express()
const port = 3000


app.use(express.static('src'));

app.set('views', './src/Views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {

    //Cliente
    const cliente_1 = new Cliente(1, 'Juan', 'Perez', "0992928724", 'Av. 6 de Diciembre');
    const orden_1 = new Orden(1, cliente_1, new Date(), 'pendiente');


    //Productos Simples
    const producto_1 = new ProductoSimple(1, 'Teclado', 20, 'Logitech', 'K120');
    const producto_2 = new ProductoSimple(2, 'Mouse', 10, 'Logitech', 'M90');
    const producto_3 = new ProductoSimple(3, 'Parlantes', 30, 'Logitech', 'Z120');
    const producto_4 = new ProductoSimple(4, 'Monitor', 200, 'Samsung', 'S22F350');
    const producto_5 = new ProductoSimple(5, 'CPU', 500, 'Intel', 'Core i5 9400F');
    const producto_6 = new ProductoSimple(6, 'RAM', 100, 'Kingston', 'HyperX Fury 8GB');
    const producto_7 = new ProductoSimple(7, 'Disco Duro', 100, 'Western Digital', 'WD Blue 1TB');
    const producto_8 = new ProductoSimple(8, 'SSD', 100, 'Kingston', 'A400 240GB');
    const producto_9 = new ProductoSimple(9, 'Motherboard', 100, 'Asus', 'Prime B365M-A');
    const producto_10 = new ProductoSimple(10, 'Fuente de poder', 100, 'EVGA', '500W 80+');

    //Paquetes 

    const paquete_1 = new ProductoPaquete(6, 'Paquete de teclado y mouse', [producto_6, producto_10]);
    const paquete_2 = new ProductoPaquete(7, 'Paquete de teclado, mouse y parlantes', [producto_7, producto_8, producto_9]);

    //Agregar productos y paquetes a la orden
    orden_1.agregarItem(producto_1);
    orden_1.agregarItem(producto_2);
    orden_1.agregarItem(producto_3);
    orden_1.agregarItem(producto_4);
    orden_1.agregarItem(producto_5);
    orden_1.agregarItem(paquete_1);
    orden_1.agregarItem(paquete_2);

    //Eliminar productos y paquetes de la orden
    const orden = {
        id: orden_1.id,
        cliente: orden_1.cliente,
        fecha: orden_1.fecha,
        estado: orden_1.estado,
        productos: orden_1.getProductos(),
        paquetes: orden_1.getPaquetes(),
        total: orden_1.calcularTotal()
    }

    res.render('index', { orden: orden })
})

//Conexión a la base de datos

instance.then((res) => {
    console.log('La conexión MongoDB se estableció correctamente...');
}).catch((err) => {
        console.log('Error al conectarse a mongoDB: ', err);
});

app.listen(port, () => console.log(`Server on ${port}!`))