const numeroLimite = prompt("Ingresa un número límite (mayor que 1):");
const limite = parseInt(numeroLimite);
if (isNaN(limite) || limite <= 1) {
    alert("Entrada inválida. Por favor, ingresa un número entero mayor que 1.");
} else {
    let primosEncontrados = [];
    for (let i = 2; i <= limite; i++) {
        let esUnPrimo = true; 
        if (i <= 1) {
            esUnPrimo = false;
        } else {
            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    esUnPrimo = false;
                    break;
                }
            }
        }
        if (esUnPrimo) {
            primosEncontrados.push(i);
        }
    }
    alert("Los números primosentre 1 y "+limite+" son:\n"+primosEncontrados);
}