const primeFactors = require('../src/primeFactors');
const assert = require('assert');

describe('testes para a função primeFactors', () => {
  it('função recebe um número e retorna a lista com os fatores primos', () => {
    expect(primeFactors(40)).toEqual([2, 2, 2, 5]);
  })
  it('retorna um erro em caso de algo distinto de um número inteiro', () => {
    expect(primeFactors(1.5)).toThrow(Error);
  })
}
)

// A função recebe um inteiro e retorna a lista com os fatores primos desse número
// Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado
