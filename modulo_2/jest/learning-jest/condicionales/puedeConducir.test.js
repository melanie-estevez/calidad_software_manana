const {puedeConducir} = require ('./puedeConducir');

describe('puedeConducir', ()=> {
     test('Happy path: 20 puede conducir', () => {
        expect(puedeConducir(20)).toBe('si');
    });

    test('Happy path: 16 no puede conducir', () => {
        expect(puedeConducir(16)).toBe('no');
    });

    test('Sad path: edad invalida', () => {
        expect(()=>puedeConducir(-1)).toThrow('edad invalida');
        expect(()=>puedeConducir('19')).toThrow('edad invalida');
    });
});