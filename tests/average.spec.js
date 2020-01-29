const average = require('../src/average');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar a média dos números que receber
// Caso a função receba algum valor não número, o valor undefined deve ser retornado

describe('#average', () => {
  it('expect average of 3, 4, 5 should be 4', () => {
    expect(average(3, 4, 5)).toBe(4);
  });

  it('should receive an varivel size of parameters', () => {
    const paramsN = Math.floor(Math.random() * 1000) + 1;
    const paramsValue = [];
    for (let i = 0; i < paramsN; i += 1) {
      paramsValue.push(Math.floor(Math.random() * 20) + 1);
    }
    expect(typeof average(...paramsValue)).toBe('number');
  });

  it('should return undefined', () => {
    expect(average()).toBeUndefined();
  });
});
