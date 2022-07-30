/*
  Programa que verifica si un número es:
  Positivo, Negativo o Neutro (0)
*
/*
  Programa que verifica si un número es:
  Positivo, Negativo o Neutro (0)
*/

if(numero == 0) { // Checar si el número es neutro
    resultado += "Neutro";
  } else if(numero >= 1) { // Checar si el número es positivo
    resultado += "Positivo";
  } else if(numero < 0) {
    resultado += "Negativo";
  }

  console.log(resultado);