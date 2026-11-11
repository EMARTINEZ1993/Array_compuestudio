let listaProductos = [];

let formulario = document.getElementById("formulario");
let producto = document.getElementById("producto");
let precio = document.getElementById("precio");
let cantidad = document.getElementById("cantidad");
let tabla = document.getElementById("tabla");
let total = document.getElementById("total");

function agregarProducto(){
    if (!formulario.reportValidity()) {
        return;
    }

    let productoAgregado = producto.value.trim();
    let precioAgregado = parseFloat(precio.value);
    let cantidadAgregada = parseInt(cantidad.value, 10);

    listaProductos.push({
        nombre : productoAgregado,
        precio : precioAgregado,
        cantidad : cantidadAgregada
    });

    formulario.reset();

    mostrar();
}

function mostrar(){
    let totalNuevo = 0;
    tabla.innerHTML = "";

    for (let i = 0; i < listaProductos.length; i++) {
        let subtotal = listaProductos[i].precio * listaProductos[i].cantidad;
        totalNuevo += subtotal;
        tabla.innerHTML += `<tr>
            <td>${listaProductos[i].nombre}</td>
            <td>${listaProductos[i].precio}</td>
            <td>${listaProductos[i].cantidad}</td>
            <td>${subtotal}</td>
        </tr>`;
    }

    total.innerText = `Total: ${totalNuevo}`;
}