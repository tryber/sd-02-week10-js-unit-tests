const greeting = require('../src/greeting');

describe('testes para a função greeting', () => {
  test.skip('deve retornar Hello PARAM', () => {
    expect(greeting('Lauro')).toBe('Hello Lauro!')
  })
  test.skip('mensagem de erro em caso de parâmetro vazio', () => {
    expect(greeting).toThrow(Error);
  })
  test('demonstrando exatamente a mensagem de erro', () => {
    expect(greeting).toThrowError('You must send something to greet!')
  })
})

// A função deve receber uma string ${param} e retornar a mensagem 'Hello ${param}!'
// Se nenhum parâmetro for passado um erro deve ser lançado
// A mensagem do erro deve ser 'You must send something to greet!'
