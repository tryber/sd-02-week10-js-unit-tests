/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores desse parâmetro
*/

function primeFactors(number) {
  let arrayFactor = [];
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      arrayFactor.push(i);
    }
  }
  if (Number.isInteger(number)) return arrayFactor;
  return false;
}

console.log(primeFactors(30))

module.exports = primeFactors;
