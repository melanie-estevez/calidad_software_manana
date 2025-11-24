const calcularBonoAntiguedad = require('./bono');

describe('Calcular Bono por Antigüedad', () => {

    test('Happy path: cálculo correcto del bono y total', () => {
        const r1 = calcularBonoAntiguedad(2, 1000);
        expect(r1.bono).toBe(0);
        expect(r1.totalConBono).toBe(1000);

        const r2 = calcularBonoAntiguedad(4, 1000); 
        expect(r2.bono).toBe(50);
        expect(r2.totalConBono).toBe(1050);

        const r3 = calcularBonoAntiguedad(7, 1000); 
        expect(r3.bono).toBe(100);
        expect(r3.totalConBono).toBe(1100);

        const r4 = calcularBonoAntiguedad(12, 1000); 
        expect(r4.bono).toBe(150);
        expect(r4.totalConBono).toBe(1150);
    });


    test('Sad path: datos inválidos', () => {
        expect(() => calcularBonoAntiguedad(-1, 1000))
            .toThrow('datos inválidos');

        expect(() => calcularBonoAntiguedad(5, -100))
            .toThrow('datos inválidos');

        expect(() => calcularBonoAntiguedad("5", 1000))
            .toThrow('datos inválidos');

        expect(() => calcularBonoAntiguedad(5, "1000"))
            .toThrow('datos inválidos');
    });

});
