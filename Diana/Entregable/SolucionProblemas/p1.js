function validadorTriangulos(a1, a2, a3) {
    if (a1 + a2 + a3== 180) {
        
        return true;
    }
    return false;
}

function validadorAngulos(angulo1 , angulo2 , angulo3) {
    if ((typeof angulo1 === "number" && angulo1 >0) && (typeof angulo2 === "number" && angulo2 >0) && (typeof angulo3 === "number" && angulo3 >0 && validadorTriangulos(angulo1,angulo2,angulo3) == true) ) {
        return true;
    }
    return false;

}


let resultado =  validadorAngulos (60,60,60);


if (resultado === false){
    console.log(`El triangulo no existe`);
}else{
    console.log(`El triangulo existe`);
}

