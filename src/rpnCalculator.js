/*
  A função rpnCalculator recebe uma string contendo a expressão matemática a ser avaliada
  e retorna o valor da avaliação da expressão

  referência: https://en.wikipedia.org/wiki/Reverse_Polish_notation
 */

// CÓDIGO COMENTADO:
// function rpnCalculator(rpn) {
//   const arr = [];
//   rpn.split(' ').forEach(item => { //transforma em array de strings
//     if (+item) { // vê se o valor é um número
//       arr.push(item); // joga o número no array arr
//     } else { // quando não for número, ou seja, for um operador
//       arr.push(this.eval(arr.splice(-2, 1)[0] + item + arr.pop()));
//       // 1) faz uma string no seguinte formato:
//       // "penúltimo número" + "operador" + "último número"
//       // ex: "3 + 4"
//       // 2) eval faz a conta de uma string em número:
//       // ex: "3 + 4" = 3 + 4 = 7
//       // 3) dá um push do número retornado no arr
//     }
//   })
//   return arr[0];
//   // retorna o primeiro elemento do array, que é um único número
// }
// console.log(rpnCalculator('3 4 +'));
// console.log(rpnCalculator('3 4 - 5 +'));
// console.log(rpnCalculator('3 4 5 * -'));
// console.log(rpnCalculator('3 4 - 5 *'));
// console.log(rpnCalculator('15 7 1 1 + - / 3 * 2 1 1 + + -'));

function rpnCalculator(rpn) {
  const arr = [];
  rpn.split(' ').forEach((item) => {
    if (+item) {
      arr.push(item);
    } else {
      arr.push(this.eval(arr.splice(-2, 1)[0] + item + arr.pop()));
    }
  });
  return arr[0];
}

module.exports = rpnCalculator;
