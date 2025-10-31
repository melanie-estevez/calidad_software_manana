const {actualizarEdad} = require('./actualizarEdad');

describe('Actualizar Edad',()=>{
    test('Happy Path: 30 -> 60', () =>{
        const response = actualizarEdad (
            {
                nombre:'Juan',
                edad:39
            }, 60
        )
        expect (response.edad).toBe(60);
      
    });
    test('Sad path: nombre / edad invalida', ()=>{
        expect(()=>actualizarEdad(null, 10)).toThrow('persona invalida');
        expect(()=>actualizarEdad({}, -1)).toThrow('edad invalida');
    });
})