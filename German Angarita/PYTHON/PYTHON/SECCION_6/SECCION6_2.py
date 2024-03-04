"""Cree un programa que calcula la suma de los primeros n números naturales."""


n = int(input("ingrese un numero para hacer la suma: "))
numero = 1

for i in range (1, n+1):
    numero += i
print("la suma de los primeros ",n,"numeros naturales es: ", numero)