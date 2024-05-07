
// Crea una función llamada saludar que tome el nombre y el saludo como parámetros, 
// con un valor por defecto de "Hola" para el saludo. La función debe devolver el saludo con el nombre dado.

function saludar(nombre, saludo= "hola ") {
    saludoResultado = saludo + nombre;
    return console.log(saludoResultado);
}

saludar(prompt())