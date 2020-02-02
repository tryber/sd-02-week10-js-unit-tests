const greeting = require('../src/greeting');

// A função deve receber uma string ${param} e retornar a mensagem 'Hello ${param}!'
// Se nenhum parâmetro for passado um erro deve ser lançado
// A mensagem do erro deve ser 'You must send something to greet!'

describe('#greeting', () => {
  it('expect the sum of default function param and string param', () => {
    expect(greeting('Felipe')).toBe('Hello Felipe!');
  });
  it('expect error message if dont send param', () => {
    expect(greeting).toThrowError(Error('You must send something to greet!'));
  });
});
