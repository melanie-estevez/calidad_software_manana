function evaluarDesempeno(mediciones) {
  if (!Array.isArray(mediciones) || mediciones.length === 0) {
    throw new TypeError('lista inválida');
  }

  for (const m of mediciones) {
    if (typeof m !== 'number' || m < 0 || m > 10) {
      throw new TypeError('medición inválida');
    }
  }

  const promedio = mediciones.reduce((a, b) => a + b, 0) / mediciones.length;

  let clasificacion = 'alto';
  if (promedio < 6) clasificacion = 'bajo';
  else if (promedio < 8) clasificacion = 'aceptable';

  return { promedio, clasificacion };
}

module.exports = evaluarDesempeno;