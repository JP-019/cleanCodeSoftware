function calcularTotal(precio) {
    let impuesto = precio * 0.15;
    return precio + impuesto ;
}


console.log(calcularTotal(100));
