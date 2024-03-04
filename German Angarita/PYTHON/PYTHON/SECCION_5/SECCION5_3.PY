""" Cree un programa que calcule el promedio de tres notas para n estudiantes"""

notas = []
n = int(input("numero de estudiantes a los que se les calculara el promedio: "))
for i in range (n):
    print("notas del estudiante numero ",i +1,": ")
    nota1 = float(input("primer nota: "))
    nota2 = float(input("segunda nota: "))
    nota3 = float(input("tercer nota: "))
    promedio = (nota1 + nota2 + nota3 ) / 3

    
    notas.append(promedio)
# print("el promedio de los ",n,"estudiantes es: ", notas)
for i in range (n):
    print("el promedio del estudiante numero", i +1,"es:"  ,notas[i])
