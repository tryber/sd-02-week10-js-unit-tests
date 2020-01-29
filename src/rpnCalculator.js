/*
  A função rpnCalculator recebe uma string contendo a expressão matemática a ser avaliada
  e retorna o valor da avaliação da expressão

  referência: https://en.wikipedia.org/wiki/Reverse_Polish_notation
 */
function operacoes(expression, index) {
  const a = parseInt(expression[index - 1], 10);
  const b = parseInt(expression[index + 1], 10);
  let result;
  if (expression[index] === '+') {
    result = a + b;
  }
  if (expression[index] === '-') {
    result = a - b;
  }
  if (expression[index] === '*') {
    result = a * b;
  }
  if (expression[index] === '/') {
    result = a / b;
  }
  expression.splice(index - 1, 3, result);
  return expression;
}

function verificaOperador(operador) {
  const operadores = ['+', '-', '*', '/'];
  return operadores.some(item => item === operador);
}

function verificaItem(expression) {
  return !expression.every(item => !isNaN(item) || verificaOperador(item));
}

function verificaOperadoresMultDiv(item) {
  return item === '*' || item === '/';
}

function verificaOperadoresAddSub(item) {
  return item === '+' || item === '-';
}

function whileOperadoresMultDiv(expression) {
  while (expression.some(item => verificaOperadoresMultDiv(item))) {
    const index = expression.findIndex(item => verificaOperadoresMultDiv(item));
    expression = operacoes(expression, index);
  }
  return expression;
}

function rpnCalculator(expression) {
  expression = expression.split(' ');
  if (verificaItem(expression)) {
    throw new Error('Operador inválido!');
  }
  while (expression.length > 1) {
    expression = whileOperadoresMultDiv(expression);
    const index = expression.findIndex(item => verificaOperadoresAddSub(item));
    expression = operacoes(expression, index);
  }
  return expression[0];
}

module.exports = rpnCalculator;
