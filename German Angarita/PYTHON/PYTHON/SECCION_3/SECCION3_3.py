"""" Cree un programa que reciba tres números y muestre el mayor.
En caso de que los números sean iguales también se debe mostrar al usuario."""

num1 = float(input("ingrese el primer numero: "))
num2 = float(input("ingrese el segundo numero: "))
num3 = float(input("ingrese el tercero numero: "))

if num1 > num2 and num1 > num3:
    print("el numero mayor es: ", num1)
elif num2> num1 and num2 >num3:
    print("el numero mayor es: ", num2)
elif num3 > num1 and num3 > num2:
    print("el numero mayor es: ", num3)
else:
    print("los tres numeros son iguales")