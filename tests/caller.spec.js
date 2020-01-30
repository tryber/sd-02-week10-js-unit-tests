const caller = require('../src/caller');

// A função deve receber 3 parâmetros
// O primeiro parâmetro deve ser uma função
// O segundo e terceiro parâmetros podem ser de qualquer tipo
// A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos
// e retornar o resultado

test('testando função caller', (done) => {
  const funcao = jest.fn();
  caller(funcao, false, '4');
  expect(funcao).toHaveBeenCalled();
  expect(funcao).toHaveBeenCalledWith(false, '4');
  done();
});
