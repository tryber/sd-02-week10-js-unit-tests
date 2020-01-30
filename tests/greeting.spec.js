const greeting = require('../src/greeting');

// A função deve receber uma string ${param} e retornar a mensagem 'Hello ${param}!'
// Se nenhum parâmetro for passado um erro deve ser lançado
// A mensagem do erro deve ser 'You must send something to greet!'

test('testando função greeting', () => {
  expect(greeting('Miguel')).toBe('Hello Miguel!');
  expect(() => greeting()).toThrow('You must send something to greet!');
});
