
// Cree un programa que lea un número y muestre si éste es divisible entre cinco o no.
//---------------------------------------
function validacion(numero) {
    if (numero % 5 == 0){
        return true;
    } else{
    return false;
    }
}
//---------------------------------------
function validacionNumero(numero) {
    if (isNaN(numero)){
        return false;
    } else {
    return true;
    }
}
//---------------------------------------
function divisibleCinco (numero){
    if (validacionNumero(numero) == true && validacion(numero)== true){
        console.log("si es divicible entre 5");
    }else if(validacionNumero(numero) == true && validacion(numero) == false){
        console.log("no es divicible");
    }else {
        console.log("no es numero");
    }
}
//---------------------------------------s
divisibleCinco()