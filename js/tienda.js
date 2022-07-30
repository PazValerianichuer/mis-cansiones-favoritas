/*
  Programa para calcular el total de venta de videojuegos
  Al comprar 5 o más juegos te hacemos un descuento de $200
*/

// Crear variables
const precio_juego = 200;
let cantidad = 5;

// Calcular el total
let total = cantidad * precio_juego;

// Aplicar descuento
if(cantidad >= 5) {
    total -= 200;
  }

  // Mostrar el total en consola
console.log("Total: $" + total);