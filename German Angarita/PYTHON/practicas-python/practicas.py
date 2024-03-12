# lista = [7, 9, 6, 10, 5, 3, 1, 8, 2, 4]

# for i in lista:
#     if i == 10:
#         print(i)

# lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# for i in lista:

#     if i == max(lista):

# lista = []

# while True :
#     nuevo_num = int(input("digite un numero: ")) 
#     lista.append(nuevo_num)
    
#     desicion = str(input("desea ingresar mas numeros a la lista?: ")).lower()
#     if desicion == "si":
#         continue   
#     elif desicion == "no":
#         desicion_dos = str(input("desea que se impriman todos los numeros ingresados a la lista?: ")).lower()
#         if desicion_dos == "si":
#             print(lista)
#             break   
#         elif desicion_dos == "no":
#             print()
#             break
#         else:
#             print("ingrese un valor valido (si o no)")
#     else:
#         print("ingrese un valor valido (si o no)")  


# lista = [float(input("digite un numero: "))]
# for i in lista:
    
# lista=[]
# while True:
#     letras = str(input("ingrese las palabras(PRECIONE X PARA DEJAR DE INGRESAR PALABRAS): ")).lower()
#     if letras.lower() == "x":
#         break
#     lista.append(letras)


# if lista.length() > 3:
#     print("todas las palabras tienen mas de tres letras")
# else:
#     print("no todas las palabras tienen mas de tres palabras")

# palabra = "hola mundo"
# for i in range ( palabra):
#     print(i)
    
    
# import random
# inferior = -100
# superior = 100
# lista=[]
# for i in range (0, random.randint(0, 10**1000)): 
#     lista.append(random.randint(inferior, superior))
# if lista.all() < 0:
#     print("hay numeros negativos")
# else: 
#     print("no hay numeros negativos")


"""hacer un programa que me diga si una cadena de texto es un palindromo o no"""

# if palabra  == palabra[-1:-20]:
#     print("es un palindromo")
# else:
#     print("no es un palindromo")

palabra = str(input("ingrese la palabra o frase para saber si es un palindromo o no: "))
palabraSinEspacios= ""

for i in palabra:
    if i != ' ':
        palabraSinEspacios += i
# print(palabraSinEspacios)
if palabraSinEspacios == palabraSinEspacios[::-1]:
    print( palabra ," es un palindromo")
else:
    print( palabra ," no es un palindromo")



"""cree un programa que organice una lista de numeros de menor a mayor sin utilizar metodos"""

""""""