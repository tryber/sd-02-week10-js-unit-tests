const last = require('../src/last');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar o último elemento do parâmetro passado
// Se a função receber uma lista, deve retornar o último elemento
// Se a função receber uma string, deve retornar o último caractere
// Se a função receber vários parâmetros, deve retornar o último parâmetro

describe('last element params', () => {
  it('expect last of 10 should be 10', () => {
    expect(last(10)).toBe(10);
  });
  it('expect last of (10, 11, 20) should be 20', () => {
    expect(last(10, 11, 20)).toBe(20);
  });
  it('expect last of "joao" should be "o"', () => {
    expect(last('joao')).toBe('o');
  });
  it('expect last of (10, "jonas") should be "s"', () => {
    expect(last(10, 'jonas')).toBe('jonas');
  });
  it('expect last of ([10, "jonas", "20"]) should be "20"', () => {
    expect(last([10, 'jonas', '20'])).toBe('20');
  });
});
