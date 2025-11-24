const {calcularPropina} = require('./propina.js');
describe ('calcularPropina', () => {
    test('Happy path: Calcular correctamente',() =>{
        const valorEsperado =
        {cuenta :10, propina:1.5, totalPagar: 11.5}
        const resultado = calcularPropina(10,15);
        expect(resultado).toEqual(valorEsperado);
    });
    test ('Sad path: Valores de ingreso errados', () =>{
        expect(()=>calcularPropina(0,12))
         .toThrow('cuenta no valida');
        expect(()=>calcularPropina(133,-2))
         .toThrow('porcentajepropina invalido');
    });
});