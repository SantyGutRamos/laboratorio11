let opcion;
do {
    let textoMenu = "--- MENÚ DE CÁLCULO ---\n\n" +
                    "1. Calcular área del Círculo\n" +
                    "2. Calcular área del Rectángulo\n" +
                    "3. Salir\n\n" +
                    "Por favor, ingresa tu opción:";
    let opcionInput = prompt(textoMenu);
    opcion = parseInt(opcionInput);
    switch (opcion) {
        case 1:
            let radioInput = prompt("Ingresa el radio del círculo:");
            let radio = parseFloat(radioInput);

            if (isNaN(radio) || radio <= 0) {
                alert("Valor inválido. El radio debe ser un número positivo.");
            } else {
                let areaCirculo = Math.PI * radio * radio;
                alert("El área del círculo es: " + areaCirculo.toFixed(2));
            }
            break;
        
        case 2:
            let baseInput = prompt("Ingresa la base del rectángulo:");
            let alturaInput = prompt("Ingresa la altura del rectángulo:");
            let base = parseFloat(baseInput);
            let altura = parseFloat(alturaInput);
            if (isNaN(base)|| isNaN(altura)|| base <= 0 || altura <= 0) {
                alert("Valores inválidos. La base y la altura deben ser números positivos.");
            } else {
                let areaRectangulo = base * altura;
                alert("El área del rectángulo es: " + areaRectangulo);
            }
            break;
        case 3:
            alert("Fin");
            break;
        default:
            if (opcionInput === null) {
                opcion = 3;
                alert("Fin");
            } else {
                alert("Opción no válida. Inténtalo de nuevo.");
            }
            break;
    }
} while (opcion !== 3);
alert("Programa finalizado.");