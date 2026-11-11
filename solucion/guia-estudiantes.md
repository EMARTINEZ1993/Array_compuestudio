# Guía del taller práctico de arreglos

En esta guía construirás paso a paso los tres primeros ejercicios del proyecto. El reto final, el buscador de estudiantes, queda sin solución para que lo desarrolles por tu cuenta.

## 1. Preparar el proyecto

1. Crea una carpeta llamada `taller-array`.
2. Dentro de ella, crea los archivos HTML y la carpeta `js` con esta estructura:

   ```text
   taller-array/
   ├── index.html
   ├── ejercicio1.html
   ├── ejercicio2.html
   ├── ejercicio3.html
   ├── ejercicio4.html
   └── js/
       ├── ejercicio1.js
       ├── ejercicio2.js
       ├── ejercicio3.js
       └── ejercicio4.js
   ```

3. Abre la carpeta completa en Visual Studio Code.
4. Escribe el HTML en cada archivo `.html` y el JavaScript correspondiente dentro de `js`.
5. Para probar el proyecto, abre `index.html` en un navegador y entra a cada ejercicio.

## 2. Conceptos que usarás

- Un **arreglo** guarda varios valores en una sola variable, por ejemplo: `let nombres = [];`.
- `push(valor)` agrega un elemento al final del arreglo.
- `document.getElementById("...")` obtiene un elemento HTML por su `id`.
- `.value` lee o cambia el valor de un campo de entrada.
- `.textContent` y `.innerHTML` permiten actualizar contenido de la página.
- Una función agrupa instrucciones para ejecutar una tarea.
- En este proyecto, cada botón usa `type="button"` y llama a una función con `onclick`, por ejemplo: `<button type="button" onclick="miFuncion()">Agregar</button>`.
- Los `id` del HTML y los consultados en JavaScript deben coincidir exactamente.

## 3. Crear el menú principal

En `index.html`, agrega enlaces a cada ejercicio:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Taller práctico de arrays</title>
</head>
<body>
    <h1>Taller práctico de Arrays</h1>
    <p>Selecciona el ejercicio que deseas desarrollar:</p>
    <ol>
        <li><a href="ejercicio1.html">Ejercicio 1: Registro de nombres</a></li>
        <li><a href="ejercicio2.html">Ejercicio 2: Lista de números</a></li>
        <li><a href="ejercicio3.html">Ejercicio 3: Gestión de productos</a></li>
        <li><a href="ejercicio4.html">Reto final: Buscador de estudiantes</a></li>
    </ol>
</body>
</html>
```

Cada enlace debe apuntar al nombre exacto de su archivo.

## 4. Ejercicio 1: Registro de nombres

### Paso 1: crear el HTML

En `ejercicio1.html`, agrega el campo donde se escribirá un nombre, el botón, la lista y el contador. El `onclick` llama a la función que programarás:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro de nombres</title>
</head>
<body>
    <h1>Registro de nombres</h1>
    <input type="text" id="nombre">
    <button type="button" onclick="agregarNombre()">Agregar</button>

    <h2>Personas registradas</h2>
    <ul id="lista"></ul>
    <p id="cantidad"></p>

    <script src="js/ejercicio1.js"></script>
</body>
</html>
```

### Paso 2: programar la lógica

En `js/ejercicio1.js`:

1. Crea un arreglo vacío para guardar los nombres.
2. Obtén el campo, la lista y el contador por sus `id`.
3. En `agregarNombre()`, lee el campo, quita espacios sobrantes y convierte el texto a mayúsculas.
4. No agregues el nombre si está vacío o ya existe.
5. Si es válido, agrégalo con `push`, limpia el campo y llama a `mostrarNombre()`.
6. En `mostrarNombre()`, recorre el arreglo y actualiza la lista y el total.

