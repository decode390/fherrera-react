import { getImagen } from '../../src/base-pruebas/11-async-await'

describe('test in 11-asyn-await', () => {
  test('getImagen must be return url image', async() => {
    const url = await getImagen();
    expect(typeof url).toBe('string');
  });
})
