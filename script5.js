
var montoInput = prompt("Ingrese el monto:");
var monto = parseInt(montoInput);

console.log("Entregando $"+ monto);
var cantidad = 0;
while (monto >= 100) {
    cantidad = cantidad + 1; 
    monto = monto - 100;     
}
if (cantidad > 0) {
   alert("Billetes de $100: " + cantidad);
}
cantidad = 0;
while (monto >= 50) {
    cantidad = cantidad + 1;
    monto = monto - 50;
}
if (cantidad > 0) {
    alert("Billetes de $50: " + cantidad);
}
cantidad = 0;
while (monto >= 20) {
    cantidad = cantidad + 1;
    monto = monto - 20;
}
if (cantidad > 0) {
   alert("Billetes de $20: " + cantidad);
}
cantidad = 0;
while (monto >= 10) {
    cantidad = cantidad + 1;
    monto = monto - 10;
}
if (cantidad > 0) {
    alert("Billetes de $10: " +cantidad);
}
if (monto > 0) {
    alert("Sencillo sobrante $" +monto);
}