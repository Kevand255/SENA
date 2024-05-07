//---------------------------------------
function validacionSiEsPar(numero) {
    if (numero % 2 == 0){
        return true;
    } else{
        return false;

    }
}
//---------------------------------------
function validacionSiEsNumero(numero) {
    if (isNaN(numero)){
        return false;
    } else {
    return true;
    }
}
//---------------------------------------
export function numeroParImpar(numero) {
    if (validacionSiEsNumero(numero) == true && validacionSiEsPar(numero)== true){
        console.log("es par");
    }else if(validacionSiEsNumero(numero) == true &&  validacionSiEsPar(numero) == false){
        console.log("es impar");
    }else {
        console.log("no es numero");
    }
}
//---------------------------------------
numeroParImpar()  