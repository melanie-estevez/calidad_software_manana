const {deepMerge} = require('./deepMerge');

describe('Cont',()=>{
    test('Happy Path: Hola Mundo Jest  -> 3', () =>{
        const response = contarPalabras(
            'Hola mundo Jest'
        )
        expect(response).toBe(3);
    });
    test('Sad path: ERROR', ()=>{
        expect(()=>contarPalabras(null)).toThrow('frase invalida');
        expect(()=>contarPalabras('')).toThrow('frase invalida');
    });
})