const greeting = require('../src/greeting');

// A função deve receber uma string ${param} e retornar a mensagem 'Hello ${param}!'
// Se nenhum parâmetro for passado um erro deve ser lançado
// A mensagem do erro deve ser 'You must send something to greet!'

describe('#greetins', () => {
  it('should return Hello Ki', () => {
    expect(greeting('Ci')).toBe('Hello Ci!');
  });

  it('should throw a error', () => {
    expect(greeting).toThrow(Error);
  });

  it('error message should be: You must send something to greet!', () => {
    try {
      greeting();
    } catch (e) {
      expect(e.message).toBe('You must send something to greet!');
    }
  });
});
