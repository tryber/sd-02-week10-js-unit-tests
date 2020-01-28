const caller = require('../src/caller');

// A função deve receber 3 parâmetros
// O primeiro parâmetro deve ser uma função
// O segundo e terceiro parâmetros podem ser de qualquer tipo
// A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos
// e retornar o resultado

it('testando a função caller', (done) => {
  const fn = jest.fn();
  caller(fn, 'a', 'b');
  expect(fn).toHaveBeenCalled();
  expect(fn).toHaveBeenCalledWith('a', 'b');
  caller(fn, 3, 'cachorro');
  expect(fn).toHaveBeenCalled();
  expect(fn).toHaveBeenCalledWith(3, 'cachorro');
  done();
});
