const { validarEmail } = require('./validarEmail');

 describe('validar Email', () => {
    test('Happy path: que devuelva false', () => {
        const response = validarEmail('fran.n.d');
        expect(response).toBe(false);
    });
    test('Happy path: que devuelva true', () => {
        const response = validarEmail('fran.n.d');
        expect(response).toBe(true);
    });    
    test('Sad path: elementos invalidos',
        () => {
            const response = validarEmail(3455);
            expect(response).toThrow('email debe ser string');
        });
});