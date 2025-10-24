const{esPar} = require('./esPar');

describe('esPar',() => {
    test('Happy path: 8 es par', () => {
        expect(esPar(8)).toBe(true);
    });

    test('Happy path: 7 no es par', () => {
        expect(esPar(7)).toBe(false);
    });

    test('Sad path: numero no entero', () => {
        expect(() => esPar(3.5)).toThrow('numero debe ser entero');
        expect(() => esPar('10')).toThrow('numero debe ser entero');
    });
  
});