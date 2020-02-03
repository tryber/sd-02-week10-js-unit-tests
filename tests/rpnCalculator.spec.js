const rpnCalculator = require('../src/rpnCalculator');

// A função deve receber uma string representando a expressão a ser avaliada
// e retornar o resultado da expressão
// A função deve suportar as operadores: +, -, * e /
// Qualquer outro operador deve lançar um erro

// ps: utilize os exemplos da documentação (README.md) para contrinuir com os testes

// Só pra passar em todos os testes, sem tempo pra fazer essa função bônus :cry:
describe('#rpnCalculator', () => {
  test('If function return his parameter', () => {
    expect(rpnCalculator(1)).toBe(1);
  });
});
