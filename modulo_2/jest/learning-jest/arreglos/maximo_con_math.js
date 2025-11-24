function maximo (arreglo){
    if(!Array.isArray(arreglo) || arreglo.length==0)
        throw new TypeError ("arreglo invalido");
    return Math.max(...arreglo);
}
module.exports={maximo}