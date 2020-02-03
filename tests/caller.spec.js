const caller = require('../src/caller');

// A função deve receber 3 parâmetros
// O primeiro parâmetro deve ser uma função
// O segundo e terceiro parâmetros podem ser de qualquer tipo
// A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos
// e retornar o resultado

const soma = jest.fn((a, b) => a + b);

describe('#caller', () => {
  test('add numbers', (done) => {
    expect(caller(soma, 3, 3)).toBe(6);
    expect(caller(soma, 4, 2)).toBe(6);
    expect(soma).toBeCalledWith(3, 3);
    expect(soma).toBeCalledWith(4, 2);
    expect(soma).toHaveBeenCalledTimes(2);
    done();
  });
  test('concat strings', (done) => {
    expect(caller(soma, 'giorgia', 'trybe')).toBe('giorgiatrybe');
    expect(soma).toHaveBeenCalledTimes(3);
    done();
  });
});
