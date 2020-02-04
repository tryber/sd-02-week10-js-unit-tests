const primeFactors = require('../src/primeFactors');
const assert = require('assert');

// A função recebe um inteiro e retorna a lista com os fatores primos desse número
// Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado
test('teste primos', () => {
  assert.deepEqual(primeFactors(4), [2, 2]);
  assert.deepEqual(primeFactors(10), [2, 5]);
  assert.deepEqual(primeFactors(7), [7]);
  assert.deepEqual(primeFactors(9), [3, 3]);
  assert.deepEqual(primeFactors(24), [2, 2, 2, 3]);
  assert.throws(() => {
    primeFactors(4.5);
  });
});
