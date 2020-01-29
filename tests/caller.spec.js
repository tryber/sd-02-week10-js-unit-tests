const caller = require('../src/caller');

// A função deve receber 3 parâmetros
// O primeiro parâmetro deve ser uma função
// O segundo e terceiro parâmetros podem ser de qualquer tipo
// A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos
// e retornar o resultado

describe('testando a função caller', () => {
  it('testando se a função/parâmetro é chamada e os parâmetros são chamados', (done) => {
    const fn = jest.fn(); // mock da função que é passada como parâmetro da caller

    caller(fn, 'a', 'b');
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith('a', 'b');

    caller(fn, 3, 'cachorro');
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(3, 'cachorro');

    done();
  });

  it('testando a função caso ela tenha comportamento', (done) => {
    const fn = jest.fn((a, b) => a + b);
    expect(caller(fn, 5.5, 5.5)).toEqual(11);
    expect(caller(fn, 'xablau', 'batatinha')).toEqual('xablaubatatinha');
    done();
  });
});
