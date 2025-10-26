while (true) {
        var numeroInput = prompt("Ingresa un número para ver su tabla:");
        var numero = parseInt(numeroInput);
        if (isNaN(numero)) {
            alert("Error: El valor ingresado ('" + numeroInput + "') no es un número.");
            
            var respuesta = prompt("¿Quieres intentarlo de nuevo? (Escribe 'si' o 'no')");
            
            if (respuesta.toLowerCase() ==="no") {
                alert("Has decidido no continuar. Adiós.");
                break; 
        } else {
            alert("Tabla de Multiplicar del " + numero);
            for (var i = 1; i <= 12; i++) {
                var resultado = numero * i;
                alert(numero + " x " + i + " = " + resultado);
            }
            break; 
        }
        
    }

}