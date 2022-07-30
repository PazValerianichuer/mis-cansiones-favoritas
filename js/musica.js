
// Variables principales
const url = "https://music.co/api/v2/musica/";
const cansiom_max = 898;
let cansion_actual = 1;

// Encontrar elementos de HTML con JS
const el_numero = document.querySelector("h3");
const el_nombre = document.querySelector("h1");
const el_imagen = document.querySelector("img");

function buscar_cancion() {
    fetch(url + cansion_actual).then(function(respuesta){
      // Lógica de éxito
      return respuesta.json();
    }).then(function(datos) {
      // Cambiar el número de cansion
      el_numero.innerHTML = "#" + datos.id;
      // Cambiar el nombre de cansion
      el_nombre.innerHTML = datos.name;
      // Cambiar la imagen de la cansion
      el_imagen.src = datos.sprites.front_default;
    }).catch(function(error) {
      // Lógica de error
      console.log(error);
    })
  }

  // Buscar una cansion al inicio
buscar_cansion();

// Encontrar elementos de HTML de navegación
const el_anterior = document.querySelector("#nav button:first-child");
const el_siguiente = document.querySelector("#nav button:last-child");

// Agregar eventos a botónes de navegación
el_siguiente.addEventListener("click", function() {
    if(cansioon_actual + 1 > cansion_max) {
      cansion_actual = 1;
      buscar_cansion();
      return;
    }
 cansion_actual += 1;
  buscar_cansion();
});

el_anterior.addEventListener("click", function() {
    if(cansion_actual - 1 <= 0) {
      cansion_actual = cansion_max;
      buscar_cansion();
      return;
    }
    cansion_actual -= 1;
    buscar_cansion();
  });