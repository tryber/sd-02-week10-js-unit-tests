const primeFactors = require('../src/primeFactors');
const assert = require('assert');

describe('#primefactors', () => {
  it('integer return factors', () => {
    assert.deepStrictEqual(primeFactors(8), [2, 2, 2]);
    assert.deepStrictEqual(primeFactors(147), [3, 7, 7]);
  });
  it('not a integer', () => {
    assert.throws(() => primeFactors(2.3), /You must pass an integer/);
    assert.throws(() => primeFactors(0), /You must pass an integer/);
  });
});

// A função recebe um inteiro e retorna a lista com os fatores desse número
// Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado
