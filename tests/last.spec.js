const last = require('../src/last');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar o último elemento do parâmetro passado
// Se a função receber uma lista, deve retornar o último elemento
// Se a função receber uma string, deve retornar o último caractere
// Se a função receber vários parâmetros, deve retornar o último parâmetro

describe('#last', () => {
  it('expect last letter of Felipe, e', () => {
    expect(last('Felipe')).toEqual('e');
  });
  it('expect last array indice Miguel', () => {
    expect(last(['Felipe', 'Max', 'Miguel'])).toEqual('Miguel');
  });
  it('expect last param', () => {
    expect(last('Felipe', 12, true)).toEqual(true);
  });
});
