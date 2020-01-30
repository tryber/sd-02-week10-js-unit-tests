const average = require('../src/average');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar a média dos números que receber
// Caso a função receba algum valor não número, o valor undefined deve ser retornado

describe('#average', () => {
  it('expect average of 3, 4, 5 should be 4', () => {
    expect(average(3, 4, 5)).toBe(4);
    expect(average(20, 40, 10, 30)).toBe(25);
  });

  it('Caso a função receba algum valor não número, o valor undefined deve ser retornado', () => {
    expect(average(10, 'a', 7)).toBeUndefined();
    expect(average(10, false, 7)).toBeUndefined();
    expect(average(10, [3], 7)).toBeUndefined();
    expect(average(10, { valor: 3 }, 7)).toBeUndefined();
  });
});
