/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores desse parâmetro
*/

function primeFactors(number) {
  if (!number || !Number.isInteger(number) || typeof number !== 'number') {
    throw new Error('passe um número inteiro como parâmetro');
  }
  const primes = [];
  for (let i = 2; i <= number; i += 1) {
    while (number % i === 0) {
      primes.push(i);
      number /= i;
    }
  }
  return primes;
}
console.log(primeFactors(0))

module.exports = primeFactors;
