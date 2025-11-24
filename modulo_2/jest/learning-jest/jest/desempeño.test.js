const evaluarDesempeno = require('./desempeño');

describe('Evaluar Desempeño', () => {
    test('Happy path: promedio bajo (< 6) → clasificación "bajo"', () => {
        const r = evaluarDesempeno([2, 4, 5]);
        expect(r.promedio).toBeCloseTo(3.666);
        expect(r.clasificacion).toBe('bajo');
    });

    test('Happy path: promedio aceptable (entre 6 y 7.9)', () => {
        const r = evaluarDesempeno([6, 7, 7]);
        expect(r.promedio).toBeCloseTo(6.666);
        expect(r.clasificacion).toBe('aceptable');
    });

    test('Happy path: promedio alto (>= 8)', () => {
        const r = evaluarDesempeno([8, 9, 10]);
        expect(r.promedio).toBeCloseTo(9);
        expect(r.clasificacion).toBe('alto');
    });

    test('Sad path: lista inválida', () => {
        expect(() => evaluarDesempeno("no es un arreglo"))
            .toThrow('lista inválida');

        expect(() => evaluarDesempeno([]))
            .toThrow('lista inválida');
    });

    test('Sad path: medición fuera de rango', () => {
        expect(() => evaluarDesempeno([5, 11]))
            .toThrow('medición inválida');

        expect(() => evaluarDesempeno([-1, 7]))
            .toThrow('medición inválida');
    });

    test('Sad path: medición no numérica', () => {
        expect(() => evaluarDesempeno([5, "7"]))
            .toThrow('medición inválida');
    });

});
