const caller = require('../src/caller');

// A função deve receber 3 parâmetros
// O primeiro parâmetro deve ser uma função
// O segundo e terceiro parâmetros podem ser de qualquer tipo
// A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos
// e retornar o resultado

const mockCallback = jest.fn((a, b) => a + b);

describe('caller function', () => {
  it('expect mockCallback should be function', (done) => {
    expect(typeof mockCallback).toBe('function');
    done();
  });

  it('expect caller(mockCallback, 5, 6) should be 11', (done) => {
    expect(caller(mockCallback, 5, 6)).toBe(11);
    expect(mockCallback).toHaveBeenCalledWith(5, 6);
    done();
  });

  it('expect caller(mockCallback, julio, "[cezar]") should be', (done) => {
    expect(caller(mockCallback, 'julio', ['cezar'])).toEqual('juliocezar');
    expect(mockCallback).toHaveBeenCalledWith('julio', ['cezar']);
    done();
  });
});
