const greeting = require('../src/greeting');

describe('#greeting', () => {
  test('return message', () => {
    expect(greeting('Lucas')).toEqual('Hello Lucas!');
    expect(() => {
      greeting();
    }).toThrow(Error('You must send something to greet!'))
  });
});

// A função deve receber uma string ${param} e retornar a mensagem 'Hello ${param}!'
// Se nenhum parâmetro for passado um erro deve ser lançado
// A mensagem do erro deve ser 'You must send something to greet!'
