/*
  A função rpnCalculator recebe uma string contendo a expressão matemática a ser avaliada
  e retorna o valor da avaliação da expressão

  referência: https://en.wikipedia.org/wiki/Reverse_Polish_notation
 */

function adicaoParaRpn(array, i) {
  const resultado = Number(array[i - 2]) + Number(array[i - 1]);
  array.splice(i - 2, 3, resultado);
  i -= 2;
  return [array, i];
}

function subtracaoParaRpn(array, i) {
  const resultado = Number(array[i - 2]) - Number(array[i - 1]);
  array.splice(i - 2, 3, resultado);
  i -= 2;
  return [array, i];
}

function multiplicacaoParaRpn(array, i) {
  const resultado = Number(array[i - 2]) * Number(array[i - 1]);
  array.splice(i - 2, 3, resultado);
  i -= 2;
  return [array, i];
}

function divisaoParaRpn(array, i) {
  const resultado = Number(array[i - 2]) / Number(array[i - 1]);
  array.splice(i - 2, 3, resultado);
  i -= 2;
  return [array, i];
}

function rpnCalculator(expression) {
  let array = expression.split(' ');
  let i = 0;

  while (i < array.length) {
    switch (array[i]) {
      case '+':
        [array, i] = adicaoParaRpn(array, i);
        break;
      case '-':
        [array, i] = subtracaoParaRpn(array, i);
        break;
      case '*':
        [array, i] = multiplicacaoParaRpn(array, i);
        break;
      case '/':
        [array, i] = divisaoParaRpn(array, i);
        break;
      default:
        i += 1;
    }
  }

  if (array.length > 1) {
    throw new Error();
  }

  return array[0];
}

module.exports = rpnCalculator;
