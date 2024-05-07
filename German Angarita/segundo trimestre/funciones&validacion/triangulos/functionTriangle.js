// Cree un programa que lea los tres ángulos internos de un triángulo y muestre 
// si los ángulos corresponden a un triángulo o no.
//---------------------------------------
let sumaAngulos = A1 + A2 + A3
//---------------------------------------
function validacionAngulos(A1, A2, A3) {
    if (isNaN(A1, A2, A3) && A1,A2,A3 <= 0){
        console.log("ingrese valores validos")
        return false;
    } else if (!validacionSuma(A1,A2,A3)){
        console.log("ingrese valores validos")
        return false;
    }
    console.log("los angulos corresponden a un triangulo")
    return true;
}
//---------------------------------------
function validacionSuma(A1, A2, A3){
    if (sumaAngulos != 180){
        console.log("ingrese valores validos")
        return false;
    }
    return true;
}
//---------------------------------------
validacionAngulos(60,60,60)
