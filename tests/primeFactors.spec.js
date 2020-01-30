const primeFactors = require('../src/primeFactors');
const assert = require('assert');

// A função recebe um inteiro e retorna a lista com os fatores primos desse número
// Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado



describe('#primeFactors', () => {
  it ('tests', () => {
    const expected = primeFactors(40);
    let result =[2, 2, 2, 5];
    assert.deepStrictEqual(expected, result);
    
    result = 'Error: Valor não inteiro.';
    assert.throws(() => { primeFactors('hi'); }, result);
  })
})

