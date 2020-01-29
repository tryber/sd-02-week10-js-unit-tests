const primeFactors = require('../src/primeFactors');
const assert = require('assert');

// A função recebe um inteiro e retorna a lista com os fatores desse número
// Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado

assert.deepEqual(primeFactors(10), [1, 2, 5, 10]);
assert.deepEqual(primeFactors(30), [1, 2, 3, 5, 6, 10, 15, 30]);
assert.deepEqual(primeFactors(5), [1, 5]);
