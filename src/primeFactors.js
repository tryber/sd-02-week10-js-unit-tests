/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores desse parâmetro
*/

function primeFactors(number) {
  if (Number.isInteger(number)) {
    const arr = [];
    for (let i = 0; i <= number; i += 1) {
      if (number % i === 0) {
        arr.push(i);
      }
    }
    return arr;
  }
  throw new Error('Não é um número');
}

module.exports = primeFactors;
