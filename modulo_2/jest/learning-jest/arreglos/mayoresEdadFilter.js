function mayoresEdadFilter(arreglo){
    if(!Array.isArray(arreglo)) throw new TypeError("edad invalida");
    return arreglo.filter(n => n >= 18);
}
module.exports = { mayoresEdadFilter };
