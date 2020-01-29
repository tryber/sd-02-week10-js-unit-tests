const primeFactors = require('../src/primeFactors');
//const assert = require('assert');

// A função recebe um inteiro e retorna a lista com os fatores desse número
// Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado

//const expect = primeFactors(112);

//assert.deepStrictEqual(expect, [ 2, 2, 2, 2, 7 ], 'Deu ruim, tenta de novo');

describe('#primeFactors', () => {
  it('expect factoring 112 [ 2, 2, 2, 2, 7 ]', () => {
    expect(primeFactors(112)).toEqual([ 2, 2, 2, 2, 7 ]);
  });
  it('expect error message if dont send number param', () => {
    expect(primeFactors(3.12)).toEqual(`3.12 is not a number`);
  });
});
