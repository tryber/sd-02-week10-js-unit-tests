const average = require('../src/average');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar a média dos números que receber
// Caso a função receba algum valor não número, o valor undefined deve ser retornado

describe('#average', () => {
  it('expect average of 3, 4, 5 should be 4', () => {
    expect(average(3, 4, 5)).toBe(4);
  });

  it('espera "undefined" quando há parâmetros que não sejam números', () => {
    expect(average(2, 'xablau', 4)).toEqual(undefined);
  })
});
