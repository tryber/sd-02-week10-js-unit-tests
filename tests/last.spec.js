const last = require('../src/last');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar o último elemento do parâmetro passado
// Se a função receber uma lista, deve retornar o último elemento
// Se a função receber uma string, deve retornar o último caractere
// Se a função receber vários parâmetros, deve retornar o último parâmetro

test('Verifica último parametro', () => {
  expect(5).toBe(last(1, 2, 3, 4, 5));
  expect('mouse').toBe(last(['teclado', 'monitor', 'gabinete', 'placa mãe', 'mouse']));
  expect('e').toBe(last('Trybe'));
  expect(32).toBe(last(10, 13, 'Ronaldinho Gaúcho', 25, 32));
});
