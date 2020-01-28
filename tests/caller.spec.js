const caller = require('../src/caller');

const funcaoMocada = jest.fn((a, b) => a + b)

test('A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos e retornar o resultado', () => {
    expect(caller(funcaoMocada, 3, 4)).toBe(7);
})

