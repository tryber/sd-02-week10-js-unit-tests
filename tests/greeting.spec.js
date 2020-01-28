const greeting = require('../src/greeting');

// A função deve receber uma string ${param} e retornar a mensagem 'Hello ${param}!'
// Se nenhum parâmetro for passado um erro deve ser lançado
// A mensagem do erro deve ser 'You must send something to greet!'

describe ('greeting', () => {
  it('expect greeting of "Joao" should be "Hello Joao"', () => {
    expect(greeting('Joao')).toBe('Hello Joao!');
  });
  it('expect greeting of () should be error', () => {
    expect(greeting).toThrowError(Error);
  });
});
