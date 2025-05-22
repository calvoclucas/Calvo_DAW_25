//Ejercicio 3 a
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
             "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log("Mes 5:", meses[4]);   
console.log("Mes 11:", meses[10]);

//Ejercicio 3 b
meses.sort();
console.log(meses);

//Ejercicio 3 c
meses.unshift("Mes inicial");
meses.push("Mes final");
console.log(meses);

//Ejercicio 3 d
var elementoDltInicio = meses.shift();
var elementoDltFinal = meses.pop();
console.log(meses);
console.log("Elemento eliminado al principio:", elementoDltInicio);
console.log("Elemento eliminado al final:", elementoDltFinal);

//Ejercicio 3 e
meses.reverse();
console.log(meses);

//Ejercicio 3 f
var mesesUnidos = meses.join("-");
console.log(mesesUnidos);

//Ejercicio 3 g
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
             "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var copiaMeses = meses.slice(4, 11);
console.log(copiaMeses);
