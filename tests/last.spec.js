const last = require('../src/last');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar o último elemento do parâmetro passado
// Se a função receber uma lista, deve retornar o último elemento
// Se a função receber uma string, deve retornar o último caractere
// Se a função receber vários parâmetros, deve retornar o último parâmetro

describe('#last', () => {
  it('should receive an varivel size of parameters', () => {
    const paramsN = Math.floor(Math.random() * 1000) + 1;
    const paramsValue = [];
    for (let i = 0; i < paramsN; i += 1) {
      paramsValue.push(Math.floor(Math.random() * 20) + 1);
    }
    expect(typeof last(...paramsValue)).toBeDefined();
  });

  it('should return 5', () => {
    expect(last(1, 2, 'coisa', true, 5)).toBe(5);
  });

  it('should return 7', () => {
    expect(last(1, 2, 'coisa', true, [1, 2, 7])).toBe(7);
  });

  it('should return t', () => {
    expect(last(1, 2, 'coisa', true, 'last')).toBe('t');
  });

  it('If receive only parameters should return parameter', () => {
    expect(last([2, 3], [2, 'str'], 'str')).toBe('str');
  });
});
