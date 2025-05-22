//Ejercicio 6 a

function sum(a, b) {
  return a + b;
}
var res = sum(17, 23);
console.log("El resultado de la suma es:", res);

//Ejercicio 6 b
function suma(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert("Error: uno de los parámetros no es un número");
    return NaN;
  }
  return a + b;
}
var resultado = suma(5, "hola");
console.log("Resultado:", resultado);


//Ejercicio 6 c
function validateInteger(numero) {
  return Number.isInteger(numero);
}


//Ejercicio 6 d
function suma(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert("Error: uno de los parámetros no es un número");
    return NaN;
  }

  if (!validateInteger(a)) {
    alert("Advertencia: el primer número no es entero. Se redondeará.");
    a = Math.round(a);
  }

  if (!validateInteger(b)) {
    alert("Advertencia: el segundo número no es entero. Se redondeará.");
    b = Math.round(b);
  }

  return a + b;
}

var resultado = suma(14.7, 5.1);
console.log("Resultado:", resultado);

//Ejercicio 6 e
function validateAndRound(num, paramName) {
  if (typeof num !== "number") {
    alert(`Error: ${paramName} no es un número`);
    return NaN;
  }

  if (!Number.isInteger(num)) {
    alert(`Advertencia: ${paramName} no es entero. Se redondeará.`);
    return Math.round(num);
  }

  return num;
}


function suma(a, b) {
  a = validateAndRound(a, "primer parámetro");
  b = validateAndRound(b, "segundo parámetro");

  if (isNaN(a) || isNaN(b)) {
    return NaN;
  }

  return a + b;
}

var resultado = suma(14.7, 5.1);
console.log("Resultado:", resultado);
