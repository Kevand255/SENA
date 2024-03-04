"""Cree un programa que pregunte al usuario si desea salir, si o no “S/N”, si el usuario teclea la letra S el
programa se detendrá, de lo contrario continuará ejecutándose."""



while True :
    condicion = str(input("Desea salir del programa? Digite S/N (S para si y N para no): ")).lower()
    if condicion ==  "s" or condicion == "si":
        break
    elif condicion == "n" or condicion == "no":
        print()
    else:
        print("ingrese un caracter valido: ")
