/*
  A função rpnCalculator recebe uma string contendo a expressão matemática a ser avaliada
  e retorna o valor da avaliação da expressão

  referência: https://en.wikipedia.org/wiki/Reverse_Polish_notation
 */

function rpnCalculator(expression) {
  const array = expression.split(' ');
  let i = 0;
  while (i < array.length) {
    if (array[i] === '+') {
      let soma = Number(array[i - 2]) + Number(array[i - 1]);
      array.splice(i - 2, 3, soma);
      i -= 2;
    } else if (array[i] === '-') {
      let subtracao = Number(array[i - 2]) - Number(array[i - 1]);
      array.splice(i - 2, 3, subtracao);
      i -= 2;
    } else if (array[i] === '*') {
      let multiplicacao = Number(array[i - 2]) * Number(array[i - 1]);
      array.splice(i - 2, 3, multiplicacao);
      i -= 2;
    } else if (array[i] === '/') {
      let divisao = Number(array[i - 2]) / Number(array[i - 1]);
      array.splice(i - 2, 3, divisao);
      i -= 2;
    } else {
      i += 1;
    }
  }

  if (array.length > 1) {
    throw new Error();
  }

  return array[0];
}

module.exports = rpnCalculator;
