const calcularPagoHorasExtras = require('./horas');

describe('Calcular Pago de Horas Extras', () => {

    test('Happy path: sin horas extra (horasTrabajadas <= horasBase)', () => {
        const pago = calcularPagoHorasExtras(40, 40, 10, 2);
        expect(pago).toBe(0);
    });

    test('Happy path: con horas extra', () => {
        const pago = calcularPagoHorasExtras(45, 40, 10, 2);
        expect(pago).toBe(100);
    });

    test('Happy path: muchas horas extra', () => {
        const pago = calcularPagoHorasExtras(60, 40, 12, 1.5);
        expect(pago).toBe(360);
    });


    test('Sad path: parámetros inválidos', () => {
        expect(() => calcularPagoHorasExtras('40', 40, 10, 2))
            .toThrow('parámetros inválidos');

        expect(() => calcularPagoHorasExtras(40, -1, 10, 2))
            .toThrow('parámetros inválidos');

        expect(() => calcularPagoHorasExtras(40, 40, '10', 2))
            .toThrow('parámetros inválidos');

        expect(() => calcularPagoHorasExtras(40, 40, 10, undefined))
            .toThrow('parámetros inválidos');
    });

});


