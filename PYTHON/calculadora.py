eleccion = 0

# porcentaje = numero1*numero2/100 

while True :
    print()
    print("""            dijite 1 para sacar procetanje
            dijite 2 para saber que porcentaje es un numero de otro
            dijite 3 para sacar aumento procentual
            dijite 4 para sacar descuento porcentual
            dijite 5 para salir
        """)
    eleccion = float(input())
    print()



    if eleccion == 1 :
        numero1 = float(input("cantidad: "))
        numero2 = float(input("porcentaje: ")) 
        print("el",numero2,"% de " ,numero1, "es:  ",numero1*numero2/100 )


    elif eleccion == 2:
        numero1 = float(input("primer numero: "))
        numero2 = float(input("segundo numero : "))
        resultado= (numero1/numero2)*100
        print(numero1, " es el", resultado,"% de ", numero2) 


    elif eleccion == 3:
        cantidad = float(input("cantidad sobre la que se hara el aumento procentual: "))
        numero2 = float(input("porcentaje calculado sobre la cantidad: ")) 
        print("su resultado es: ",cantidad+cantidad*numero2/100)

    elif eleccion == 4:
        cantidad = float(input("cantidad sobre la que se hara el descuento procentual: "))
        numero2 = float(input("porcentaje calculado sobre la cantidad: ")) 
        print("su resultado es: ",cantidad-cantidad*numero2/100)
    
    elif eleccion == 5: 
        break

    else :
        print("numero invalido")

        print()
        print()


