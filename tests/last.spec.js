const last = require('../src/last');

test('A função deve receber uma quantidade qualquer de parâmetros', () => {
    expect(last(3, 2, 4)).toBe(4);
})
test('A função deve retornar o último elemento do parâmetro passado', () => {
    expect(last(1, 2, 3, 4, 5, 6)).toBe(6);
})
test('Se a função receber uma lista, deve retornar o último elemento', () => {
    expect(last([4, 5, 6, 7, 8, 9])).toBe(9);
})
test('Se a função receber uma string, deve retornar o último caractere', () => {
    expect(last('Trybe')).toBe('e');
})
test('Se a função receber vários parâmetros, deve retornar o último parâmetro', () => {
    expect(last(4, 5, 'ola', [4, 5], 9, [9, 'ola'])).toBe('ola');
})
