function dividirCuentaEntrePersonas(totalCuenta, numeroPersonas) {
  if (typeof totalCuenta !== 'number' || totalCuenta < 0) {
    throw new TypeError('cuenta inválida');
  }

  if (!Number.isInteger(numeroPersonas) || numeroPersonas < 1) {
    throw new TypeError('personas inválidas');
  }

  return totalCuenta / numeroPersonas;
}

module.exports = dividirCuentaEntrePersonas;