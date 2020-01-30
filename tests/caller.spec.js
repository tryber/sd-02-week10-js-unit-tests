const caller = require('../src/caller');

describe('testando a chamada da função', () => {
  const fn = jest.fn();
  it('testando a função em si', (done) => {
    caller(fn, 3, 'cachorro');
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(3, 'cachorro');
    done();
  });
});


// A função deve receber 3 parâmetros
// O primeiro parâmetro deve ser uma função
// O segundo e terceiro parâmetros podem ser de qualquer tipo
// A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos
// e retornar o resultado
