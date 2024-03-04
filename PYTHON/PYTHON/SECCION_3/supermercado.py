pregunta = input("ingrese el producto para consultar si tiene IVA o no: ")
producto = pregunta.lower()
if producto == "lentejas" or producto == "arroz" :
    print("este prodcuto no paga IVA")
elif producto == "vino" or producto == "crema" : 
    print("este producto paga IVA")
else :
    print("este producto no esta en la lista de productos")