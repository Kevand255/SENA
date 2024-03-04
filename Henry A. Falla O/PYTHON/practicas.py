# lista = [7, 9, 6, 10, 5, 3, 1, 8, 2, 4]

# for i in lista:
#     if i == 10:
#         print(i)

# lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# for i in lista:

#     if i == max(lista):

lista = []

while True :
    nuevo_num = int(input("digite un numero: ")) 
    lista.append(nuevo_num)
    
    desicion = str(input("desea ingresar mas numeros a la lista?: ")).lower()
    if desicion == "si":
        continue   
    elif desicion == "no":
        desicion_dos = str(input("desea que se impriman todos los numeros ingresados a la lista?: ")).lower()
        if desicion_dos == "si":
            print(lista)
            break   
        elif desicion_dos == "no":
            print()
            break
        else:
            print("ingrese un valor valido (si o no)")
    else:
        print("ingrese un valor valido (si o no)")  


# lista = [float(input("digite un numero: "))]
# for i in lista:
    

