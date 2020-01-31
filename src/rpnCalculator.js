/*
  A função rpnCalculator recebe uma string contendo a expressão matemática a ser avaliada
  e retorna o valor da avaliação da expressão

  referência: https://en.wikipedia.org/wiki/Reverse_Polish_notation
 */
function compareOperator(operator) {
  const operators = ['+', '-', '/', '*'];
  return operators.some(el => operator === el);
}

function Expressions(operator, a, b) {
  const operators = {
    '+': this.eval(`${a} + ${b}`),
    '-': this.eval(`${a} - ${b}`),
    '/': this.eval(`${a} / ${b}`),
    '*': this.eval(`${a} * ${b}`),
  };
  return operators[operator];
}

function rpnCalculator(expression) {
  let values = [];
  const result = [];
  let controle;
  values = expression.split(' ');
  for (let i = 0; i < values.length; i += 1) {
    if (compareOperator(values[i])) {
      controle = (Expressions(values[i], result[result.length - 2], result[result.length - 1]));
      result.pop();
      result.pop();
      result.push(controle);
    } else if (Number.isInteger(parseInt(values[i]), dec)) {
      result.push(values[i]);
    } else {
      throw new Error('Operador inválido');
    }
  }
  return result[0];
}

module.exports = rpnCalculator;
