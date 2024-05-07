/*
Función que muestra la suma de dos números.
*/

/*
 * Suma a y b
 *
 * @param {a: number} uno de los números a sumar
 * @param {b: number} uno de los números a sumar
 * @return {suma: number} el resultado de sumar a y b
*/

//acá, a y b son parámetros de la función suma, son de tipo entero
function suma(a, b) {
    let sumaNumeros = a + b;
    return sumaNumeros;
}

//llamada o invocación de la función. Siempre usamos () y si hay
//argumentos para pasar los pasamos, en este caso debemos satisfacer
//los dos parámeteos a y b
let numero1 = parseFloat(prompt("Ingrese un número"));
let numero2 = parseFloat(prompt("Ingrese un número"));
let resultado = suma(numero1, numero2);
console.log("Resultado: ", resultado);
