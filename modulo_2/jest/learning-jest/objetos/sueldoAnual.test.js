const {sueldoAnual} = require('./sueldoAnual');

describe('Sueldo Anual',()=>{
    test('Happy Path:500 -> 6000', () =>{
        expect(sueldoAnual(
            {
            nombre:'Pepe',
            sueldoMensual: 500}
            )
        ).toBe(6000);
    });
    test('Sad path: nombre / sueldo invalidos', ()=>{
        expect(()=>sueldoAnual({sueldoMensual: -1})).toThrow('sueldo mensual invalido');
        expect(()=>sueldoAnual(null)).toThrow('empleado invalido');
    });
})