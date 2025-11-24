const { mayoresEdadFilter } = require('./mayoresEdadFilter');

describe('mayoresEdadFilter', () => {
    test('Happy path: [15, 22, 18, 14, 30]', () => {
        expect(mayoresEdadFilter([15, 22, 18, 14, 30])).toEqual([22, 18, 30]);
    });

    test('Happy path: [17, 16, 19, 20]', () => {
        expect(mayoresEdadFilter([17, 16, 19, 20])).toEqual([19, 20]);
    });

    test('Happy path: arreglo vacío', () => {
        expect(mayoresEdadFilter([])).toEqual([]);
    });

    test('Sad path: entrada no es un arreglo', () => {
        expect(() => mayoresEdadFilter("normal")).toThrow("edad invalida");
        expect(() => mayoresEdadFilter(123)).toThrow("edad invalida");
    });
});
