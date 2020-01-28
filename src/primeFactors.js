/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores desse parâmetro
*/
function noRest(number, arr, i) {
  if (number % i === 0) arr.push(i);
}
function primeFactors(number) {
  const arr = [];
  if (Number.isInteger(number)) {
    for (let i = 0; i <= number; i += 1) {
      noRest(number, arr, i);
    }
    return arr;
  }
  throw new Error('Não é um número');
}

module.exports = primeFactors;
