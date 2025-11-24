const {buscarPalabra} = require('./buscarPalabra');

describe('Buscar Palabra',()=>{
    test('Happy Path: Buscar Palabra', () =>{
        const response = buscarPalabra(
            'Hola mundo Jest', 'Jest'
        )
        expect(response).toBe(true);
        const response2 = buscarPalabra(
            'Hola mundo Jest', 'Jesty'
        )
        expect(response2).toBe(false);
    });
    test('Sad path: ERROR', ()=>{
        expect(()=>buscarPalabra(null, 'jest')).toThrow('frase invalida');
        expect(()=>buscarPalabra('',344)).toThrow('frase invalida');
    });
})