import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('template string', () => {
  test('getSaludo must return "Hola mundo"', () => {
    const respName = 'mundo';
    const msg = getSaludo(respName);
    expect(msg).toBe(`Hola ${respName}`);
  })
})
