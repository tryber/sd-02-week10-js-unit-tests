const average = require('../src/average.js');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar a média dos números que receber
// Caso a função receba algum valor não número, o valor undefined deve ser retornado

describe('#average', () => {
  it('expect average of 3, 4, 5 should be 4', () => {
    expect(average(3, 4, 5)).toEqual(4);
  });
  it('expect undefined if param function is not a number', () => {
    expect(average(1, 'x', 2)).toEqual(undefined);
  });
});
