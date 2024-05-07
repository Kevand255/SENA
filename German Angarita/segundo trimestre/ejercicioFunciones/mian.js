import { centimetroMetro } from "./unidadesLongitud.js"; import { centimetroMilimetro } from "./unidadesLongitud.js"; import { centimetroPulgada } from "./unidadesLongitud.js"; import { kilometroMetro } from "./unidadesLongitud.js"; import { metroCentimetro } from "./unidadesLongitud.js"; import { metroKilometro } from "./unidadesLongitud.js"; import { piePulgada } from "./unidadesLongitud.js"; import { pulgadaPie } from "./unidadesLongitud.js"; import { milimetrosCentimetro } from "./unidadesLongitud.js"; import { añosMeses } from "./unidadesTiempo.js"; import { diasHoras } from "./unidadesTiempo.js"; import { horasMinutos } from "./unidadesTiempo.js"; import { mesesAños } from "./unidadesTiempo.js"; import { minutosHoras } from "./unidadesTiempo.js"; import { minutosSegundos } from "./unidadesTiempo.js"; import { semanasMeses } from "./unidadesTiempo.js"; import { dividir } from "./operacionesAritmeticas.js"; import { multiplicar } from "./operacionesAritmeticas.js"; import { restar } from "./operacionesAritmeticas.js"; import { sumar } from "./operacionesAritmeticas.js"; import { menuAritmeticas } from "./menus.js"; import { menuConversionesLongitud } from "./menus.js"; import { menuPricipal } from "./menus.js"; import { menuUnidadesTiempo } from "./menus.js"; import { menuRespuesta } from "./menus.js";

