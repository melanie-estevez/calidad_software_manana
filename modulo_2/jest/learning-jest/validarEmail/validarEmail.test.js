const { validarEmail } = require('./validarEmail');

describe('validar Email', () => {
    
    test('Happy path: que devuelva false', () => {
        const response = validarEmail('correo-malo');
        expect(response).toBe(false);
    });

    test('Happy path: que devuelva true', () => {
        const response = validarEmail('fran.n.d@gmail.com');
        expect(response).toBe(true);
    });

    test('Sad path: elementos invalidos', () => {
        expect(() => validarEmail({}))
            .toThrow('email debe ser string');
    });

});
