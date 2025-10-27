function iniciarCarrito() {
    let totalParcial = 0;
    while (true) {
        let precioInput = prompt("Total actual: $" + totalParcial.toFixed(2) + 
                   "\n\nIngresa el precio del producto:\n(Cancelar para finalizar)");
        if (precioInput === null) {
            break; 
        }
        let precio = parseFloat(precioInput);
        if (isNaN(precio) || precio < 0) {
            alert("Precio no válido.");
            continue; 
        }
        totalParcial += precio;
    }
    let totalFinal = totalParcial;
    let descuentoAplicado = 0;
    let mensajeDescuento = "No aplica descuento.";
    if (totalParcial > 100) {
        descuentoAplicado = totalParcial * 0.10; 
        mensajeDescuento = "Tiene un descuento del 10%";
    } else if (totalParcial >= 50) { 
        descuentoAplicado = totalParcial * 0.05; 
        mensajeDescuento = "Gana un cupón de 5%";
    } 
    totalFinal = totalParcial - descuentoAplicado;
    alert("--- RESUMEN DE COMPRA ---\n\n" +
          "Total Parcial: $" + totalParcial.toFixed(2) +"\n" +
          "Estado: " + mensajeDescuento + "\n" +
          "Descuento: -$" + descuentoAplicado.toFixed(2) +"\n\n"+
          "TOTAL A PAGAR: $" + totalFinal.toFixed(2));
}
iniciarCarrito();