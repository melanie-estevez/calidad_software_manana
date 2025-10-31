const {crearEstudiante} = require('./crearEstudiante');
describe('Crear Estudiante',()=>{
    test('Happy Path:', () =>{
        expect(crearEstudiante('Mel',20)).toEqual({
            nombre:"Mel",
            edad: 20
        });
    });
    test('Sad path: nombre / edad invalida', ()=>{
        expect(()=>crearEstudiante('',20)).toThrow('nombre invalido')
        expect(()=>crearEstudiante('Ana',-1)).toThrow('edad invalida')
    })
})