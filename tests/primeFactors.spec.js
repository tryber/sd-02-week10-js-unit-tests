const primeFactors = require('../src/primeFactors');
const assert = require('assert');

// A função recebe um inteiro e retorna a lista com os fatores primos desse número
// Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado

// Um único test só pro Jest não falhar aqui
test('is a function', () => {
  expect(typeof primeFactors).toBe('function');
});

assert.strictEqual(typeof primeFactors, 'function');
assert.deepStrictEqual(primeFactors(10), [2, 5]);
assert.deepStrictEqual(primeFactors(187), [11, 17]);
assert.deepStrictEqual(primeFactors(0), []);
assert.deepStrictEqual(primeFactors(1.92), []);
assert.deepStrictEqual(primeFactors(-80), []);
assert.throws(primeFactors, /Only accepts an integer number$/);
