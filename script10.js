/* Este es el contenido completo de "script9.js" 
   (Es el código que te di en la respuesta anterior)
*/

/* ================================================================
    Opción 1: CALCULAR ESTADÍSTICAS DE N NOTAS
   ================================================================
*/
function calcularEstadisticasNotas() {
    let cantidadInput = prompt("¿Cuántas notas vas a ingresar?");
    let n = parseInt(cantidadInput);

    if (isNaN(n) || n <= 0) {
        alert("Número no válido. Debes ingresar al menos 1 nota.");
        return; 
    }

    let notas = [];
    let suma = 0;

    for (let i = 0; i < n; i++) {
        let notaInput = prompt("Ingresa la nota " + (i + 1) + ":");
        let nota = parseInt(notaInput); 
        while (isNaN(nota)) {
            alert("Entrada inválida. Ingresa un número.");
            notaInput = prompt("Ingresa la nota " + (i + 1) + ":");
            nota = parseInt(notaInput);
        }
        notas.push(nota); 
        suma += nota;     
    }
let promedio = suma / n;
 let maximo = notas[0];
let minimo = notas[0];
let pares = 0;
 let impares = 0;
let encimaPromedio = 0;
    for (let nota of notas) {
        if (nota > maximo) {
            maximo = nota;
        }
        if (nota < minimo) {
            minimo = nota;
        }
        if (nota % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
        if (nota > promedio) {
            encimaPromedio++;
        }
    }
    let resultado = "--- ESTADÍSTICAS DE NOTAS ---\n" +
                    "Notas ingresadas: " + notas.join(", ") + "\n\n" +
                    "Promedio: " + promedio.toFixed(2) + "\n" +
                    "Valor máximo: " + maximo + "\n" +
                    "Valor mínimo: " + minimo + "\n" +
                    "Cantidad de pares: " + pares + "\n" +
                    "Cantidad de impares: " + impares + "\n" +
                    "Notas por encima del promedio: " + encimaPromedio;
    
    alert(resultado);
}
function contarParesImparesRango() {
    let inicioInput = prompt("Ingresa el número inicial del rango:");
    let finInput = prompt("Ingresa el número final del rango:");
    let inicio = parseInt(inicioInput);
    let fin = parseInt(finInput);
    if (isNaN(inicio) || isNaN(fin) || inicio >= fin) {
        alert("Rango no válido. Asegúrate de que el inicio sea menor que el fin.");
        return;
    }
    let pares = 0;
    let impares = 0;
    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    alert("--- CONTEO EN RANGO [" + inicio + " - " + fin + "] ---\n\n" +
          "Total Pares: " + pares + "\n" +
          "Total Impares: " + impares);
}


/* ================================================================
    Opción 3: GENERAR TABLA DE MULTIPLICAR
   ================================================================
*/
function generarTablaMultiplicar() {
    let numeroInput = prompt("¿De qué número deseas la tabla de multiplicar?");
    let numero = parseInt(numeroInput);

    if (isNaN(numero)) {
        alert("Número no válido.");
        return;
    }

    let tablaTexto = "--- TABLA DEL " + numero + " ---\n\n";

    for (let i = 1; i <= 10; i++) {
        tablaTexto += numero + " x " + i + " = " + (numero * i) + "\n";
    }

    alert(tablaTexto);
}
function menuPrincipal() {
    let opcion;
    do {
        let textoMenu = "==== MENÚ PRINCIPAL ====\n\n" +
                        "Selecciona una opción:\n" +
                        "1. Calcular estadísticas de N notas\n" +
                        "2. Contar pares e impares en un rango\n" +
                        "3. Generar tabla de multiplicar\n" +
                        "4. Salir\n\n" +
                        "Ingresa tu elección:";
        
        let opcionInput = prompt(textoMenu);
        opcion = parseInt(opcionInput);

        switch (opcion) {
            case 1:
                calcularEstadisticasNotas();
                break;
            case 2:
                contarParesImparesRango();
                break;
            case 3:
                generarTablaMultiplicar();
                break;
            case 4:
                alert("Saliendo del programa. ¡Hasta luego!");
                break;
            default:
                if (opcionInput === null) {
                    opcion = 4; 
                    alert("Saliendo del programa. ¡Hasta luego!");
                } else {
                    alert("Opción no válida. Por favor, elige un número del 1 al 4.");
                }
                break;
        }
    } while (opcion !== 4);
}
menuPrincipal();