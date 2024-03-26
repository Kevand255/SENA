let asientos = 25;
let pasajerosActuales = 0;
let dinero = 0;
let paradas = 5;
let pasajerosTotales = 0;

function pasajerosAleatorios() {
    return Math.floor(Math.random() * (asientos - pasajerosActuales + 1));
}

for (let i = 0; i < paradas; i++) {
    let pasajeros;
    if (i === 0) {
        pasajeros = Math.min(pasajerosAleatorios(), asientos - pasajerosActuales);
        pasajerosActuales += pasajeros;
        pasajerosTotales += pasajeros;
        dinero += pasajeros * 3000;
        console.log("Parada " + (i + 1) + ": Suben " + pasajeros + " pasajeros");
    } else if (i === paradas - 1) {
        pasajeros = pasajerosActuales;
        pasajerosActuales -= pasajeros;
        console.log("Parada " + (i + 1) + ": Bajan todos los pasajeros");
    } else {
        pasajeros = Math.min(pasajerosAleatorios(), pasajerosActuales);
        pasajerosActuales -= pasajeros;
        console.log("Parada " + (i + 1) + ": Bajan " + pasajeros + " pasajeros");
        pasajeros = Math.min(pasajerosAleatorios(), asientos - pasajerosActuales);
        pasajerosActuales += pasajeros;
        pasajerosTotales += pasajeros;
        dinero += pasajeros * 3000;
        console.log("Parada " + (i + 1) + ": Suben " + pasajeros + " pasajeros");
    }
}
        
console.log(dinero);
console.log(pasajerosTotales);