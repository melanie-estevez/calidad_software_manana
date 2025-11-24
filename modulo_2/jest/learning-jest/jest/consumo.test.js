const { calcularTotalCafeteria } = require('./consumo');

describe('Calcular Total Cafeteria', () => {
    test('Happy path: calcular total correctamente', () => {
        const items =
            [
                {
                    nombre: "Laptop",
                    precioUnitario: 500,
                    cantidad: 3

                },

                {
                    nombre: "monitor",
                    precioUnitario: 300,
                    cantidad: 2

                },
            ]

        const response = calcularTotalCafeteria(items, 15);
        expect(response).toBe(2415);
    });

    test('Sad path: valores de ingreso errados', () => {
        const items =
            [
                {
                    nombre: "Laptop",
                    precioUnitario: 500,
                    cantidad: 3

                },

                {
                    nombre: "monitor",
                    precioUnitario: 300,
                    cantidad: 2

                },
            ]

        expect(() => calcularTotalCafeteria(0, 12))
            .toThrow('array invalido');
        expect(() => calcularTotalCafeteria(items, "12"))
            .toThrow('ivaPorcentaje invalido');
    });





});