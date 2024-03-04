""". Cree un programa que muestre los números impares entre 1 y n"""

n = int(input("ingrese un numero natural mayor a cero: "))

for i in range (1,n+1):
    if i % 2 != 0:
        print(i)
        