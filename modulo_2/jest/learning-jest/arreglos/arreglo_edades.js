function arreglo_edades(arreglo){
    if(!Array.isArray(arreglo))
        throw new TypeError("edad invalida");

    if(arreglo.length === 0) return [];

    let mayores = [];

    for(let i=0; i<arreglo.length; i++){
        if(typeof arreglo[i] !== "number" || arreglo[i] < 0)
            throw new TypeError("edad invalida");
        if(arreglo[i] >= 18){
            mayores.push(arreglo[i]);
        }
    }

    if(mayores.length === 0) return [];
    return Math.min(...mayores);
}

module.exports = { arreglo_edades };
