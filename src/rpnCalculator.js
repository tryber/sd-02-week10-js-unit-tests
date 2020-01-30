/*
  A função rpnCalculator recebe uma string contendo a expressão matemática a ser avaliada
  e retorna o valor da avaliação da expressão

  referência: https://en.wikipedia.org/wiki/Reverse_Polish_notation
 */

function rpnCalculator(string) {
  const arr = [];
  string.split(' ').forEach((Element) => {
    if (parseInt(Element) == +Element) {
      arr.push(Element);
    } else {
      arr.push(this.eval(arr.splice(-2, 1)[0] + Element + arr.pop()));
    }
  });
  return arr[0];
}
console.log(rpnCalculator('3 4 - 5 *'));
console.log(rpnCalculator('15 7 1 1 + - / 3 * 2 1 1 + + -'));
module.exports = rpnCalculator;
