const average = require('../src/average');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar a média dos números que receber
// Caso a função receba algum valor não número, o valor undefined deve ser retornado

describe('#average', () => {
  it('expect average of 3, 4, 5 should be 4', () => {
    expect(average(3, 4, 5)).toBe(4);
  });
  it('expect average of 10, 9, 11 should be 10', () => {
    expect(average(10, 9, 11)).toBe(10);
  })
  it('not a number return undefined', () => {
    expect(average('lucas')).toBeUndefined();
  })
});
