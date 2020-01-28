const average = require('../src/average');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar a média dos números que receber
// Caso a função receba algum valor não número, o valor undefined deve ser retornado

describe('#average', () => {
  it('expect average of 3, 4, 5 should be 4', () => {
    expect(average(3, 4, 5)).toBe(4);
  });

  test('A função deve receber uma quantidade qualquer de parâmetros', () => {
    expect(average(3, 7, 5, 3, -3)).toBe(3);
  });

  test('A função deve retornar a média dos números que receber', () => {
    expect(average(1, 1, 1, 1, 1)).toBe(1);
  })

  test('Caso a função receba algum valor não número, o valor undefined deve ser retornado', ()=> {
    expect(average(1,2,'oi')).toBe(undefined)
  })
});
