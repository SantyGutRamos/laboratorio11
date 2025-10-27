while (true) {
    var numeroInput = prompt("Ingresa un número para ver su tabla:");
    var numero = parseInt(numeroInput);
    if (isNaN(numero)) {
        alert("Error: El valor ingresado ('" + numeroInput + "') no es un número.");
        var respuesta = prompt("¿Quieres intentarlo de nuevo? (Escribe 'si' o 'no')");
        
        if (respuesta === null || respuesta.toLowerCase() === "no") {
            alert("Has decidido no continuar. Adiós.");
            break; 
        } else {
            continue; 
        }
    } else {
        var tablaTexto = "Tabla de Multiplicar del " + numero + "\n\n";

        for (var i = 1; i <= 12; i++) {
            var resultado = numero * i;
            tablaTexto += numero + " x " + i + " = " + resultado + "\n";
        }
        alert(tablaTexto);
        
        break; 
    }
}