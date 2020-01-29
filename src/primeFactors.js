/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores desse parâmetro
*/

function primeFactors(number) {
  let arrayFactor = [];
  if (Number.isInteger(number)) {
    for (let i = 1; i <= number; i += 1) {
      if (number % i === 0) {
        arrayFactor.push(i);
      }
    }
    return arrayFactor;
  }
  return false;
}

/* console.log(primeFactors(27)) */

module.exports = primeFactors;
