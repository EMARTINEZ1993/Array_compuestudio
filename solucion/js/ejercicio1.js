let listaNombres=[];

let inputNombre=document.getElementById("nombre");
let lista=document.getElementById("lista");
let cantidad=document.getElementById("cantidad");

function agregarNombre(){
    let nombre=inputNombre.value.trim().toUpperCase();

    if(nombre===""){
        alert("Ingrese el Nombre");
        inputNombre.style.backgroundColor="red";
        return;
    }
    else if(listaNombres.includes(nombre)){
        alert(`El nombre ${nombre} ya esta registrado`);
        inputNombre.value="";
        return;
    }
    
    else{
        inputNombre.style.backgroundColor="white";
        listaNombres.push(nombre);
        inputNombre.value="";
         inputNombre.focus();
    }

    mostrarNombre();
}

function mostrarNombre(){
    lista.innerHTML="";
    for(let i=0; i<listaNombres.length ; i++){
        lista.innerHTML+=`<li>${listaNombres[i]} </li>`
    }

    cantidad.innerText=`Total nombres: ${listaNombres.length}`;
}
