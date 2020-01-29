const rpnCalculator = require('../src/rpnCalculator');

// A função deve receber uma string representando a expressão a ser avaliada
// e retornar o resultado da expressão
// A função deve suportar as operadores: +, -, * e /
// Qualquer outro operador deve lançar um erro

// ps: utilize os exemplos da documentação (README.md) para contrinuir com os testes

describe('#rpnCalculator', () => {
  it('Given the expression 5 * 2 - 10 / 2 it should return 5', () => {
    expect(rpnCalculator('5 * 2 - 10 / 2')).toBe(5);
  });

  it('given a invalid operator > should return a error', () => {
    try {
      rpnCalculator('5 * 2 - 10 > 2');
    } catch (e) {
      expect(e.message).toBe('Operador inválido!');
    }
  });
});
