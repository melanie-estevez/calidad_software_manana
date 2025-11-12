const {filterActiveUsers} = require('./filterActiveUsers');
describe('Filtrar usuarios Activos', ()=>{
    test('Happy path:Filtrar Usuarios Correctamente', () =>{
           const users = [
                {id: 1, username: "higueraf", active:true},
                {id: 2, username:"hernandezt", active:false},
                {id: 3, username:"lopez", active:true}
            ]
            const response=filterActiveUsers(users);
            const expectedUsers = [
                {id:1, username:"higueraf", active:true},
                {id:3, username: "lopez", active:true}
            ]
            expect(response).toStrictEqual(expectedUsers)
    });
    test('Sad path: diferencia ttipos en objetos',
        ()=>{
            const users = [
                {id: 1, username: "higueraf", active:true},
                {id: 2, username:"hernandezt", active:true}
            ]
            const response = filterActiveUsers(users);
            const expectedUsers = [
                {id: 1, username:"higueraf",active:false}
            ]
            expect(response).not.toStrictEqual(expectedUsers)
        }
    )
})