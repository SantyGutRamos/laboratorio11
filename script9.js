const numeroInput = prompt("Ingresa un número para verificar si es Armstrong:");
const numeroOriginal = parseInt(numeroInput);
if (isNaN(numeroOriginal) || numeroOriginal < 0) {
    alert("Entrada inválida. Ingresa un número entero positivo.");
} else {
    let n = 0;
    let temp = numeroOriginal;
    if (temp === 0) {
        n = 1;
    } else {
        while (temp > 0) {
            temp = Math.floor(temp / 10);
            n++;
        }
    }
    let suma = 0;
    temp = numeroOriginal;
    while (temp > 0) {
        let digito = temp % 10;
        suma += Math.pow(digito, n);
        temp = Math.floor(temp / 10);
    }
    if (numeroOriginal === 0) {
        suma = 0;
    }
    if (suma === numeroOriginal) {
        alert(numeroOriginal + " es un número Armstrong!\n\n(Suma de potencias (n=" + n + "): " + suma + ")");
    } else {
        alert(numeroOriginal +" no es un número Armstrong.\n\n(Suma de potencias (n=" + n + "): " + suma + ")");
    }
}