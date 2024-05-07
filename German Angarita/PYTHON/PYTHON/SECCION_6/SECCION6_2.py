"""Cree un programa que calcula la suma de los primeros n números naturales."""


n = int(input("ingrese un numero para hacer la suma: "))
numero = 0
for i in range (1, n+1):
    numero += i
print("la suma de los primeros ",n,"numeros naturales es: ", numero) 

# let n = parseInt(prompt("ingrese un numero para calcular la suma de sus primeros numeros naturales"))
# let numero = 0
# for (let i = 1; i < n+1; i++) {
#     let numero =+ i;
# }
# salida.innerHTML = `el resultado de la suma es de: ${numero}`;