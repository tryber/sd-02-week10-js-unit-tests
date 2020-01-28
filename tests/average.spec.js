const average = require('../src/average');
const numbers = require('../src/numbers');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar a média dos números que receber
// Caso a função receba algum valor não número, o valor undefined deve ser retornado

describe('#average', () => {
  test('expect average of 12 should be 12, passing one parameter', () => {
    expect(average(12)).toBe(12);
  });
  test('expect average of 3, 4, 5 should be 4, passing three parameters', () => {
    expect(average(3, 4, 5)).toBe(4); //erro de parenteses nessa linha
  });
  test('expect undefined when passing something that is not a number', () => {
    expect(average(3, 4, 5, 'stringy', 6)).toBe(undefined);
  })
});
