/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores desse parâmetro
*/

function primeFactors(number) {
  if (typeof number !== 'number') {
    throw new Error('should be a number');
  }
  const array = [];
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      array.push(i);
    }
  }
  return array;
}


module.exports = primeFactors;
