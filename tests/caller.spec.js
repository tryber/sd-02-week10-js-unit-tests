const caller = require('../src/caller');

// A função deve receber 3 parâmetros
// O primeiro parâmetro deve ser uma função
// O segundo e terceiro parâmetros podem ser de qualquer tipo
// A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos
// e retornar o resultado

const fn = (a, b) => a + b;

describe('#caller', () => {
  it('with fn, 30, 70 should return 100', () => {
    expect(caller(fn, 30, 70)).toBe(100);
  });
  it('should return 2 strings as 1', () => {
    expect(caller(fn, 'Hello ', 'Tryber')).toBe('Hello Tryber');
  });
});