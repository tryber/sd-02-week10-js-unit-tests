const average = require('../src/average');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar a média dos números que receber
// Caso a função receba algum valor não número, o valor undefined deve ser retornado

describe('#average', () => {
  it('expect average of 3, 4, 5 should be 4', () => {
    expect(average(3, 4, 5)).toBe(4);
  });

  it('average is not a number', () => {
    expect(average(3, 4, 'a')).toBeUndefined();
  });

  it('expect average of 3, 7, should be 5', () => {
    expect(average(3, 7)).toBe(5);
  });

  it('expect average of 3, should be 3', () => {
    expect(average(3)).toBe(3);
  });
});
