const caller = require('../src/caller');

// A função deve receber 3 parâmetros
// O primeiro parâmetro deve ser uma função
// O segundo e terceiro parâmetros podem ser de qualquer tipo
// A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos
// e retornar o resultado


test('#caller', () => {
  function sum(...params) {
    return params.reduce((cc, current) => cc + current);
  }

  function mult(...params) {
    return params.reduce((cc, current) => cc * current);
  }
  expect(caller(sum, 2, 5)).toBe(7);
  expect(caller(mult, 10, 10)).toBe(100);
});
