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

function isPrime(numero) {
  let ePrimo = true;
  for (let i = 2; i <= numero - 1; i += 1) {
    if (numero % i === 0) ePrimo = false;
  }
  return ePrimo;
}
function encontrarFatores(number, fatoresPrimos) {
  let p = number;
  const resposta = [];
  while (p > 1) {
    if (p % fatoresPrimos[fatoresPrimos.length - 1] === 0) {
      p /= fatoresPrimos[fatoresPrimos.length - 1];
      resposta.push(fatoresPrimos[fatoresPrimos.length - 1]);
    } else {
      fatoresPrimos.pop();
    }
  }
  return resposta.sort((a, b) => a - b);
}

function primeFactors(number) {
  if (!Number.isInteger(number)) throw new Error('You must send an integer number!');
  const nPrimos = [];
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0 && isPrime(i)) nPrimos.push(i);
  }
  return encontrarFatores(number, nPrimos);
}

module.exports = primeFactors;
