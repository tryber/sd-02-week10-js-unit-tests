/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores primos desse parâmetro

  Por exemplo:

  - os fatores primos para o número 15 são [3, 5], pois:
    1) 3 * 5 = 15
    2) ambos 3 e 5 são números primos
  - os fatores primos para o número 9 são [3, 3], pois:
    1) 3 * 3 = 9
    2) 3, que aparece duas vezes, é um número primo
  - os fatores primos para o número 12 são [2, 2, 3], pois:
    1) 2 * 2 * 3 = 12
    2) 2, que aparece duas vezes, e 3 são números primos

  Para mais informações acerca de fatores primos, acesse esta página:
    -> https://pt.wikipedia.org/wiki/Fator_primo
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
