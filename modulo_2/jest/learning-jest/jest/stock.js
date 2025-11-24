function actualizarStock(stockActual, movimiento) {
  if (!Number.isInteger(stockActual) || !Number.isInteger(movimiento)) {
    throw new TypeError('valores inválidos');
  }

  const nuevo = stockActual + movimiento;

  if (nuevo < 0) throw new Error('stock insuficiente');

  return nuevo;
}

module.exports = actualizarStock;