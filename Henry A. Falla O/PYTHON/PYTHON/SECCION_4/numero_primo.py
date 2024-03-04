numero = int(input("ingrese numero: "))
while True :
    if numero / 2 == 1:
        print("el numero es primo")
        break
    elif numero / 3 == 1:
        print("el numero es primo")
        break
    elif numero / 5 == 1:
        print("el numero es primo")
        break
    elif numero / 7 == 1:
        print("el numero es primo")
        break
    elif numero / 11 == 1:
        print("el numero es primo")
        break
    elif numero > 15 :
        print("el numero es ivalido")
        
    elif numero < 0 : 
        print("el numero es invalido")
    else : 
        print("el numero no es primo")
        break
    
