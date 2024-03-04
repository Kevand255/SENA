print()
numero_1 = float(input("digite el primer numero: "))
numero_2 = float(input("digite el segundo numero: ")) 
suma = numero_1 + numero_2
resta = numero_1 - numero_2
producto = numero_1 * numero_2
cociente = numero_1 / numero_2
modulo = numero_1 % numero_2

while True :
    print("elija un numero entre el 1 al 5 para realizar una operacion")
    print(" 1 para hacer la suma")
    print(" 2 para hacer la resta")
    print(" 3 para sacar el producto")
    print(" 4 para sacar el cociente")
    print(" 5 para sacar el modulo")
    print(" 6 para salir")
    eleccion = float(input(": "))

    if eleccion == 1:
        print(numero_1,"+",numero_2,"=",suma)
    elif eleccion == 2:
        print(numero_1, "-",numero_2, "=",resta)
    elif eleccion == 3 :
        print(numero_1,"*",numero_2,"=",producto)
    elif eleccion == 4 :
        print(numero_1,"/",numero_2,"=",cociente)
    elif eleccion == 5 : 
        print(numero_1,"%",numero_2,"=",modulo)
    elif eleccion == 6 :
        break
    else :
        print("no es un valor valido")

