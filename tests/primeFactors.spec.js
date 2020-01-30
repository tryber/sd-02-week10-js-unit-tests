const primeFactors = require('../src/primeFactors');
const assert = require('assert');

// A função recebe um inteiro e retorna a lista com os fatores primos desse número
// Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado

test('A função recebe um inteiro e retorna a lista com os fatores primos desse número', () => {
  assert.deepEqual(primeFactors(15), [3, 5]);
  assert.deepEqual(primeFactors(9), [3, 3]);
  assert.deepEqual(primeFactors(12), [2, 2, 3]);
});

test('Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado', () => {
  assert.throws(() => primeFactors(2.5));
});
