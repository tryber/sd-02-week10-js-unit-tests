/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores desse parâmetro
*/

function primeFactors(number) {
  if (!Number.isInteger(number)) throw new Error('You must send an integer number!');
  const resposta = [];
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) resposta.push(i);
  }
  return resposta;
}

module.exports = primeFactors;
