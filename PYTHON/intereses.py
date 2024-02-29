print()
print()

monto_prestamo = float(input("introduzca el monto del prestamo: "))
plazo_meses = float(input("introduzca el plazo en meses: "))
interes = float(2.7)
operacion = (monto_prestamo + (monto_prestamo*interes)/100)/plazo_meses
print("el valor de las cuotas mensuales con un interes fijo de 2.7% es : ",operacion)