```javascript
let listaNombres = [];

let inputNombre = document.getElementById("nombre");
let lista = document.getElementById("lista");
let cantidad = document.getElementById("cantidad");

function agregarNombre() {
    let nombre = inputNombre.value.trim().toUpperCase();

    if (nombre === "") {
        alert("Ingrese el nombre");
        inputNombre.style.backgroundColor = "red";
        return;
    }

    if (listaNombres.includes(nombre)) {
        alert(`El nombre ${nombre} ya está registrado`);
        inputNombre.value = "";
        return;
    }

    inputNombre.style.backgroundColor = "white";
    listaNombres.push(nombre);
    inputNombre.value = "";
    inputNombre.focus();
    mostrarNombre();
}

function mostrarNombre() {
    lista.innerHTML = "";

    for (let i = 0; i < listaNombres.length; i++) {
        lista.innerHTML += `<li>${listaNombres[i]}</li>`;
    }

    cantidad.textContent = `Total nombres: ${listaNombres.length}`;
}
```

### Paso 3: probar

- Intenta agregar un nombre.
- Intenta agregar el mismo nombre otra vez.
- Intenta agregar el campo vacío.
- Comprueba que la lista y el contador se actualicen.

## 5. Ejercicio 2: Operaciones con números

### Paso 1: crear el HTML

En `ejercicio2.html`, prepara un campo numérico, un botón, una lista y espacios para los resultados:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operaciones con números</title>
</head>
<body>
    <h1>Operaciones con Array</h1>
    <input type="number" id="numero">
    <button type="button" onclick="agregarNumeros()">Agregar número</button>

    <h2>Números registrados</h2>
    <ul id="lista"></ul>

    <h2>Resultados</h2>
    <p id="suma"></p>
    <p id="promedio"></p>
    <p id="mayor"></p>
    <p id="menor"></p>

    <script src="js/ejercicio2.js"></script>
</body>
</html>
```

### Paso 2: programar la lógica

En `js/ejercicio2.js`, guarda los valores como números, valida la entrada y actualiza los resultados cada vez que se agrega uno:

```javascript
let listaNumeros = [];

let input = document.getElementById("numero");
let lista = document.getElementById("lista");
let suma = document.getElementById("suma");
let promedio = document.getElementById("promedio");
let mayor = document.getElementById("mayor");
let menor = document.getElementById("menor");

function agregarNumeros() {
    let numero = parseFloat(input.value);

    if (isNaN(numero)) {
        alert("Por favor, ingrese un número válido.");
        input.style.backgroundColor = "#cb3234";
        input.focus();
        return;
    }

    input.style.backgroundColor = "#fff";
    listaNumeros.push(numero);
    input.value = "";
    input.focus();
    mostrarResultados();
}

function mostrarResultados() {
    lista.innerHTML = "";
    let total = 0;
    let numMayor = listaNumeros[0];
    let numMenor = listaNumeros[0];

    for (let i = 0; i < listaNumeros.length; i++) {
        lista.innerHTML += `<li>${listaNumeros[i]}</li>`;
        total += listaNumeros[i];

        if (listaNumeros[i] > numMayor) {
            numMayor = listaNumeros[i];
        }

        if (listaNumeros[i] < numMenor) {
            numMenor = listaNumeros[i];
        }
    }

    let media = total / listaNumeros.length;
    suma.textContent = `Suma: ${total}`;
    promedio.textContent = `Promedio: ${media.toFixed(1)}`;
    mayor.textContent = `Número mayor: ${numMayor}`;
    menor.textContent = `Número menor: ${numMenor}`;
}
```

### Paso 3: probar

Agrega varios números, incluyendo números negativos y decimales. Verifica manualmente la suma, el promedio, el mayor y el menor.

## 6. Ejercicio 3: Inventario de productos

### Paso 1: crear el HTML

En `ejercicio3.html`, crea campos para el nombre, precio y cantidad, además de una tabla:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inventario de productos</title>
</head>
<body>
    <h1>Inventario de productos</h1>

    <form id="formulario">
        <label for="producto">Nombre del producto:</label>
        <input type="text" id="producto" required>

        <label for="precio">Precio unitario:</label>
        <input type="number" id="precio" min="0.01" step="0.01" required>

        <label for="cantidad">Cantidad:</label>
        <input type="number" id="cantidad" min="1" step="1" required>

        <button type="button" onclick="agregarProducto()">Agregar producto</button>
    </form>

    <h2>Productos registrados</h2>
    <table>
        <thead>
            <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
            </tr>
        </thead>
        <tbody id="tabla"></tbody>
    </table>

    <h2>Resultados</h2>
    <p id="total"></p>

    <script src="js/ejercicio3.js"></script>
</body>
</html>
```

### Paso 2: programar la lógica

