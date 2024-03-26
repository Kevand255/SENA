// 1.	Cree un algoritmo que imprima los números del 0 hasta el n ingresado por el
// usuario, para esto deberá aplicar cada ciclo expuesto, compárelo y explíquelo.

function dataUser(numberUser) {
    let numUser = numberUser
    console.log("-for-")
    for (let i = 0; i < numUser+1 ; i++) {
        console.log(i)
        salidaIzquierda.innerHTML = i
    } 
    console.log("-while-")
    let controller = 0
    while ( controller < numUser+1 ) {
        console.log(controller)
        controller++
    }
    console.log("-do while-")
    let controller2 = 0
    do {
        console.log(controller2)
        controller2++
    } while (controller2 < numUser+1);
}

// dataUser(parseInt(prompt(("ingrese un numero"))))

// ---------------------------------------------------------------------

// 2.	Cree una clase donde desarrolle un programa que permita obtener
// la suma de los primeros 10 números naturales, esto debe realizarse
// usando los 3 ciclos explicados anteriormente, verifique el funcionamiento y compárelos.

function addNumberNatural() {
    let add=0
    let addWhile = 0
    let addtwo = 0
    let att = 0
    let newAdd = 0
    console.log("-for-")
    for (let i = 0; i < 11; i++) {
        add +=i
    }
    
    console.log(add);
    console.log("-while-")
    while (addtwo<=10) {
        addWhile += addtwo
        addtwo++
    }
    console.log(addWhile)
    console.log("-do while-")
    do {
        newAdd += att
        att++
    } while (att <=10);
    console.log(newAdd)
}

// addNumberNatural()

//----------------------------------------------------

// 3.	Modifique la clase anterior para que realice la suma de los
// primeros n números naturales ingresados por el usuario.

function addMod(dataUser) {
    let dataOfUser = dataUser
    let addexe = 0
    let addexe3 = 0
    let exeadd = 0
    console.log("-for-")
    for (let i = 0; i <= dataOfUser; i++) {
        addexe+=i
    }
    console.log(addexe)
    let addexe2 = 0
    console.log("-while-")
    while (addexe2 <= dataOfUser) {
        addexe3+=addexe2
        addexe2++
    }
    console.log(addexe3)
    console.log("-do while-")
    let addexe4 = 0
    do {
        exeadd += addexe4
        addexe4++
    } while (addexe4 <= dataOfUser);
    console.log(exeadd)
}

// addMod(parseInt(prompt("ingrese un numero para sumarle sus primeros numeros naturales")))

// -----------------------------------------------------------------------------------

// 4.	Elabore un programa que imprima los números impares del  1 al 20, use el ciclo que desee.

function OddNumber() {
    let cero = 0
    let zero = 0
    console.log("-for-")
    for (let i = 1; i <= 20; i++) {
        if (i%3 == 0){
            console.log(i)
        }
    }
    console.log("-while-")
    while (cero < 20) {
        cero++
        if (cero%3 ==0){
            console.log(cero)
        }
    }
    console.log("-do while-")
    do {
        zero++
        if (zero%3 ==0){
            console.log(zero)
        }       
    } while (zero < 20);
}

// OddNumber()

//----------------------------------------------

// 5.	 Algoritmo que imprima todos los números que ingrese el usuario, si ingresa cero termine,
// haga el algoritmo con el ciclo que desee

//este bloque de codigo no tiene que ver con el entregable del taller de ciclos, solo es
//una solucion alternativa a el ejercicio numero 5 del taller

function printListNumberOpcional(){
        let list = []
    let secondDecision ;
    console.log("-while-")
    while (secondDecision != "si"   ){
        let newNum = parseInt(prompt("put a number"))
        list.push(newNum)
        let decision = prompt("do you want type another number (yes or no").toLocaleLowerCase()
        if (decision === "yes") {
            continue
        }else if(decision === "no"){
            secondDecision = prompt("do you wish print the list of numbers? (yes o no)").toLocaleLowerCase()
            if (secondDecision === "yes"){
                console.log("your list of number", list)
                break
            }else if (secondDecision=== "no"){
                console.log("finished exercise")
                break
            }else if (secondDecision != "yes"|| secondDecision != "no" ||isNaN(secondDecision)) {
                console.log("please enter a valid value")
                break
            }
        }else if(typeof(decision) || decision != "no" || decision != "yes"){
            console.log("please enter a valid value");
            break
        }
    }
}

