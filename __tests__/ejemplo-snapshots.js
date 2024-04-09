const cliente = {
    nombre: 'Marcos',
    balance: 500,
    tipo: 'Premium'
};

describe('Testing al cliente', () => {
    test('Es Marcos Lopez', () => {
        expect( cliente ).toMatchSnapshot()
    })
})