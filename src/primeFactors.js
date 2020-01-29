/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores desse parâmetro
*/

// function primeFactors(number) {
//   if(number.isInteger(number))
  
// }

// module.exports = primeFactors;
function primeFactors(number) {
  if (!Number.isInteger(number)) throw new Error('You must send an integer number!');
  const factors = [];
  for (let i = 2; i <= number; i += 1) {
    if (number % i === 0) {
    factors.push(i);
    number /= i;
  }
}
  return factors.filter((num, index, arr) => index === arr.indexOf(num))

  
}

console.log(primeFactors(0))