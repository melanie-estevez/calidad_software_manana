const calcularPrecioPorVolumen = require('./descuento');

describe('Calcular Precio por Volumen', () => {

    test('Happy path: sin descuento (cantidad < 10)', () => {
        const total = calcularPrecioPorVolumen(5, 100); 
        expect(total).toBe(500);
    });

    test('Happy path: descuento 5% (10 a 49 unidades)', () => {
        const total = calcularPrecioPorVolumen(20, 100);
        expect(total).toBe(1900);
    });

    test('Happy path: descuento 10% (50 o más unidades)', () => {
        const total = calcularPrecioPorVolumen(50, 100);
        expect(total).toBe(4500);
    });

    test('Sad path: parámetros inválidos (tipos incorrectos)', () => {
        expect(() => calcularPrecioPorVolumen("10", 100))
            .toThrow('datos inválidos');

        expect(() => calcularPrecioPorVolumen(10, "100"))
            .toThrow('datos inválidos');
    });

    test('Sad path: valores negativos', () => {
        expect(() => calcularPrecioPorVolumen(-1, 100))
            .toThrow('datos inválidos');

        expect(() => calcularPrecioPorVolumen(10, -100))
            .toThrow('datos inválidos');
    });

});
