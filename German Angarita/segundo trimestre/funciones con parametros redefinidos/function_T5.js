// Crea una función llamada verificarEdadConducir que tome la edad como parámetro, con un valor por defecto de 18. 
// La función debe devolver un mensaje indicando si la persona es lo suficientemente mayor para conducir.

function verificarEdadConducir(edad = 18) {
    if (edad >= 18){
        console.log("eres lo suficiente mayor para conducir ")
    }
    else if (edad <= 17){
        console.log("no eres lo suficiente mayor para conducir")
    }
}

verificarEdadConducir