function printListNumber () {
    let list = []
    console.log("-while-")
    while (true){
        let newNum = parseInt(prompt("put a number (press 0 to end)"))
        if (newNum === 0 ){
            console.log("your list of number:", list)
            break
        }else {
            list.push(newNum)
        }
    }   
    console.log("-do while-")
    let listDoWhile = []
    do {
        let newNumDW = parseInt(prompt("put a number (press 0 to end)"))
        if (newNumDW === 0 ){
            console.log("your list of number:", listDoWhile)
            break;
        }else {
            listDoWhile.push(newNumDW)
        }
    } while (true);
}

// printListNumber()

//----------------------------------------------------------------------------------

// 6.	Algoritmo que realice el promedio de 3 notas ingresadas por un usuario,
// este proceso debe repetirse las veces que el usuario desee.

function avarage() {
    let decision = true;
    let decision2 = true;
    let decision3 = true;
    console.log("-for-");
    for (; decision === true;) {
        let first = parseFloat(prompt("enter the firs note"));
        let second = parseFloat(prompt("enter the second note"));
        let third = parseFloat(prompt("enter the third note"));
        let promedio = (first + second + third) / 3;
        console.log("the average is: ", promedio);
        decision = confirm("do you want to get another average");
    }
    console.log("-while-");
    while (decision2 === true) {
        let first = parseFloat(prompt("enter the firs note"));
        let second = parseFloat(prompt("enter the second note"));
        let third = parseFloat(prompt("enter the third note"));
        let promedio = (first + second + third) / 3;
        console.log("the average is: ", promedio);
        decision2 = confirm("do you want to get another average");
}
    console.log("-do while-")
    do {
        let first = parseFloat(prompt("enter the firs note"));
        let second = parseFloat(prompt("enter the second note"));
        let third = parseFloat(prompt("enter the third note"));
        let promedio = (first + second + third) / 3;
        console.log("the average is: ", promedio);
        decision3 = confirm("do you want to get another average");
    } while (decision3 === true);

}   

// avarage()

//-------------------------------------------------------------------------------------------

// 7.	Cree un algoritmo que imprima los primeros  10 resultados de la tabla del 5,
// usando para esto el ciclo while.

function tableOf5() {
    let counter = 0
    console.log("-for-");
    for (let counter = 1; counter <= 10; counter++) {
    let table = counter * 5;
    console.log(counter, "* 5 = ", table);
    }
    console.log("-while-")
    let counter2 = 0
    while(counter2 < 10){
        counter2++
        let table = counter2 * 5
        console.log(counter2 ,"* 5 = " ,table)
    }
    console.log("-do-while-");
    let counter1 = 0;
    do {
    counter1++;
    let table = counter1 * 5;
    console.log(counter1, "* 5 = ", table);
} while (counter1 < 10);    
}

// tableOf5()

//------------------------------------------------------------------------------------------------------

// 8.	Cree un algoritmo que imprima la tabla del número que ingrese
// el usuario, usando para esto el ciclo for, el número de resultados
// también debe ser definido por el usuario.

function tableNumberX (){
    console.log("-for-")
    let numberTable = parseInt(prompt("enter a number to print your multiplication table"))
    let numberMax = parseInt(prompt("up to what number do you want to be printed"))
    for (let i = 1; i <= numberMax; i++) {
        let tableOfNumberTable = i * numberTable
        console.log(i ," * " ,numberTable ," = " ,tableOfNumberTable )
    }
    console.log("-while-");
    let yo = 1;
    while (yo <= numberMax) {
        let tableOfNumberTable = yo * numberTable;
        console.log(yo, " * ", numberTable, " = ", tableOfNumberTable);
        yo++;
    }
    console.log("-do while-");
    let me = 1;
    do {
        let tableOfNumberTable = me * numberTable;
        console.log(me, " * ", numberTable, " = ", tableOfNumberTable);
        me++;
    } while (me <= numberMax);

}

// tableNumberX()

let solution = parseInt(prompt("enter the number of the exercise you want to execute (1 - 8)"))

switch (solution) {
    case 1:
        dataUser(parseInt(prompt(("enter a number"))));
        break;
    case 2:
        addNumberNatural();
        break;
    case 3:
        addMod(parseInt(prompt("enter a number to add your first natural number")));
        break;
    case 4:
        OddNumber();
        break;
    case 5:
        printListNumber();
        break;
    case 6:
        avarage();
        break;
    case 7:
        tableOf5();
        break;
    case 8:
        tableNumberX();
        break;
    default:
        break;
}