let num1 ;
let num2 ;

num1 = parseInt(prompt("ingrese el primer numero"));
num2 = parseInt(prompt("ingrese el segundo numero"));

let suma = num1 + num2;

console.log("el valor de la suma es "+ suma);

let salida = document.querySelector("#cajaDeSalida");
salida.innerHTML = `la suma de ${num1} y ${num2} es ${suma}`;