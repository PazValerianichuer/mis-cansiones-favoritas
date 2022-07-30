/*
  Venta de boletos de cine
  Existen 2 formas de obtener un descuento
    1. Teniendo un cupón de descuento (50%)
    2. Siendo menor de edad o ser una persona de la tercera edad (25%)
  NOTA: Solamente puede aplicar un descuento
  Cada boleto cuesta: $75
*/

// Encontrar elementos necesarios del HTML
const el_edad = document.getElementById("edad");
const el_cupon_si = document.getElementById("cupon-1");
const el_total = document.getElementById("total");

// Información del cine
const precio_boleto = 75;
const precio_cupon = precio_boleto / 2; // 50% de descuento (37.5)
const precio_edad = precio_boleto * 0.75 // 25% de descuento (56.25)
let precio_total = 0;

function calcular() {
    // Obtener información del usuario
    let tiene_cupon = el_cupon_si.checked;
    let edad = el_edad.value;
    // Aplicar descuento
    if(tiene_cupon == true) { // ¿Tiene cupon?
      precio_total = precio_cupon;
    } else if(edad < 18 || edad >= 70) { //  ¿Es menor de edad o de la tercera edad (70)?
      precio_total = precio_edad;
    } else { // Si no cumple ningúna condición
      precio_total = precio_boleto;
    }
    // Mostrar resultado
    el_total.innerHTML = "Total: $" + precio_total;
  }