function calcularBonoAntiguedad(anios, salarioBase) {
  if (typeof anios !== 'number' || typeof salarioBase !== 'number' ||
      anios < 0 || salarioBase < 0) {
    throw new TypeError('datos inválidos');
  }

  let porcentaje = 0;
  if (anios >= 3 && anios <= 5) porcentaje = 0.05;
  else if (anios >= 6 && anios <= 10) porcentaje = 0.10;
  else if (anios > 10) porcentaje = 0.15;

  const bono = salarioBase * porcentaje;
  const totalConBono = salarioBase + bono;

  return { salarioBase, bono, totalConBono };
}

module.exports = calcularBonoAntiguedad;