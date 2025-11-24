function calcularPagoHorasExtras(horasTrabajadas, horasBase, tarifaHora, factorExtra) {
  const validos = [horasTrabajadas, horasBase, tarifaHora, factorExtra].every(
    x => typeof x === 'number' && Number.isFinite(x) && x >= 0
  );

  if (!validos) throw new TypeError('parámetros inválidos');

  if (horasTrabajadas <= horasBase) return 0;

  const horasExtra = horasTrabajadas - horasBase;
  return horasExtra * tarifaHora * factorExtra;
}

module.exports = calcularPagoHorasExtras;




