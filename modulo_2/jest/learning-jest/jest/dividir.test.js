const dividirCuentaEntrePersonas = require('./dividir');

describe('Dividir Cuenta Entre Personas', () => {

    test('Happy path: división exacta', () => {
        const r = dividirCuentaEntrePersonas(100, 4);
        expect(r).toBe(25);
    });

    test('Happy path: división no exacta', () => {
        const r = dividirCuentaEntrePersonas(100, 3);
        expect(r).toBeCloseTo(33.3333);
    });

    test('Sad path: totalCuenta inválido', () => {
        expect(() => dividirCuentaEntrePersonas("100", 4))
            .toThrow('cuenta inválida');

        expect(() => dividirCuentaEntrePersonas(-50, 4))
            .toThrow('cuenta inválida');
    });

    test('Sad path: numeroPersonas inválido', () => {
        expect(() => dividirCuentaEntrePersonas(100, 0))
            .toThrow('personas inválidas');

        expect(() => dividirCuentaEntrePersonas(100, -3))
            .toThrow('personas inválidas');

        expect(() => dividirCuentaEntrePersonas(100, 2.5))
            .toThrow('personas inválidas');

        expect(() => dividirCuentaEntrePersonas(100, "3"))
            .toThrow('personas inválidas');
    });

});
