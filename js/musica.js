
// Variables principales
const url="https://raw.githubusercontent.com/PazValerianichuer/mis-cansiones-favoritas-api/main/ ";
const cansiom_max = 898;
let musica_actual = 1;

// Encontrar elementos de HTML con JS
const el_numero = document.querySelector("h3");
const el_nombre = document.querySelector("h1");
const el_imagen = document.querySelector("img");

function buscar_cancion() {
    fetch(url + musica_actual).then(function(respuesta){
      // Lógica de éxito
      return respuesta.json();
    }).then(function(datos) {
      // Cambiar el número de musica
      el_numero.innerHTML = "#" + datos.id;
      // Cambiar el nombre de musica
      el_nombre.innerHTML = datos.name;
      // Cambiar la imagen de la musica
      el_imagen.src = datos.sprites.front_default;
    }).catch(function(error) {
      // Lógica de error
      console.log(error);
    })
  }

  // Buscar una musica al inicio
buscar_musica();

// Encontrar elementos de HTML de navegación
const el_anterior = document.querySelector("#nav button:first-child");
const el_siguiente = document.querySelector("#nav button:last-child");

// Agregar eventos a botónes de navegación
el_siguiente.addEventListener("click", function() {
    if(musica_actual + 1 > musica_max) {
      musica_actual = 1;
      buscar_musica();
      return;
    }
 musica_actual += 1;
  buscar_musica();
});

el_anterior.addEventListener("click", function() {
    if(musica_actual - 1 <= 0) {
      musica_actual = musica_max;
      buscar_musica();
      return;
    }
    musica_actual -= 1;
    buscar_musica();
  });