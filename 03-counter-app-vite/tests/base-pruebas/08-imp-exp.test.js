import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';

describe('test in 08-imp-exp.js', () => {
  test('getHeroeById must be return an heroe by id', () => {
    const id = 1;
    const heroe = getHeroeById(id);

    expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
  });

  test('getHeroeById must be return undefined if id no exist', () => {
    const id = 1000;
    const heroe = getHeroeById(id);

    expect(heroe).toBeFalsy();
  });

  test('getHeroesByOwner must be return 3 DC heroes', () => {
    const recvHeroes = getHeroesByOwner('DC')
    const expHeroes = [
      {
          id: 1,
          name: 'Batman',
          owner: 'DC'
      },
      {
          id: 3,
          name: 'Superman',
          owner: 'DC'
      },
      {
          id: 4,
          name: 'Flash',
          owner: 'DC'
      },
    ];

    expect(recvHeroes).toHaveLength(3);
    expect(recvHeroes).toStrictEqual(expHeroes);
  });


  test('getHeroesByOwner must be return Marvel heroes', () => {
    const recvHeroes = getHeroesByOwner('Marvel')
    const expHeroes = [
      {
          id: 2,
          name: 'Spiderman',
          owner: 'Marvel'
      },
      {
          id: 5,
          name: 'Wolverine',
          owner: 'Marvel'
      },
    ];

    expect(recvHeroes).toHaveLength(2);
    expect(recvHeroes).toStrictEqual(expHeroes);
  });
});
