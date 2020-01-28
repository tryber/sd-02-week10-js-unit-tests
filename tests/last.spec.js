const last = require('../src/last');

describe('série de testes para last.js', () => {
  it('primeiro teste: array', () => {
    expect(last(['gato', 'cachorro', 'papagaio'])).toBe('papagaio');
  }
  )
  it('segundo teste: string', () => {
    expect(last('cachorro')).toBe('o')
  }
  )
  it('terceiro e último teste: vários parâmetros', () => {
    expect(last(1, 2, 'vassoura', harryPotter = 0)).toBe(0)
  })
});


// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar o último elemento do parâmetro passado
// Se a função receber uma lista, deve retornar o último elemento
// Se a função receber uma string, deve retornar o último caractere
// Se a função receber vários parâmetros, deve retornar o último parâmetro
