
class Productos{
    constructor( nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    }

    get_datos(){
        console.log("<-- PRODUCTO -->");
        console.log("Nombre : ",this.nombre);
        console.log("Precio: ", this.precio);
        console.log("Stock: ", this.stock);
    }

    get_stock(){
        if( this.stock <= 0){
            return false
        }
        else{
            return true
        }
    }
    update_stock( unidades ){
        if(this.stock >= unidades){
            this.stock = this.stock - unidades;
            return true
        }
        else{
            console.log("No hay tanto stock");
            console.log("Stock disponible: ", this.stock);
            return false
        }
    }

}

let listaProductos = [];

listaProductos.push( new Productos("Vaso" , 1000, 3));
listaProductos.push( new Productos("Cuchillo" , 500, 5));
listaProductos.push( new Productos("Tenedor" , 500,7));







console.log("Lista de productos");

for( let producto of listaProductos ){

        producto.get_datos();

}

function buscarProducto( producto ){
    return producto.nombre == compraUsuario
}

let comprausuario = prompt("Ingrese el nombre del producto que quiere comprar");
let resultado_find = listaProductos.find( buscarProducto);




function buscarProducto( producto ){

    return producto.nombre == comprausuario 

}

let compraUsuario = "";

while( compraUsuario != "FIN"){
       compraUsario = prompt("Ingrese el nombre del producto a comprar")

    if( comprausuario !="FIN"){
        let resultado_find = listaProductos.find(buscarProducto);

        if( resultado_find != undefined ){
            let unidades = parseInt(prompt("Cuantas unidades va a solicitar?"));
            if( resultado_find.update_stock(unidades) ){
                console.log("Gracias por comprar");
                for ( let producto of listaProductos){
                    if( producto.stock > 0){
                        producto.get_datos();
                    }
                }
            }
        }
        else{
            console.log("Producto no encontrado: ", compraUsuario);
        }
    }
}