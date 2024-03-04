""" Cree un programa que dado un número entero n, calcule su factorial(n!)."""


# n = int(input("ingrese el numero para sacar el factorial: "))

# for i in range(n-1):
#     factorial = n * i- 1
#     print("el factorial de ",n,"es: ", factorial)
#     print()
n = int(input("ingrese el numero para sacarle el factorial : "))
factorial = 1
#lista=[]
for i in range(1,n+1):
    factorial *= i
print("el factorial de ",n," es: ",factorial)
# resultado = factorial * (factorial -1)
#lista.append(i)
# print("el factorial de ",n, " es: ", max lista[])
#print(lista[4])