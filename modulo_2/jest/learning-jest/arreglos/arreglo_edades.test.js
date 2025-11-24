const{arreglo_edades} = require ('./arreglo_edades');

describe('Edades Mayor de Edad', ()=>{
    test('Happy path:[18,24,30,40] mayor de edad',() =>{
        expect(arreglo_edades([18,24,30,40])).toBe(18);
    });
    test('Happy path:[] mayores de edad ',() =>{
        expect(arreglo_edades([])).toEqual([]);
    });
    test('Sad path:edad invalida',() =>{
        expect(()=>arreglo_edades([-1,18 ])).toThrow('edad invalida');
        expect(()=>arreglo_edades('arreglo')).toThrow('edad invalida');
    });
})