let bucle = true
while (bucle == true) {
    let varMenuPricipal = menuPricipal()
        let repeticionOperacion = true
        while (repeticionOperacion == true) {
    if ( varMenuPricipal == 1){
            let varMenuConversionesLongitud = menuConversionesLongitud()
            if (varMenuConversionesLongitud == 1){
                let cantidad = parseFloat(prompt( "digite la cantidad de milimetros para convertir"))
                let respuesta = parseFloat(prompt(`${cantidad} milimetros son ${milimetrosCentimetro(cantidad)} centimetros ${menuRespuesta()}`))
                if(respuesta == 1){ repeticionOperacion = true } else if (respuesta == 2){ repeticionOperacion = false , bucle = true }else{ repeticionOperacion = false , bucle = false }
            }else if(varMenuConversionesLongitud == 2){
                let cantidad = parseFloat(prompt( "digite la cantidad de centimetros para convertir"))
                let respuesta = parseFloat(prompt(`${cantidad} centimetros son ${centimetroMilimetro(cantidad)} milimetros ${menuRespuesta()}`))
                if(respuesta == 1){ repeticionOperacion = true } else if (respuesta == 2){ repeticionOperacion = false , bucle = true }else{ repeticionOperacion = false , bucle = false }
            }else if(varMenuConversionesLongitud == 3){
                let cantidad = parseFloat(prompt( "digite la cantidad de centimetros para convertir"))
                let respuesta = parseFloat(prompt(`${cantidad} centimetros son ${centimetroMetro(cantidad)} metros ${menuRespuesta()}`))
                if(respuesta == 1){ repeticionOperacion = true } else if (respuesta == 2){ repeticionOperacion = false , bucle = true }else{ repeticionOperacion = false , bucle = false }
            }else if(varMenuConversionesLongitud == 4){
                let cantidad = parseFloat(prompt( "digite la cantidad de centimetros para convertir"))
                let respuesta = parseFloat(prompt(`${cantidad} centimetros son ${centimetroPulgada(cantidad)} pulgadas ${menuRespuesta()}`))
                if(respuesta == 1){ repeticionOperacion = true } else if (respuesta == 2){ repeticionOperacion = false , bucle = true }else{ repeticionOperacion = false , bucle = false }
            }else if(varMenuConversionesLongitud == 5){
                let cantidad = parseFloat(prompt( "digite la cantidad de metros para convertir"))
                let respuesta = parseFloat(prompt(`${cantidad} metros son ${metroCentimetro(cantidad)} centimetros ${menuRespuesta()}`))
                if(respuesta == 1){ repeticionOperacion = true } else if (respuesta == 2){ repeticionOperacion = false , bucle = true }else{ repeticionOperacion = false , bucle = false }
            }else if(varMenuConversionesLongitud == 6){
                let cantidad = parseFloat(prompt( "digite la cantidad de metros para convertir"))
                let respuesta = parseFloat(prompt(`${cantidad} metros son ${metroKilometro(cantidad)} kilometros ${menuRespuesta()}`))
                if(respuesta == 1){ repeticionOperacion = true } else if (respuesta == 2){ repeticionOperacion = false , bucle = true }else{ repeticionOperacion = false , bucle = false }
            }else if(varMenuConversionesLongitud == 7){
                let cantidad = parseFloat(prompt( "digite la cantidad de kilometros para convertir"))
                let respuesta = parseFloat(prompt(`${cantidad} kilometros son ${kilometroMetro(cantidad)} metros ${menuRespuesta()}`))
                if(respuesta == 1){ repeticionOperacion = true } else if (respuesta == 2){ repeticionOperacion = false , bucle = true }else{ repeticionOperacion = false , bucle = false }
            }else if(varMenuConversionesLongitud == 8){
                let cantidad = parseFloat(prompt( "digite la cantidad de pulgadas para convertir"))
                let respuesta = parseFloat(prompt(`${cantidad} pulgadas son ${pulgadaPie(cantidad)} pies ${menuRespuesta()}`))
                if(respuesta == 1){ repeticionOperacion = true } else if (respuesta == 2){ repeticionOperacion = false , bucle = true }else{ repeticionOperacion = false , bucle = false }
            }else if(varMenuConversionesLongitud == 9){
                let cantidad = parseFloat(prompt( "digite la cantidad de pies para convertir"))
                let respuesta = parseFloat(prompt(`${cantidad} pies son ${piePulgada(cantidad)} pulgadas ${menuRespuesta()}`))
                if(respuesta == 1){ repeticionOperacion = true } else if (respuesta == 2){ repeticionOperacion = false , bucle = true }else{ repeticionOperacion = false , bucle = false }
            }
            else if (varMenuConversionesLongitud == 0){
                repeticionOperacion = false 
                bucle = true
            }else {
                alert (`ingrese un valor valido`)
            }
    }else if(varMenuPricipal == 2){
            let varMenuAritmeticas = menuAritmeticas()
            if (varMenuAritmeticas == 1){
                let primerNumero = parseFloat(prompt("ingrese el primer numero para la operacion"))
                let segundoNumero = parseFloat(prompt("ingrese el segundo numero para la operacion"))
                let respuesta = parseFloat(prompt(`${primerNumero} + ${segundoNumero} = ${sumar(primerNumero, segundoNumero)} ${menuRespuesta()}`))
                if(respuesta == 1){ repeticionOperacion = true } else if (respuesta == 2){ repeticionOperacion = false , bucle = true }else{ repeticionOperacion = false , bucle = false }
            }else if(varMenuAritmeticas == 2){
                let primerNumero = parseFloat(prompt("ingrese el primer numero para la operacion"))
                let segundoNumero = parseFloat(prompt("ingrese el segundo numero para la operacion"))
                let respuesta = parseFloat(prompt(`${primerNumero} - ${segundoNumero} = ${restar(primerNumero, segundoNumero)} ${menuRespuesta()}`))
                if(respuesta == 1){ repeticionOperacion = true } else if (respuesta == 2){ repeticionOperacion = false , bucle = true }else{ repeticionOperacion = false , bucle = false }
            }else if(varMenuAritmeticas == 3){
                let primerNumero = parseFloat(prompt("ingrese el primer numero para la operacion"))
                let segundoNumero = parseFloat(prompt("ingrese el segundo numero para la operacion"))
                let respuesta = parseFloat(prompt(`${primerNumero} * ${segundoNumero} = ${multiplicar(primerNumero, segundoNumero)} ${menuRespuesta()}`))
                if(respuesta == 1){ repeticionOperacion = true } else if (respuesta == 2){ repeticionOperacion = false , bucle = true }else{ repeticionOperacion = false , bucle = false }
            } else if(varMenuAritmeticas == 4){
                let primerNumero = parseFloat(prompt("ingrese el primer numero para la operacion"))
                let segundoNumero = parseFloat(prompt("ingrese el segundo numero para la operacion"))
                let respuesta = parseFloat(prompt(`${primerNumero} / ${segundoNumero} = ${dividir(primerNumero, segundoNumero)} ${menuRespuesta()}`))
                if(respuesta == 1){ repeticionOperacion = true } else if (respuesta == 2){ repeticionOperacion = false , bucle = true }else{ repeticionOperacion = false , bucle = false }
            }else if(varMenuAritmeticas == 0){
                repeticionOperacion = false
                bucle = true
            }else{
                alert("ingrese un valor valido")
            }
        
    }else if(varMenuPricipal == 3){
        let varMenuUnidadesTiempo = menuUnidadesTiempo()
        if(varMenuUnidadesTiempo == 1){
            let cantidad = parseFloat(prompt( "digite la cantidad de minutos para convertir"))
            let respuesta = parseFloat(prompt(`${cantidad} minutos son ${minutosSegundos(cantidad)} segundos ${menuRespuesta()}`))
            if(respuesta == 1){ repeticionOperacion = true } else if (respuesta == 2){ repeticionOperacion = false , bucle = true }else{ repeticionOperacion = false , bucle = false }
        }else if(varMenuUnidadesTiempo == 2){
            let cantidad = parseFloat(prompt( "digite la cantidad de minutos para convertir"))
            let respuesta = parseFloat(prompt(`${cantidad} minutos son ${minutosHoras(cantidad)} horas ${menuRespuesta()}`))
            if(respuesta == 1){ repeticionOperacion = true } else if (respuesta == 2){ repeticionOperacion = false , bucle = true }else{ repeticionOperacion = false , bucle = false }
        }else if(varMenuUnidadesTiempo == 3){
            let cantidad = parseFloat(prompt( "digite la cantidad de horas para convertir"))
            let respuesta = parseFloat(prompt(`${cantidad} horas son ${horasMinutos(cantidad)} minutos ${menuRespuesta()}`))
            if(respuesta == 1){ repeticionOperacion = true } else if (respuesta == 2){ repeticionOperacion = false , bucle = true }else{ repeticionOperacion = false , bucle = false }
        }else if(varMenuUnidadesTiempo == 4){
            let cantidad = parseFloat(prompt( "digite la cantidad de dias para convertir"))
            let respuesta = parseFloat(prompt(`${cantidad} dias son ${diasHoras(cantidad)} horas ${menuRespuesta()}`))
            if(respuesta == 1){ repeticionOperacion = true } else if (respuesta == 2){ repeticionOperacion = false , bucle = true }else{ repeticionOperacion = false , bucle = false }
        }else if(varMenuUnidadesTiempo == 5){
            let cantidad = parseFloat(prompt( "digite la cantidad de semanas para convertir"))
            let respuesta = parseFloat(prompt(`${cantidad} semanas son ${semanasMeses(cantidad)} meses ${menuRespuesta()}`))
            if(respuesta == 1){ repeticionOperacion = true } else if (respuesta == 2){ repeticionOperacion = false , bucle = true }else{ repeticionOperacion = false , bucle = false }
        }else if(varMenuUnidadesTiempo == 6){
            let cantidad = parseFloat(prompt( "digite la cantidad de meses para convertir"))
            let respuesta = parseFloat(prompt(`${cantidad} meses son ${mesesAños(cantidad)} años ${menuRespuesta()}`))
            if(respuesta == 1){ repeticionOperacion = true } else if (respuesta == 2){ repeticionOperacion = false , bucle = true }else{ repeticionOperacion = false , bucle = false }
        }else if(varMenuUnidadesTiempo == 7){
            let cantidad = parseFloat(prompt( "digite la cantidad de años para convertir"))
            let respuesta = parseFloat(prompt(`${cantidad} años son ${añosMeses(cantidad)} meses ${menuRespuesta()}`))
            if(respuesta == 1){ repeticionOperacion = true } else if (respuesta == 2){ repeticionOperacion = false , bucle = true }else{ repeticionOperacion = false , bucle = false }
        }else if(varMenuUnidadesTiempo == 0){
            repeticionOperacion = false
            bucle = true
        }else{
            alert ("ingrese un valor valido")
        }
    }else if (varMenuPricipal == 0){
        repeticionOperacion = false
        bucle = false
    }else{
        alert("ingrese un valor valido")
    }
}
}