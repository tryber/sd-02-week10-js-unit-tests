const caller = require('../src/caller');

// A função deve receber 3 parâmetros
// O primeiro parâmetro deve ser uma função
// O segundo e terceiro parâmetros podem ser de qualquer tipo
// A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos
// e retornar o resultado

describe('#caller', () => {
  const fn = jest.fn((a, b) => a + b);

  it('should return the result function', () => {
    expect(caller(fn, 2, 3)).toBe(5);
  });

  it('should return the result function', () => {
    expect(caller(fn, 'coi', 'sa')).toBe('coisa');
  });

  it('first param should be a function', () => {
    expect(typeof fn).toBe('function');
  });
});
