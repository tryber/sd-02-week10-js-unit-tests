/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores desse parâmetro
*/

function primeFactors(number) {
  const primos = [];
  for (let i = 2; i <= number;) {
    if ((number % i) === 0) {
      number = number / i;
      primos.push(i);      
    } else {
      i += 1;
    }
  }
  return primos;
};

module.exports = primeFactors;
