const actualizarStock = require('./stock');

describe('Control de Stock', () => {

    test('Happy path: actualizar stock correctamente con movimiento positivo', () => {
        const nuevo = actualizarStock(10, 5);
        expect(nuevo).toBe(15);
    });

    test('Happy path: actualizar stock con movimiento cero', () => {
        const nuevo = actualizarStock(20, 0);
        expect(nuevo).toBe(20);
    });

    test('Happy path: movimiento que reduce stock pero no lo deja negativo', () => {
        const nuevo = actualizarStock(10, -3);
        expect(nuevo).toBe(7);
    });

    test('Sad path: valores no enteros lanzan error', () => {
        expect(() => actualizarStock(10.5, 2))
            .toThrow('valores inválidos');

        expect(() => actualizarStock(10, "2"))
            .toThrow('valores inválidos');
    });

    test('Sad path: stock insuficiente cuando el resultado es menor a cero', () => {
        expect(() => actualizarStock(5, -10))
            .toThrow('stock insuficiente');
    });

});
