const primeFactors = require('../src/primeFactors');
const assert = require('assert');

describe('#primefactors', () => {
  it('integer return factors', () => {
    assert.deepStrictEqual(primeFactors(10), [2, 5]);
    assert.deepStrictEqual(primeFactors(147), [2, 5, 13]);
    assert.deepStrictEqual(primeFactors(0), [3, 5])
  })
  it('not a integer', () => {
    assert.throws(() => primeFactors(2.3), Error('You must pass a integer')
  })
  
})

// A função recebe um inteiro e retorna a lista com os fatores desse número
// Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado
