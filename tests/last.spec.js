const last = require('../src/last');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar o último elemento do parâmetro passado
// Se a função receber uma lista, deve retornar o último elemento
// Se a função receber uma string, deve retornar o último caractere
// Se a função receber vários parâmetros, deve retornar o último parâmetro

describe('testando função last', () => {
  it('quando a função recebe uma lista deve retornar o último elemento', () => {
    expect(last([1, 'cachorro', 'xablau', 3, 4])).toBe(4);
  });

  it('quando a função recebe uma string deve retornar o último caractere', () => {
    expect(last('xablau')).toEqual('u');
  });

  it('quando a função recebe vários parâmetros, deve retornar o último', () => {
    expect(last(1, 2, 3, [2, 1], 5)).toEqual(5);
  });
})
