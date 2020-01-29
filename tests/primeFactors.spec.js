const primeFactors = require('../src/primeFactors');
const assert = require('assert');

// A função recebe um inteiro e retorna a lista com os fatores primos desse número
// Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado

assert.deepEqual(primeFactors(20), [2, 4, 5, 10]);

describe('#primeFactors', () => {
  it('should return a error', () => {
    try {
      primeFactors('string');
    } catch (e) {
      expect(e.message).toBe('should be a number');
    }
  });
});
