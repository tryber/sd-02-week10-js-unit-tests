const caller = require('../src/caller');

// A função deve receber 3 parâmetros
// O primeiro parâmetro deve ser uma função
// O segundo e terceiro parâmetros podem ser de qualquer tipo
// A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos
// e retornar o resultado

const mockedFunction = jest.fn((a, b) => a + b);

describe('#caller', () => {
  test('If caller is a function', () => {
    expect(typeof caller).toEqual('function');
  });

  test('If caller receive 3 params', () => {
    expect(caller.length).toBe(3);
  });
});
