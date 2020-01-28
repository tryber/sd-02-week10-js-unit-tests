const caller = require('../src/caller');

// A função deve receber 3 parâmetros
// O primeiro parâmetro deve ser uma função
// O segundo e terceiro parâmetros podem ser de qualquer tipo
// A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos
// e retornar o resultado

describe('#Caller', () => {
    const some = jest.fn((a, b) => a + b);
    const div = jest.fn((a, b) => b / a);
    it('Teste de função', done => {
        expect(caller(some, 1, 2)).toBe(3);
        expect(caller(div, 1, 2)).toBe(2);
        done();
    })
})