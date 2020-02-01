const last = require('../src/last');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar o último elemento do parâmetro passado
// Se a função receber uma lista, deve retornar o último elemento
// Se a função receber uma string, deve retornar o último caractere
// Se a função receber vários parâmetros, deve retornar o último parâmetro - escolhi não fazer

describe('testing the last of', () => {
  test('receiving one parameter as array and returning last element', () => {
    expect(last([1, 4, 16, 64])).toBe(64);
  });

  test('receiving one parameter as string and returning last character', () => {
    expect(last('Trybe')).toBe('e');
  });

  test('receiving many parameters as string and numbers and returning last parameter', () => {
    expect(last('Trybe', 28, 'october', 'SD02', 'day one')).toBe('day one');
  });
});
