/*
  A função rpnCalculator recebe uma string contendo a expressão matemática a ser avaliada
  e retorna o valor da avaliação da expressão

  referência: https://en.wikipedia.org/wiki/Reverse_Polish_notation
 */
const operatingRPN = (rpn, s = []) => {
  rpn.split(' ').forEach(item =>
    s.push(item == +item ? item : eval(s.splice(-2,1)[0] + t + s.pop())));
  return s[0];
}

module.exports = rpnCalculator;