En `js/ejercicio3.js`, cada producto será un objeto guardado en un arreglo. El subtotal se calcula multiplicando el precio por la cantidad:

```javascript
let listaProductos = [];

let formulario = document.getElementById("formulario");
let producto = document.getElementById("producto");
let precio = document.getElementById("precio");
let cantidad = document.getElementById("cantidad");
let tabla = document.getElementById("tabla");
let total = document.getElementById("total");

function agregarProducto() {
    if (!formulario.reportValidity()) {
        return;
    }

    listaProductos.push({
        nombre: producto.value.trim(),
        precio: parseFloat(precio.value),
        cantidad: parseInt(cantidad.value, 10)
    });

    formulario.reset();
    mostrar();
}

function mostrar() {
    let totalNuevo = 0;
    tabla.innerHTML = "";

    for (let i = 0; i < listaProductos.length; i++) {
        let productoActual = listaProductos[i];
        let subtotal = productoActual.precio * productoActual.cantidad;
        totalNuevo += subtotal;

        tabla.innerHTML += `<tr>
            <td>${productoActual.nombre}</td>
            <td>${productoActual.precio}</td>
            <td>${productoActual.cantidad}</td>
            <td>${subtotal}</td>
        </tr>`;
    }

    total.textContent = `Total: ${totalNuevo}`;
}
```

### Paso 3: probar

- Intenta enviar los campos vacíos y observa la validación del navegador.
- Agrega más de un producto.
- Comprueba el subtotal de cada fila y el total del inventario.
- Verifica que el formulario se limpie después de agregar un producto.

## 7. Reto final: buscador de estudiantes

### Situación

La secretaría de una escuela necesita consultar rápidamente los datos de sus estudiantes. Crea una página que permita escribir el nombre de un estudiante y ver su ficha. Construye la interfaz en `ejercicio4.html` y escribe la lógica en `js/ejercicio4.js`. Este es un reto individual: se especifica el resultado esperado, pero no se proporciona el código de la solución.

### Datos

Crea en JavaScript un arreglo con al menos cinco estudiantes. Cada objeto debe contener nombre, edad y curso. Usa estos datos como referencia:

- Ana Torres, 14 años, curso 9A.
- Mateo Ruiz, 15 años, curso 10B.
- Lucía Gómez, 13 años, curso 8A.
- Samuel Díaz, 16 años, curso 11A.
- Valentina Cruz, 14 años, curso 9B.

### Requisitos

1. Incluye un campo de texto y un botón `type="button"` que llame a una función mediante `onclick`.
2. Busca por nombre sin distinguir mayúsculas de minúsculas ni considerar espacios sobrantes al principio o al final.
3. Si hay coincidencia, muestra nombre, edad y curso en la página.
4. Si el campo está vacío, pide ingresar un nombre. Si no existe, informa que no se encontró al estudiante.
5. Permite realizar varias búsquedas seguidas sin recargar la página.
6. Organiza los mensajes y resultados en el HTML; guarda los datos en un arreglo de objetos.

### Pruebas y entrega

- Busca `Ana Torres` y confirma que se muestre su ficha.
- Repite la búsqueda con mayúsculas/minúsculas diferentes y espacios sobrantes.
- Busca un nombre que no esté en el arreglo y luego prueba el campo vacío.
- Realiza dos búsquedas seguidas y verifica que el resultado anterior no confunda al nuevo.
- Comprueba que los `id` consultados en JavaScript existan en el HTML y que `js/ejercicio4.js` esté conectado.

Antes de programar, decide qué elementos HTML necesitas y cómo consultarás el arreglo. Usa los ejercicios anteriores como referencia de conceptos, pero implementa tu propia solución.

## 8. Lista de comprobación final

- [ ] Todos los archivos están en las carpetas indicadas.
- [ ] Cada página HTML carga su archivo JavaScript correcto.
- [ ] Los `id` del HTML coinciden con los usados en JavaScript.
- [ ] Los botones que ejecutan funciones usan `type="button"` y `onclick`.
- [ ] Los tres primeros ejercicios se prueban con entradas válidas y no válidas.
- [ ] El reto final tiene una solución propia y se prueba con un nombre encontrado, variaciones de mayúsculas y espacios, un nombre inexistente, el campo vacío y dos búsquedas seguidas.
