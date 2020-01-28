const greeting = require('../src/greeting');

test("A função deve receber uma string ${param} e retornar a mensagem 'Hello ${param}!'", () => {
    expect(greeting('Pedro')).toBe('Hello Pedro!');
})
test('Se nenhum parâmetro for passado um erro deve ser lançado', () => {
    expect(greeting).toThrow();
})
test("A mensagem do erro deve ser 'You must send something to greet!'", () => {
    expect(greeting).toThrowError(/^You must send something to greet!$/)
})
