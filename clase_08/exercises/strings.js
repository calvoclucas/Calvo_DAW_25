//Ejercicio 2 a
var mens= "River Plate";
var mensMayuscula = mens.toUpperCase();
console.log(mensMayuscula);

//Ejercicio 2 b
var text = "Monumental";
var subsTexto = text.substring(0, 5);
console.log(subsTexto);

//Ejercicio 2 c
var text1 = "RiverPlate";
var subsTexto1 = text1.substring(text1.length - 3);
console.log(subsTexto1);

//Ejercicio 2 d
var text2 = "vAmos RIVER PLATE";
var resultado = text2.substring(0,1).toUpperCase() + text2.substring(1).toLowerCase();
console.log(resultado);

//Ejercicio 2 e
var frase = "Vamos River Plate";
var posicionP = frase.indexOf("P");
console.log("La posición de la primera P es:", posicionP);

//Ejercicio 2 f
var texto = "RiverPlate Libertadores";
var posEspacio = texto.indexOf(" ");
var priPalabra = texto.substring(0, 1).toUpperCase() + texto.substring(1, posEspacio).toLowerCase();
var segPalabra = texto.substring(posEspacio + 1, posEspacio + 2).toUpperCase() + texto.substring(posEspacio + 2).toLowerCase();
var res = priPalabra + " " + segPalabra;
console.log(res);
