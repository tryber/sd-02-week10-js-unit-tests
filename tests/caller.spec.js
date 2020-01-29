const caller = require('../src/caller');

const funcaoMocada = jest.fn((a, b) => a + b);

test('A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos e retornar o resultado', () => {
  expect(caller(funcaoMocada, 3, 4)).toBe(7);
});

test('A função mock foi chamada', () => {
  expect(funcaoMocada).toHaveBeenCalled();
});

test('Conferindo parâmetros passados', () => {
  expect(funcaoMocada).toHaveBeenLastCalledWith(3, 4);
});
