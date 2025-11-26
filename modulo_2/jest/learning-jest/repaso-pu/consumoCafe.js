function calcularTotalCafeteria1(items, ivaPorcentaje){
    if(!Array.isArray(items))
        throw new TypeError('items invalidos');
    if(!Number.isInteger(ivaPorcentaje)|| ivaPorcentaje < 0 || ivaPorcentaje >100)
        throw new TypeError('iva invalido');

    items.forEach((item, i)=>{
        if(typeof item.nombre !=='string' || item.nombre.trim() =='')
            throw new TypeError('items invalidos');
        if(typeof item.precioUnitario !=='number'|| item.precioUnitario < 0)
            throw new TypeError('items invalidos');
        if(!Number.isInteger(cantidad)|| cantidad < 0)
            throw new TypeError('items invalidos');
    })
    let subtotal=0
    for (let item of items){
        subtotal = subtotal + (item.precioUnitario * item.cantidad)
    }
    let iva = (ivaPorcentaje/100)*subtotal

    return subtotal+iva;
}