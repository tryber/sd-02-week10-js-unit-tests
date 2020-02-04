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


function prime(n) {
  let count = 0;
  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) {
      count += 1;
    }
  }
  return count === 2;
}

function primeBefore(number) {
  const arrayPrime = [];
  for (let x = 1; x <= number; x += 1) {
    if (prime(x)) {
      arrayPrime.push(x);
    }
  }
  return arrayPrime;
}

function primeFactors(numberInput) {
  const divisor = primeBefore(numberInput);
  let indice = 0;
  const primes = [];
  while (numberInput > 1) {
    if (numberInput % divisor[indice] === 0) {
      numberInput /= divisor[indice];
      primes.push(divisor[indice]);
    } else {
      indice += 1;
      numberInput /= divisor[indice];
      primes.push(divisor[indice]);
    }
  }
  if (Number.isInteger(numberInput)) {
    return primes;
  }
  throw new Error('Insira um número e que seja inteiro');
}

module.exports = primeFactors;
