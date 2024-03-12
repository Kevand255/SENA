let numero = parseInt(prompt(console.log("ingrese el numero del que se sacara la tabla de multiplicar")));
let salida = document.querySelector("#salidadenumero");
let almacenador = 0
for (let i = 1; i <=10; i++) {
    let operacion = numero * i ;
    let almacenador = `${numero} * ${i} = ${operacion}`
    salida.innerHTML+=`${almacenador} <br> <br>`;
}


// let salida = document.querySelector("#salidadenumero");
// salida.innerHTML= `${numero} * ${i} = ${operacion}`;