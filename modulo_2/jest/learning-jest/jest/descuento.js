function calcularPrecioPorVolumen(cantidad, precioUnitario) {
  if (typeof cantidad !== 'number' || cantidad < 0 ||
      typeof precioUnitario !== 'number' || precioUnitario < 0) {
    throw new TypeError('datos inválidos');
  }

  let descuento = 0;
  if (cantidad >= 10 && cantidad < 50) descuento = 0.05;
  else if (cantidad >= 50) descuento = 0.10;

  return cantidad * precioUnitario * (1 - descuento);
}

module.exports = calcularPrecioPorVolumen;