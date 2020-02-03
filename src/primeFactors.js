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
  if (Number.isInteger(number)) {
    let divisor = 2;
    let primes = [];
    while (number > 1) {
      if (number % divisor === 0) {
        number /= divisor;
        primes.push(divisor);
      } else if (divisor === 2 || ){
        divisor += 1;
        number /= divisor;
        primes.push(divisor);
      }
    }
    return onlyPrimes(primes);
  }
  throw new Error('Insira um número e que seja inteiro');
}

function onlyPrimes(n) {
  const mapPrime = n.filter((item) => {
    return (item === 2 || item % 2 !== 0)
  });
  return mapPrime;
}

console.log(primeFactors(1000000))

module.exports = primeFactors;
