angulo1 = float(input("primer angulo: "))
angulo2 = float(input("segundo angulo: "))
angulo3 = float(input("tercer angulo: "))

sumaAngulos = angulo1 + angulo2 + angulo3

if sumaAngulos == 180 :
    print("estos angulos corresponden a un triangulo")

else :
    print("esos angulos no corresponden a un triangulo")