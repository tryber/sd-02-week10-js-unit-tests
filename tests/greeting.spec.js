const greeting = require('../src/greeting');

// A função deve receber uma string ${param} e retornar a mensagem 'Hello ${param}!'
// Se nenhum parâmetro for passado um erro deve ser lançado
// A mensagem do erro deve ser 'You must send something to greet!'


test('Retornar greeting', () => {
  expect(greeting('Fulano')).toBe('Hello Fulano!');
  expect(() => greeting()).toThrow('You must send something to greet!');
});
