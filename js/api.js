// Variables principales
const url = "https://pazvalerianichuer.github.io/mis-cansiones-favoritas-api/";
let boton_activo = null;

// Encontrar elementos de HTML
const el_lista_musica = document.getElementById("musica-lista");
const el_imagen = document.querySelector("#musica-seleccionada img");
const el_nombre = document.querySelector("#musica-seleccionada h2");
const el_desc = document.querySelector("#musica-seleccionada p");

// Buscar desde nuestra propia base de datos
fetch(url + "datos.json").then(function(respuesta) {
  return respuesta.json();
}).then(function(datos) {
  console.log(datos);
  // Pasar por cada musica en la base de datos
  for(let i = 0; i < datos.length; i+=1) {
    // Crear boton de HTML
    let boton = document.createElement("button");
    boton.innerHTML = datos[i].nombre;
    // Alimentar la lista de musica
    el_lista_musica.appendChild(boton);
    // Agregar evento de dar clic a cada musica
    boton.addEventListener("click", function() {
      // Cambiar imagen
      el_imagen.src = url + datos[i].imagen;
      // Cambiar nombre
      el_nombre.innerHTML = datos[i].nombre;
      // Cambiar descripción 
      el_desc.innerHTML = datos[i].descripcion;
      // Checar si el botón activo existe y quitarle la clase "seleccionada"
      if(boton_activo != null) {
        boton_activo.classList.remove("seleccionada");
      }
      // Agregar clase de seleccionada
      boton.classList.add("seleccionada");
      // Dejar como botón activo el botón seleccionada
      boton_activo = boton;
    });
    // Darle clic siempre al primer elemento
    if(i == 0) {
      boton.click();
    }
  }
}).catch(function(error) {
  console.log(error);
});