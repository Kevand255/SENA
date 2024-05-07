// Crea una función llamada calcularAreaTriangulo que tome la base y la altura como parámetros, 
// con un valor por defecto de 1 para ambos. La función debe devolver el área del triángulo.

function validacionArea (numero){
    if (isNaN(numero) && numero <=0){
        console.log(`el numero es ivalido.`)
    }else { 
        console.log('si es un numero valido');
    }
}

function calcularAreaTrianngulo (base= 1 , altura = 1){
    areaTriangulo =  (base * altura) / 2
    return console.log("el area del triangulo es: " + areaTriangulo);
}

calcularAreaTrianngulo()