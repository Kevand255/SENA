function validacionNumero(numero) {
    if (typeof numero === "number"){
        return true;
    } else {
    return false;
}
}

function validacionPar(numero) {
    if (numero % 2 == 0){
        return true;
    } else{
        return false;

    }
}

function parImpar(numero) {
    if (validacionNumero(numero) == true && validacionPar(numero)== true){
        console.log("el numero es par");
    }else if(validacionNumero(numero) == true && validacionPar(numero) == false){
        console.log("el numero es impar");
    }else {
        console.log("no es un numero");
    }
}

parImpar("j")  















