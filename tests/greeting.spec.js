const greeting = require('../src/greeting');

// A função deve receber uma string ${param} e retornar a mensagem 'Hello ${param}!'
// Se nenhum parâmetro for passado um erro deve ser lançado
// A mensagem do erro deve ser 'You must send something to greet!'

describe('testing function greeting', () => {
    test('no parameter passed', () => {
        expect(greeting).toThrowError(new Error('You must send something to greet!'));
    });
    test('parameter Johnatas passed', () => {
        expect(greeting('Johnatas')).toBe('Hello Johnatas!');
    });
})
