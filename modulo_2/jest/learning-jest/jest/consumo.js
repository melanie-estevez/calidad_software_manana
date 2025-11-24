function calcularTotalCafeteria(items, ivaPorcentaje) {
    if (!Array.isArray(items))
        throw new ("array invalido");
    if (!ivaPorcentaje || typeof ivaPorcentaje !== 'number') 
        throw new TypeError("ivaPorcentaje invalido");
    let subtotal = 0;
    for(let item of items){
        const subtotalItem = item.precioUnitario * item.cantidad;
        subtotal+=subtotalItem;
    }
    const iva = subtotal * (ivaPorcentaje/100);
    const total = subtotal + iva;
    return total;
}   
module.exports={calcularTotalCafeteria};


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

const resultado = calcularTotalCafeteria(items, 15);
console.log("resultado : ", resultado);

