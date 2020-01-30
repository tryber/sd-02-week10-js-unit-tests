const last = require('../src/last');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar o último elemento do parâmetro passado
// Se a função receber uma lista, deve retornar o último elemento
// Se a função receber uma string, deve retornar o último caractere
// Se a função receber vários parâmetros, deve retornar o último parâmetro

describe('last', () => {
    test('A função deve retornar o último elemento do parâmetro passado', () => {
        expect(last('a', 'b', 'c')).toBe('c');
    });
});


describe('last', () => {
    test('Se a função receber uma lista, deve retornar o último elemento', () => {
        expect(last([1, 2, 3])).toBe(3);
    });
})

describe('last', () => {
    test('Se a função receber uma string, deve retornar o último caractere', () => {
        xpect(last('giorgia')).toBe('a');
    });
});