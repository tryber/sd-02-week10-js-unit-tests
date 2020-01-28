const last = require('../src/last');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar o último elemento do parâmetro passado
// Se a função receber uma lista, deve retornar o último elemento
// Se a função receber uma string, deve retornar o último caractere
// Se a função receber vários parâmetros, deve retornar o último parâmetro

test('testando função last', () => {
  expect(last(['a', 'h', 3, 'abelha'])).toBe('abelha');
  expect(last('paralelepípedo')).toBe('o');
  expect(last(1, 2, 'x', 'y', 'w')).toBe('w');
});
