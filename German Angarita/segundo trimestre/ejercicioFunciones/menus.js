
export function menuPricipal(){
let eleccionPrincipal = parseInt(prompt(`Bienvenid@ a nuestra aplicacion cientifica
Digite,
1) Para convertir unidades de longitud.
2) Para operaciones aritmeticas.
3) Para convertir unidades de tiempo. 

0) Para salir.`))
switch (eleccionPrincipal){
    case 1:
        menuConversionesLongitud()
        break
    case 2:
        menuAritmeticas()
        break
    case 3: 
        menuUnidadesTiempo()
        break
    case 0:
        alert(`Gracias por usar la aplicacion cientifica`)
    default:
        alert("ingrese un valor valido")
}
}

export function menuConversionesLongitud() {
let eleccionLongitud = parseFloat(prompt(`Digite, 
1 para milimetro a centimetros
2 Para centimetros a milimetros
3 Para centimetros a metros
4 Para centimetros a pulgadas
5 para metros a centimetros
6 Para metros a kilometros
7 Para kilometros a metros
8 Para pulgadas a pies
9 Para pies a pulgadas

0 para devolverse`))

switch (eleccionLongitud){
    case 0:
        menuPricipal()
    default:
        return eleccionLongitud
}

}

export function menuRespuesta() {
    let eleccionRespuesta = parseFloat(prompt(`
    digite, 
    1 para convertir nuevamente
    2 para volver a el menu pricipal
    3 para salir`))
    return eleccionRespuesta
}

export function menuUnidadesTiempo() {
let eleccionTiempo = parseFloat(prompt(`digite,
1 Para minutos a segundos 
2 Para minutos a horas
3 Para horas a minutos
4 Para dias a horas
5 Para semanas a meses
6 Para meses a años
7 Para años a meses


0 para devolverse`))

switch(eleccionTiempo){
    case 0:
        menuPricipal()
    default:
        return eleccionTiempo
}

}


export function menuAritmeticas () {
let eleccionAritmeticas = parseFloat(prompt(`digite, 
1 Para sumar 
2 Para restar
3 Para multiplicar 
4 Para divir 

0 para devolverse`))

switch(eleccionAritmeticas){
    case 0:
        menuPricipal()
    default:
        return eleccionAritmeticas
}
}
