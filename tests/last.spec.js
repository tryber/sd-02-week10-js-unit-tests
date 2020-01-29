const last = require('../src/last');

describe('#lastSpec', () => {
  it('return last element', () => {
    expect(last([1, 2, 4, 8])).toBe(8);
    expect(last('lucas')).toBe('s');
    expect(last((1, 'b', 130, [], 17))).toBe(17);
  });
});

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar o último elemento do parâmetro passado
// Se a função receber uma lista, deve retornar o último elemento
// Se a função receber uma string, deve retornar o último caractere
// Se a função receber vários parâmetros, deve retornar o último parâmetro
