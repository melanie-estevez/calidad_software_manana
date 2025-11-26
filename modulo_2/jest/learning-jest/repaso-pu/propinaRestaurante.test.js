const {calcularPropina1} = require ('./propinaRestaurante')
describe('test unitario propina restaurante', ()=>{
    test ('Happy path: calculo correcto de propina', ()=>{
        const expectedValue = {cuenta:10, propina:1, totalPagar: 11}
        const resultado = calcularPropina1(10,10);
        expect(resultado).toEqual(expectedValue);
    });
    test ('Sad path:valores ingresados incorrectos',()=>{
        expect(()=>calcularPropina1(-1,10)).toThrow('cuenta invalida');
        expect(()=>calcularPropina1(10,101)).toThrow('porcentaje invalido');
    });
})