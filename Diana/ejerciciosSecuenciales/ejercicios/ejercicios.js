let confirmacion = confirm("Desea iniciar?");
let salida = document.querySelector("#exitsBox")
do {
    let desicion = parseInt(prompt("ingrese el numero del ejercicio que quiere que se ejecute(del 1 al 28)"));
    if ( desicion > 28 || desicion < 1 | isNaN(desicion)){
        console.log('ingrese un valor valido');
        salida.innerHTML= `ingrese un valor valido`;
        break
    }else if (desicion === 1){
        console.log(`ese punto del ejercicio se encuntra resuelo en el documento de entrega`)
        salida.innerHTML = `ese punto del ejercico se encuentra resuelto en el documento de entrega`;
        break
    }else if (desicion === 2){
        const numero = 360;
        let resultado = (15 * numero )/100;
        salida.innerHTML= `el 15% de ${numero} es = ${resultado}`;
        console.log(`el 15% de ${numero} es = ${resultado}`)
        break
    }else if (desicion === 3){
        console.log('en el documento no se encuentra ningun ejercicio para realizar en el punto 3');
        salida.innerHTML='en el documento no se encuentra ningun ejercicio para realizar en el punto 3'; 
        break
    }else if (desicion === 4){
        let cantidad = parseFloat(prompt("ingerse un numero para sacarle el 15%"));
        let resultado = (cantidad * 15 ) / 100; 
        salida.innerHTML= `el 15% de ${cantidad} es ${resultado}`;
        console.log(`el 15% de ${cantidad} es ${resultado}`)
        break
    }else if (desicion === 5){
        let eleccionEjer5 = parseInt(prompt("ingrese 1 si desea averiguar su nuevo salario con un aumento del 25% o ingrese 2 si desea averiguar su salario con un porcentaje ingresado por usted"));
        if (eleccionEjer5 <0 | eleccionEjer5 >3 | isNaN(eleccionEjer5)){
            salida.innerHTML = "vuelve a seleccionar el ejercicio e ingrese una opcion valida";
            console.log("vuelve a seleccionar el ejercicio e ingrese una opcion valida");
            break
        }
        else if(eleccionEjer5 === 1){
            let salarioAnterior = parseFloat(prompt("ingrese su salario su salario"));
            let incrementoPorcentual = salarioAnterior + (salarioAnterior*25/100);
            salida.innerHTML = `su nuevo salario con el aumento del 25% es = ${incrementoPorcentual}`;
            console.log(`su nuevo salario con el aumento del 25% es = ${incrementoPorcentual}`);   
        } 
        else if (eleccionEjer5 === 2){
            let salarioDD = parseFloat(prompt("ingrese su salario"));
            let nuevoPorcentaje = parseFloat(prompt("ingrese el nuevo porcentaje para aumentarle a su nuevo salario"));
            let incrementoPDD = salarioDD +(salarioDD * nuevoPorcentaje/100);
            salida.innerHTML= `su nuevo salario con el aumento del ${nuevoPorcentaje}% es = ${incrementoPDD}`;
            console.log(`su nuevo salario con el aumento del ${nuevoPorcentaje}% es = ${incrementoPDD}`)
        }
        break
    }else if (desicion === 6){
        let sueldo = parseFloat(prompt("ingrese su suelo"));
        let horasExtras = parseInt(prompt("ingrese las horas extras trabajadas"));
        let sueldoTotal = sueldo + (horasExtras * 3000);
        salida.innerHTML= `su suelo total con ${horasExtras} horas extras trabajadas es de: ${sueldoTotal} `;
        console.log(`su suelo total con ${horasExtras} horas extras trabajadas es de: ${sueldoTotal} `);
        break
    }else if (desicion === 7){
        let costoTratamiento =  parseFloat(prompt("ingrese el costo del tratamiento"));
        let diasHopitalizado = parseInt(prompt("ingrese la cantidad de dias que fue hospitalizado"));
        let costoMedicamentos = parseFloat(prompt("ingrese el costo de los medicamentos"));
        let costoFinal = (100000*diasHopitalizado) + costoMedicamentos + costoTratamiento;
        salida.innerHTML = `el precio total de lo que debe pagarle a el hospital es de ${costoFinal}`;
        console.log(`el precio total de lo que debe pagarle a el hospital es de ${costoFinal}`);
        break
    }else if (desicion === 8){
        let baseTriangulo = parseFloat(prompt("ingrese la base del triangulo"))
        let alturaTriangulo = parseFloat(prompt("ingrese la altura del triangulo"))
        let areaTriangulo = (baseTriangulo * alturaTriangulo ) / 2
        salida.innerHTML = `el area del triangulo es: ${areaTriangulo}m²`;
        console.log( `el area del triangulo es: ${areaTriangulo}m²`);
        break
    }else if (desicion === 9){
        let valorDeA = parseInt(prompt("ingrese el valor de a"))
        let valorDeB = parseInt(prompt("ingrese el valor de b"))
        let ecuacion = valorDeA + valorDeB*2*valorDeA
        salida.innerHTML = `el valor de X es: ${ecuacion}`;
        console.log(`el valor de X es: ${ecuacion}`);
        break
    }else if (desicion === 10){
        let primerNumero = parseFloat(prompt("ingrese el primer numero"));
        let segundoNumero = parseFloat(prompt("ingrese el segundo numero"));
        let tercerNumero = parseFloat(prompt("ingrese el tercer numero"));
        let suma = primerNumero + segundoNumero + tercerNumero
        salida.innerHTML=`el valor de la suma de los tres numeros ingresados es de: ${suma}`;
        console.log(`el valor de la suma de los tres numeros ingresados es de: ${suma}`);
        break
    }else if (desicion === 11){
        let primerNumero = parseFloat(prompt("ingrese el primer numero"));
        let segundoNumero = parseFloat(prompt("ingrese el segundo numero"));
        let tercerNumero = parseFloat(prompt("ingrese el tercer numero"));
        let suma = (primerNumero + segundoNumero + tercerNumero)*2
        salida.innerHTML=`el valor de la suma de los tres numeros ingresados y multiplicado por dos es de: ${suma}`;
        console.log(`el valor de la suma de los tres numeros ingresados y multiplicado por dos es de: ${suma}`);
        break
    }else if (desicion === 12){
        let primerNota = parseFloat(prompt("ingrese la primer nota"));
        let segundaNota = parseFloat(prompt("ingrese la segunda nota"));
        let tercerNota = parseFloat(prompt("ingrese la tercer nota"));
        let promedio = (primerNota+segundaNota+tercerNota)/3
        salida.innerHTML= `el promedio de esas notas es de: ${promedio}`;
        console.log(`el promedio de esas notas es de: ${promedio}`);
        break
    }else if (desicion === 13){
        let nombre = prompt("ingrese su nombre");
        let apellido = prompt("ingrese su apellido");
        let documentoIdentidad = parseInt(prompt("ingrese su documento de identidad (sin puntos ni comas)"));
        let edad = parseInt(prompt("ingrese su edad"));
        let profesion = prompt("ingrese su profesión");
        salida.innerHTML = `
        Datos ingresados: <br><br>
        Nombre completo: ${nombre} ${apellido} <br>
        documento: ${documentoIdentidad} <br>
        edad: ${edad} <br>
        profesión: ${profesion} <br><br>
        Bienvenido!!!
        `;
        console.log(`
        Datos ingresados: 
        
        Nombre completo: ${nombre} ${apellido} 
        documento: ${documentoIdentidad} 
        edad: ${edad} 
        profesión: ${profesion} 
        
        Bienvenido!!!
        `)
        break
    }else if (desicion === 14){
        console.log(`este ejercicio ya esta resuelto, consultelo en el ejercicio numero 8`);
        salida.innerHTML = `este ejercicio ya esta resuelto, consultelo en el ejercicio numero 8`;
        break
    }else if (desicion === 15){
        console.log(`este ejercicio ya esta resuelto, consultelo en el ejercicio numero 9`);
        salida.innerHTML = `este ejercicio ya esta resuelto, consultelo en el ejercicio numero 9`;
        break
    }else if (desicion === 16){
        let precioArticulo = parseFloat(prompt("ingrese el precio el articulo"));
        let cantidadArticulos = parseFloat(prompt("ingrese la cantidad de elementos"));
        let pagoDelCliente = parseFloat(prompt("ingrese la cantidad que pagará"));
        let valorTotal = precioArticulo * cantidadArticulos;
        let valorDevuelta = pagoDelCliente - valorTotal;
        let valorFaltante = valorTotal - pagoDelCliente;
        if ( valorTotal > pagoDelCliente){
            salida.innerHTML=`le hace falta dinero, exactamente: ${valorFaltante}`;
            console.log(`le hace falta dinero, exactamente: ${valorFaltante}`);
        }else if (pagoDelCliente > valorTotal){
            salida.innerHTML=`la devuelta obtenida de lo ya pagado es de: ${valorDevuelta}`;
            console.log(`la devuelta obtenida de lo ya pagado es de ${valorDevuelta}`); 
        }else if (pagoDelCliente === valorTotal){
            salida.innerHTML = `usted ha pagado el valor total`;
            console.log(`usted ha pagado el valor total`);
        }   
        break
    }else if (desicion === 17){ 
        console.log(`este ejercicio ya esta resuelto, consultelo en el ejercicio numero 13`);
        salida.innerHTML = `este ejercicio ya esta resuelto, consultelo en el ejercicio numero 13`;
        break
    }else if (desicion === 18){
        console.log(`este ejercicio ya esta resuelto, consultelo en el ejercicio numero 8`);
        salida.innerHTML = `este ejercicio ya esta resuelto, consultelo en el ejercicio numero 8`;
        break
    }else if (desicion === 19){
        console.log(`este ejercicio ya esta resuelto, consultelo en el ejercicio numero 9`);
        salida.innerHTML = `este ejercicio ya esta resuelto, consultelo en el ejercicio numero 9`;
        break
    }else if (desicion === 20){
        console.log('en el documento no se encuentra ningun ejercicio para realizar en el punto 20');
        salida.innerHTML='en el documento no se encuentra ningun ejercicio para realizar en el punto 20';     
        break
    }else if (desicion === 21){
        let salario = parseFloat(prompt("ingrese la cantidad de horas trabajas"))*2000;
        let descuentoSeguridad = (salario * 10)/100;
        salida.innerHTML = `su sueldo final con el descuento de un 10% por el impuesto de suguridad es de: ${descuentoSeguridad}`;
        console.log(`su sueldo final con el descuento de un 10% por el impuesto de seguridad es de: ${descuentoSeguridad}`);
        break
    }else if (desicion === 22){
        let suelodEmpleado = parseFloat(prompt("ingrese su sueldo"))
        let horasExtrasFinal = parseFloat(prompt("ingrese las horas extras trabajadas")*3000)
        let sueloFinal = horasExtrasFinal + suelodEmpleado;
        salida.innerHTML = ` su sueldo final contando horas extras es de: ${sueloFinal}`;
        console.log(`su sueldo final contando horas extras es de: ${sueloFinal}`);
        break;
    }else if (desicion === 23){
        console.log(`este ejercicio ya esta resuelto, consultelo en el ejercicio numero 21`);
        salida.innerHTML = `este ejercicio ya esta resuelto, consultelo en el ejercicio numero 21`;
        break
    }else if (desicion === 24){
        let salarioObrero = parseFloat(prompt("ingrese su salario al que se le hara el aumento del 25% "));
        let aumentoPorcentual = salarioObrero + ((salarioObrero * 25) /100);
        salida.innerHTML = `su salario final con un incremento del 25% es de ${aumentoPorcentual}`;
        console.log(`su salario final con un incremento del 25% es de: ${aumentoPorcentual}`);
        break
    }else if (desicion === 25){
        let nuevoSalarioObrero = parseFloat(prompt("ingrese  su salario al que se le hara un aumento"));
        let nuevoPorcentajeJefe = parseFloat(prompt("ingrese el valor del procentaje para aumentarlo a el salario del obrero"));
        let salarioFinalObrero = nuevoSalarioObrero + ((nuevoSalarioObrero * nuevoPorcentajeJefe)/100);
        salida.innerHTML =`su nuevo salario con un incremento del ${nuevoPorcentajeJefe}% es de: ${salarioFinalObrero}`;
        console.log(`su nuevo salario con un incremento del ${nuevoPorcentajeJefe}% es de: ${salarioFinalObrero}`);
        break
    }else if (desicion === 26){
        let n = parseInt(prompt("ingrese un numero para calcular la suma de sus primeros numeros naturales"))
        let suma = 0
        for (let i = 1; i < n+1; i++) {
            suma += i;
        }
        salida.innerHTML = `la suma de los primeros ${n} numeros es: ${suma}`;
        console.log(`la suma de los primeros ${n} numeros es: ${suma}`)
        break
    }else if (desicion === 27){
        let notaUno = parseFloat(prompt("ingrese la primer nota")*0.2);
        let notaDos = parseFloat(prompt("ingrese la segunda nota ")*0.2);
        let notaTrabajos = parseFloat(prompt("ingrese la nota de trabajos")*0.3);
        let examenFinal = parseFloat(prompt("ingrese la nota del examen final")*0.3);
        let notaDefinitiva = (notaUno + notaDos + notaTrabajos + examenFinal).toFixed(2);
        salida.innerHTML = `la nota definitiva del estudiante es: ${notaDefinitiva}`;
        console.log(`la nota definitiva del estudiante es: ${notaDefinitiva}`);
        break
    }else if (desicion === 28){
        let monto = parseFloat(prompt("ingrese el monto del cdt"));
        let plazo = parseFloat(prompt("ingrese el plazo en dias"));
        let tasaInteresAnual = parseFloat(prompt("ingrese la tasa de interes anual"));
        let rendimiento = (monto*(tasaInteresAnual/360)*plazo)/100;
        salida.innerHTML = `el rendimiento del cdt es: ${rendimiento}`;
        console.log(`el rendimiento del cdt es: ${rendimiento}`);
        
        
    }
    confirmacion = confirm("Desea ejecutar otro ejecicio?");
} while (confirmacion === true);