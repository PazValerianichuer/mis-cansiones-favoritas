function cambiar_porta_Voces_en_mi_interior() {
    let titulo_cansion = document.querySelector("voses en mi interior-seleccionado h2");
    titulo_cansion.innerHTML = "voses en mi interior";
    let caja = document.querySelector("#cansion-seleccionada img");
    caja.src = "images/porta.png";
    let desc_cansion = document.querySelector("#cansion-seleccionada p");
    desc_juego.innerHTML = "voses en mi interior de porta con santaflow del album transtorno bipolar fue publicada en 2009 que relata la historia de un joven que sufre de bullyng escolar el cual con el paso del tiempo lo vuelve loco y crea un insendio en su aula de clases";
  }

  function cambiar_Dante_Titeres() {
    let titulo_cansion = document.querySelector("#cansion-seleccionada h2");
    titulo_cansion.innerHTML = "titeres";
    let caja = document.querySelector("#cansion-seleccionada img");
    caja.src = "images/Dante.png";
    let desc_cansion = document.querySelector("#cansion-seleccionada p");
    desc_cansion.innerHTML = "la cansion del artista Dante titeres fue lansada en 2020 sobre un tema de critica direscta a la sosiedad y politica actual";
  }

  function cambiar_interpuesto_Quien_te_cantara() {
    let titulo_cansion = document.querySelector("#cansion-seleccionado h2");
    titulo_cansion.innerHTML = "Quien te cantara";
    let caja = document.querySelector("#cansion-seleccionado img");
    caja.src = "images/quien te cantara.jpg";
    let desc_cansion = document.querySelector("#cansion-seleccionado p");
    desc_cansion.innerHTML = "la cancion de interpuesto quien te cantara es del album Fantasma Electrico su fecha de lanzamiento fue en 2014. ";
  }
  /*
  arreglo.length        Cantidad de elementos
  arreglo.push()        Agregar al final del arreglo
  arreglo.unshift()     Agregar al inicio del arreglo
  arreglo.pop()         Eliminar el último elemento del arreglo
  arreglo.shift()       Eliminar el primer elementos del arreglo
*/
let cansiones = ["Voses en mi interior", "Titeres", "Quien te cantara", "En boca de tantos", "las dos caras", "las cartas sobre la mesa", "palabras mudas", "hay siempre un sentimiento muerto en un corazon roto", "Fantasma enamorado", "Cinismo"];
cansion[4] = "Battlefield";
cansion.unshift("Doom");
cansion.push("las cartas sobre la mesa");

let contenedor = document.getElementById("cansiones-lista");

for(let i = 0; i < cansiones.length; i++) {
    contenedor.innerHTML += "<button>" + cansiones[i] + "</button>";
  }