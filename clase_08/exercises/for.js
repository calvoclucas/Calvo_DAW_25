//Ejercicio 5 a
var palabras = ["uno", "dos", "tres", "cuatro", "cinco"];

for (var i = 0; i < palabras.length; i++) {
  alert(palabras[i]);
}

//Ejercicio 5 b
for (var i = 0; i < palabras.length; i++) {
  var palabra = palabras[i];
  var palabraModificada = palabra.substring(0, 1).toUpperCase() + palabra.substring(1).toLowerCase();
  alert(palabraModificada);
}

//Ejercicio 5 c
var sentence = "";

for (var i = 0; i < palabras.length; i++) {
  sentence += palabras[i];
  if (i < palabras.length - 1) {
    sentence += " ";
  }
}
alert(sentence);

//Ejercicio 5 d
var numeros = [];
for (var i = 0; i < 10; i++) {
  numeros.push(i);
}

console.log(numeros);
