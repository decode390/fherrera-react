

describe('Test in demo component', () => {
  test('Esta prueba no debe fallar', () => {
    // if (1 === 0) {
    //   throw new Error('Error forzado');
    // }

    // 1. Inicialización
    const message1 = 'Hello world';
    
    // 2. Estímulo
    const message2 = message1.trim();
    
    // 3. Observación
    expect( message1).toBe(message2);
    
  });
})

