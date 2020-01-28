const caller = require('../src/caller');

// A função deve receber 3 parâmetros
// O primeiro parâmetro deve ser uma função
// O segundo e terceiro parâmetros podem ser de qualquer tipo
// A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos
// e retornar o resultado

const mockCallback = jest.fn((a, b) => a + b);

describe('testing caller function', () => { 
  afterEach(() => {    
    jest.clearAllMocks();
  }); 
  
  test('is a function', () => {
    expect(typeof mockCallback).toBe('function');
  });

  test('testing with numbers', () => {
    expect(caller(mockCallback, 10, 20)).toBe(30);
    expect(mockCallback).toHaveBeenCalledWith(10, 20);
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  test('testing with strings', () => {
    expect(caller(mockCallback, 'projeto ', '10')).toBe('projeto 10');
    expect(mockCallback).toHaveBeenCalledWith('projeto ', '10');
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  test('testing with arrays', () => {
    expect(caller(mockCallback, ['projeto'], [' npm', 'test'])).toBe('projeto npm,test');
    expect(mockCallback).toHaveBeenCalledWith(['projeto'], [' npm', 'test']);
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
