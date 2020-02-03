const average = require('../src/average');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar a média dos números que receber
// Caso a função receba algum valor não número, o valor undefined deve ser retornado

describe('#average', () => {
  it('Retornar a média dos números que receber', () => {
    expect(average(3, 4, 5)).toEqual(4);
  });
  it('Retornar undefined se algum dos valores não for um n', () => {
    expect(average(1, 2, 'g')).toEqual(undefined);
  });
});
