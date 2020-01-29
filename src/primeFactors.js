/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores desse parâmetro
*/

function isPrime(numero) {
  let ePrimo = true;
  for (let i = 2; i <= numero - 1; i += 1) {
    if (numero % i === 0) ePrimo = false;
  }
  return ePrimo;
}
function primeFactors(number) {
  if (!Number.isInteger(number)) throw new Error('You must send an integer number!');
  const resposta = [];
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0 && isPrime(i)) resposta.push(i);
  }
  return resposta;
}


module.exports = primeFactors;
