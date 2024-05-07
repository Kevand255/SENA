// CREAR UN PROGRAMA QUE PIDA DOS NÚMEROS Y MUESTRE SU SUMA, SU RESTA , 
// SU MULTIPLICACIÓN Y SU DIVISIÓN, CREANDO Y LLAMANDO UNA FUNCIÓN PARA CADA OPERACIÓN.

// ----------------------------------------------------

// AGREGAR AL PROGRAMA ANTERIOR, USANDO EL SCRIPT DE EJEMPLO DE VALIDACIONES, LAS VLAIDACIONES DEL CASO, 
// ES DECIR, VERIFICAR QUE a y b SEAN NÚMEROS Y, ADEMÁS, GARANTIZAR QUE NO SE VA A 
// TRATAR DE HACER UNA DIVIÓN ENTRE 0

// ----------------------------------------------------
/*
* @param {a: number} uno de los números a sumar
* @param {b: number} uno de los números a sumar
* @return {a + b: number} el resultado de sumar a y b
*/  
function suma(a,b) {
return a + b;
}

/*
* @param {a: number} uno de los números a restar
* @param {b: number} uno de los números a restar
* @return {a - b: number} el resultado de restar a y b
*/
function resta(a,b) {
    return a - b;
}

/*
* @param {a: number} uno de los números a multiplicar
* @param {b: number} uno de los números a multiplicar
* @return {a * b: number} el resultado de multiplicar a y b
*/
function multiplicacion (a, b){
    return a * b;
}

/*
* @param {a: number} uno de los números a dividir
* @param {b: number} uno de los números a dividir
* @return {a / b: number} el resultado de dividir a y b
*/
function division (a , b) {
    if (b !== 0) {
        return console.log("el resultado de su division es: " , a / b);
    } else {
        console.log("el resultado de su division es: infinito (∞)");
    }
}

function validacion (a,b){
    if ( isNaN(a)){
        return console.log("a no tiene un valor valido")
    } else if(isNaN(b))  {
        return console.log("b no tiene un valor valido")
    } 
    else{
        console.log("El resultado de su suma es:", suma(a, b));
        console.log("El resultado de su resta es:", resta(a, b));
        console.log("El resultado de su multiplicacion es:", multiplicacion(a, b));
        division(a, b);
    }
}


validacion(parseFloat(prompt("ingrese el primer valor")), parseFloat(prompt("ingrese el segundo valor")));