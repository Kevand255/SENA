let salidaIzquierda = document.querySelector("#izquierda")
let salidaMedio = document.querySelector("#medio")
let salidaDerecha = document.querySelector("#derecha")

// 1.	Cree un algoritmo que imprima los números del 0 hasta el n ingresado por el 
// usuario, para esto deberá aplicar cada ciclo expuesto, compárelo y explíquelo.

export function dataUser(numberUser) {
    let numUser = numberUser
    for (let i = 0; i < numUser+1 ; i++) {
    console.log(i)
    salidaIzquierda.innerHTML = i 
    }
    let controller = 0
    while ( controller < numUser+1 ) {
        console.log(controller)
        salidaMedio.innerHTML = controller
        controller++
    }
    do {
        console.log(controller)
        salidaDerecha.innerHTML= controller
        controller++
    } while (controller < numUser+1);
}

// dataUser(parseInt(prompt(("ingrese un numero"))))

// ---------------------------------------------------------------------

// 2.	Cree una clase donde desarrolle un programa que permita obtener 
// la suma de los primeros 10 números naturales, esto debe realizarse 
// usando los 3 ciclos explicados anteriormente, verifique el funcionamiento y compárelos.

export function addNumberNatural() {
    let add=0
    let addWhile = 0 
    for (let i = 0; i < 11; i++) {
        add +=i
    }
    console.log(add);
    while (add<=10) {
        addWhile += add
        add++
    }
    console.log(addWhile)
    do {
        addWhile += add
        add++
    } while (add <=10);
    console.log(addWhile)
}

// addNumberNatural()

//----------------------------------------------------

// 3.	Modifique la clase anterior para que realice la suma de los 
// primeros n números naturales ingresados por el usuario.

export function addMod(dataUser) {
    let dataOfUser = dataUser
    let addexe = 0
    for (let i = 0; i <= dataOfUser; i++) {
        addexe+=i
    }
    console.log(addexe)
    let addexe2 = 0
    while (addexe2 <= dataOfUser) {
        addexe+=addexe2
        addexe2++
    }
    console.log(addexe)
    do {
        addexe += addexe2
        addexe2++
    } while (addexe2 <= dataOfUser);
    console.log(addexe)
}

// addMod(parseInt(prompt("ingrese un numero para sumarle sus primeros numeros naturales")))

// -----------------------------------------------------------------------------------

// 4.	Elabore un programa que imprima los números impares del  1 al 20, use el ciclo que desee.

export function OddNumber() {
    let cero = 0
    for (let i = 1; i <= 20; i++) {
        if (i%3 == 0){
            console.log(i)
        }
    }
    while (cero < 20) {
        cero++
        if (cero%3 ==0){
            console.log(cero)
        }
    }
    do {
        cero++
        if (cero%3 ==0){
            console.log(cero)
        }
    } while (cero < 20);
}

// OddNumber()

//----------------------------------------------

// 5.	 Algoritmo que imprima todos los números que ingrese el usuario, si ingresa cero termine, 
// haga el algoritmo con el ciclo que desee

//este bloque de codigo no tiene que ver con el entregable del taller de ciclos, solo es 
//una solucion alternativa a el ejercicio numero 5 del taller

export function printListNumberOpcional(){
        let list = []
    let secondDecision ;
    while (secondDecision != "si"   ){
        let newNum = parseInt(prompt("ingrese un numero"))
        list.push(newNum)
        let decision = prompt("desea ingresar mas numeros? (si o no)").toLocaleLowerCase()
        if (decision === "si") {
            continue
        }else if(decision === "no"){
            secondDecision = prompt("desea imprimir los numeros que ha ingresado hasta el momento? (si o no)").toLocaleLowerCase()
            if (secondDecision === "si"){
                console.log("su lista de numeros ingresados:", list)
                break
            }else if (secondDecision=== "no"){
                console.log("aca termina el ejercicio")
                break
            }else if (secondDecision != "si"|| secondDecision != "no" ||isNaN(secondDecision)) {
                console.log("ingrese un valor valido")
                break
            }
        }else if(typeof(decision) || decision != "no" || decision != "si"){
            console.log("ingrese un valor valido");
            break
            
        }
    }
}

export function printListNumber (){
    let list = []
    while (true){
        let newNum = parseInt(prompt("ingrese un numero (precione 0 para terminar)"))
        if (newNum === 0 ){
            console.log("su lista de numeros ingresados:", list)
            break
        }else {
            list.push(newNum)
        }
    }
}

// printListNumber()

//----------------------------------------------------------------------------------

// 6.	Algoritmo que realice el promedio de 3 notas ingresadas por un usuario, 
// este proceso debe repetirse las veces que el usuario desee.

export function avarage() {
    let decision = true;
    while (decision = true) {
        let firts = parseFloat(prompt("ingrese la primer nota"))
        let second = parseFloat(prompt("ingrese la segunda nota"))
        let third = parseFloat(prompt("ingrese la tercer nota"))
        let promedio = (firts + second + third)/3
        console.log("el promedio es: ", promedio)

        decision = confirm("desea volver a sacar otro promedio?")
    }
}

// avarage()

//-------------------------------------------------------------------------------------------

// 7.	Cree un algoritmo que imprima los primeros  10 resultados de la tabla del 5, 
// usando para esto el ciclo while.

export function tableOf5() {
    let counter = 0 
    while(counter < 10){
        counter++
        let table = counter * 5
        console.log(counter ,"* 5 = " ,table)
    }
}

// tableOf5()

//------------------------------------------------------------------------------------------------------

// 8.	Cree un algoritmo que imprima la tabla del número que ingrese 
// el usuario, usando para esto el ciclo for, el número de resultados 
// también debe ser definido por el usuario.

export function tableNumberX (){
    let numberTable = parseInt(prompt("ingrese un numero para imprimir su tabla de multiplicacion"))
    let numberMax = parseInt(prompt("hasta que numero quiere que se imprima la tabla"))
    for (let i = 1; i <= numberMax; i++) {
        let tableOfNumberTable = i * numberTable
        console.log(i ," * " ,numberTable ," = " ,tableOfNumberTable )
    }
}

// tableNumberX()