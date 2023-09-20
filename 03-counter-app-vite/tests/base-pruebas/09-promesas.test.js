import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Test in 09-promesas.js', () => {
  test('getHeroeByIdAsync must be return an heroe', (done) => {
    const id = 1;
    getHeroeByIdAsync(id)
      .then(hero =>{
        expect(hero).toEqual({
          id: 1,
          name: 'Batman',
          owner: 'DC'
        });
        done();
      });
  });

  test('getHeroeByIdAsync must be return an error', (done) => {
    const id = 100;
    getHeroeByIdAsync(id)
      .catch((err) => {
        expect(err).toBe('No se pudo encontrar el héroe')
        done();
      })
  });
});
