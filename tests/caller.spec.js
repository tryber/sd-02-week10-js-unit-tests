const caller = require('../src/caller');

// A função deve receber 3 parâmetros
// O primeiro parâmetro deve ser uma função
// O segundo e terceiro parâmetros podem ser de qualquer tipo
// A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos
// e retornar o resultado

const mockedFunction = jest.fn((a, b) => a + b);

describe('#caller', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('If mockedFunction is a function', () => {
    expect(typeof mockedFunction).toBe('function');
  });

  test('If caller is a function', () => {
    expect(typeof caller).toBe('function');
  });

  test('If caller receive 3 parameters', () => {
    expect(caller.length).toBe(3);
  });

  test('If mockedFunction receive 2 parameters', () => {
    expect(mockedFunction.length).toBe(2);
  });

  test('If 2nd and 3rd parameters of caller can any type, this with number and strings', () => {
    expect(caller(mockedFunction, 1, ' Felipe')).toBe('1 Felipe');
    expect(mockedFunction).toHaveBeenCalledWith(1, ' Felipe');
    expect(mockedFunction).toHaveBeenCalledTimes(1);
  });

  test('If mockedFunction sum 1st and 2nd parameter', () => {
    expect(mockedFunction(3, 5)).toEqual(8);
    expect(mockedFunction).toHaveBeenCalledTimes(1);
  });

  test('If caller returns sum of mockedFunction with 2nd and 3rd parameters', () => {
    expect(caller(mockedFunction, 5, 3)).toEqual(8);
  });

  test('If 2nd and 3rd parameters of caller can any type, this with number and object', () => {
    expect(caller(mockedFunction, 1, [' Felipe'])).toEqual('1 Felipe');
  });

  test('If 2nd and 3rd parameters of caller can be objects', () => {
    expect(caller(mockedFunction, ['Jojo', ' Miguel'], [' Felipe', ' JohnJohn'])).toEqual('Jojo, Miguel Felipe, JohnJohn');
  });
});
