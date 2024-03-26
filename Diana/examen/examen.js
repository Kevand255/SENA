// desarrolle un programa en js usando todos los conceptos vistos hasta hoy:
// que lea como dato de entrada su numero de cedula, su primer nombre y determine las siguietes salidas:
// 1)calcule cual es la mita del numero de mi cedula
// 2) halle los multiplos para cada uno de los digitos de su cedula como resultado de mutliplicar cada
// digito de su cedula por los primeros 3 numeros entreros
// 3)determine si su numero de cedula es divisible por 2, 3 y 5
// 4)imprima su nombre pasando cada letra de este a la siguiente codificacion



let cedulaNumero = parseInt((prompt("ingrese el numero de su cedula")));
// let listaCedula = [cedula];
let nombre = prompt("ingrese su primer nombre").toLowerCase();




// // 1)calcule cual es la mita del numero de mi cedula
let mitadCedula = cedulaNumero / 2;
console.log(mitadCedula);

// 2) halle los multiplos para cada uno de los digitos de su cedula como resultado de mutliplicar cada
// digito de su cedula por los primeros 3 numeros entreros



let cedula = cedulaNumero.toString()
lista = []
for (let i = 0; i < cedula.length; i++) {
    lista.push(cedula[i])
    console.log("multiplos de 2")
    console.log(lista[i]*2)
    console.log("multiplos de 3")
    console.log(lista[i]*3)
    console.log("multiplos de 5")
    console.log(lista[i]*5)
    console.log("-------")

}
// 3)determine si su numero de cedula es divisible por 2, 3 y 5

if (cedulaNumero%2 ==0 || cedulaNumero%3==0 || cedulaNumero%5==0){
    console.log("su cedula es divisible por 2, 3, y 5")
}else if ( cedulaNumero%2==0|| cedulaNumero%3==0){
    console.log("su cedula es divisible por 2 y 3 ")
}else if(cedulaNumero%3==0||cedulaNummero%5==0){
    console.log("su cedula es divisible por 3 y 5")
}else if (cedulaNumero%2==0||cedula%5==0){
    console.log("su cedula es divisible por 2 y 5")
}else{
    console.log("su cedula no es divisible por 2, 3 y 5")
}

// 4)imprima su nombre pasando cada letra de este a la siguiente codificacion


let nombreCambiado = nombre.replace(/a/g, 1)
let nombreCambiado2 = nombreCambiado.replace(/b/g, 2)
let nombreCambiado3 = nombreCambiado2.replace(/b/g , 2)
let nombreCambiado4 = nombreCambiado3.replace(/c/g , 3)
let nombreCambiado5 = nombreCambiado4.replace(/d/g , 4)
let nombreCambiado6 = nombreCambiado5.replace(/e/g , 5)
let nombreCambiado7 = nombreCambiado6.replace(/f/g , 6)
let nombreCambiado8 = nombreCambiado7.replace(/g/g , 7)
let nombreCambiado9 = nombreCambiado8.replace(/h/g , 8)
let nombreCambiado10 = nombreCambiado9.replace(/i/g , 9)
let nombreCambiado11 = nombreCambiado10.replace(/j/g , 10)
let nombreCambiado12 = nombreCambiado11.replace(/k/g , 11)
let nombreCambiado13 = nombreCambiado12.replace(/l/g , 12)
let nombreCambiado14 = nombreCambiado13.replace(/m/g , 13)
let nombreCambiado15 = nombreCambiado14.replace(/n/g , 14)
let nombreCambiado16 = nombreCambiado15.replace(/r/g , 15)
let nombreCambiado17 = nombreCambiado16.replace(/o/g , 16)
let nombreCambiado18 = nombreCambiado17.replace(/p/g , 17)
let nombreCambiado19 = nombreCambiado18.replace(/q/g , 18)
let nombreCambiado20 = nombreCambiado19.replace(/r/g , 19)
let nombreCambiado21 = nombreCambiado20.replace(/s/g , 20)
let nombreCambiado22 = nombreCambiado21.replace(/t/g , 21)
let nombreCambiado23 = nombreCambiado22.replace(/u/g , 22)
let nombreCambiado24 = nombreCambiado23.replace(/v/g , 23)
let nombreCambiado25 = nombreCambiado24.replace(/w/g , 24)
let nombreCambiado26 = nombreCambiado25.replace(/x/g , 25)
let nombreCambiado27 = nombreCambiado26.replace(/y/g , 26)
let nombreFinal = nombreCambiado27.replace(/z/g , 27)




console.log(nombreFinal)