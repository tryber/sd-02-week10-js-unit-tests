const primeFactors = require('../src/primeFactors');
const assert = require('assert');

// A função recebe um inteiro e retorna a lista com os fatores primos desse número
// Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado

assert.deepEqual(primeFactors(4), [1, 2]);
assert.deepEqual(primeFactors(10), [1, 2, 5]);
assert.deepEqual(primeFactors(7), [1, 7]);
assert.deepEqual(primeFactors(9), [1, 3]);
assert.deepEqual(primeFactors(24), [1, 2, 3]);
assert.throws(() => {
  primeFactors(4.5);
});
