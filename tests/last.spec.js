const last = require('../src/last');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar o último elemento do parâmetro passado
// Se a função receber uma lista, deve retornar o último elemento
// Se a função receber uma string, deve retornar o último caractere
// Se a função receber vários parâmetros, deve retornar o último parâmetro

describe('testing the last of', () => {
  test('receiving array and returning last element', () => {
    expect(last([1, 4, 16, 64])).toBe(64);
  });

  test('receiving string and returning last character', () => {
    expect(last('Trybe')).toBe('e');
  });

  test('receiving more than one parameter and returning last parameter', () => {
    expect(last('mouse', 'teclado', 435)).toBe(435);
  });
});
