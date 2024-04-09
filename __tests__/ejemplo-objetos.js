const cliente = {
    nombre: 'Marcos Lopez',
    balance: 500
};

describe('Testing al Cliente', () => {
    test('El cliente es premium', () => {
        expect( cliente.balance ).toBeGreaterThan(400);//verifica que sea mayor a 400
    });

    test('Es Marcos Lopez', () => {
        expect( cliente.nombre ).toBe('Marcos Lopez');
    });

    test('No es otro cliente', () => {
        expect( cliente.nombre ).not.toBe('Pedro');
    });

    test('No tiene 500', () => {
        expect( cliente.balance ).not.toBe(400);
    })
});