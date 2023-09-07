
function buscarProducto( producto ){

    return producto.nombre == compraUsuario 

}

let compraUsuario = "";

while( compraUsuario != "FIN"){
    compraUsuario = prompt("Solicite el producto a comprar")

    if( compraUsuario !="FIN"){
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