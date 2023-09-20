import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('test in 05-funciones.js', () => {
  test('getUser must be return an object', () => {
    const expUser = {
        uid: 'ABC123',
        username: 'El_Papi1502'
    };
    const recvUser = getUser();
    expect(recvUser).toStrictEqual(expUser);
    expect(recvUser).toEqual(expUser);
  });

  test('getUsuarioActivo must return an object',() => {
    const name = 'TestName';

    const expUser = {
      uid: 'ABC567',
      username: name
    };

    const recvUser = getUsuarioActivo(name);
    expect(recvUser).toEqual(expUser)

  })
});
