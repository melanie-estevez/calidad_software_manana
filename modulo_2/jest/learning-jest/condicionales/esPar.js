function esPar(numero) {
    if(!Number.isInteger(numero)) 
        throw new TypeError("numero debe ser entero");
    return numero%2===0;
}
module.exports={esPar}