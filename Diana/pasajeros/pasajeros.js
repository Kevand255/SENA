function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let pasajerosSubidos = getRandomIntInclusive(0,25)
let asientosLibres = 25 - pasajerosSubidos ;
let pasajerosBajadosPrimeParada = 0;
console.log(`Primer parada: 
Pasajeros bajados: 0
Pasajeros subidos: ${pasajerosSubidos}`);




// let pasajerosBajadosParada2 = getRandomIntInclusive(0, pasajerosSubidos);
// let asientosLibresParada2 = asientosLibres + pasajerosBajadosParada2
// let pasajerosSubidosParada2 =   getRandomIntInclusive(0, asientosLibresParada2)
// let pasajerosAbordo = pasajerosSubidosParada2 + pasajerosSubidos - pasajerosBajadosParada2
// console.log(`Segunda parada: 
// Pasajeros bajados: ${pasajerosBajadosParada2}
// Pasajeros subidos: ${pasajerosSubidosParada2}`)




// let pasajerosBajadosParada3 = getRandomIntInclusive(0, pasajerosAbordo)
// let asientosLibresParada3 = (asientosLibresParada2 - pasajerosSubidosParada2) + pasajerosBajadosParada3
// let pasajerosSubidosParada3 = getRandomIntInclusive(0, asientosLibresParada3)
// console.log(`Tercer parada: 
// Pasajeros bajados: ${pasajerosBajadosParada3}
// Pasajeros subidos: ${pasajerosSubidosParada3}`)




// let pasajerosBajadosParada4 = getRandomIntInclusive(1,pasajerosSubidosParada3)
// let asientosLibresParada4 = asientosLibresParada3 + pasajerosBajadosParada4
// let pasajerosSubidosParada4 = getRandomIntInclusive(1,asientosLibresParada4)
// console.log(`Parada cuatro:
// Pasajeros bajados: ${pasajerosBajadosParada4}
// Pasajeros subidos: ${pasajerosSubidosParada4}`)




// EN LA PARADA 5 TODOS SE TIENEN QUE BAJAR

// let pasajerosBajadosParada5 = getRandomIntInclusive(1,pasajerosSubidosParada4)
// let asientosLibresParada5 = asientosLibresParada4 + pasajerosBajadosParada5
// let pasajerosSubidosParada5 = getRandomIntInclusive(1,asientosLibresParada5)
// console.log(`Parada cinco:
// Pasajeros bajados: ${pasajerosBajadosParada5}
// Pasajeros subidos: ${pasajerosSubidosParada5}`)



// let totalPasajereros = pasajerosSubidos + pasajerosSubidos   Parada2 + pasajerosSubidosParada3+pasajerosSubidosParada4+pasajerosSubidosParada5
// let dineroEnCaja = totalPasajereros*3000
// console.log(`cantidad total de pasajeros subidos: ${totalPasajereros}
// total de dinero en caja: ${dineroEnCaja}`)