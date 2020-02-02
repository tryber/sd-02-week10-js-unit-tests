const caller = require('../src/caller');

// A função deve receber 3 parâmetros
// O primeiro parâmetro deve ser uma função
// O segundo e terceiro parâmetros podem ser de qualquer tipo
// A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos
// e retornar o resultado

const callBackFunction = jest.fn((a, b) => a * b);

describe('#caller', () => {
  it("test result callBackFunction with 5 and 5", (done) => {
    expect(caller(callBackFunction, 5, 5)).toBe(25);
    expect(callBackFunction).toHaveBeenCalledWith(5, 5);
    done();
  });

  it("test if callback of caller is function", (done) => {
    expect(typeof callBackFunction).toBe('function');
    done();
  });
});
