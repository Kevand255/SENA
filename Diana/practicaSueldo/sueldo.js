
let claveEmpleado = parseInt(prompt("ingrese su clave de empleado"));
let horasTrabajadas = parseInt(prompt("ingrese las horas que trabajo"));
let valorHoras = parseInt(prompt("ingrese el pago por hora trabajada"));

let sueldoEmpleado = horasTrabajadas * valorHoras;
console.log(`el sueldo que le corresponde es de: ${sueldoEmpleado}`)
// let salidad = document.querySelector("#salidaTexto");
// salida.innerHTML= `el sueldo que le corresponde es de: ${sueldoEmpleado}`;

let salida = document.querySelector("#salidaTexto").innerHTML= `el sueldo que le corresponde es de: ${sueldoEmpleado}`