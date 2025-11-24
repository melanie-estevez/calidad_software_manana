function validarObjeto(objeto, nombre = 'obj') {
    if (
        objeto === null ||
        typeof objeto !== 'object' ||
        Array.isArray(objeto)
    ) {
        throw new TypeError(`${nombre} debe ser objeto`);
    }
}

function deepMerge(a, b) {
   
    validarObjeto(a, 'a');
    validarObjeto(b, 'b');

    const salida = { ...a };

    for (const [k, v] of Object.entries(b)) {
        if (
            typeof v === 'object' &&
            v !== null &&
            !Array.isArray(v) &&
            typeof salida[k] === 'object' &&
            salida[k] !== null &&
            !Array.isArray(salida[k])
        ) {
            salida[k] = deepMerge(salida[k], v);
        } else {
            salida[k] = v;
        }
    }

    return salida;
}

function normalizarAlumno(alumno) {
    validarObjeto(alumno, 'alumno');

    const { nombre, notas } = alumno;

    if (typeof nombre !== 'string' || !Array.isArray(notas)) {
        throw new TypeError(
            'alumno.nombre debe ser string y alumno.notas debe ser array'
        );
    }

    const valid = notas.every(n => typeof n === 'number' && !Number.isNaN(n));

    if (!valid)
        throw new TypeError('notas debe contener números válidos');

    const promedio = notas.length
        ? notas.reduce((a, b) => a + b, 0) / notas.length
        : 0;

    return {
        nombre: nombre.trim(),
        notas: notas,
        promedio
    };
}

module.exports = { deepMerge, normalizarAlumno };