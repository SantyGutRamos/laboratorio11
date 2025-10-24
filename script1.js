let suma = 0;
let numero;
let booleanoxd = false;
let i; 
for (i = 0; i < 5; i++) {
    numero = Number(prompt("Ingresar número entre 0 y 20"));
    if (numero >= 0 && numero <= 20) {
        suma += numero; 
        booleanoxd = true;
    } else {
        alert("Número inválido. Finalizando ingreso.");
        break;
    }
}

if (booleanoxd) {
   
    alert("El promedio de los " + i + " números ingresados es: " + promedio);
} else {

    alert("No se ingresó ningún número válido. Refresca la página.");
}