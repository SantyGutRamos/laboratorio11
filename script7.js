let limite = Number(prompt("Ingresar numero hasta donde se quiera contar"));
let suma = 0, i, sumas5 = 0; 
if (limite > 0) {
    for (i = 1; i <= limite; i++) {
        if (i % 5 === 0) {
            sumas5 += i; 
        } else {
            suma += i;   
        }
    }
   alert("Suma del 1 al "+limite+" sin contar los multiplos de 5 es "+suma);
} else {
    alert("Número no válido");s
}