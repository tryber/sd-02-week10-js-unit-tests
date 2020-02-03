const primeFactors = require('../src/primeFactors');
const assert = require('assert');

// A função recebe um inteiro e retorna a lista com os fatores desse número
// Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado

describe('#primeFactors', () => {
    test('Ao ser chamado com um número inteiro', () => {
      const expectWithPrimers = primeFactors(109200);
      assert.deepStrictEqual(expectWithPrimers, [2, 2, 2, 2, 3, 5, 5, 7, 13], 'Deu ruim, tenta de novo');
    });
  
    test('Não é inteiro', () => {
      assert.throws(primeFactors, 'Just integers numbers.');
    });
  });